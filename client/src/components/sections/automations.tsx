import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Settings, CheckCircle } from "lucide-react";

export default function Automations() {
  const revenueAutomations = [
    "AI lead qualification and hot-lead routing",
    "Automated proposal generation for faster deal closure",
    "24/7 SMS/WhatsApp & website booking system",
    "Social media DM bot for instant responses",
    "AI receptionist to capture every phone opportunity"
  ];

  const operationsAutomations = [
    "Automated tenant screening and onboarding workflows",
    "24/7 maintenance request routing and tracking",
    "Rent collection and delinquency management systems",
    "Lease renewal automation with personalized outreach",
    "Vendor coordination and payment processing",
    "Compliance monitoring and documentation"
  ];

  return (
    <section id="automations" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Our Workflow Automation Categories
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions that transform every aspect of your property management operations
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Revenue-Generating Automations */}
          <Card className="p-8 shadow-lg" data-testid="card-revenue-automations">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <DollarSign className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-accent" data-testid="text-revenue-title">
                  Revenue-Generating Automations
                </h3>
              </div>
              <ul className="space-y-4">
                {revenueAutomations.map((automation, index) => (
                  <li key={index} className="flex items-start" data-testid={`item-revenue-${index}`}>
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>{automation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Operations Efficiency Automations */}
          <Card className="p-8 shadow-lg" data-testid="card-operations-automations">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary" data-testid="text-operations-title">
                  Operations Efficiency Automations
                </h3>
              </div>
              <ul className="space-y-4">
                {operationsAutomations.map((automation, index) => (
                  <li key={index} className="flex items-start" data-testid={`item-operations-${index}`}>
                    <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{automation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
