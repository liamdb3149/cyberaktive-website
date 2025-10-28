import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AIPilotProject, WorkflowTypes, TeamMember } from "@shared/schema";
import { Plus, Trash2, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProjectSetupProps {
  project: AIPilotProject;
  onUpdate: (project: AIPilotProject) => void;
  onNext: () => void;
}

export default function ProjectSetup({ project, onUpdate, onNext }: ProjectSetupProps) {
  const { toast } = useToast();
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("");

  const updateProject = (updates: Partial<AIPilotProject>) => {
    onUpdate({ ...project, ...updates });
  };

  const updateBaselineMetrics = (updates: Partial<typeof project.baselineMetrics>) => {
    onUpdate({
      ...project,
      baselineMetrics: { ...project.baselineMetrics, ...updates },
    });
  };

  const addTeamMember = () => {
    if (!newMemberName.trim() || !newMemberRole.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter both name and role for the team member.",
        variant: "destructive",
      });
      return;
    }

    const newMember: TeamMember = {
      id: crypto.randomUUID(),
      name: newMemberName.trim(),
      role: newMemberRole.trim(),
    };

    onUpdate({
      ...project,
      team: [...project.team, newMember],
    });

    setNewMemberName("");
    setNewMemberRole("");
  };

  const removeTeamMember = (id: string) => {
    onUpdate({
      ...project,
      team: project.team.filter(member => member.id !== id),
    });
  };

  const handleNext = () => {
    if (!project.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter a project name before continuing.",
        variant: "destructive",
      });
      return;
    }

    if (project.team.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please add at least one team member before continuing.",
        variant: "destructive",
      });
      return;
    }

    if (project.status === "setup") {
      onUpdate({ ...project, status: "in_progress" });
    }

    onNext();
  };

  return (
    <div className="space-y-6">
      {/* Project Information */}
      <Card>
        <CardHeader>
          <CardTitle>Project Information</CardTitle>
          <CardDescription>
            Basic details about your AI implementation pilot
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="project-name">Project Name *</Label>
            <Input
              id="project-name"
              value={project.name}
              onChange={(e) => updateProject({ name: e.target.value })}
              placeholder="e.g., Contract Review AI Pilot - Q1 2025"
              data-testid="input-project-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="project-description">Description (Optional)</Label>
            <Textarea
              id="project-description"
              value={project.description}
              onChange={(e) => updateProject({ description: e.target.value })}
              placeholder="Brief description of the pilot's objectives and scope..."
              rows={3}
              data-testid="input-project-description"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="workflow-type">Target Workflow *</Label>
            <Select
              value={project.workflowType}
              onValueChange={(value) => updateProject({ workflowType: value as any })}
            >
              <SelectTrigger id="workflow-type" data-testid="select-workflow-type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {WorkflowTypes.map((type) => (
                  <SelectItem key={type} value={type} data-testid={`select-workflow-${type}`}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Team Members */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Team Members
          </CardTitle>
          <CardDescription>
            Add attorneys and staff participating in this pilot
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Add Team Member Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              placeholder="Attorney name"
              value={newMemberName}
              onChange={(e) => setNewMemberName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTeamMember()}
              data-testid="input-team-member-name"
            />
            <Input
              placeholder="Role (e.g., Partner, Associate)"
              value={newMemberRole}
              onChange={(e) => setNewMemberRole(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTeamMember()}
              data-testid="input-team-member-role"
            />
          </div>
          <Button onClick={addTeamMember} variant="outline" className="w-full" data-testid="button-add-team-member">
            <Plus className="w-4 h-4 mr-2" />
            Add Team Member
          </Button>

          {/* Team Member List */}
          {project.team.length > 0 && (
            <div className="space-y-2 mt-4">
              <Label>Current Team ({project.team.length})</Label>
              <div className="space-y-2">
                {project.team.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg"
                    data-testid={`team-member-${member.id}`}
                  >
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-100" data-testid={`text-member-name-${member.id}`}>
                        {member.name}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400" data-testid={`text-member-role-${member.id}`}>
                        {member.role}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTeamMember(member.id)}
                      data-testid={`button-remove-member-${member.id}`}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Baseline Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Baseline Metrics</CardTitle>
          <CardDescription>
            Current performance metrics before AI implementation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="time-per-task">Time Per Task</Label>
              <div className="flex gap-2">
                <Input
                  id="time-per-task"
                  type="number"
                  min="0"
                  step="0.1"
                  value={project.baselineMetrics.timePerTask}
                  onChange={(e) => updateBaselineMetrics({ timePerTask: parseFloat(e.target.value) || 0 })}
                  data-testid="input-time-per-task"
                />
                <Select
                  value={project.baselineMetrics.timeUnit}
                  onValueChange={(value: "minutes" | "hours") => updateBaselineMetrics({ timeUnit: value })}
                >
                  <SelectTrigger className="w-32" data-testid="select-time-unit">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minutes" data-testid="select-time-unit-minutes">Minutes</SelectItem>
                    <SelectItem value="hours" data-testid="select-time-unit-hours">Hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="error-rate">Error Rate (%)</Label>
              <Input
                id="error-rate"
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={project.baselineMetrics.errorRate}
                onChange={(e) => updateBaselineMetrics({ errorRate: Math.min(100, parseFloat(e.target.value) || 0) })}
                data-testid="input-error-rate"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cost-per-matter">Cost Per Matter ($)</Label>
              <Input
                id="cost-per-matter"
                type="number"
                min="0"
                step="1"
                value={project.baselineMetrics.costPerMatter}
                onChange={(e) => updateBaselineMetrics({ costPerMatter: parseFloat(e.target.value) || 0 })}
                data-testid="input-cost-per-matter"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tasks-per-week">Tasks Per Week</Label>
              <Input
                id="tasks-per-week"
                type="number"
                min="0"
                step="1"
                value={project.baselineMetrics.tasksPerWeek}
                onChange={(e) => updateBaselineMetrics({ tasksPerWeek: parseFloat(e.target.value) || 0 })}
                data-testid="input-tasks-per-week"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="billable-rate">Billable Rate ($/hour)</Label>
              <Input
                id="billable-rate"
                type="number"
                min="0"
                step="1"
                value={project.baselineMetrics.billableRate}
                onChange={(e) => updateBaselineMetrics({ billableRate: parseFloat(e.target.value) || 0 })}
                data-testid="input-billable-rate"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-end">
        <Button onClick={handleNext} size="lg" data-testid="button-next-tracking">
          Continue to Weekly Tracking
        </Button>
      </div>
    </div>
  );
}
