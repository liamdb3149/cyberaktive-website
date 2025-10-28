import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { AIPilotProject, WorkflowType } from "@shared/schema";
import { 
  ClipboardList, 
  TrendingUp, 
  Calculator, 
  FileText, 
  Database,
  Save,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Import page components (will create these next)
import ProjectSetup from "@/components/scorecard/project-setup";
import WeeklyTracking from "@/components/scorecard/weekly-tracking";
import ROICalculator from "@/components/scorecard/roi-calculator";
import PresentationGenerator from "@/components/scorecard/presentation-generator";
import BenchmarkDatabase from "@/components/scorecard/benchmark-database";

const STORAGE_KEY = "ai-pilot-scorecard-projects";
const CURRENT_PROJECT_KEY = "ai-pilot-scorecard-current";

export default function AIPilotScorecard() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>("setup");
  const [currentProject, setCurrentProject] = useState<AIPilotProject | null>(null);
  const [projects, setProjects] = useState<AIPilotProject[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  // Load projects and current project from local storage on mount
  useEffect(() => {
    const allProjects = getProjects();
    setProjects(allProjects);
    
    const savedProjectId = localStorage.getItem(CURRENT_PROJECT_KEY);
    if (savedProjectId) {
      const project = allProjects.find(p => p.id === savedProjectId);
      if (project) {
        setCurrentProject(project);
      }
    }
  }, []);

  // Get all projects from local storage
  const getProjects = (): AIPilotProject[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  };

  // Save current project to local storage
  const saveProject = (project: AIPilotProject) => {
    setIsSaving(true);
    const allProjects = getProjects();
    const index = allProjects.findIndex(p => p.id === project.id);
    
    if (index >= 0) {
      allProjects[index] = { ...project, updatedAt: new Date().toISOString() };
    } else {
      allProjects.push(project);
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allProjects));
    localStorage.setItem(CURRENT_PROJECT_KEY, project.id);
    setCurrentProject(project);
    setProjects(allProjects);
    
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Project Saved",
        description: "Your AI pilot scorecard has been saved locally.",
      });
    }, 300);
  };
  
  // Load a specific project by ID
  const loadProject = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      localStorage.setItem(CURRENT_PROJECT_KEY, projectId);
      setCurrentProject(project);
      setActiveTab("setup");
    }
  };

  // Create new project
  const createNewProject = () => {
    const newProject: AIPilotProject = {
      id: crypto.randomUUID(),
      name: "New AI Pilot Project",
      description: "",
      workflowType: "Contract Review" as WorkflowType,
      team: [],
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 8 * 7 * 24 * 60 * 60 * 1000).toISOString(), // 8 weeks from now
      baselineMetrics: {
        timePerTask: 0,
        timeUnit: "hours",
        errorRate: 0,
        costPerMatter: 0,
        tasksPerWeek: 0,
        billableRate: 0,
      },
      weeklyData: [],
      status: "setup",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // Auto-save the new project immediately
    const allProjects = getProjects();
    allProjects.push(newProject);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allProjects));
    localStorage.setItem(CURRENT_PROJECT_KEY, newProject.id);
    
    setCurrentProject(newProject);
    setProjects(allProjects);
    setActiveTab("setup");
    
    toast({
      title: "Project Created",
      description: "New project created and saved locally.",
    });
  };

  // Export project data as JSON
  const exportProjectData = () => {
    if (!currentProject) return;
    
    const dataStr = JSON.stringify(currentProject, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${currentProject.name.replace(/\s+/g, '-')}-scorecard.json`;
    link.click();
    URL.revokeObjectURL(url);

    toast({
      title: "Data Exported",
      description: "Project data has been downloaded as JSON.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            The AI Pilot Scorecard
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Track and measure your AI implementation pilot with data-driven insights
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-6 items-center">
          <Button
            onClick={createNewProject}
            variant="default"
            data-testid="button-new-project"
          >
            <ClipboardList className="w-4 h-4 mr-2" />
            New Project
          </Button>
          
          {projects.length > 0 && (
            <Select
              value={currentProject?.id || ""}
              onValueChange={loadProject}
            >
              <SelectTrigger className="w-[280px]" data-testid="select-project">
                <SelectValue placeholder="Select a project" />
              </SelectTrigger>
              <SelectContent>
                {projects.map(project => (
                  <SelectItem key={project.id} value={project.id} data-testid={`select-project-${project.id}`}>
                    {project.name || "Untitled Project"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          
          {currentProject && (
            <>
              <Button
                onClick={() => saveProject(currentProject)}
                variant="outline"
                disabled={isSaving}
                data-testid="button-save-project"
              >
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? "Saving..." : "Save Progress"}
              </Button>
              
              <Button
                onClick={exportProjectData}
                variant="outline"
                data-testid="button-export-data"
              >
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </>
          )}
        </div>

        {/* Project Info Banner */}
        {currentProject && (
          <Card className="mb-6 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100" data-testid="text-project-name">
                  {currentProject.name || "Untitled Project"}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400" data-testid="text-project-status">
                  Status: <span className="capitalize">{currentProject.status}</span> | Workflow: {currentProject.workflowType}
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Main Content */}
        {!currentProject ? (
          <Card className="p-12 text-center">
            <ClipboardList className="w-16 h-16 mx-auto mb-4 text-slate-400" />
            <h2 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-slate-100" data-testid="text-no-project-heading">
              No Project Selected
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6" data-testid="text-no-project-description">
              Create a new AI pilot project to start tracking your implementation metrics.
            </p>
            <Button onClick={createNewProject} size="lg" data-testid="button-start-project">
              <ClipboardList className="w-5 h-5 mr-2" />
              Start Your First Project
            </Button>
          </Card>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-white dark:bg-slate-800 p-1 rounded-lg shadow-sm">
              <TabsTrigger 
                value="setup" 
                className="flex items-center gap-2"
                data-testid="tab-setup"
              >
                <ClipboardList className="w-4 h-4" />
                <span className="hidden sm:inline">Setup</span>
              </TabsTrigger>
              <TabsTrigger 
                value="tracking" 
                className="flex items-center gap-2"
                data-testid="tab-tracking"
              >
                <TrendingUp className="w-4 h-4" />
                <span className="hidden sm:inline">Tracking</span>
              </TabsTrigger>
              <TabsTrigger 
                value="roi" 
                className="flex items-center gap-2"
                data-testid="tab-roi"
              >
                <Calculator className="w-4 h-4" />
                <span className="hidden sm:inline">ROI</span>
              </TabsTrigger>
              <TabsTrigger 
                value="presentation" 
                className="flex items-center gap-2"
                data-testid="tab-presentation"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Present</span>
              </TabsTrigger>
              <TabsTrigger 
                value="benchmark" 
                className="flex items-center gap-2"
                data-testid="tab-benchmark"
              >
                <Database className="w-4 h-4" />
                <span className="hidden sm:inline">Benchmark</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="setup" className="space-y-6">
              <ProjectSetup 
                project={currentProject} 
                onUpdate={saveProject}
                onNext={() => setActiveTab("tracking")}
              />
            </TabsContent>

            <TabsContent value="tracking" className="space-y-6">
              <WeeklyTracking 
                project={currentProject} 
                onUpdate={saveProject}
                onNext={() => setActiveTab("roi")}
              />
            </TabsContent>

            <TabsContent value="roi" className="space-y-6">
              <ROICalculator 
                project={currentProject}
                onNext={() => setActiveTab("presentation")}
              />
            </TabsContent>

            <TabsContent value="presentation" className="space-y-6">
              <PresentationGenerator 
                project={currentProject}
                onNext={() => setActiveTab("benchmark")}
              />
            </TabsContent>

            <TabsContent value="benchmark" className="space-y-6">
              <BenchmarkDatabase 
                workflowType={currentProject.workflowType}
              />
            </TabsContent>
          </Tabs>
        )}
      </main>

      <Footer />
    </div>
  );
}
