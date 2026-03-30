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
import LegalSkillCreator from "@/pages/legal-skill-creator";
import SaaSLandingPage from "@/pages/ai-consulting-and-development-saas-software";
import DesignPreview from "@/pages/design-preview";
import DesignPreviewA from "@/pages/design-preview-a";
import DesignPreviewB from "@/pages/design-preview-b";
import DesignPreviewC from "@/pages/design-preview-c";
import DesignPreviewD from "@/pages/design-preview-d";
import NotFound from "@/pages/not-found";
import LegalHub from "@/pages/legal/index";
import LegalServicePage from "@/pages/legal/service-page";
import LegalCityPage from "@/pages/legal/city-page";
import LegalPracticeAreaPage from "@/pages/legal/practice-area-page";
import ResourcePage from "@/pages/resources/resource-page";
import ResourcesHub from "@/pages/resources/index";
import SaasHub from "@/pages/saas/index";
import SaasWorkflowPage from "@/pages/saas/workflow-page";
import SaasSegmentPage from "@/pages/saas/segment-page";
import SaasCityPage from "@/pages/saas/city-page";
import SaasWorkflowsHub from "@/pages/saas/workflows-hub";
import SaasTeamsHub from "@/pages/saas/teams-hub";
import CompareHub from "@/pages/compare/index";
import ComparisonPage from "@/pages/compare/comparison-page";
import { legalCitySlug } from "@/data/legalCityPages";
import { legalPracticeAreaSlug } from "@/data/legalServicePages";
import { saasWorkflowSlug } from "@/data/saasWorkflowPages";
import { saasSegmentSlug } from "@/data/saasSegmentPages";
import { saasCitySlug } from "@/data/saasCityPages";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function LegalSlugRouter({ slug }: { slug: string }) {
  if (legalCitySlug.has(slug)) return <LegalCityPage />;
  if (legalPracticeAreaSlug.has(slug)) return <LegalPracticeAreaPage />;
  return <NotFound />;
}

function SaasSlugRouter({ slug }: { slug: string }) {
  if (saasWorkflowSlug.has(slug)) return <SaasWorkflowPage />;
  if (saasSegmentSlug.has(slug)) return <SaasSegmentPage />;
  if (saasCitySlug.has(slug)) return <SaasCityPage />;
  return <NotFound />;
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
      <Route path="/legal-skill-creator" component={LegalSkillCreator} />
      <Route path="/ai-consulting-and-development-saas-software" component={SaaSLandingPage} />
      <Route path="/design-preview" component={DesignPreview} />
      <Route path="/design-preview-a" component={DesignPreviewA} />
      <Route path="/design-preview-b" component={DesignPreviewB} />
      <Route path="/design-preview-c" component={DesignPreviewC} />
      <Route path="/brand-guide" component={DesignPreviewC} />
      <Route path="/design-preview-d" component={DesignPreviewD} />
      {/* Programmatic SEO - legal */}
      <Route path="/legal/:practiceArea/:service" component={LegalServicePage} />
      <Route path="/legal/:slug">
        {(params) => <LegalSlugRouter slug={params.slug} />}
      </Route>
      <Route path="/legal" component={LegalHub} />
      {/* Programmatic SEO - resources */}
      <Route path="/resources/:term" component={ResourcePage} />
      <Route path="/resources" component={ResourcesHub} />
      {/* Programmatic SEO - saas */}
      <Route path="/saas/workflows" component={SaasWorkflowsHub} />
      <Route path="/saas/ai-by-team" component={SaasTeamsHub} />
      <Route path="/saas/:slug">
        {(params) => <SaasSlugRouter slug={params.slug} />}
      </Route>
      <Route path="/saas" component={SaasHub} />
      {/* Programmatic SEO - compare */}
      <Route path="/compare/:comparison" component={ComparisonPage} />
      <Route path="/compare" component={CompareHub} />
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
