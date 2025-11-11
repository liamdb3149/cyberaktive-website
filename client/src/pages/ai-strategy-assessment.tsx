import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Lock, Unlock, Download, Brain, Shield, Zap, FileText, AlertCircle } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { DecisionQuestion, DecisionMatrixAnswer, DecisionMatrixResult } from "@shared/schema";

const questions: DecisionQuestion[] = [
  {
    id: "org_type",
    step: 1,
    category: "Team Profile",
    question: "What type of legal organization are you?",
    type: "single",
    options: [
      { value: "law_firm", label: "Law Firm", llmWeight: 1, specialistWeight: 1 },
      { value: "in_house", label: "In-House Legal Team", llmWeight: 2, hybridWeight: 1 },
      { value: "other", label: "Other", llmWeight: 1 }
    ],
    required: true
  },
  {
    id: "team_size",
    step: 1,
    category: "Team Profile",
    question: "How many legal professionals are on your team?",
    type: "single",
    options: [
      { value: "1-5", label: "1-5 people", llmWeight: 2, hybridWeight: 1 },
      { value: "6-20", label: "6-20 people", llmWeight: 2, hybridWeight: 1 },
      { value: "21-50", label: "21-50 people", llmWeight: 1, specialistWeight: 1, hybridWeight: 1 },
      { value: "50+", label: "More than 50 people", specialistWeight: 2, hybridWeight: 1 }
    ],
    required: true
  },
  {
    id: "data_sensitivity",
    step: 2,
    category: "Privacy & Compliance",
    question: "How would you describe your data sensitivity requirements?",
    helpText: "Consider client confidentiality, regulatory requirements, and data handling policies",
    type: "single",
    options: [
      { value: "standard", label: "Standard business confidentiality", llmWeight: 2, hybridWeight: 1 },
      { value: "elevated", label: "Elevated (regulated industry, cross-border data)", hybridWeight: 2, specialistWeight: 1 },
      { value: "strict", label: "Strict (PHI/PII, government, high-stakes litigation)", specialistWeight: 2, hybridWeight: 1 }
    ],
    required: true
  },
  {
    id: "workflows",
    step: 2,
    category: "Workflow Landscape",
    question: "How many distinct legal workflows do you want to automate initially?",
    type: "single",
    options: [
      { value: "1-2", label: "1-2 workflows (focused pilot)", llmWeight: 2, specialistWeight: 1 },
      { value: "3-5", label: "3-5 workflows", llmWeight: 2, hybridWeight: 1 },
      { value: "6+", label: "6+ workflows (comprehensive automation)", llmWeight: 2, hybridWeight: 1 }
    ],
    required: true
  },
  {
    id: "systems",
    step: 3,
    category: "Integration Requirements",
    question: "Which systems do you currently use? (Select all that apply)",
    type: "multiple",
    options: [
      { value: "dms", label: "Document Management System (iManage, NetDocs, SharePoint)", llmWeight: 1 },
      { value: "crm", label: "CRM or Client Intake", llmWeight: 1 },
      { value: "ediscovery", label: "eDiscovery Platform", specialistWeight: 1 },
      { value: "clm", label: "Contract Lifecycle Management", specialistWeight: 1 },
      { value: "email", label: "Email/Outlook Integration", llmWeight: 1 },
      { value: "other", label: "Other Systems", hybridWeight: 1 }
    ],
    required: true
  },
  {
    id: "volume",
    step: 3,
    category: "Volume & Capacity",
    question: "How many documents/matters do you process monthly?",
    type: "single",
    options: [
      { value: "low", label: "Under 100 (low volume, high variability)", llmWeight: 2, hybridWeight: 1 },
      { value: "medium", label: "100-500 (moderate volume)", llmWeight: 1, hybridWeight: 2 },
      { value: "high", label: "500-2,000 (high volume)", llmWeight: 1, specialistWeight: 1, hybridWeight: 1 },
      { value: "very_high", label: "2,000+ (very high volume, predictable patterns)", specialistWeight: 2 }
    ],
    required: true
  },
  {
    id: "audit_needs",
    step: 4,
    category: "Governance",
    question: "What level of audit trail and governance do you need?",
    type: "single",
    options: [
      { value: "basic", label: "Basic logging (who did what, when)", llmWeight: 2, hybridWeight: 1 },
      { value: "detailed", label: "Detailed audit trails with approval workflows", hybridWeight: 2, specialistWeight: 1 },
      { value: "certified", label: "Certified outputs with defensibility guarantees", specialistWeight: 2 }
    ],
    required: true
  },
  {
    id: "budget",
    step: 4,
    category: "Budget & Timeline",
    question: "What is your available budget for the first year?",
    type: "single",
    options: [
      { value: "under_20k", label: "Under $20K (lean, DIY-friendly)", llmWeight: 2, hybridWeight: 1 },
      { value: "20k_50k", label: "$20K-$50K (professional setup)", llmWeight: 1, hybridWeight: 2 },
      { value: "50k_100k", label: "$50K-$100K (enterprise-ready)", hybridWeight: 1, specialistWeight: 1 },
      { value: "over_100k", label: "Over $100K (comprehensive platform)", specialistWeight: 2 }
    ],
    required: true
  },
  {
    id: "timeline",
    step: 5,
    category: "Implementation Speed",
    question: "How quickly do you need to see results?",
    type: "single",
    options: [
      { value: "immediate", label: "Immediate (1-2 weeks)", llmWeight: 2 },
      { value: "fast", label: "Fast (2-8 weeks)", llmWeight: 2, hybridWeight: 1 },
      { value: "moderate", label: "Moderate (2-3 months)", hybridWeight: 2, specialistWeight: 1 },
      { value: "patient", label: "Patient (3-6 months for comprehensive rollout)", specialistWeight: 2 }
    ],
    required: true
  },
  {
    id: "interface_preference",
    step: 5,
    category: "User Experience",
    question: "How do your attorneys prefer to work?",
    type: "single",
    options: [
      { value: "chat", label: "Chat where we already work (Slack, Teams, email)", llmWeight: 2, hybridWeight: 1 },
      { value: "hybrid_ui", label: "Mix of chat and specialized interfaces", hybridWeight: 2 },
      { value: "platform", label: "Purpose-built platform with training", specialistWeight: 2 }
    ],
    required: true
  },
  {
    id: "primary_use_cases",
    step: 6,
    category: "Use Cases",
    question: "What are your primary use cases? (Select top 3)",
    type: "multiple",
    options: [
      { value: "research", label: "Legal research & summarization", llmWeight: 2, hybridWeight: 1 },
      { value: "doc_review", label: "Document review & eDiscovery", specialistWeight: 2, hybridWeight: 1 },
      { value: "contract_qa", label: "Contract Q&A and analysis", llmWeight: 1, specialistWeight: 1, hybridWeight: 1 },
      { value: "drafting", label: "Document drafting from templates", llmWeight: 1, specialistWeight: 1 },
      { value: "intake", label: "Client intake automation", llmWeight: 2, hybridWeight: 1 },
      { value: "compliance", label: "Compliance monitoring and alerts", specialistWeight: 2 }
    ],
    required: true
  },
  {
    id: "it_capacity",
    step: 6,
    category: "Technical Capacity",
    question: "What is your internal IT and technical support capacity?",
    type: "single",
    options: [
      { value: "none", label: "No dedicated IT (need fully managed solution)", specialistWeight: 2 },
      { value: "limited", label: "Limited IT support (can handle basic setup)", llmWeight: 1, hybridWeight: 2 },
      { value: "moderate", label: "Moderate IT team (can integrate and maintain)", llmWeight: 2, hybridWeight: 1 },
      { value: "strong", label: "Strong IT team or access to contractors", llmWeight: 2 }
    ],
    required: true
  }
];

