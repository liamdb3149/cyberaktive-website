import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, AlertTriangle, CheckCircle, AlertCircle, RotateCcw } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import aiLawLogo from "@assets/The AI Law Logos Landscape (A4)_1764047380689.jpg";

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
    if (score < 25) return { level: "Low Risk", color: "text-green-400", bgColor: "bg-green-500/20", borderColor: "border-green-500/50" };
    if (score < 50) return { level: "Medium Risk", color: "text-yellow-300", bgColor: "bg-yellow-500/20", borderColor: "border-yellow-500/50" };
    if (score < 75) return { level: "High Risk", color: "text-orange-300", bgColor: "bg-orange-500/20", borderColor: "border-orange-500/50" };
    return { level: "Critical Risk", color: "text-red-300", bgColor: "bg-red-500/20", borderColor: "border-red-500/50" };
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
        backgroundColor: "#ffffff",
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
      <div ref={dashboardRef} className="max-w-4xl mx-auto space-y-6 bg-white p-8">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-end mb-6">
            <img src={aiLawLogo} alt="The AI Law" className="h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your AI Malpractice Risk Assessment
          </h1>
        </div>

        {/* Risk Score Card */}
        <Card className={`border-2 ${riskLevel.borderColor} ${riskLevel.bgColor}`}>
          <CardContent className="pt-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-2">{riskScore}%</div>
              <div className={`text-3xl font-bold ${riskLevel.color} mb-4`}>
                {riskLevel.level}
              </div>
              <p className="text-gray-800 text-lg font-medium">
                {riskScore < 25 && "Your firm has strong AI governance practices. Continue monitoring and updating policies."}
                {riskScore >= 25 && riskScore < 50 && "Moderate exposure. Take action on key recommendations to reduce malpractice risk."}
                {riskScore >= 50 && riskScore < 75 && "Significant risk. Urgent action required to protect your firm from AI-related malpractice."}
                {riskScore >= 75 && "Critical risk. Immediate intervention needed to avoid potential malpractice liability."}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card className="bg-white border border-gray-300">
          <CardHeader>
            <CardTitle className="text-gray-900">Risk by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }} />
                <Bar dataKey="score" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="bg-white border border-gray-300">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              Priority Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recommendations.map((rec, idx) => (
                <li key={idx} className="flex gap-3 text-gray-800 font-medium">
                  <div className="flex-shrink-0">
                    {rec.includes("CRITICAL") || rec.includes("URGENT") ? (
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    )}
                  </div>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <Card className="bg-white border border-gray-300">
          <CardHeader>
            <CardTitle className="text-gray-900">Key Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-100 border border-purple-400 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Highest Risk Area</h4>
                <p className="text-gray-800 font-medium">
                  {categoryData.reduce((max, curr) => curr.score > max.score ? curr : max).name}
                </p>
              </div>
              <div className="bg-blue-100 border border-blue-400 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Next Steps</h4>
                <p className="text-gray-800 font-medium">
                  {riskScore < 50 ? "Review current AI verification protocols" : "Schedule immediate risk assessment meeting"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section with Beehiiv Form */}
      <div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg border border-gray-300 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Stay Updated on AI Risk Management</h3>
        <p className="text-gray-800 text-center mb-6 font-medium">
          Subscribe to get the latest insights on protecting your firm from AI-related malpractice
        </p>
        
        <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
        <iframe 
          src="https://subscribe-forms.beehiiv.com/6f693698-33dd-44d1-8ff9-47fe8a00b1d2" 
          className="beehiiv-embed w-full" 
          data-testid="beehiiv-embed" 
          frameBorder="0" 
          scrolling="no" 
          style={{ minHeight: "400px", borderRadius: "8px", backgroundColor: "transparent" }}>
        </iframe>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8 max-w-4xl mx-auto">
        <Button
          onClick={generatePDF}
          disabled={isGenerating}
          className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
          size="lg"
        >
          <Download className="w-5 h-5" />
          {isGenerating ? "Generating..." : "Download Report"}
        </Button>
        <Button
          onClick={onReset}
          variant="outline"
          className="border-gray-400 text-gray-800 hover:bg-gray-100 gap-2"
          size="lg"
        >
          <RotateCcw className="w-5 h-5" />
          Retake Assessment
        </Button>
      </div>
    </main>
  );
}
