import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import PropertyManagement from "@/pages/property-management";
import ContractReviewCalculator from "@/pages/contract-review-calculator";
import AIPilotScorecard from "@/pages/ai-pilot-scorecard";
import DIYLegalCopilotRoadmap from "@/pages/diy-legal-copilot-roadmap";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/property-management" component={PropertyManagement} />
      <Route path="/calc-Contract-Review-Automation" component={ContractReviewCalculator} />
      <Route path="/ai-pilot-scorecard-law-firm" component={AIPilotScorecard} />
      <Route path="/diy-legal-copilot-roadmap" component={DIYLegalCopilotRoadmap} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
