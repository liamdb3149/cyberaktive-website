import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Check,
  Download,
  FileText,
  FolderOpen,
  BookOpen,
  Brain,
  Shield,
  RefreshCw,
  Layers,
  Sparkles,
  X,
} from "lucide-react";

export default function LegalSkillCreator() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const { toast } = useToast();

  const handleCloseForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    const originalTitle = document.title;
    const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || null;
    const originalOgTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || null;
    const originalOgDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || null;

    document.title = "Legal Skill Creator for Claude Cowork | Free Download";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Download the Legal Skill Creator - a Claude Cowork skill that builds production-quality AI tools for law firms. 6 legal templates, compliance guardrails, self-improving skills. Free for legal professionals.'
    );

    const ogTags = [
      { property: 'og:title', content: 'Legal Skill Creator for Claude Cowork | Free Download' },
      { property: 'og:description', content: 'A Claude Cowork skill that builds other skills - specifically for law firms. 6 templates, legal compliance guardrails, and self-improving output.' },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    const unlocked = localStorage.getItem("skillCreatorUnlocked");
    const urlParams = new URLSearchParams(window.location.search);
    const directAccess = urlParams.get('direct') === 'true';

    if (unlocked === "true" || directAccess) {
      setIsUnlocked(true);
      setShowForm(false);
      if (directAccess) {
        localStorage.setItem("skillCreatorUnlocked", "true");
      }
    }

    return () => {
      document.title = originalTitle;
      const descTag = document.querySelector('meta[name="description"]');
      if (descTag) {
        if (originalDescription !== null) descTag.setAttribute('content', originalDescription);
        else descTag.remove();
      }
      const ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (ogTitleTag) {
        if (originalOgTitle !== null) ogTitleTag.setAttribute('content', originalOgTitle);
        else ogTitleTag.remove();
      }
      const ogDescTag = document.querySelector('meta[property="og:description"]');
      if (ogDescTag) {
        if (originalOgDescription !== null) ogDescTag.setAttribute('content', originalOgDescription);
        else ogDescTag.remove();
      }
    };
  }, []);

  // Listen for GHL form submission
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://api.leadconnectorhq.com") return;

      if (Array.isArray(event.data) && event.data[0] === "set-sticky-contacts" && event.data[1] === "_ud") {
        handleFormSubmit();
        return;
      }

      if (typeof event.data === 'object' && event.data !== null) {
        if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmitted") {
          handleFormSubmit();
          return;
        }
      }

      if (Array.isArray(event.data) && event.data.length > 2) {
        try {
          const messageData = JSON.parse(event.data[2]);
          if (messageData.type === "hsFormCallback" && messageData.eventName === "onFormSubmitted") {
            handleFormSubmit();
            return;
          }
        } catch (e) {}
      }

      if (typeof event.data === 'string') {
        if (event.data.includes('submitted') || event.data.includes('onFormSubmitted')) {
          handleFormSubmit();
          return;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const handleFormSubmit = () => {
    localStorage.setItem("skillCreatorUnlocked", "true");

    toast({
      title: "Success!",
      description: "Your download is ready below.",
      duration: 3000,
    });

    setTimeout(() => {
      setShowForm(false);
      setIsUnlocked(true);

      setTimeout(() => {
        document.getElementById("download-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }, 1500);
  };

  const features = [
    {
      icon: Brain,
      title: "Interviews You, Not the Other Way Around",
      description: "Describe your task in plain English. The skill asks the right follow-up questions to understand your inputs, outputs, edge cases, and rules.",
    },
    {
      icon: Layers,
      title: "Six Legal Templates Built In",
      description: "Document drafting, deadline tracking, case analysis, client communications, data processing, and general workflows. The creator picks the right one automatically.",
    },
    {
      icon: Shield,
      title: "Legal Compliance Guardrails",
      description: "Every skill cites sources, flags uncertainty, never presents output as legal research, preserves original document language, and includes attorney review disclaimers.",
    },
    {
      icon: RefreshCw,
      title: "Skills That Improve Themselves",
      description: "Every skill includes a learnings file that captures what works. The more your team uses a skill, the better it gets.",
    },
    {
      icon: FileText,
      title: "200-Line Rule Enforced",
      description: "Follows Anthropic's recommended architecture. Under 200 lines, progressive disclosure, three-tier loading. No more inconsistent output from bloated instruction files.",
    },
    {
      icon: FolderOpen,
      title: "8-Point Self-Review",
      description: "Before delivering any skill, the creator runs a structural checklist against its own output. The tool that builds your tools has its own quality control.",
    },
  ];

  const templates = [
    { name: "Document Drafting", examples: "Demand letters, motions, notices, correspondence" },
    { name: "Deadline Tracking", examples: "Lien deadlines, filing dates, statutes of limitation" },
    { name: "Case Analysis", examples: "Contract review, discovery review, compliance audits" },
    { name: "Client Communications", examples: "Status updates, engagement letters, case summaries" },
    { name: "Data Processing", examples: "Bank statements, payment applications, invoices" },
    { name: "General Workflow", examples: "Any firm-specific process that doesn't fit the above" },
  ];

  const downloadFiles = [
    { name: "SKILL.md", description: "The main skill file - the brain of the Legal Skill Creator" },
    { name: "Skill Architecture Guide", description: "200-line rule, progressive disclosure, three-tier loading" },
    { name: "Six Legal Templates", description: "Pre-built templates for common legal workflow types" },
    { name: "Quality Review Checklist", description: "Sub-agent reviewer criteria for legal-specific quality checks" },
    { name: "Extraction Accuracy Rules", description: "Force blank answers, penalize wrong over blank, source labeling" },
    { name: "Skill Anatomy Cheat Sheet", description: "One-page visual reference for well-built skill structure" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Free for Legal Professionals
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
              The Legal Skill Creator
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A Claude Cowork skill that builds other skills - specifically designed for law firms. Describe any repetitive task in plain English and walk away with a production-quality AI tool in 15 minutes.
            </p>

            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-primary/10">
              <p className="text-lg text-foreground mb-6">
                Most attorneys get inconsistent AI output because they're missing structure. The Legal Skill Creator enforces Anthropic's recommended architecture - the 200-line rule, progressive disclosure, legal compliance guardrails - so every skill your firm builds delivers reliable, high-quality results from day one.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  "Works for any practice area and jurisdiction",
                  "Zero technical ability required",
                  "Includes 6 legal workflow templates",
                  "Skills improve themselves over time",
                  "Built-in sub-agent quality reviewer",
                  "8-point self-review before delivery",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-foreground font-semibold mt-6">
                Enter your details below to download the complete skill package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Overlay */}
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-40 transition-opacity duration-300"
            onClick={handleCloseForm}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 w-[90%] max-w-2xl transition-all duration-300">
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close form"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Download the Legal Skill Creator
              </h2>
              <p className="text-muted-foreground text-lg">
                Get the complete skill package. Free, no credit card required.
              </p>
            </div>

            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Cj9UhspkV2U5S7OBr13E?tag=Skill%20Creator%20V1"
              style={{
                width: "100%",
                height: "400px",
                border: "none",
                borderRadius: "8px",
              }}
              id="inline-form-skill-creator"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Legal Skill Creator V1"
              data-height="400"
              data-layout-iframe-id="inline-form-skill-creator"
              data-form-id="Cj9UhspkV2U5S7OBr13E"
              title="Legal Skill Creator V1"
            />
          </div>
        </>
      )}

      {/* Unlock CTA - Shows when form is closed but content still locked */}
      {!showForm && !isUnlocked && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md text-center relative">
            <button
              onClick={() => window.location.href = '/'}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold mb-4">Download Locked</h3>
            <p className="text-muted-foreground mb-6">
              Submit the form to download the Legal Skill Creator.
            </p>
            <Button onClick={() => setShowForm(true)} size="lg" className="w-full">
              Submit Form to Download
            </Button>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              What Makes This Different
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12">
              Not just another generic skill builder. Purpose-built for legal work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Six Legal Templates Included
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12">
              The creator selects the right template automatically based on your task description.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {templates.map((template, idx) => (
                <div
                  key={idx}
                  className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-2">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        className={`relative py-16 transition-all duration-300 ${
          !isUnlocked ? "filter blur-sm pointer-events-none" : ""
        }`}
        id="download-section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Your Download Package
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-8">
              Everything you need to start building skills for your firm.
            </p>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-8">
              <div className="space-y-4">
                {downloadFiles.map((file, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{file.name}</p>
                      <p className="text-sm text-muted-foreground">{file.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://github.com/liamdb3149/legal-skill-creator-v2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2 text-lg px-8 py-6">
                    <Download className="w-5 h-5" />
                    Download from GitHub
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Includes V1 (individual skills) and V2 (workflow orchestration).
                </p>
              </div>
            </div>

            {/* Quick Start */}
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Start Guide</h3>
              <ol className="space-y-3">
                {[
                  "Download the skill folder from GitHub",
                  "Copy it into your Claude Cowork skills directory",
                  "Open Claude Cowork and type /legal-skill-creator",
                  "Answer the one-time firm setup questions (practice area, jurisdiction, standards)",
                  "Describe any repetitive task and let it build your first skill",
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-foreground pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want Help Building Skills for Your Firm?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I run hands-on workshops where your legal team learns to build custom AI tools - skills, workflows, and infrastructure that actually work. Book a time to discuss.
            </p>
            <a
              href="https://api.leadconnectorhq.com/widget/bookings/introductory-call-legal-team-ai-transformation-partners"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Book a Strategy Call
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