export default function AIStrategyAssessment() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<DecisionMatrixAnswer[]>([]);
  const [result, setResult] = useState<DecisionMatrixResult | null>(null);

  const totalSteps = Math.max(...questions.map(q => q.step));
  const currentQuestions = questions.filter(q => q.step === currentStep);
  const progress = (currentStep / totalSteps) * 100;

  // Set SEO metadata
  useEffect(() => {
    document.title = "AI Strategy Assessment: LLM-First vs Specialist Tools | Cyberaktive";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free AI strategy assessment for law firms. Get a personalized recommendation: LLM-First (ChatGPT/Claude), Specialist AI tools, or Hybrid approach. Privacy-first evaluation in under 5 minutes.');
    }

    return () => {
      document.title = "Cyberaktive AI - Legal AI Consulting & Automation";
    };
  }, []);

  // Listen for form submission from GoHighLevel iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Log all postMessage events for debugging
      console.log('[AI Assessment] postMessage received:', {
        origin: event.origin,
        dataType: Object.prototype.toString.call(event.data),
        data: event.data
      });
      
      // GoHighLevel sends data as an Array with form data in event.data[2] as JSON string
      if (Object.prototype.toString.call(event.data) === '[object Array]') {
        const inputJSON = event.data[2];
        
        // Check if this is a GoHighLevel form submission (contains typical form fields)
        if (inputJSON && typeof inputJSON === 'string') {
          try {
            // Try to parse the JSON data
            const parsedData = JSON.parse(inputJSON);
            
            // If it contains email or customer_id, it's a form submission
            if (parsedData.email || parsedData.customer_id || parsedData.full_name) {
              console.log('[AI Assessment] ✅ GoHighLevel form submission detected!', parsedData);
              setFormSubmitted(true);
              localStorage.setItem('ai-assessment-unlocked', 'true');
              
              // Auto-scroll to assessment after unlock
              setTimeout(() => {
                const assessmentElement = document.querySelector('[data-testid="section-assessment"]');
                if (assessmentElement) {
                  assessmentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 300);
            }
          } catch (e) {
            // Not valid JSON, ignore
            console.log('[AI Assessment] Could not parse JSON from postMessage');
          }
        }
      }
      
      // Also check for other possible submission formats (fallback)
      if (
        event.data?.type === 'form-submitted' || 
        event.data?.type === 'form_submitted' ||
        event.data?.formSubmitted === true ||
        event.data?.event === 'form-submitted'
      ) {
        console.log('[AI Assessment] ✅ Form submission detected (alternative format)!');
        setFormSubmitted(true);
        localStorage.setItem('ai-assessment-unlocked', 'true');
        
        // Auto-scroll to assessment after unlock
        setTimeout(() => {
          const assessmentElement = document.querySelector('[data-testid="section-assessment"]');
          if (assessmentElement) {
            assessmentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    };

    // Check if already unlocked from previous session
    const alreadySubmitted = localStorage.getItem('ai-assessment-unlocked');
    
    if (alreadySubmitted === 'true') {
      console.log('[AI Assessment] Already unlocked via localStorage');
      setFormSubmitted(true);
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleUnlock = () => {
    setFormSubmitted(true);
    localStorage.setItem('ai-assessment-unlocked', 'true');
  };

  const handleAnswer = (questionId: string, value: string | string[]) => {
    setAnswers(prev => {
      const existing = prev.findIndex(a => a.questionId === questionId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = { questionId, value };
        return updated;
      }
      return [...prev, { questionId, value }];
    });
  };

  const calculateResults = (): DecisionMatrixResult => {
    let llmScore = 0;
    let specialistScore = 0;
    let hybridScore = 0;

    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      if (!question || !question.options) return;

      const values = Array.isArray(answer.value) ? answer.value : [answer.value as string];
      
      values.forEach(val => {
        const option = question.options?.find(o => o.value === val);
        if (option) {
          llmScore += option.llmWeight || 0;
          specialistScore += option.specialistWeight || 0;
          hybridScore += option.hybridWeight || 0;
        }
      });
    });

    const total = llmScore + specialistScore + hybridScore;
    const confidence = Math.min(95, Math.round((total / (answers.length * 2)) * 100));

    let recommendation: "LLM-First" | "Specialist" | "Hybrid";
    if (hybridScore > llmScore && hybridScore > specialistScore) {
      recommendation = "Hybrid";
    } else if (llmScore > specialistScore) {
      recommendation = "LLM-First";
    } else {
      recommendation = "Specialist";
    }

    const rationale = generateRationale(recommendation, answers);
    const privacyChecklist = generatePrivacyChecklist(recommendation);
    const actionPlan = generateActionPlan(recommendation);
    const summary = generateSummary(recommendation);

    return {
      recommendation,
      scores: { llmFirst: llmScore, specialist: specialistScore, hybrid: hybridScore, confidence },
      rationale,
      privacyChecklist,
      actionPlan,
      summary
    };
  };

  const generateRationale = (rec: string, ans: DecisionMatrixAnswer[]): string[] => {
    const rationale: string[] = [];
    
    if (rec === "LLM-First") {
      rationale.push("Your team size and budget favor flexible, cost-effective solutions");
      rationale.push("Chat-based interfaces will accelerate adoption");
      rationale.push("Variable workflows benefit from adaptable AI assistants");
    } else if (rec === "Specialist") {
      rationale.push("High-volume, predictable workflows justify specialized tools");
      rationale.push("Compliance and audit requirements need certified outputs");
      rationale.push("Enterprise budget supports comprehensive platforms");
    } else {
      rationale.push("Start with LLM-First for quick wins and flexibility");
      rationale.push("Add specialist tools for high-stakes, regulated workflows");
      rationale.push("Best of both: speed + governance where it matters");
    }
    
    return rationale;
  };

  const generatePrivacyChecklist = (rec: string): string[] => {
    return [
      "Implement data masking for sensitive client information",
      "Set up human review checkpoints for all AI outputs",
      "Configure audit logs tracking all AI interactions",
      "Establish data residency controls for cross-border compliance",
      "Create approval workflows for client-facing documents",
      "Enable sandboxed execution environments"
    ];
  };

  const generateActionPlan = (rec: string): string[] => {
    if (rec === "LLM-First") {
      return [
        "Week 1-2: Select one high-value workflow (contract review or research)",
        "Week 2-3: Set up ChatGPT Teams or Claude with custom instructions",
        "Week 3-4: Train 3-5 champion users on prompt engineering",
        "Week 4-6: Track time savings and quality metrics",
        "Week 6-8: Roll out to broader team with lessons learned"
      ];
    } else if (rec === "Specialist") {
      return [
        "Week 1-4: Vendor evaluation for primary use case",
        "Week 4-6: Pilot with 2-3 vendors on real matters",
        "Week 6-8: Negotiate contracts and finalize selection",
        "Week 8-12: Implementation and training rollout",
        "Month 4-6: Measure ROI and expand to additional workflows"
      ];
    } else {
      return [
        "Week 1-2: Launch LLM-First pilot for research and drafting",
        "Week 2-4: Evaluate specialist tools for compliance/eDiscovery",
        "Week 4-6: Run parallel pilots to compare approaches",
        "Week 6-8: Define governance: when to use each tool",
        "Week 8-12: Scale proven workflows, retire low-value experiments"
      ];
    }
  };

  const generateSummary = (rec: string): string => {
    if (rec === "LLM-First") {
      return "Start with ChatGPT Teams or Claude for flexible, rapid deployment across multiple workflows. Add specialist tools later as specific needs emerge.";
    } else if (rec === "Specialist") {
      return "Invest in purpose-built legal AI platforms with proven ROI for your high-volume, mission-critical workflows. Worth the premium for compliance and scale.";
    } else {
      return "Use LLM-First tools (ChatGPT/Claude) for exploratory work and quick wins, while deploying specialist platforms for regulated, high-stakes workflows.";
    }
  };

  const canProceed = () => {
    const currentQuestionIds = currentQuestions.map(q => q.id);
    return currentQuestionIds.every(qId => {
      const answer = answers.find(a => a.questionId === qId);
      if (!answer) return false;
      if (Array.isArray(answer.value)) return answer.value.length > 0;
      return answer.value !== "";
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const results = calculateResults();
      setResult(results);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setAnswers([]);
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadPDF = () => {
    if (!result) {
      alert('No results available to download.');
      return;
    }
    
    try {
      // Create a printable version of the results
      const printWindow = window.open('', '_blank');
      
      if (!printWindow) {
        // Popup blocked - alert user
        alert('Please allow popups for this site to download the PDF report. You can print this page directly using your browser\'s print function (Ctrl+P or Cmd+P).');
        return;
      }
      
      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>AI Strategy Assessment Results - ${result.recommendation}</title>
            <meta charset="UTF-8">
            <style>
              @media print {
                body { margin: 0; padding: 20px; }
                .no-print { display: none; }
              }
              body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                line-height: 1.6;
                color: #1e293b;
                max-width: 800px;
                margin: 0 auto;
                padding: 40px 20px;
              }
              h1 { 
                color: #0f172a; 
                font-size: 32px; 
                margin-bottom: 8px;
                border-bottom: 3px solid #2563eb;
                padding-bottom: 16px;
              }
              h2 { 
                color: #2563eb; 
                font-size: 24px; 
                margin-top: 32px;
                margin-bottom: 16px;
              }
              h3 { 
                color: #475569; 
                font-size: 18px; 
                margin-top: 24px;
                margin-bottom: 12px;
              }
              .header {
                text-align: center;
                margin-bottom: 40px;
                padding-bottom: 24px;
                border-bottom: 2px solid #e2e8f0;
              }
              .logo {
                font-size: 24px;
                font-weight: bold;
                color: #2563eb;
                margin-bottom: 8px;
              }
              .date {
                color: #64748b;
                font-size: 14px;
              }
              .recommendation {
                background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
                padding: 24px;
                border-radius: 8px;
                margin-bottom: 32px;
                border-left: 4px solid #2563eb;
              }
              .confidence {
                color: #059669;
                font-weight: 600;
                font-size: 18px;
              }
              .summary {
                font-size: 16px;
                color: #475569;
                margin-top: 12px;
              }
              ul, ol {
                margin: 16px 0;
                padding-left: 24px;
              }
              li {
                margin-bottom: 12px;
                color: #334155;
              }
              .section {
                margin-bottom: 32px;
                page-break-inside: avoid;
              }
              .footer {
                margin-top: 48px;
                padding-top: 24px;
                border-top: 2px solid #e2e8f0;
                text-align: center;
                color: #64748b;
                font-size: 14px;
              }
              @media print {
                body { padding: 0; }
                .no-print { display: none !important; }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="logo">Cyberaktive AI</div>
              <div class="date">Assessment Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            </div>

            <h1>AI Strategy Assessment Results</h1>

            <div class="recommendation">
              <h2 style="margin-top: 0;">Recommended Strategy: ${result.recommendation}</h2>
              <div class="confidence">Confidence: ${result.scores.confidence}%</div>
              <div class="summary">${result.summary}</div>
            </div>

            <div class="section">
              <h2>Why This Recommendation</h2>
              <ul>
                ${result.rationale.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>

            <div class="section">
              <h2>Privacy & Governance Checklist</h2>
              <ul>
                ${result.privacyChecklist.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>

            <div class="section">
              <h2>Your 30-Day Action Plan</h2>
              <ol>
                ${result.actionPlan.map(item => `<li>${item}</li>`).join('')}
              </ol>
            </div>

            <div class="footer no-print">
              <p><strong>Ready to get started?</strong></p>
              <p>Visit cyberaktiveai.com to book your free consultation</p>
              <p style="margin-top: 16px; font-size: 12px;">© ${new Date().getFullYear()} Cyberaktive AI. All rights reserved.</p>
            </div>

            <script>
              // Auto-print when page loads
              window.onload = function() {
                setTimeout(function() {
                  window.print();
                }, 250);
              };
              
              // Close window after print dialog is closed
              window.onafterprint = function() {
                setTimeout(function() {
                  window.close();
                }, 100);
              };
            </script>
          </body>
        </html>
      `;
      
      printWindow.document.write(htmlContent);
      printWindow.document.close();
    } catch (error) {
      console.error('PDF download error:', error);
      alert('Unable to open PDF window. Please check your popup blocker settings.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Always Visible */}
        <section className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Free Privacy-First Assessment
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight" data-testid="heading-main">
              <span className="text-blue-600 dark:text-blue-400">ChatGPT or Harvey?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed" data-testid="text-subheading">
              Get a personalized recommendation in under 5 minutes. Should you use ChatGPT/Claude (LLM-First), specialized legal AI platforms e.g. Harvey, Legora (Specialist), or a strategic mix of both (Hybrid)?
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <Brain className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">LLM-First</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    ChatGPT, Claude, Gemini with custom workflows
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 dark:border-purple-800">
                <CardContent className="pt-6">
                  <Shield className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Specialist</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Purpose-built legal AI platforms (Harvey, CoCounsel, etc.)
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 dark:border-green-800">
                <CardContent className="pt-6">
                  <Zap className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Hybrid</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Strategic mix: LLM for flexibility + Specialist for compliance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Assessment Tool - Blurred Until Unlocked */}
        <section className="container mx-auto px-4 pb-16 relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Full Assessment Tool - Always Rendered */}
              <div className={!formSubmitted ? "pointer-events-none select-none" : ""} data-testid="section-assessment">
                {result ? (
              /* Results View */
              <div className="space-y-8" data-testid="section-results">
                <Card className="border-2 border-green-300 dark:border-green-700">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h2 className="text-3xl font-bold mb-2">Your Recommendation: {result.recommendation}</h2>
                      <p className="text-lg text-slate-600 dark:text-slate-400">{result.summary}</p>
                      <div className="mt-4">
                        <span className="text-sm text-slate-500">Confidence: {result.scores.confidence}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-600" />
                        Why This Recommendation
                      </h3>
                      <ul className="space-y-2">
                        {result.rationale.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-purple-600" />
                        Privacy & Governance Checklist
                      </h3>
                      <ul className="space-y-2">
                        {result.privacyChecklist.slice(0, 4).map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-green-600" />
                      Your 30-Day Action Plan
                    </h3>
                    <ol className="space-y-3">
                      {result.actionPlan.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">
                            {i + 1}
                          </span>
                          <span className="text-sm pt-0.5">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>

                <div className="flex gap-4 justify-center flex-wrap">
                  <Button onClick={handleReset} variant="outline" data-testid="button-start-over">
                    <Zap className="w-4 h-4 mr-2" />
                    Start Over
                  </Button>
                  <Button onClick={handleDownloadPDF} data-testid="button-download-results">
                    <Download className="w-4 h-4 mr-2" />
                    Download Full Report (PDF)
                  </Button>
                  <Button onClick={() => window.location.href = '/#calendar'} data-testid="button-book-consultation">
                    Book Free Consultation
                  </Button>
                </div>
              </div>
            ) : (
              /* Assessment Questions */
              <Card className="border-2 border-slate-200 dark:border-slate-700" data-testid="section-assessment-active">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-600">Step {currentStep} of {totalSteps}</span>
                      <span className="text-sm text-slate-500">{currentQuestions[0]?.category}</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  <div className="space-y-8">
                    {currentQuestions.map(question => (
                      <div key={question.id}>
                        <h2 className="text-2xl font-bold mb-2">{question.question}</h2>
                        {question.helpText && (
                          <p className="text-sm text-slate-500 mb-4">{question.helpText}</p>
                        )}

                        {question.type === "single" && question.options && (
                          <RadioGroup
                            value={answers.find(a => a.questionId === question.id)?.value as string || ""}
                            onValueChange={(value) => handleAnswer(question.id, value)}
                          >
                            <div className="space-y-3">
                              {question.options.map(option => (
                                <div key={option.value} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                  <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                                  <Label htmlFor={`${question.id}-${option.value}`} className="flex-1 cursor-pointer">
                                    {option.label}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </RadioGroup>
                        )}

                        {question.type === "multiple" && question.options && (
                          <div className="space-y-3">
                            {question.options.map(option => {
                              const currentAnswers = (answers.find(a => a.questionId === question.id)?.value as string[]) || [];
                              return (
                                <div key={option.value} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                  <Checkbox
                                    id={`${question.id}-${option.value}`}
                                    checked={currentAnswers.includes(option.value)}
                                    onCheckedChange={(checked) => {
                                      const newAnswers = checked
                                        ? [...currentAnswers, option.value]
                                        : currentAnswers.filter(v => v !== option.value);
                                      handleAnswer(question.id, newAnswers);
                                    }}
                                  />
                                  <Label htmlFor={`${question.id}-${option.value}`} className="flex-1 cursor-pointer">
                                    {option.label}
                                  </Label>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={handleBack}
                      disabled={currentStep === 1}
                      data-testid="button-back"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={handleNext}
                      disabled={!canProceed()}
                      data-testid="button-next"
                    >
                      {currentStep === totalSteps ? "See Results" : "Next"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
              </div>
              
              {/* Form Overlay with Backdrop Blur - Shows When Locked */}
              {!formSubmitted && (
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md bg-gradient-to-br from-blue-50/90 to-indigo-50/90 dark:from-slate-900/90 dark:to-blue-950/90" data-testid="section-form-overlay">
                  <div className="max-w-lg w-full mx-4">
                    <Card className="border-2 border-blue-300 dark:border-blue-700 shadow-2xl">
                      <CardContent className="p-8">
                        <div className="text-center mb-6">
                          <Lock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                          <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                            Unlock Your Free AI Strategy Assessment
                          </h2>
                          <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Get instant access to the complete assessment tool plus a personalized recommendation report with privacy checklist and 30-day action plan.
                          </p>
                        </div>

                        <div className="min-h-[450px]">
                          <iframe
                            src="https://api.leadconnectorhq.com/widget/form/Cj9UhspkV2U5S7OBr13E"
                            style={{ width: '100%', height: '500px', border: 'none', borderRadius: '3px' }}
                            id="assessment-form-Cj9UhspkV2U5S7OBr13E"
                            data-layout="{'id':'INLINE'}"
                            data-form-name="Cyberaktive AI Lead Magnet"
                            data-height="500"
                            data-form-id="Cj9UhspkV2U5S7OBr13E"
                            title="Cyberaktive AI Lead Magnet"
                            data-testid="iframe-assessment-form"
                          />
                        </div>

                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
                          Submit the form above to unlock instant access to your personalized AI strategy assessment.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script src="https://link.msgsndr.com/js/form_embed.js" />
    </div>
  );
}
