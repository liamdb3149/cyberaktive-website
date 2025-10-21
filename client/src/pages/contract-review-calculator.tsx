import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/visual";
import { useToast } from "@/hooks/use-toast";
import { DollarSign, Clock, TrendingUp, Target, Download, RotateCcw } from "lucide-react";

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
    
    // Enforce minimum values to prevent division by zero
    if (['associates', 'contractsPerWeek', 'hoursPerContract'].includes(field)) {
      validatedValue = Math.max(0.1, value);
    }
    
    // Cap realization rates at 100%
    if (field === 'realizationRate') {
      validatedValue = Math.min(100, Math.max(0, value));
      
      // Also adjust realization improvement if needed to prevent total > 100%
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
    
    // Cap realization improvement based on current rate
    if (field === 'realizationImprovement') {
      const maxImprovement = 100 - inputs.realizationRate;
      validatedValue = Math.min(maxImprovement, Math.max(0, value));
    }
    
    // Ensure positive values for costs and rates
    if (field === 'hourlyRate') {
      validatedValue = Math.max(0, value);
    }
    
    // Enforce minimum AI cost to prevent division by zero in ROI calculation
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
      <Section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contract Review Automation ROI Calculator
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              See exactly how much time, money, and realization your firm could gain by automating contract review—in under 60 seconds. Get board-ready numbers based on your actual workflow.
            </p>
          </div>

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
                    <Input
                      id="realizationRate"
                      type="number"
                      min="0"
                      max="100"
                      value={inputs.realizationRate}
                      onChange={(e) => handleInputChange('realizationRate', Number(e.target.value))}
                      data-testid="input-realization-rate"
                    />
                  </div>

                  <div>
                    <Label htmlFor="aiCost" data-testid="label-ai-cost">
                      Annual AI tool licensing cost ($)
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="aiCost"
                        type="number"
                        min="0"
                        value={inputs.aiCost}
                        onChange={(e) => handleInputChange('aiCost', Number(e.target.value))}
                        className="pl-10"
                        data-testid="input-ai-cost"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: Expected Improvement */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Expected Improvement
                  </CardTitle>
                  <CardDescription>Conservative estimates based on industry benchmarks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="timeReduction" data-testid="label-time-reduction">
                        Expected time reduction: {inputs.timeReduction}%
                      </Label>
                    </div>
                    <Slider
                      id="timeReduction"
                      min={20}
                      max={50}
                      step={1}
                      value={[inputs.timeReduction]}
                      onValueChange={([value]) => handleInputChange('timeReduction', value)}
                      data-testid="slider-time-reduction"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Industry benchmarks show 30-40% time savings for mid-sized firms
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="realizationImprovement" data-testid="label-realization-improvement">
                      Expected realization rate improvement (%)
                    </Label>
                    <Input
                      id="realizationImprovement"
                      type="number"
                      min="0"
                      max="10"
                      step="0.5"
                      value={inputs.realizationImprovement}
                      onChange={(e) => handleInputChange('realizationImprovement', Number(e.target.value))}
                      data-testid="input-realization-improvement"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Faster turnaround and fewer write-downs typically lift realization 2-5%
                    </p>
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
              {/* Primary Metrics */}
              <Card className="border-2 border-blue-600">
                <CardHeader>
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
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <div className="text-xs text-gray-600">Total Hours Saved</div>
                    </div>
                    <div className="text-2xl font-bold" data-testid="result-hours-saved">
                      {formatNumber(results.totalHoursSaved)}
                    </div>
                    <div className="text-xs text-gray-500">hours/year</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-green-600" />
                      <div className="text-xs text-gray-600">Annual Contracts</div>
                    </div>
                    <div className="text-2xl font-bold" data-testid="result-total-contracts">
                      {formatNumber(results.totalContracts)}
                    </div>
                    <div className="text-xs text-gray-500">contracts/year</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-purple-600" />
                      <div className="text-xs text-gray-600">Time Saved Per Contract</div>
                    </div>
                    <div className="text-2xl font-bold" data-testid="result-time-per-contract">
                      {results.timeSavedPerContract.toFixed(1)}
                    </div>
                    <div className="text-xs text-gray-500">hours</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <div className="text-xs text-gray-600">3-Year Benefit</div>
                    </div>
                    <div className="text-2xl font-bold" data-testid="result-three-year">
                      {formatCurrency(results.threeYearBenefit)}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Comparison Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Annual Value Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>AI Tool Cost</span>
                        <span className="font-semibold">{formatCurrency(inputs.aiCost)}</span>
                      </div>
                      <div className="w-full bg-red-100 rounded-full h-8 relative">
                        <div className="bg-red-500 h-8 rounded-full" style={{ width: '100%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Total Annual Benefit</span>
                        <span className="font-semibold">{formatCurrency(results.totalAnnualBenefit)}</span>
                      </div>
                      <div className="w-full bg-green-100 rounded-full h-8 relative">
                        <div 
                          className="bg-green-500 h-8 rounded-full transition-all duration-500" 
                          style={{ width: `${(results.totalAnnualBenefit / Math.max(inputs.aiCost, results.totalAnnualBenefit)) * 100}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Button */}
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6" 
                data-testid="button-download"
                onClick={() => alert('PDF download feature coming soon! Contact us to get your custom ROI report.')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Full Report (PDF)
              </Button>
            </div>
          </div>

          {/* Email Capture */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Want this ROI model customized for your firm?</h3>
                <p className="text-gray-600 mb-4">Enter your email and we'll send you an editable version.</p>
                <div className="flex gap-2 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="your.email@lawfirm.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-testid="input-email"
                  />
                  <Button 
                    onClick={() => {
                      if (email && email.includes('@')) {
                        toast({
                          title: "Request Received!",
                          description: "We'll send you the customized ROI model shortly.",
                        });
                        setEmail("");
                      } else {
                        toast({
                          title: "Invalid Email",
                          description: "Please enter a valid email address.",
                          variant: "destructive",
                        });
                      }
                    }}
                    data-testid="button-send-model"
                  >
                    Send Model
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
