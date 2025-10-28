import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AIPilotProject } from "@shared/schema";

interface PresentationGeneratorProps {
  project: AIPilotProject;
  onNext: () => void;
}

export default function PresentationGenerator({ project, onNext }: PresentationGeneratorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Partner Presentation Generator</CardTitle>
        <CardDescription>
          Executive summary with charts and exportable PDF report
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <p className="text-slate-600 dark:text-slate-400">
            Presentation generator will be implemented here.
          </p>
          
          <div className="flex justify-end">
            <Button onClick={onNext} data-testid="button-next-benchmark">
              Continue to Benchmarks
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
