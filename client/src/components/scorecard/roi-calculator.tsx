import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AIPilotProject } from "@shared/schema";

interface ROICalculatorProps {
  project: AIPilotProject;
  onNext: () => void;
}

export default function ROICalculator({ project, onNext }: ROICalculatorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ROI Calculator</CardTitle>
        <CardDescription>
          Automated financial impact calculations and visualizations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <p className="text-slate-600 dark:text-slate-400">
            ROI calculator will be implemented here.
          </p>
          
          <div className="flex justify-end">
            <Button onClick={onNext} data-testid="button-next-presentation">
              Continue to Presentation
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
