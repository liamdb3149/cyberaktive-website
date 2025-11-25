import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, AlertTriangle, CheckCircle, AlertCircle, RotateCcw } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import cyberaktiveLogo from "@assets/Cyberaktive Logos_1764046507351.png";
import aiLawLogo from "@assets/The AI Law Logos Landscape transparent_1764046507351.png";

interface ResultsDashboardProps {
  riskScore: number;
  answers: number[];
  questions: any[];
  onReset: () => void;
}

export default function ResultsDashboard({ riskScore, answers, questions, onReset }: ResultsDashboardProps) {
  const dashboardRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const getRiskLevel = (score: number) => {
    if (score < 25) return { level: "Low Risk", color: "text-green-400", bgColor: "bg-green-500/20", borderColor: "border-green-500/30" };
    if (score < 50) return { level: "Medium Risk", color: "text-yellow-400", bgColor: "bg-yellow-500/20", borderColor: "border-yellow-500/30" };
    if (score < 75) return { level: "High Risk", color: "text-orange-400", bgColor: "bg-orange-500/20", borderColor: "border-orange-500/30" };
    return { level: "Critical Risk", color: "text-red-400", bgColor: "bg-red-500/20", borderColor: "border-red-500/30" };
  };

  const getRiskRecommendations = (score: number) => {
    if (score < 25) {
      return [
        "Maintain your current verification protocols",
        "Document all AI usage and disclosures",
        "Review E&O insurance coverage annually"
      ];
    }
    if (score < 50) {
      return [
        "Implement mandatory fact-checking for all AI outputs",
        "Create disclosure policy for AI-assisted work",
        "Add AI liability rider to E&O insurance",
        "Train team on AI hallucination risks"
      ];
    }
    if (score < 75) {
      return [
        "URGENT: Establish comprehensive AI verification protocol",
        "Get written AI liability coverage from your insurer",
        "Implement AI usage audit trail system",
        "Conduct firm-wide AI risk assessment",
        "Consider limiting AI in high-risk practice areas"
      ];
    }
    return [
      "CRITICAL: Suspend AI in client-facing work until protocols established",
      "Engage E&O insurance broker immediately for coverage review",
      "Bring in outside counsel to audit current AI usage",
      "Implement mandatory partner review of all AI outputs",
      "Document all past AI-generated client work for review"
    ];
  };

  const categoryData = questions.map((q, idx) => ({
    name: q.category,
    score: answers[idx] || 0
  }));

  const riskLevel = getRiskLevel(riskScore);
  const recommendations = getRiskRecommendations(riskScore);

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const element = dashboardRef.current;
      if (!element) return;

      const canvas = await html2canvas(element, {
        backgroundColor: "#0f172a",
        scale: 2,
        logging: false
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgData = canvas.toDataURL("image/png");

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("AI_Malpractice_Risk_Assessment.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <div ref={dashboardRef} className="max-w-4xl mx-auto space-y-6">
        {/* Header with Logo and Risk Score */}
        <div className="text-center mb-8">
          <div className="flex justify-center gap-6 mb-6">
            <img src={cyberaktiveLogo} alt="Cyberaktive" className="h-12" />
            <img src={aiLawLogo} alt="The AI Law" className="h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your AI Malpractice Risk Assessment
          </h1>
        </div>

        {/* Risk Score Card */}
        <Card className={`border-2 ${riskLevel.borderColor} ${riskLevel.bgColor}`}>
          <CardContent className="pt-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">{riskScore}%</div>
              <div className={`text-3xl font-bold ${riskLevel.color} mb-4`}>
                {riskLevel.level}
              </div>
              <p className="text-gray-300 text-lg">
                {riskScore < 25 && "Your firm has strong AI governance practices. Continue monitoring and updating policies."}
                {riskScore >= 25 && riskScore < 50 && "Moderate exposure. Take action on key recommendations to reduce malpractice risk."}
                {riskScore >= 50 && riskScore < 75 && "Significant risk. Urgent action required to protect your firm from AI-related malpractice."}
                {riskScore >= 75 && "Critical risk. Immediate intervention needed to avoid potential malpractice liability."}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card className="bg-brand-dark border-brand-purple/30">
          <CardHeader>
            <CardTitle className="text-white">Risk by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip contentStyle={{ backgroundColor: "#1e1b4b", border: "1px solid #8b5cf6" }} />
                <Bar dataKey="score" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="bg-brand-dark border-brand-purple/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-brand-blue" />
              Priority Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recommendations.map((rec, idx) => (
                <li key={idx} className="flex gap-3 text-gray-300">
                  <div className="flex-shrink-0">
                    {rec.includes("CRITICAL") || rec.includes("URGENT") ? (
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                    )}
                  </div>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <Card className="bg-brand-dark border-brand-purple/30">
          <CardHeader>
            <CardTitle className="text-white">Key Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-purple/10 border border-brand-purple/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Highest Risk Area</h4>
                <p className="text-gray-300">
                  {categoryData.reduce((max, curr) => curr.score > max.score ? curr : max).name}
                </p>
              </div>
              <div className="bg-brand-blue/10 border border-brand-blue/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Next Steps</h4>
                <p className="text-gray-300">
                  {riskScore < 50 ? "Review current AI verification protocols" : "Schedule immediate risk assessment meeting"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-brand-purple/10 border border-brand-purple/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Reduce Your Risk?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get a personalized AI implementation roadmap designed to eliminate hallucination exposure while maximizing productivity gains.
          </p>
          <a 
            href="https://calendly.com/cyberaktive/consultation" 
            className="inline-block bg-brand-blue hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Book Risk Assessment Consultation
          </a>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <Button
          onClick={generatePDF}
          disabled={isGenerating}
          className="bg-brand-blue hover:bg-blue-600 text-white gap-2"
          size="lg"
        >
          <Download className="w-5 h-5" />
          {isGenerating ? "Generating..." : "Download Report"}
        </Button>
        <Button
          onClick={onReset}
          variant="outline"
          className="border-brand-purple text-gray-200 hover:bg-brand-purple/10 gap-2"
          size="lg"
        >
          <RotateCcw className="w-5 h-5" />
          Retake Assessment
        </Button>
      </div>
    </main>
  );
}
