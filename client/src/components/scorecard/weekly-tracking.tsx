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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { AIPilotProject, WeeklyTracking as WeeklyTrackingType, RedFlag } from "@shared/schema";
import { 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  Plus,
  Trash2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WeeklyTrackingProps {
  project: AIPilotProject;
  onUpdate: (project: AIPilotProject) => void;
  onNext: () => void;
}

export default function WeeklyTracking({ project, onUpdate, onNext }: WeeklyTrackingProps) {
  const { toast } = useToast();
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [newRedFlagType, setNewRedFlagType] = useState<"low_adoption" | "accuracy_issue" | "resistance" | "technical_issue" | "other">("low_adoption");
  const [newRedFlagDescription, setNewRedFlagDescription] = useState("");
  const [newRedFlagSeverity, setNewRedFlagSeverity] = useState<"low" | "medium" | "high">("medium");

  // Get or create weekly data for a specific week
  const getWeekData = (week: number): WeeklyTrackingType => {
    const existing = project.weeklyData.find(w => w.week === week);
    if (existing) return existing;

    // Return default data for new week
    return {
      week,
      adoptionRate: 0,
      attorneysUsing: [],
      avgTimePerTask: project.baselineMetrics.timePerTask,
      timeUnit: project.baselineMetrics.timeUnit,
      accuracyRate: 100 - project.baselineMetrics.errorRate,
      tasksCompleted: 0,
      feedback: "",
      screenshots: [],
      redFlags: [],
      notes: "",
    };
  };

  const currentWeekData = getWeekData(selectedWeek);

  // Update weekly data
  const updateWeekData = (week: number, updates: Partial<WeeklyTrackingType>) => {
    const updatedData = project.weeklyData.filter(w => w.week !== week);
    updatedData.push({ ...getWeekData(week), ...updates });
    updatedData.sort((a, b) => a.week - b.week);
    
    onUpdate({
      ...project,
      weeklyData: updatedData,
    });
  };

  // Toggle attorney usage for current week
  const toggleAttorney = (attorneyId: string) => {
    const current = currentWeekData.attorneysUsing;
    const updated = current.includes(attorneyId)
      ? current.filter(id => id !== attorneyId)
      : [...current, attorneyId];

    const adoptionRate = project.team.length > 0 
      ? Math.round((updated.length / project.team.length) * 100)
      : 0;

    updateWeekData(selectedWeek, {
      attorneysUsing: updated,
      adoptionRate,
    });
  };

  // Add red flag
  const addRedFlag = () => {
    if (!newRedFlagDescription.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter a description for the red flag.",
        variant: "destructive",
      });
      return;
    }

    const newFlag: RedFlag = {
      id: crypto.randomUUID(),
      week: selectedWeek,
      type: newRedFlagType,
      description: newRedFlagDescription,
      severity: newRedFlagSeverity,
      resolved: false,
      createdAt: new Date().toISOString(),
    };

    updateWeekData(selectedWeek, {
      redFlags: [...currentWeekData.redFlags, newFlag],
    });

    setNewRedFlagDescription("");
    toast({
      title: "Red Flag Added",
      description: "Issue has been logged for this week.",
    });
  };

  // Remove red flag
  const removeRedFlag = (flagId: string) => {
    updateWeekData(selectedWeek, {
      redFlags: currentWeekData.redFlags.filter(f => f.id !== flagId),
    });
  };

  // Toggle red flag resolved status
  const toggleRedFlagResolved = (flagId: string) => {
    updateWeekData(selectedWeek, {
      redFlags: currentWeekData.redFlags.map(f =>
        f.id === flagId ? { ...f, resolved: !f.resolved } : f
      ),
    });
  };

  // Calculate overall statistics
  const calculateStats = () => {
    if (project.weeklyData.length === 0) {
      return {
        avgAdoption: 0,
        totalRedFlags: 0,
        unresolvedRedFlags: 0,
        weeksTracked: 0,
      };
    }

    const totalAdoption = project.weeklyData.reduce((sum, w) => sum + w.adoptionRate, 0);
    const allRedFlags = project.weeklyData.flatMap(w => w.redFlags);

    return {
      avgAdoption: Math.round(totalAdoption / project.weeklyData.length),
      totalRedFlags: allRedFlags.length,
      unresolvedRedFlags: allRedFlags.filter(f => !f.resolved).length,
      weeksTracked: project.weeklyData.length,
    };
  };

  const stats = calculateStats();

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-red-600 bg-red-50 dark:bg-red-950";
      case "medium": return "text-yellow-600 bg-yellow-50 dark:bg-yellow-950";
      case "low": return "text-blue-600 bg-blue-50 dark:bg-blue-950";
      default: return "text-slate-600 bg-slate-50 dark:bg-slate-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Tracking Overview</CardTitle>
          <CardDescription>
            Summary of pilot progress across all weeks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400" data-testid="stat-avg-adoption">
                {stats.avgAdoption}%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Avg Adoption</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400" data-testid="stat-weeks-tracked">
                {stats.weeksTracked}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Weeks Tracked</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400" data-testid="stat-total-red-flags">
                {stats.totalRedFlags}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Total Red Flags</div>
            </div>
            <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400" data-testid="stat-unresolved-red-flags">
                {stats.unresolvedRedFlags}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Unresolved</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Week Selector and Data Entry */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Weekly Data Entry
          </CardTitle>
          <CardDescription>
            Track adoption, performance, and issues for each week of the 8-week pilot
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedWeek.toString()} onValueChange={(val) => setSelectedWeek(parseInt(val))}>
            <TabsList className="grid w-full grid-cols-8 mb-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((week) => {
                const hasData = project.weeklyData.some(w => w.week === week);
                return (
                  <TabsTrigger 
                    key={week} 
                    value={week.toString()}
                    data-testid={`tab-week-${week}`}
                  >
                    <span className="flex items-center gap-1">
                      W{week}
                      {hasData && <CheckCircle2 className="w-3 h-3 text-green-500" />}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((week) => (
              <TabsContent key={week} value={week.toString()} className="space-y-6">
                {/* Adoption Tracking */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Adoption & Usage</h3>
                  
                  <div className="space-y-2">
                    <Label>Attorneys Using AI This Week</Label>
                    <div className="space-y-2">
                      {project.team.length === 0 ? (
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          No team members added yet. Add team members in the Project Setup tab.
                        </p>
                      ) : (
                        project.team.map((member) => (
                          <div key={member.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={`attorney-${week}-${member.id}`}
                              checked={getWeekData(week).attorneysUsing.includes(member.id)}
                              onCheckedChange={() => toggleAttorney(member.id)}
                              data-testid={`checkbox-attorney-${week}-${member.id}`}
                            />
                            <Label htmlFor={`attorney-${week}-${member.id}`} className="font-normal">
                              {member.name} ({member.role})
                            </Label>
                          </div>
                        ))
                      )}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400" data-testid={`text-adoption-rate-${week}`}>
                      Adoption Rate: {getWeekData(week).adoptionRate}%
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Performance Metrics</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`avg-time-${week}`}>Average Time Per Task</Label>
                      <div className="flex gap-2">
                        <Input
                          id={`avg-time-${week}`}
                          type="number"
                          min="0"
                          step="0.1"
                          value={getWeekData(week).avgTimePerTask}
                          onChange={(e) => updateWeekData(week, { avgTimePerTask: parseFloat(e.target.value) || 0 })}
                          data-testid={`input-avg-time-${week}`}
                        />
                        <Select
                          value={getWeekData(week).timeUnit}
                          onValueChange={(value: "minutes" | "hours") => updateWeekData(week, { timeUnit: value })}
                        >
                          <SelectTrigger className="w-32" data-testid={`select-time-unit-${week}`}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="minutes" data-testid={`select-time-unit-minutes-${week}`}>Minutes</SelectItem>
                            <SelectItem value="hours" data-testid={`select-time-unit-hours-${week}`}>Hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`accuracy-${week}`}>Accuracy Rate (%)</Label>
                      <Input
                        id={`accuracy-${week}`}
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={getWeekData(week).accuracyRate}
                        onChange={(e) => updateWeekData(week, { accuracyRate: Math.min(100, parseFloat(e.target.value) || 0) })}
                        data-testid={`input-accuracy-${week}`}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`tasks-completed-${week}`}>Tasks Completed This Week</Label>
                      <Input
                        id={`tasks-completed-${week}`}
                        type="number"
                        min="0"
                        step="1"
                        value={getWeekData(week).tasksCompleted}
                        onChange={(e) => updateWeekData(week, { tasksCompleted: parseInt(e.target.value) || 0 })}
                        data-testid={`input-tasks-completed-${week}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Red Flags */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    Red Flags & Issues
                  </h3>

                  {/* Add Red Flag Form */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <Select value={newRedFlagType} onValueChange={(val: any) => setNewRedFlagType(val)}>
                      <SelectTrigger data-testid={`select-red-flag-type-${week}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low_adoption" data-testid={`select-red-flag-type-low-adoption-${week}`}>Low Adoption</SelectItem>
                        <SelectItem value="accuracy_issue" data-testid={`select-red-flag-type-accuracy-issue-${week}`}>Accuracy Issue</SelectItem>
                        <SelectItem value="resistance" data-testid={`select-red-flag-type-resistance-${week}`}>Resistance</SelectItem>
                        <SelectItem value="technical_issue" data-testid={`select-red-flag-type-technical-issue-${week}`}>Technical Issue</SelectItem>
                        <SelectItem value="other" data-testid={`select-red-flag-type-other-${week}`}>Other</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={newRedFlagSeverity} onValueChange={(val: any) => setNewRedFlagSeverity(val)}>
                      <SelectTrigger data-testid={`select-red-flag-severity-${week}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low" data-testid={`select-red-flag-severity-low-${week}`}>Low</SelectItem>
                        <SelectItem value="medium" data-testid={`select-red-flag-severity-medium-${week}`}>Medium</SelectItem>
                        <SelectItem value="high" data-testid={`select-red-flag-severity-high-${week}`}>High</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input
                      placeholder="Issue description..."
                      value={newRedFlagDescription}
                      onChange={(e) => setNewRedFlagDescription(e.target.value)}
                      data-testid={`input-red-flag-description-${week}`}
                    />
                  </div>
                  <Button onClick={addRedFlag} variant="outline" className="w-full" data-testid={`button-add-red-flag-${week}`}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Red Flag
                  </Button>

                  {/* Red Flags List */}
                  {getWeekData(week).redFlags.length > 0 && (
                    <div className="space-y-2">
                      {getWeekData(week).redFlags.map((flag) => (
                        <div
                          key={flag.id}
                          className={`p-3 rounded-lg border ${getSeverityColor(flag.severity)}`}
                          data-testid={`red-flag-${flag.id}`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge variant="outline" className="text-xs capitalize">
                                  {flag.type.replace(/_/g, ' ')}
                                </Badge>
                                <Badge variant="outline" className="text-xs capitalize">
                                  {flag.severity} Severity
                                </Badge>
                              </div>
                              <p className="text-sm" data-testid={`text-red-flag-description-${flag.id}`}>
                                {flag.description}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <Checkbox
                                  id={`resolved-${flag.id}`}
                                  checked={flag.resolved}
                                  onCheckedChange={() => toggleRedFlagResolved(flag.id)}
                                  data-testid={`checkbox-red-flag-resolved-${flag.id}`}
                                />
                                <Label htmlFor={`resolved-${flag.id}`} className="text-xs font-normal">
                                  {flag.resolved ? "Resolved" : "Mark as resolved"}
                                </Label>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeRedFlag(flag.id)}
                              data-testid={`button-remove-red-flag-${flag.id}`}
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Notes & Feedback */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`feedback-${week}`}>Qualitative Feedback</Label>
                    <Textarea
                      id={`feedback-${week}`}
                      value={getWeekData(week).feedback}
                      onChange={(e) => updateWeekData(week, { feedback: e.target.value })}
                      placeholder="Team observations, user feedback, notable successes or challenges..."
                      rows={3}
                      data-testid={`input-feedback-${week}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`notes-${week}`}>Notes</Label>
                    <Textarea
                      id={`notes-${week}`}
                      value={getWeekData(week).notes}
                      onChange={(e) => updateWeekData(week, { notes: e.target.value })}
                      placeholder="Additional notes for this week..."
                      rows={2}
                      data-testid={`input-notes-${week}`}
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-end">
        <Button onClick={onNext} size="lg" data-testid="button-next-roi">
          Continue to ROI Calculator
        </Button>
      </div>
    </div>
  );
}
