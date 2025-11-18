import fullLogo from "@/assets/cyberaktive-full-logo.jpg";
import { Home, Calculator, FileText, Brain, Map, Sparkles } from "lucide-react";
import { useLocation, Link } from "wouter";

export default function Footer() {
  const [location, navigate] = useLocation();

  const handleHomeClick = () => {
    if (location === '/') {
      // Already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page
      navigate('/');
      // Small delay to ensure page loads, then scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };


  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Footer CTA */}
          <div className="text-center mb-12 py-8 px-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl border border-primary/20">
            <p className="text-lg font-bold text-foreground mb-2" data-testid="text-footer-cta">
              Every day without automation costs you 2-3 billable hours.
            </p>
            <p className="text-muted-foreground text-sm">
              Calculate your losses with our ROI calculators above.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <img 
                  src={fullLogo} 
                  alt="Cyberaktive - AI Workflow Automation" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-muted-foreground mb-2">AI Workflow and Process Automation for law firms throughout the U.S., Canada, the U.K., Europe, Australia, Singapore, Hong Kong, and New Zealand.</p>
              <a 
                href="mailto:team@cyberaktive.com" 
                className="text-primary hover:text-primary/80 transition-colors relative z-10 font-semibold"
                data-testid="link-email-footer"
              >
                team@cyberaktive.com
              </a>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Free Tools</h3>
              <div className="space-y-3 flex flex-col items-center md:items-start">
                <Link 
                  href="/ai-strategy-assessment"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors" 
                  data-testid="link-footer-ai-assessment"
                >
                  <Brain className="w-4 h-4 mr-2" />
                  <span>AI Strategy Assessment</span>
                </Link>
                <Link 
                  href="/diy-legal-copilot-roadmap"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors" 
                  data-testid="link-footer-roadmap"
                >
                  <Map className="w-4 h-4 mr-2" />
                  <span>DIY Legal Copilot Roadmap</span>
                </Link>
                <Link 
                  href="/legal-ai-prompt-library"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors" 
                  data-testid="link-footer-prompt-library"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span>Legal AI Prompt Library</span>
                </Link>
                <Link 
                  href="/ai-pilot-scorecard-law-firm"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors" 
                  data-testid="link-footer-scorecard"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span>AI Pilot Scorecard</span>
                </Link>
                <a 
                  href="/#roi-calculators"
                  onClick={(e) => {
                    if (location === '/') {
                      e.preventDefault();
                      document.getElementById('roi-calculators')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors" 
                  data-testid="link-footer-roi-calculators"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  <span>ROI Calculators</span>
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
              <div className="space-y-3 mb-6 flex flex-col items-center md:items-end">
                <button 
                  type="button"
                  onClick={handleHomeClick}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors cursor-pointer" 
                  data-testid="link-footer-home"
                >
                  <Home className="w-4 h-4 mr-2" />
                  <span>Home</span>
                </button>
              </div>
              <p className="text-sm text-muted-foreground">
                &copy; 2025 Cyberaktive. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
