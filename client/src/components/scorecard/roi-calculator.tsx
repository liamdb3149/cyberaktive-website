import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AIPilotProject, ROICalculation } from "@shared/schema";
import { TrendingUp, DollarSign, Clock, Target, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
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
  ResponsiveContainer 
} from "recharts";

interface ROICalculatorProps {
  project: AIPilotProject;
  onNext: () => void;
}

export default function ROICalculator({ project, onNext }: ROICalculatorProps) {
  // Calculate ROI based on project data
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
        recommendationReason: "No weekly tracking data available yet. Continue gathering data.",
      };
    }

    // Convert baseline time to hours
    const baselineHours = baselineMetrics.timeUnit === "hours" 
      ? baselineMetrics.timePerTask 
      : baselineMetrics.timePerTask / 60;

    // Calculate average current time from weekly data
    const avgCurrentTime = weeklyData.reduce((sum, week) => {
      const weekHours = week.timeUnit === "hours" ? week.avgTimePerTask : week.avgTimePerTask / 60;
      return sum + weekHours;
    }, 0) / weeklyData.length;

    // Time savings per task (in hours)
    const timeSavingsPerTask = Math.max(0, baselineHours - avgCurrentTime);
    
    // Weekly time savings (hours)
    const timeSavingsPerWeek = timeSavingsPerTask * baselineMetrics.tasksPerWeek;
    
    // Annual time savings (hours)
    const timeSavingsAnnual = timeSavingsPerWeek * 52;

    // Cost savings
    const costSavingsWeekly = timeSavingsPerWeek * baselineMetrics.billableRate;
    const costSavingsMonthly = costSavingsWeekly * 4.33;
    const costSavingsAnnual = costSavingsWeekly * 52;

    // Error reduction value (average accuracy improvement * cost impact)
    const avgAccuracy = weeklyData.reduce((sum, week) => sum + week.accuracyRate, 0) / weeklyData.length;
    const baselineAccuracy = 100 - baselineMetrics.errorRate;
    const accuracyImprovement = Math.max(0, avgAccuracy - baselineAccuracy);
    const errorReductionValue = (accuracyImprovement / 100) * baselineMetrics.costPerMatter * baselineMetrics.tasksPerWeek * 52;

    // Capacity increase (how many more tasks can be handled) - guard against division by zero
    const capacityIncrease = baselineHours > 0 && timeSavingsPerTask > 0
      ? (timeSavingsPerTask / baselineHours) * 100 
      : 0;
    const additionalMattersHandled = baselineHours > 0
      ? Math.floor(timeSavingsAnnual / baselineHours)
      : 0;

    // Total financial impact
    const totalFinancialImpact = costSavingsAnnual + errorReductionValue;

    // Assume implementation cost (could be made configurable)
    const estimatedImplementationCost = 50000; // $50k for AI tool licensing and training
    
    // ROI percentage
    const roiPercentage = estimatedImplementationCost > 0 
      ? ((totalFinancialImpact - estimatedImplementationCost) / estimatedImplementationCost) * 100 
      : 0;

    // Payback period (weeks)
    const paybackPeriodWeeks = costSavingsWeekly > 0 
      ? Math.ceil(estimatedImplementationCost / costSavingsWeekly) 
      : 0;

    // Generate recommendation
    let recommendation: "continue" | "expand" | "modify" | "discontinue";
    let recommendationReason: string;

    const avgAdoption = weeklyData.reduce((sum, week) => sum + week.adoptionRate, 0) / weeklyData.length;
    const unresolvedRedFlags = weeklyData.flatMap(w => w.redFlags).filter(f => !f.resolved).length;

    if (roiPercentage > 200 && avgAdoption > 70 && unresolvedRedFlags < 3) {
      recommendation = "expand";
      recommendationReason = `Excellent results with ${roiPercentage.toFixed(0)}% ROI and ${avgAdoption.toFixed(0)}% adoption. Recommend expanding to additional practice areas.`;
    } else if (roiPercentage > 50 && avgAdoption > 50) {
      recommendation = "continue";
      recommendationReason = `Positive ROI of ${roiPercentage.toFixed(0)}% with solid ${avgAdoption.toFixed(0)}% adoption. Continue pilot and monitor progress.`;
    } else if (roiPercentage > 0 || avgAdoption > 30) {
      recommendation = "modify";
      recommendationReason = `Mixed results (${roiPercentage.toFixed(0)}% ROI, ${avgAdoption.toFixed(0)}% adoption). Address ${unresolvedRedFlags} unresolved issues and improve training.`;
    } else {
      recommendation = "discontinue";
      recommendationReason = `Poor results with ${roiPercentage.toFixed(0)}% ROI and ${avgAdoption.toFixed(0)}% adoption. Consider alternative solutions or significant process changes.`;
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

  // Prepare chart data
  const weeklyProgressData = project.weeklyData.map(week => ({
    week: `Week ${week.week}`,
    adoption: week.adoptionRate,
    tasksCompleted: week.tasksCompleted,
    accuracy: week.accuracyRate,
  }));

  const financialData = [
    { category: "Cost Savings", value: roi.costSavingsAnnual, color: "#10b981" },
    { category: "Error Reduction", value: roi.errorReductionValue, color: "#3b82f6" },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case "expand": return "text-green-600 bg-green-50 dark:bg-green-950";
      case "continue": return "text-blue-600 bg-blue-50 dark:bg-blue-950";
      case "modify": return "text-yellow-600 bg-yellow-50 dark:bg-yellow-950";
      case "discontinue": return "text-red-600 bg-red-50 dark:bg-red-950";
      default: return "text-slate-600 bg-slate-50 dark:bg-slate-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Financial Impact Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-green-600" />
            Financial Impact Summary
          </CardTitle>
          <CardDescription>
            Calculated ROI based on {project.weeklyData.length} weeks of tracking data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl">
              <div className="text-4xl font-bold text-green-700 dark:text-green-400 mb-2" data-testid="text-total-financial-impact">
                {formatCurrency(roi.totalFinancialImpact)}
              </div>
              <div className="text-sm font-medium text-green-900 dark:text-green-300">Total Annual Impact</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl">
              <div className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2" data-testid="text-roi-percentage">
                {roi.roiPercentage.toFixed(0)}%
              </div>
              <div className="text-sm font-medium text-blue-900 dark:text-blue-300">ROI Percentage</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 rounded-xl">
              <div className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-2" data-testid="text-payback-period">
                {roi.paybackPeriodWeeks}
              </div>
              <div className="text-sm font-medium text-indigo-900 dark:text-indigo-300">Weeks to Payback</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="w-5 h-5 text-blue-600" />
              Time Savings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">Weekly Hours Saved</span>
              <span className="font-semibold text-lg" data-testid="text-time-savings-weekly">
                {roi.timeSavingsPerWeek.toFixed(1)} hrs
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">Annual Hours Saved</span>
              <span className="font-semibold text-lg" data-testid="text-time-savings-annual">
                {roi.timeSavingsAnnual.toFixed(0)} hrs
              </span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t">
              <span className="text-slate-600 dark:text-slate-400">Weekly Cost Savings</span>
              <span className="font-semibold text-green-600 text-lg" data-testid="text-cost-savings-weekly">
                {formatCurrency(roi.costSavingsWeekly)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">Annual Cost Savings</span>
              <span className="font-semibold text-green-600 text-lg" data-testid="text-cost-savings-annual">
                {formatCurrency(roi.costSavingsAnnual)}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-indigo-600" />
              Capacity & Quality
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">Capacity Increase</span>
              <span className="font-semibold text-lg" data-testid="text-capacity-increase">
                {roi.capacityIncrease.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">Additional Matters/Year</span>
              <span className="font-semibold text-lg" data-testid="text-additional-matters">
                {roi.additionalMattersHandled}
              </span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t">
              <span className="text-slate-600 dark:text-slate-400">Error Reduction Value</span>
              <span className="font-semibold text-blue-600 text-lg" data-testid="text-error-reduction-value">
                {formatCurrency(roi.errorReductionValue)}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Progress Chart */}
      {project.weeklyData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Weekly Progress Trend</CardTitle>
            <CardDescription>
              Adoption rate and accuracy over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="adoption" 
                  stroke="#3b82f6" 
                  name="Adoption Rate (%)" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="accuracy" 
                  stroke="#10b981" 
                  name="Accuracy Rate (%)" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Financial Breakdown Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Annual Financial Impact Breakdown</CardTitle>
          <CardDescription>
            Components of total ROI value
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Bar dataKey="value" fill="#3b82f6" name="Annual Value" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recommendation */}
      <Card className={getRecommendationColor(roi.recommendation)}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Recommendation: <span className="capitalize">{roi.recommendation}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base leading-relaxed" data-testid="text-recommendation-reason">
            {roi.recommendationReason}
          </p>
          
          {roi.paybackPeriodWeeks > 0 && (
            <div className="mt-4">
              <Label className="text-sm font-medium mb-2 block">Payback Progress</Label>
              <Progress value={Math.min(100, (project.weeklyData.length / roi.paybackPeriodWeeks) * 100)} className="h-3" />
              <p className="text-sm mt-2">
                {project.weeklyData.length} of {roi.paybackPeriodWeeks} weeks to full payback ({((project.weeklyData.length / roi.paybackPeriodWeeks) * 100).toFixed(0)}%)
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-end">
        <Button onClick={onNext} size="lg" data-testid="button-next-presentation">
          Continue to Presentation
        </Button>
      </div>
    </div>
  );
}
