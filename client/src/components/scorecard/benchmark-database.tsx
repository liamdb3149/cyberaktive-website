import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkflowType } from "@shared/schema";

interface BenchmarkDatabaseProps {
  workflowType: WorkflowType;
}

export default function BenchmarkDatabase({ workflowType }: BenchmarkDatabaseProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Industry Benchmarks</CardTitle>
        <CardDescription>
          Compare your results with industry standards for {workflowType}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <p className="text-slate-600 dark:text-slate-400">
            Benchmark database will be implemented here.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
