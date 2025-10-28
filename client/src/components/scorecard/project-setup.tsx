import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AIPilotProject } from "@shared/schema";

interface ProjectSetupProps {
  project: AIPilotProject;
  onUpdate: (project: AIPilotProject) => void;
  onNext: () => void;
}

export default function ProjectSetup({ project, onUpdate, onNext }: ProjectSetupProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Setup</CardTitle>
        <CardDescription>
          Define your AI pilot project, team members, and baseline metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <p className="text-slate-600 dark:text-slate-400">
            Project setup form will be implemented here.
          </p>
          
          <div className="flex justify-end">
            <Button onClick={onNext} data-testid="button-next-tracking">
              Continue to Weekly Tracking
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
