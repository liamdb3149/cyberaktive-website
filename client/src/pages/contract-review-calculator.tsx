import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/visual";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { DollarSign, Clock, TrendingUp, Target, Download, RotateCcw, Calendar as CalendarIcon } from "lucide-react";

export default function ContractReviewCalculator() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [inputs, setInputs] = useState({
    associates: 40,
    contractsPerWeek: 6,
    hoursPerContract: 4.2,
    hourlyRate: 350,
    realizationRate: 85,
    aiCost: 50000,
    timeReduction: 30,
    realizationImprovement: 3,
  });

  const [results, setResults] = useState({
    totalContracts: 0,
    totalHours: 0,
    totalBillableValue: 0,
    currentRealized: 0,
    timeSavedPerContract: 0,
    totalHoursSaved: 0,
    hoursReinvested: 0,
    newRealizationRate: 0,
    postAutomationRealized: 0,
    annualTimeSavingsValue: 0,
    annualRealizationValue: 0,
    totalAnnualBenefit: 0,
    netAnnualBenefit: 0,
    roi: 0,
    paybackMonths: 0,
    threeYearBenefit: 0,
  });

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const totalContracts = inputs.associates * inputs.contractsPerWeek * 52;
    const totalHours = totalContracts * inputs.hoursPerContract;
    const totalBillableValue = totalHours * inputs.hourlyRate;
    const currentRealized = totalBillableValue * (inputs.realizationRate / 100);

    const timeSavedPerContract = inputs.hoursPerContract * (inputs.timeReduction / 100);
    const totalHoursSaved = totalContracts * timeSavedPerContract;
    const hoursReinvested = totalHoursSaved * 0.65;
    const newRealizationRate = inputs.realizationRate + inputs.realizationImprovement;
    const postAutomationRealized = totalBillableValue * (newRealizationRate / 100);

    const annualTimeSavingsValue = hoursReinvested * inputs.hourlyRate;
    const annualRealizationValue = postAutomationRealized - currentRealized;
    const totalAnnualBenefit = annualTimeSavingsValue + annualRealizationValue;
    const netAnnualBenefit = totalAnnualBenefit - inputs.aiCost;
    const roi = (netAnnualBenefit / inputs.aiCost) * 100;
    const paybackMonths = (inputs.aiCost / totalAnnualBenefit) * 12;
    const threeYearBenefit = (totalAnnualBenefit * 3) - (inputs.aiCost * 3);

    setResults({
      totalContracts,
      totalHours,
      totalBillableValue,
      currentRealized,
      timeSavedPerContract,
      totalHoursSaved,
      hoursReinvested,
      newRealizationRate,
      postAutomationRealized,
      annualTimeSavingsValue,
      annualRealizationValue,
      totalAnnualBenefit,
      netAnnualBenefit,
      roi,
      paybackMonths,
      threeYearBenefit,
    });
  };

  const handleInputChange = (field: string, value: number) => {
    let validatedValue = value;
    
    if (['associates', 'contractsPerWeek', 'hoursPerContract'].includes(field)) {
      validatedValue = Math.max(0.1, value);
    }
    
    if (field === 'realizationRate') {
      validatedValue = Math.min(100, Math.max(0, value));
      
      setInputs((prev) => {
        const maxImprovement = 100 - validatedValue;
        const adjustedImprovement = Math.min(prev.realizationImprovement, maxImprovement);
        return { 
          ...prev, 
          realizationRate: validatedValue,
          realizationImprovement: Math.max(0, adjustedImprovement)
        };
      });
      return;
    }
    
    if (field === 'realizationImprovement') {
      const maxImprovement = 100 - inputs.realizationRate;
      validatedValue = Math.min(maxImprovement, Math.max(0, value));
    }
    
    if (field === 'hourlyRate') {
      validatedValue = Math.max(0, value);
    }
    
    if (field === 'aiCost') {
      validatedValue = Math.max(1, value);
    }
    
    setInputs((prev) => ({ ...prev, [field]: validatedValue }));
  };

  const resetToDefaults = () => {
    setInputs({
      associates: 40,
      contractsPerWeek: 6,
      hoursPerContract: 4.2,
      hourlyRate: 350,
      realizationRate: 85,
      aiCost: 50000,
      timeReduction: 30,
      realizationImprovement: 3,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getPaybackColor = (months: number) => {
    if (months < 12) return "text-green-600";
    if (months < 18) return "text-yellow-600";
    return "text-orange-600";
  };

  const getROIColor = (roi: number) => {
    if (roi > 100) return "text-green-600";
    if (roi > 50) return "text-yellow-600";
    return "text-orange-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <Section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-hero">
            Contract Review Automation ROI Calculator
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto opacity-95" data-testid="text-hero-subtitle">
            See exactly how much time, money, and realization your firm could gain by automating contract review—in under 60 seconds. Get board-ready numbers based on your actual workflow.
          </p>
        </div>
      </Section>

      {/* Calculator Section */}
      <Section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Input Section */}
            <div className="space-y-6">
              {/* Section 1: Current State */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Your Current State
                  </CardTitle>
                  <CardDescription>Enter your firm's current contract review metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="associates" data-testid="label-associates">
                      Number of associates performing contract reviews
                    </Label>
                    <Input
                      id="associates"
                      type="number"
                      min="1"
                      value={inputs.associates}
                      onChange={(e) => handleInputChange('associates', Number(e.target.value))}
                      data-testid="input-associates"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contractsPerWeek" data-testid="label-contracts-week">
                      Average contracts reviewed per associate per week
                    </Label>
                    <Input
                      id="contractsPerWeek"
                      type="number"
                      min="1"
                      value={inputs.contractsPerWeek}
                      onChange={(e) => handleInputChange('contractsPerWeek', Number(e.target.value))}
                      data-testid="input-contracts-week"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hoursPerContract" data-testid="label-hours-contract">
                      Average hours spent per contract review
                    </Label>
                    <Input
                      id="hoursPerContract"
                      type="number"
                      min="0.1"
                      step="0.1"
                      value={inputs.hoursPerContract}
                      onChange={(e) => handleInputChange('hoursPerContract', Number(e.target.value))}
                      data-testid="input-hours-contract"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hourlyRate" data-testid="label-hourly-rate">
                      Blended hourly rate ($)
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="hourlyRate"
                        type="number"
                        min="1"
                        value={inputs.hourlyRate}
                        onChange={(e) => handleInputChange('hourlyRate', Number(e.target.value))}
                        className="pl-10"
                        data-testid="input-hourly-rate"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="realizationRate" data-testid="label-realization-rate">
                      Current realization rate (%)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="realizationRate"
                        min={50}
                        max={100}
                        step={1}
                        value={[inputs.realizationRate]}
                        onValueChange={(value) => handleInputChange('realizationRate', value[0])}
                        className="flex-1"
                        data-testid="slider-realization-rate"
                      />
                      <span className="text-sm font-semibold w-12 text-right" data-testid="text-realization-rate">
                        {inputs.realizationRate}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: AI Implementation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    AI Implementation Parameters
                  </CardTitle>
                  <CardDescription>Expected improvements from automation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="aiCost" data-testid="label-ai-cost">
                      Annual AI tool licensing cost ($)
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="aiCost"
                        type="number"
                        min="1"
                        value={inputs.aiCost}
                        onChange={(e) => handleInputChange('aiCost', Number(e.target.value))}
                        className="pl-10"
                        data-testid="input-ai-cost"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="timeReduction" data-testid="label-time-reduction">
                      Expected time reduction per contract (%)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="timeReduction"
                        min={10}
                        max={70}
                        step={5}
                        value={[inputs.timeReduction]}
                        onValueChange={(value) => handleInputChange('timeReduction', value[0])}
                        className="flex-1"
                        data-testid="slider-time-reduction"
                      />
                      <span className="text-sm font-semibold w-12 text-right" data-testid="text-time-reduction">
                        {inputs.timeReduction}%
                      </span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="realizationImprovement" data-testid="label-realization-improvement">
                      Expected realization rate improvement (%)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        id="realizationImprovement"
                        min={0}
                        max={15}
                        step={0.5}
                        value={[inputs.realizationImprovement]}
                        onValueChange={(value) => handleInputChange('realizationImprovement', value[0])}
                        className="flex-1"
                        data-testid="slider-realization-improvement"
                      />
                      <span className="text-sm font-semibold w-12 text-right" data-testid="text-realization-improvement">
                        {inputs.realizationImprovement}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button 
                onClick={resetToDefaults}
                variant="outline"
                className="w-full"
                data-testid="button-reset"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset to Defaults
              </Button>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <Card className="border-2 border-blue-600 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardTitle className="text-2xl">Your ROI Results</CardTitle>
                  <CardDescription>Instant financial impact analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Payback Period */}
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">Payback Period</div>
                    <div className={`text-5xl font-bold ${getPaybackColor(results.paybackMonths)}`} data-testid="result-payback-months">
                      {!isFinite(results.paybackMonths) || results.paybackMonths <= 0 
                        ? 'No payback' 
                        : `${results.paybackMonths.toFixed(1)} months`}
                    </div>
                  </div>

                  {/* Annual Net Benefit */}
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">Annual Net Benefit</div>
                    <div className="text-5xl font-bold text-green-600" data-testid="result-net-benefit">
                      {formatCurrency(results.netAnnualBenefit)}
                    </div>
                  </div>

                  {/* ROI Percentage */}
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">Return on Investment</div>
                    <div className={`text-5xl font-bold ${getROIColor(results.roi)}`} data-testid="result-roi">
                      {!isFinite(results.roi) ? 'Unbounded' : `${results.roi.toFixed(0)}%`}
                    </div>
                  </div>

                  {/* Payback Progress Bar */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">Payback Timeline</div>
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-green-600 h-4 rounded-full transition-all duration-500"
                        style={{ width: `${isFinite(results.paybackMonths) && results.paybackMonths > 0 ? Math.min((results.paybackMonths / 12) * 100, 100) : 0}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500">
                      {!isFinite(results.paybackMonths) || results.paybackMonths <= 0
                        ? 'No payback period - benefit does not exceed cost'
                        : `You'll break even in month ${Math.ceil(results.paybackMonths)} of 12`}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Multi-Year Projections</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span className="text-sm font-medium text-gray-700">Year 1 Total Benefit</span>
                    <span className="font-bold text-blue-600" data-testid="result-year1">
                      {formatCurrency(results.netAnnualBenefit)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="text-sm font-medium text-gray-700">Year 2 Cumulative</span>
                    <span className="font-bold text-green-600" data-testid="result-year2">
                      {formatCurrency(results.netAnnualBenefit * 2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span className="text-sm font-medium text-gray-700">3-Year Total Benefit</span>
                    <span className="font-bold text-purple-600" data-testid="result-year3">
                      {formatCurrency(results.threeYearBenefit)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem-Revealing CTA */}
      <Section className="py-12 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-testid="heading-cta">
            How many billable hours are slipping through the cracks during contract review right now?
          </h2>
          <p className="text-lg text-gray-700 mb-8" data-testid="text-cta-description">
            Most firms lose 15-25% of potential revenue to inefficient contract review processes and poor time capture. If your numbers above show significant opportunity, it's time to take action. Book a 15-minute introductory call to discover exactly where your firm is losing money—and how to fix it.
          </p>
        </div>
      </Section>

      {/* Calendar Section */}
      <Section className="py-12" id="calendar">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="heading-calendar">
              <CalendarIcon className="inline-block w-8 h-8 mr-3 text-accent" />
              Book Your Introductory Call
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-testid="text-calendar-subtitle">
              Get a customized ROI model for your firm and discover specific automation opportunities in contract review.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-4">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/EDeYrzypdFYfanS9vQQk"
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '800px', height: '800px' }}
              scrolling="no"
              id="msgsndr-calendar"
              title="Book Your Introductory Call"
              data-testid="iframe-calendar"
            />
            <br />
            <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript"></script>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
