import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AIPilotProject, ROICalculation } from "@shared/schema";
import { FileText, Download, CheckCircle2, TrendingUp, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

interface PresentationGeneratorProps {
  project: AIPilotProject;
  onNext: () => void;
}

export default function PresentationGenerator({ project, onNext }: PresentationGeneratorProps) {
  // Calculate ROI (same logic as ROI Calculator)
  const calculateROI = (): ROICalculation => {
    const { baselineMetrics, weeklyData } = project;

    if (weeklyData.length === 0) {
      return {
        timeSavingsPerWeek: 0,
        timeSavingsAnnual: 0,
        costSavingsWeekly: 0,
        costSavingsMonthly: 0,
        costSavingsAnnual: 0,
        errorReductionValue: 0,
        capacityIncrease: 0,
        additionalMattersHandled: 0,
        totalFinancialImpact: 0,
        roiPercentage: 0,
        paybackPeriodWeeks: 0,
        recommendation: "modify",
        recommendationReason: "Insufficient data for analysis.",
      };
    }

    const baselineHours = baselineMetrics.timeUnit === "hours"
      ? baselineMetrics.timePerTask
      : baselineMetrics.timePerTask / 60;

    const avgCurrentTime = weeklyData.reduce((sum, week) => {
      const weekHours = week.timeUnit === "hours" ? week.avgTimePerTask : week.avgTimePerTask / 60;
      return sum + weekHours;
    }, 0) / weeklyData.length;

    const timeSavingsPerTask = Math.max(0, baselineHours - avgCurrentTime);
    const timeSavingsPerWeek = timeSavingsPerTask * baselineMetrics.tasksPerWeek;
    const timeSavingsAnnual = timeSavingsPerWeek * 52;

    const costSavingsWeekly = timeSavingsPerWeek * baselineMetrics.billableRate;
    const costSavingsMonthly = costSavingsWeekly * 4.33;
    const costSavingsAnnual = costSavingsWeekly * 52;

    const avgAccuracy = weeklyData.reduce((sum, week) => sum + week.accuracyRate, 0) / weeklyData.length;
    const baselineAccuracy = 100 - baselineMetrics.errorRate;
    const accuracyImprovement = Math.max(0, avgAccuracy - baselineAccuracy);
    const errorReductionValue = (accuracyImprovement / 100) * baselineMetrics.costPerMatter * baselineMetrics.tasksPerWeek * 52;

    const capacityIncrease = baselineHours > 0 && timeSavingsPerTask > 0
      ? (timeSavingsPerTask / baselineHours) * 100
      : 0;
    const additionalMattersHandled = baselineHours > 0
      ? Math.floor(timeSavingsAnnual / baselineHours)
      : 0;

    const totalFinancialImpact = costSavingsAnnual + errorReductionValue;
    const estimatedImplementationCost = 50000;
    const roiPercentage = estimatedImplementationCost > 0
      ? ((totalFinancialImpact - estimatedImplementationCost) / estimatedImplementationCost) * 100
      : 0;
    const paybackPeriodWeeks = costSavingsWeekly > 0
      ? Math.ceil(estimatedImplementationCost / costSavingsWeekly)
      : 0;

    const avgAdoption = weeklyData.reduce((sum, week) => sum + week.adoptionRate, 0) / weeklyData.length;
    const unresolvedRedFlags = weeklyData.flatMap(w => w.redFlags).filter(f => !f.resolved).length;

    let recommendation: "continue" | "expand" | "modify" | "discontinue";
    let recommendationReason: string;

    if (roiPercentage > 200 && avgAdoption > 70 && unresolvedRedFlags < 3) {
      recommendation = "expand";
      recommendationReason = `Excellent results with ${roiPercentage.toFixed(0)}% ROI and ${avgAdoption.toFixed(0)}% adoption.`;
    } else if (roiPercentage > 50 && avgAdoption > 50) {
      recommendation = "continue";
      recommendationReason = `Positive ROI of ${roiPercentage.toFixed(0)}% with solid ${avgAdoption.toFixed(0)}% adoption.`;
    } else if (roiPercentage > 0 || avgAdoption > 30) {
      recommendation = "modify";
      recommendationReason = `Mixed results (${roiPercentage.toFixed(0)}% ROI, ${avgAdoption.toFixed(0)}% adoption).`;
    } else {
      recommendation = "discontinue";
      recommendationReason = `Poor results with ${roiPercentage.toFixed(0)}% ROI and ${avgAdoption.toFixed(0)}% adoption.`;
    }

    return {
      timeSavingsPerWeek,
      timeSavingsAnnual,
      costSavingsWeekly,
      costSavingsMonthly,
      costSavingsAnnual,
      errorReductionValue,
      capacityIncrease,
      additionalMattersHandled,
      totalFinancialImpact,
      roiPercentage,
      paybackPeriodWeeks,
      recommendation,
      recommendationReason,
    };
  };

  const roi = calculateROI();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Prepare comparison data
  const comparisonData = project.weeklyData.length > 0 ? [
    {
      metric: "Time per Task",
      baseline: project.baselineMetrics.timeUnit === "hours"
        ? project.baselineMetrics.timePerTask
        : project.baselineMetrics.timePerTask / 60,
      current: project.weeklyData.reduce((sum, w) => {
        const hours = w.timeUnit === "hours" ? w.avgTimePerTask : w.avgTimePerTask / 60;
        return sum + hours;
      }, 0) / project.weeklyData.length,
      unit: "hours"
    },
    {
      metric: "Accuracy",
      baseline: 100 - project.baselineMetrics.errorRate,
      current: project.weeklyData.reduce((sum, w) => sum + w.accuracyRate, 0) / project.weeklyData.length,
      unit: "%"
    }
  ] : [];

  const adoptionData = project.weeklyData.map(week => ({
    week: `W${week.week}`,
    adoption: week.adoptionRate,
  }));

  // Export to PDF (placeholder - would use a library like jsPDF in production)
  const exportToPDF = () => {
    // This is a placeholder - in production, you would use jsPDF or similar
    // to generate a properly formatted PDF presentation
    const presentationData = {
      projectName: project.name,
      workflow: project.workflowType,
      duration: `${project.weeklyData.length} weeks`,
      teamSize: project.team.length,
      roi: roi,
      comparison: comparisonData,
      adoption: adoptionData,
    };

    const dataStr = JSON.stringify(presentationData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${project.name.replace(/\s+/g, '-')}-presentation.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case "expand": return "bg-green-600";
      case "continue": return "bg-blue-600";
      case "modify": return "bg-yellow-600";
      case "discontinue": return "bg-red-600";
      default: return "bg-slate-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Export Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            Partner Presentation
          </CardTitle>
          <CardDescription>
            Auto-generated executive summary ready for partner review
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Button onClick={exportToPDF} data-testid="button-export-pdf">
              <Download className="w-4 h-4 mr-2" />
              Export Data (JSON)
            </Button>
            <Button variant="outline" onClick={() => window.print()} data-testid="button-print-presentation">
              <FileText className="w-4 h-4 mr-2" />
              Print Presentation
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Executive Summary */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardTitle className="text-2xl">Executive Summary</CardTitle>
          <CardDescription className="text-base">
            {project.name} - {project.weeklyData.length} Week Pilot Results
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400" data-testid="summary-total-impact">
                {formatCurrency(roi.totalFinancialImpact)}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Annual Impact</div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400" data-testid="summary-roi">
                {roi.roiPercentage.toFixed(0)}%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">ROI</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400" data-testid="summary-payback">
                {roi.paybackPeriodWeeks}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Weeks to Payback</div>
            </div>
            <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400" data-testid="summary-adoption">
                {project.weeklyData.length > 0
                  ? Math.round(project.weeklyData.reduce((sum, w) => sum + w.adoptionRate, 0) / project.weeklyData.length)
                  : 0}%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Avg Adoption</div>
            </div>
          </div>

          {/* Recommendation Banner */}
          <div className={`p-6 rounded-lg text-white ${getRecommendationColor(roi.recommendation)}`}>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 capitalize" data-testid="summary-recommendation">
                  Recommendation: {roi.recommendation}
                </h3>
                <p className="text-white/90 leading-relaxed" data-testid="summary-recommendation-reason">
                  {roi.recommendationReason}
                </p>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Findings</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 dark:text-slate-300">
                  Time savings of {roi.timeSavingsPerWeek.toFixed(1)} hours per week ({roi.capacityIncrease.toFixed(1)}% capacity increase)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 dark:text-slate-300">
                  {project.team.length} attorneys participated with {project.weeklyData.length} weeks of data collected
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 dark:text-slate-300">
                  Annual cost savings of {formatCurrency(roi.costSavingsAnnual)} in billable time recovery
                </p>
              </div>
              {roi.additionalMattersHandled > 0 && (
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 dark:text-slate-300">
                    Capacity to handle {roi.additionalMattersHandled} additional matters annually without adding headcount
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Before/After Comparison */}
      {comparisonData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Before vs. After Comparison</CardTitle>
            <CardDescription>
              Performance improvements from AI implementation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="metric" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="baseline" fill="#94a3b8" name="Baseline" />
                <Bar dataKey="current" fill="#3b82f6" name="With AI" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Adoption Trend */}
      {adoptionData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Adoption Trend</CardTitle>
            <CardDescription>
              Weekly attorney adoption rate over the pilot period
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={adoptionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="adoption"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  name="Adoption Rate (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Team Participation */}
      <Card>
        <CardHeader>
          <CardTitle>Team Participation</CardTitle>
          <CardDescription>
            {project.team.length} attorneys involved in the pilot
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.team.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg"
                data-testid={`presentation-team-member-${member.id}`}
              >
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-100">{member.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{member.role}</p>
                </div>
                <Badge variant="outline">Participant</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-end">
        <Button onClick={onNext} size="lg" data-testid="button-next-benchmark">
          Continue to Benchmarks
        </Button>
      </div>
    </div>
  );
}
