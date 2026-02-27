import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/landing";
import Home from "@/pages/home";
import PropertyManagement from "@/pages/property-management";
import ContractReviewCalculator from "@/pages/contract-review-calculator";
import AIPilotScorecard from "@/pages/ai-pilot-scorecard";
import DIYLegalCopilotRoadmap from "@/pages/diy-legal-copilot-roadmap";
import AIStrategyAssessment from "@/pages/ai-strategy-assessment";
import LegalAIPromptLibrary from "@/pages/legal-ai-prompt-library";
import AIMalpracticeCalculator from "@/pages/ai-malpractice-calculator";
import LegalAIWorkshops from "@/pages/legal-ai-workshops";
import SaaSLandingPage from "@/pages/ai-consulting-and-development-saas-software";
import DesignPreview from "@/pages/design-preview";
import DesignPreviewA from "@/pages/design-preview-a";
import DesignPreviewB from "@/pages/design-preview-b";
import DesignPreviewC from "@/pages/design-preview-c";
import DesignPreviewD from "@/pages/design-preview-d";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/ai-consulting-development-legal" component={Home} />
      <Route path="/property-management" component={PropertyManagement} />
      <Route path="/calc-Contract-Review-Automation" component={ContractReviewCalculator} />
      <Route path="/ai-pilot-scorecard-law-firm" component={AIPilotScorecard} />
      <Route path="/diy-legal-copilot-roadmap" component={DIYLegalCopilotRoadmap} />
      <Route path="/ai-strategy-assessment" component={AIStrategyAssessment} />
      <Route path="/legal-ai-prompt-library" component={LegalAIPromptLibrary} />
      <Route path="/ai-malpractice-risk-calculator" component={AIMalpracticeCalculator} />
      <Route path="/legal-ai-workshops" component={LegalAIWorkshops} />
      <Route path="/ai-consulting-and-development-saas-software" component={SaaSLandingPage} />
      <Route path="/design-preview" component={DesignPreview} />
      <Route path="/design-preview-a" component={DesignPreviewA} />
      <Route path="/design-preview-b" component={DesignPreviewB} />
      <Route path="/design-preview-c" component={DesignPreviewC} />
      <Route path="/design-preview-d" component={DesignPreviewD} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
