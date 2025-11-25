import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";
import ResultsDashboard from "@/components/ai-malpractice-calculator/ResultsDashboard";

const questions = [
  {
    id: 1,
    question: "Does your firm use AI tools in client-facing work?",
    category: "AI Usage",
    options: [
      { label: "No, we don't use AI", weight: 0 },
      { label: "Occasionally for research", weight: 25 },
      { label: "Regularly for multiple tasks", weight: 50 },
      { label: "Heavily integrated across practice", weight: 75 }
    ]
  },
  {
    id: 2,
    question: "How do you verify AI outputs before client delivery?",
    category: "Verification",
    options: [
      { label: "We always fact-check every output", weight: 10 },
      { label: "We spot-check important sections", weight: 35 },
      { label: "We rely on AI's accuracy mostly", weight: 65 },
      { label: "No systematic verification process", weight: 90 }
    ]
  },
  {
    id: 3,
    question: "Has your firm provided AI-generated content to clients without disclosure?",
    category: "Disclosure",
    options: [
      { label: "We always disclose AI usage", weight: 5 },
      { label: "We disclose when asked", weight: 40 },
      { label: "We rarely mention AI", weight: 75 },
      { label: "Never disclosed", weight: 95 }
    ]
  },
  {
    id: 4,
    question: "What's your backup plan for AI hallucinations?",
    category: "Risk Management",
    options: [
      { label: "Comprehensive verification & audit trail", weight: 10 },
      { label: "Manual review by senior attorney", weight: 30 },
      { label: "Spot checks by staff", weight: 60 },
      { label: "No formal process", weight: 85 }
    ]
  },
  {
    id: 5,
    question: "Does your firm have E&O insurance that covers AI liability?",
    category: "Insurance",
    options: [
      { label: "Yes, with explicit AI coverage", weight: 15 },
      { label: "Standard coverage, unclear on AI", weight: 50 },
      { label: "No explicit AI coverage", weight: 75 },
      { label: "Don't know our coverage", weight: 90 }
    ]
  }
];

export default function AIMalpracticeCalculator() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (weight: number) => {
    const newAnswers = [...answers, weight];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateRiskScore = (): number => {
    if (answers.length === 0) return 0;
    return Math.round(answers.reduce((a, b) => a + b, 0) / answers.length);
  };

  const resetCalculator = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-dark via-brand-dark to-brand-purple/20">
        <Header />
        <ResultsDashboard 
          riskScore={calculateRiskScore()} 
          answers={answers}
          questions={questions}
          onReset={resetCalculator}
        />
        <Footer />
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];
  const riskScore = calculateRiskScore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark via-brand-dark to-brand-purple/20">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Malpractice Risk Calculator
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Find out your law firm's exposure to AI hallucinations in 2 minutes
          </p>
          <div className="flex gap-2 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-300 rounded-lg border border-red-500/30">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm">86% of law firms risk malpractice with unverified AI</span>
            </div>
          </div>
        </div>

        {/* Calculator Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-brand-dark border-brand-purple/30 shadow-2xl">
            <CardHeader className="border-b border-brand-purple/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="text-sm font-semibold text-brand-blue">Current Risk: {riskScore}%</span>
              </div>
              <Progress value={progress} className="bg-brand-purple/20" />
            </CardHeader>

            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold text-white mb-8">
                {question.question}
              </h2>

              <div className="space-y-3 mb-8">
                {question.options.map((option, idx) => (
                  <Button
                    key={idx}
                    onClick={() => handleAnswer(option.weight)}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-4 px-6 border-brand-purple/30 hover:border-brand-blue hover:bg-brand-blue/10 text-gray-200 hover:text-white transition-all"
                  >
                    <span className="text-lg">{option.label}</span>
                  </Button>
                ))}
              </div>

              <div className="bg-brand-purple/10 border border-brand-purple/30 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300">
                    {question.category}: Each answer reveals your firm's exposure in this critical area.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
