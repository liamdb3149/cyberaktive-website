import { useState } from "react";
import type { ElementType } from "react";
import { Section, GlassCard, RevealOnScroll, FloatingOrb, GeometricBlob } from "@/components/ui/visual";
import { Calculator, Clock, FileText, Search, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type CalculatorType = "intake" | "billing" | "document" | "research" | "workflow";

interface CalculatorTab {
  id: CalculatorType;
  label: string;
  icon: ElementType;
}

const tabs: CalculatorTab[] = [
  { id: "intake", label: "Client Intake", icon: Calculator },
  { id: "billing", label: "Time Tracking", icon: Clock },
  { id: "document", label: "Document Automation", icon: FileText },
  { id: "research", label: "Legal Research", icon: Search },
  { id: "workflow", label: "Workflow Efficiency", icon: TrendingUp }
];

export default function ROICalculators() {
  const [activeTab, setActiveTab] = useState<CalculatorType>("intake");

  return (
    <Section className="section-mesh relative bg-gradient-to-br from-indigo-50/30 via-purple-50/20 to-blue-50/30">
      <FloatingOrb size="large" style={{ top: "15%", right: "8%" }} />
      <FloatingOrb size="medium" style={{ bottom: "20%", left: "10%" }} />
      <GeometricBlob style={{ top: "50%", right: "15%", width: "140px", height: "140px" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground text-glow">
              Calculate Your ROI
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-3xl mx-auto">
              See the real impact AI automation can have on your law firm's bottom line
            </p>
          </div>
        </RevealOnScroll>

        <div className="max-w-6xl mx-auto">
          <RevealOnScroll delay={200}>
            <GlassCard className="overflow-hidden p-0">
              {/* Chrome-Style Tabs */}
              <div className="bg-gradient-to-b from-muted/50 to-muted/30 border-b border-border px-2 pt-2">
                <div className="flex gap-1 overflow-x-auto pb-0" style={{ scrollbarWidth: 'thin' }}>
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                          flex items-center gap-2 px-4 py-3 rounded-t-lg transition-all duration-200
                          whitespace-nowrap min-w-fit text-sm font-medium
                          ${isActive 
                            ? 'bg-background text-foreground shadow-sm border-t border-x border-border' 
                            : 'bg-transparent text-muted-foreground hover:bg-muted/50'
                          }
                        `}
                        data-testid={`tab-${tab.id}`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Calculator Content */}
              <div className="p-8 bg-background">
                {activeTab === "intake" && <ClientIntakeCalculator />}
                {activeTab === "billing" && <BillingCalculator />}
                {activeTab === "document" && <DocumentCalculator />}
                {activeTab === "research" && <ResearchCalculator />}
                {activeTab === "workflow" && <WorkflowCalculator />}
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </Section>
  );
}

function ClientIntakeCalculator() {
  const [intakeTime, setIntakeTime] = useState<number>(45);
  const [hourlyRate, setHourlyRate] = useState<number>(250);
  const [monthlyClients, setMonthlyClients] = useState<number>(20);
  const [conversionRate, setConversionRate] = useState<number>(40);

  const currentTimeCost = (intakeTime / 60) * hourlyRate * monthlyClients;
  const automatedTimeCost = currentTimeCost * 0.4;
  const timeSavings = currentTimeCost - automatedTimeCost;
  
  const currentConversions = monthlyClients * (conversionRate / 100);
  const improvedConversions = monthlyClients * ((conversionRate * 1.58) / 100);
  const additionalClients = improvedConversions - currentConversions;
  const revenueFromAdditionalClients = additionalClients * hourlyRate * 5;
  
  const totalMonthlySavings = timeSavings + revenueFromAdditionalClients;
  const annualSavings = totalMonthlySavings * 12;

  return (
    <div className="space-y-6" data-testid="calculator-intake">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="intake-time">Current Intake Time (minutes)</Label>
          <Input
            id="intake-time"
            type="number"
            value={intakeTime}
            onChange={(e) => setIntakeTime(Number(e.target.value))}
            data-testid="input-intake-time"
          />
        </div>
        <div>
          <Label htmlFor="hourly-rate">Average Hourly Rate ($)</Label>
          <Input
            id="hourly-rate"
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            data-testid="input-hourly-rate"
          />
        </div>
        <div>
          <Label htmlFor="monthly-clients">New Clients per Month</Label>
          <Input
            id="monthly-clients"
            type="number"
            value={monthlyClients}
            onChange={(e) => setMonthlyClients(Number(e.target.value))}
            data-testid="input-monthly-clients"
          />
        </div>
        <div>
          <Label htmlFor="conversion-rate">Current Conversion Rate (%)</Label>
          <Input
            id="conversion-rate"
            type="number"
            value={conversionRate}
            onChange={(e) => setConversionRate(Number(e.target.value))}
            data-testid="input-conversion-rate"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mt-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Your Potential Savings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Time Savings/Month</p>
            <p className="text-3xl font-black text-primary" data-testid="result-time-savings">
              ${timeSavings.toFixed(0)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Additional Clients/Month</p>
            <p className="text-3xl font-black text-accent" data-testid="result-additional-clients">
              {additionalClients.toFixed(1)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Annual ROI</p>
            <p className="text-3xl font-black text-primary" data-testid="result-annual-roi">
              ${annualSavings.toFixed(0)}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center mt-6 italic">
          Based on 60% time reduction and 58% improved lead capture
        </p>
      </div>
    </div>
  );
}

function BillingCalculator() {
  const [billableRate, setBillableRate] = useState<number>(300);
  const [hoursWorked, setHoursWorked] = useState<number>(8);
  const [trackingPercentage, setTrackingPercentage] = useState<number>(75);
  const [billingErrorRate, setBillingErrorRate] = useState<number>(5);

  const currentBillableHours = hoursWorked * (trackingPercentage / 100);
  const improvedBillableHours = hoursWorked * ((trackingPercentage * 1.20) / 100);
  const additionalHoursPerDay = improvedBillableHours - currentBillableHours;
  const dailyRevenue = additionalHoursPerDay * billableRate;
  
  const errorCorrectionTime = hoursWorked * (billingErrorRate / 100);
  const reducedErrorTime = errorCorrectionTime * 0.75;
  const errorTimeSavings = (errorCorrectionTime - reducedErrorTime) * billableRate;
  
  const totalDailyGain = dailyRevenue + errorTimeSavings;
  const monthlyGain = totalDailyGain * 22;
  const annualGain = monthlyGain * 12;

  return (
    <div className="space-y-6" data-testid="calculator-billing">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="billable-rate">Billable Rate ($/hour)</Label>
          <Input
            id="billable-rate"
            type="number"
            value={billableRate}
            onChange={(e) => setBillableRate(Number(e.target.value))}
            data-testid="input-billable-rate"
          />
        </div>
        <div>
          <Label htmlFor="hours-worked">Hours Worked Daily</Label>
          <Input
            id="hours-worked"
            type="number"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(Number(e.target.value))}
            data-testid="input-hours-worked"
          />
        </div>
        <div>
          <Label htmlFor="tracking-percentage">Time Currently Tracked (%)</Label>
          <Input
            id="tracking-percentage"
            type="number"
            value={trackingPercentage}
            onChange={(e) => setTrackingPercentage(Number(e.target.value))}
            data-testid="input-tracking-percentage"
          />
        </div>
        <div>
          <Label htmlFor="billing-error-rate">Billing Error Rate (%)</Label>
          <Input
            id="billing-error-rate"
            type="number"
            value={billingErrorRate}
            onChange={(e) => setBillingErrorRate(Number(e.target.value))}
            data-testid="input-billing-error-rate"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mt-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Your Revenue Recovery</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Additional Hours/Day</p>
            <p className="text-3xl font-black text-primary" data-testid="result-additional-hours">
              {additionalHoursPerDay.toFixed(1)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Monthly Revenue Gain</p>
            <p className="text-3xl font-black text-accent" data-testid="result-monthly-gain">
              ${monthlyGain.toFixed(0)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Annual Revenue Gain</p>
            <p className="text-3xl font-black text-primary" data-testid="result-annual-gain">
              ${annualGain.toFixed(0)}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center mt-6 italic">
          Based on 20% increase in captured hours and 25% reduction in billing errors
        </p>
      </div>
    </div>
  );
}

function DocumentCalculator() {
  const [weeklyHours, setWeeklyHours] = useState<number>(15);
  const [attorneyRate, setAttorneyRate] = useState<number>(350);
  const [errorCorrectionHours, setErrorCorrectionHours] = useState<number>(3);
  const [documentsPerWeek, setDocumentsPerWeek] = useState<number>(25);

  const currentCost = weeklyHours * attorneyRate;
  const automatedTime = weeklyHours * 0.3;
  const timeSavings = weeklyHours - automatedTime;
  const weeklySavings = timeSavings * attorneyRate;
  
  const errorSavings = errorCorrectionHours * attorneyRate;
  
  const totalWeeklySavings = weeklySavings + errorSavings;
  const monthlySavings = totalWeeklySavings * 4.33;
  const annualSavings = monthlySavings * 12;
  
  const timePerDocument = timeSavings / documentsPerWeek;

  return (
    <div className="space-y-6" data-testid="calculator-document">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="weekly-hours">Weekly Hours on Routine Docs</Label>
          <Input
            id="weekly-hours"
            type="number"
            value={weeklyHours}
            onChange={(e) => setWeeklyHours(Number(e.target.value))}
            data-testid="input-weekly-hours"
          />
        </div>
        <div>
          <Label htmlFor="attorney-rate">Attorney Hourly Rate ($)</Label>
          <Input
            id="attorney-rate"
            type="number"
            value={attorneyRate}
            onChange={(e) => setAttorneyRate(Number(e.target.value))}
            data-testid="input-attorney-rate"
          />
        </div>
        <div>
          <Label htmlFor="error-correction">Error Correction Hours/Week</Label>
          <Input
            id="error-correction"
            type="number"
            value={errorCorrectionHours}
            onChange={(e) => setErrorCorrectionHours(Number(e.target.value))}
            data-testid="input-error-correction"
          />
        </div>
        <div>
          <Label htmlFor="documents-week">Documents Processed/Week</Label>
          <Input
            id="documents-week"
            type="number"
            value={documentsPerWeek}
            onChange={(e) => setDocumentsPerWeek(Number(e.target.value))}
            data-testid="input-documents-week"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mt-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Your Automation Savings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Time Saved/Week</p>
            <p className="text-3xl font-black text-primary" data-testid="result-time-saved">
              {timeSavings.toFixed(1)} hrs
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Monthly Savings</p>
            <p className="text-3xl font-black text-accent" data-testid="result-monthly-savings">
              ${monthlySavings.toFixed(0)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Annual Savings</p>
            <p className="text-3xl font-black text-primary" data-testid="result-annual-savings">
              ${annualSavings.toFixed(0)}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center mt-6 italic">
          Based on 70% reduction in document review time and error elimination
        </p>
      </div>
    </div>
  );
}

function ResearchCalculator() {
  const [researchHours, setResearchHours] = useState<number>(6);
  const [billingRate, setBillingRate] = useState<number>(400);
  const [casesPerMonth, setCasesPerMonth] = useState<number>(12);
  const [averageCaseValue, setAverageCaseValue] = useState<number>(5000);

  const currentResearchCost = researchHours * billingRate;
  const automatedResearchTime = researchHours * 0.4;
  const timeSaved = researchHours - automatedResearchTime;
  const monthlySavings = timeSaved * billingRate * casesPerMonth;
  
  const currentCapacity = casesPerMonth;
  const additionalCapacity = (timeSaved / researchHours) * casesPerMonth;
  const additionalRevenue = additionalCapacity * averageCaseValue;
  
  const totalMonthlyGain = monthlySavings + additionalRevenue;
  const annualGain = totalMonthlyGain * 12;

  return (
    <div className="space-y-6" data-testid="calculator-research">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="research-hours">Research Hours per Case</Label>
          <Input
            id="research-hours"
            type="number"
            value={researchHours}
            onChange={(e) => setResearchHours(Number(e.target.value))}
            data-testid="input-research-hours"
          />
        </div>
        <div>
          <Label htmlFor="billing-rate">Billing Rate ($/hour)</Label>
          <Input
            id="billing-rate"
            type="number"
            value={billingRate}
            onChange={(e) => setBillingRate(Number(e.target.value))}
            data-testid="input-billing-rate"
          />
        </div>
        <div>
          <Label htmlFor="cases-month">Cases Handled/Month</Label>
          <Input
            id="cases-month"
            type="number"
            value={casesPerMonth}
            onChange={(e) => setCasesPerMonth(Number(e.target.value))}
            data-testid="input-cases-month"
          />
        </div>
        <div>
          <Label htmlFor="case-value">Average Case Value ($)</Label>
          <Input
            id="case-value"
            type="number"
            value={averageCaseValue}
            onChange={(e) => setAverageCaseValue(Number(e.target.value))}
            data-testid="input-case-value"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mt-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Your Research ROI</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Time Saved/Case</p>
            <p className="text-3xl font-black text-primary" data-testid="result-time-per-case">
              {timeSaved.toFixed(1)} hrs
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Additional Cases/Year</p>
            <p className="text-3xl font-black text-accent" data-testid="result-additional-cases">
              {(additionalCapacity * 12).toFixed(0)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Annual Revenue Gain</p>
            <p className="text-3xl font-black text-primary" data-testid="result-research-annual">
              ${annualGain.toFixed(0)}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center mt-6 italic">
          Based on 60% reduction in research time and increased case capacity
        </p>
      </div>
    </div>
  );
}

function WorkflowCalculator() {
  const [adminHoursWeekly, setAdminHoursWeekly] = useState<number>(20);
  const [operationalRate, setOperationalRate] = useState<number>(150);
  const [missedDeadlines, setMissedDeadlines] = useState<number>(2);
  const [deadlineCost, setDeadlineCost] = useState<number>(3000);

  const currentAdminCost = adminHoursWeekly * operationalRate;
  const improvedHours = adminHoursWeekly * 0.65;
  const hoursSaved = adminHoursWeekly - improvedHours;
  const weeklySavings = hoursSaved * operationalRate;
  
  const currentDeadlineCost = missedDeadlines * deadlineCost;
  const improvedDeadlines = missedDeadlines * 0.75;
  const deadlinesSaved = missedDeadlines - improvedDeadlines;
  const monthlyDeadlineSavings = deadlinesSaved * deadlineCost;
  
  const totalMonthlySavings = (weeklySavings * 4.33) + monthlyDeadlineSavings;
  const annualSavings = totalMonthlySavings * 12;

  return (
    <div className="space-y-6" data-testid="calculator-workflow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="admin-hours">Admin Hours/Week</Label>
          <Input
            id="admin-hours"
            type="number"
            value={adminHoursWeekly}
            onChange={(e) => setAdminHoursWeekly(Number(e.target.value))}
            data-testid="input-admin-hours"
          />
        </div>
        <div>
          <Label htmlFor="operational-rate">Operational Cost ($/hour)</Label>
          <Input
            id="operational-rate"
            type="number"
            value={operationalRate}
            onChange={(e) => setOperationalRate(Number(e.target.value))}
            data-testid="input-operational-rate"
          />
        </div>
        <div>
          <Label htmlFor="missed-deadlines">Missed Deadlines/Month</Label>
          <Input
            id="missed-deadlines"
            type="number"
            value={missedDeadlines}
            onChange={(e) => setMissedDeadlines(Number(e.target.value))}
            data-testid="input-missed-deadlines"
          />
        </div>
        <div>
          <Label htmlFor="deadline-cost">Cost per Missed Deadline ($)</Label>
          <Input
            id="deadline-cost"
            type="number"
            value={deadlineCost}
            onChange={(e) => setDeadlineCost(Number(e.target.value))}
            data-testid="input-deadline-cost"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mt-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Your Workflow Improvement</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Admin Hours Saved/Week</p>
            <p className="text-3xl font-black text-primary" data-testid="result-admin-saved">
              {hoursSaved.toFixed(1)} hrs
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Deadlines Saved/Month</p>
            <p className="text-3xl font-black text-accent" data-testid="result-deadlines-saved">
              {deadlinesSaved.toFixed(1)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Annual Savings</p>
            <p className="text-3xl font-black text-primary" data-testid="result-workflow-annual">
              ${annualSavings.toFixed(0)}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center mt-6 italic">
          Based on 35% workflow efficiency improvement and 25% reduction in missed deadlines
        </p>
      </div>
    </div>
  );
}
