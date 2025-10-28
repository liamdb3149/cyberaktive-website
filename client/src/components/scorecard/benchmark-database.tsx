import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkflowType, BenchmarkData } from "@shared/schema";
import { Target, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface BenchmarkDatabaseProps {
  workflowType: WorkflowType;
}

// Industry benchmark data (in production, this would come from a database or API)
const getBenchmarkData = (workflow: WorkflowType): BenchmarkData => {
  const benchmarks: Record<WorkflowType, BenchmarkData> = {
    "Contract Review": {
      workflowType: "Contract Review",
      industryTimeSavings: { min: 40, avg: 60, max: 75 },
      typicalAdoptionWeeks: 6,
      expectedROI: { min: 150, avg: 280, max: 450 },
      commonRedFlags: [
        "Attorneys resist using AI for complex contracts",
        "Integration issues with existing document management systems",
        "Concerns about liability and professional responsibility",
        "Inconsistent accuracy on non-standard contract language"
      ],
      solutions: [
        "Start with routine NDAs and simple agreements to build confidence",
        "Provide side-by-side comparison showing AI suggestions vs. manual review",
        "Create clear guidelines on when AI review is appropriate",
        "Implement attorney oversight workflow for all AI-reviewed contracts"
      ]
    },
    "Legal Research": {
      workflowType: "Legal Research",
      industryTimeSavings: { min: 45, avg: 65, max: 80 },
      typicalAdoptionWeeks: 5,
      expectedROI: { min: 180, avg: 320, max: 500 },
      commonRedFlags: [
        "Concerns about citation accuracy and reliability",
        "Difficulty verifying AI-generated legal precedents",
        "Resistance from research-focused associates",
        "Inconsistent results across different practice areas"
      ],
      solutions: [
        "Implement verification workflow for all AI-generated citations",
        "Start with well-established legal areas before expanding",
        "Create quality control checklist for research validation",
        "Provide training on effective AI research prompting"
      ]
    },
    "Document Drafting": {
      workflowType: "Document Drafting",
      industryTimeSavings: { min: 50, avg: 70, max: 85 },
      typicalAdoptionWeeks: 7,
      expectedROI: { min: 200, avg: 350, max: 550 },
      commonRedFlags: [
        "Generated documents lack firm-specific language preferences",
        "Difficulty maintaining consistent style across documents",
        "Attorney concerns about quality and professionalism",
        "Version control issues with AI-generated drafts"
      ],
      solutions: [
        "Build firm-specific template library for AI to reference",
        "Establish document review workflow with senior attorney approval",
        "Create style guide for AI document generation",
        "Implement tracking system for AI-generated document revisions"
      ]
    },
    "Client Intake": {
      workflowType: "Client Intake",
      industryTimeSavings: { min: 55, avg: 70, max: 85 },
      typicalAdoptionWeeks: 4,
      expectedROI: { min: 160, avg: 290, max: 475 },
      commonRedFlags: [
        "Clients uncomfortable providing information to AI system",
        "Missing critical context that human intake would capture",
        "Integration challenges with case management software",
        "Data privacy and confidentiality concerns"
      ],
      solutions: [
        "Maintain human oversight for high-value or complex matters",
        "Provide clear privacy disclosures about AI usage",
        "Implement follow-up review by intake specialist",
        "Use AI for initial screening with human validation"
      ]
    },
    "Discovery Management": {
      workflowType: "Discovery Management",
      industryTimeSavings: { min: 60, avg: 75, max: 90 },
      typicalAdoptionWeeks: 8,
      expectedROI: { min: 220, avg: 400, max: 650 },
      commonRedFlags: [
        "High volume of false positives in document review",
        "Difficulty training AI on privilege recognition",
        "Attorney resistance to delegating discovery to AI",
        "Cost concerns about processing large document sets"
      ],
      solutions: [
        "Start with non-privileged document classification",
        "Implement multi-stage review process with attorney oversight",
        "Create privilege log workflow with human validation",
        "Use AI for initial culling before attorney review"
      ]
    },
    "Compliance Monitoring": {
      workflowType: "Compliance Monitoring",
      industryTimeSavings: { min: 50, avg: 68, max: 82 },
      typicalAdoptionWeeks: 6,
      expectedROI: { min: 170, avg: 310, max: 490 },
      commonRedFlags: [
        "False negatives missing critical compliance issues",
        "Regulatory changes not reflected in AI training",
        "Over-reliance on AI reducing attorney judgment",
        "Integration with existing compliance platforms"
      ],
      solutions: [
        "Maintain regular updates to AI training on new regulations",
        "Implement escalation workflow for flagged issues",
        "Create compliance attorney review schedule",
        "Use AI for monitoring with human oversight for decisions"
      ]
    },
    "Due Diligence": {
      workflowType: "Due Diligence",
      industryTimeSavings: { min: 55, avg: 72, max: 88 },
      typicalAdoptionWeeks: 7,
      expectedROI: { min: 190, avg: 340, max: 530 },
      commonRedFlags: [
        "Missing nuanced risk factors in complex transactions",
        "Difficulty customizing checklists for unique deals",
        "Client concerns about AI-driven due diligence",
        "Challenge tracking AI findings across multiple workstreams"
      ],
      solutions: [
        "Create transaction-specific review protocols",
        "Implement partner review for all AI-identified risks",
        "Build comprehensive due diligence checklist templates",
        "Use AI for initial document review with human synthesis"
      ]
    },
    "Other": {
      workflowType: "Other",
      industryTimeSavings: { min: 35, avg: 55, max: 75 },
      typicalAdoptionWeeks: 6,
      expectedROI: { min: 120, avg: 250, max: 400 },
      commonRedFlags: [
        "Workflow-specific challenges vary significantly",
        "Difficulty finding comparable implementations",
        "Custom integration requirements",
        "Unclear success metrics"
      ],
      solutions: [
        "Define clear success criteria before implementation",
        "Start with pilot in controlled environment",
        "Gather detailed feedback from users throughout pilot",
        "Adjust approach based on workflow-specific needs"
      ]
    }
  };

  return benchmarks[workflow] || benchmarks["Other"];
};

export default function BenchmarkDatabase({ workflowType }: BenchmarkDatabaseProps) {
  const benchmark = getBenchmarkData(workflowType);

  return (
    <div className="space-y-6">
      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Industry Benchmarks: {workflowType}
          </CardTitle>
          <CardDescription>
            Typical results from law firms implementing AI for {workflowType.toLowerCase()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              These benchmarks are compiled from industry studies and real-world implementations at mid-size to large law firms. 
              Your results may vary based on firm size, workflow complexity, and implementation approach.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Expected Time Savings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Expected Time Savings
          </CardTitle>
          <CardDescription>
            Typical efficiency improvements for {workflowType.toLowerCase()}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">Minimum</span>
              <span className="font-semibold" data-testid="benchmark-time-savings-min">
                {benchmark.industryTimeSavings.min}% reduction
              </span>
            </div>
            <Progress value={benchmark.industryTimeSavings.min} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">Industry Average</span>
              <span className="font-semibold text-blue-600" data-testid="benchmark-time-savings-avg">
                {benchmark.industryTimeSavings.avg}% reduction
              </span>
            </div>
            <Progress value={benchmark.industryTimeSavings.avg} className="h-2 bg-blue-200" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">Best in Class</span>
              <span className="font-semibold text-green-600" data-testid="benchmark-time-savings-max">
                {benchmark.industryTimeSavings.max}% reduction
              </span>
            </div>
            <Progress value={benchmark.industryTimeSavings.max} className="h-2 bg-green-200" />
          </div>
        </CardContent>
      </Card>

      {/* Expected ROI */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Expected ROI Range</CardTitle>
          <CardDescription>
            Typical return on investment within first year
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
              <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-400" data-testid="benchmark-roi-min">
                {benchmark.expectedROI.min}%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Conservative</div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-400" data-testid="benchmark-roi-avg">
                {benchmark.expectedROI.avg}%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Industry Average</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div className="text-2xl font-bold text-green-700 dark:text-green-400" data-testid="benchmark-roi-max">
                {benchmark.expectedROI.max}%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Best in Class</div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Typical Timeline:</strong> Most firms reach full adoption and ROI realization within{' '}
              <Badge variant="outline" className="mx-1" data-testid="benchmark-adoption-weeks">
                {benchmark.typicalAdoptionWeeks} weeks
              </Badge>
              of pilot completion.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Common Red Flags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            Common Implementation Challenges
          </CardTitle>
          <CardDescription>
            Typical issues encountered during {workflowType.toLowerCase()} pilots
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {benchmark.commonRedFlags.map((flag, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg"
              data-testid={`benchmark-red-flag-${index}`}
            >
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 dark:text-slate-300">{flag}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Best Practice Solutions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            Proven Solutions
          </CardTitle>
          <CardDescription>
            Industry best practices for addressing common challenges
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {benchmark.solutions.map((solution, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg"
              data-testid={`benchmark-solution-${index}`}
            >
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 dark:text-slate-300">{solution}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Implementation Tips */}
      <Card className="border-2 border-blue-200 dark:border-blue-800">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardTitle>Key Success Factors</CardTitle>
          <CardDescription>
            Critical elements for successful AI implementation
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-3">
          <div className="flex items-start gap-3">
            <Badge className="mt-0.5">1</Badge>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Executive Sponsorship:</strong> Secure partner-level support to drive adoption and overcome resistance
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Badge className="mt-0.5">2</Badge>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Clear Metrics:</strong> Define success criteria before pilot begins and track consistently
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Badge className="mt-0.5">3</Badge>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Comprehensive Training:</strong> Invest in hands-on training and ongoing support for all participants
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Badge className="mt-0.5">4</Badge>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Iterative Approach:</strong> Start small, measure results, address issues, then scale gradually
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Badge className="mt-0.5">5</Badge>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Attorney Feedback Loop:</strong> Regularly gather and act on user feedback to improve adoption
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
