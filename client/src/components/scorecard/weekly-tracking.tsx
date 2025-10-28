import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AIPilotProject } from "@shared/schema";

interface WeeklyTrackingProps {
  project: AIPilotProject;
  onUpdate: (project: AIPilotProject) => void;
  onNext: () => void;
}

export default function WeeklyTracking({ project, onUpdate, onNext }: WeeklyTrackingProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Tracking Dashboard</CardTitle>
        <CardDescription>
          Monitor adoption, time savings, and identify red flags week by week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <p className="text-slate-600 dark:text-slate-400">
            Weekly tracking dashboard will be implemented here.
          </p>
          
          <div className="flex justify-end">
            <Button onClick={onNext} data-testid="button-next-roi">
              Continue to ROI Calculator
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
