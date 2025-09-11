import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Settings, CheckCircle, ArrowRight } from "lucide-react";

export default function Automations() {
  const revenueAutomations = [
    {
      title: "Speed-to-Lead System",
      description: "Instantly captures and responds to leads within minutes to maximize conversion rates before prospects contact competitors"
    },
    {
      title: "AI Social Media Content Generation, Scheduling & Publishing",
      description: "Automatically creates and posts engaging property content across platforms to attract tenants and property owners without manual effort"
    },
    {
      title: "AI Cold Email Prospecting",
      description: "Systematically reaches out to potential property owners and investors to grow your portfolio through automated, personalized outreach campaigns"
    },
    {
      title: "Personalized Follow-up & Nurture Systems",
      description: "Automatically maintains relationships with prospects through targeted email sequences that convert leads into signed contracts over time"
    }
  ];

  const operationsAutomations = [
    {
      title: "Social Media DM & Website Bot/AI Customer Service Agent",
      description: "Handles tenant inquiries and prospect questions 24/7 across all digital channels, reducing staff workload while improving response times"
    },
    {
      title: "AI Receptionist",
      description: "Answers calls, schedules appointments, and routes urgent matters to appropriate staff, ensuring no leads or tenant issues are missed"
    },
    {
      title: "AI Outbound Calling: Rent Collection Follow-ups",
      description: "Automatically contacts tenants with overdue rent through professional phone calls, reducing collections workload and improving payment rates"
    },
    {
      title: "Lease Renewal Negotiations & Prospective Tenant Calls",
      description: "Proactively contacts tenants approaching lease expiration and qualifies new prospects through automated phone conversations to maximize occupancy rates"
    }
  ];

  return (
    <section id="automations" className="py-20 lg:py-32 section-gradient-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground">
            AI Workflow Automation Packages
          </h2>
          <p className="premium-text-lg text-muted-foreground">
            AI-powered workflow automations that allow you to run a more efficient business, generate more revenue with the same or smaller team size, and increase your price-to-earnings ratio
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Revenue-Generating Automations */}
          <Card className="p-10 premium-card" data-testid="card-revenue-automations">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                  <DollarSign className="w-6 h-6 text-accent" />
                </div>
                <h3 className="premium-text-xl text-accent" data-testid="text-revenue-title">
                  Revenue-Generating Automations
                </h3>
              </div>
              <div className="space-y-6">
                {revenueAutomations.map((automation, index) => (
                  <div key={index} className="" data-testid={`item-revenue-${index}`}>
                    <div className="flex items-start mb-3">
                      <ArrowRight className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <h4 className="font-semibold text-lg text-foreground leading-tight">{automation.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed ml-8 text-sm">{automation.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Operations Efficiency Automations */}
          <Card className="p-10 premium-card" data-testid="card-operations-automations">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="premium-text-xl text-secondary" data-testid="text-operations-title">
                  Operations Efficiency Automations
                </h3>
              </div>
              <div className="space-y-6">
                {operationsAutomations.map((automation, index) => (
                  <div key={index} className="" data-testid={`item-operations-${index}`}>
                    <div className="flex items-start mb-3">
                      <ArrowRight className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <h4 className="font-semibold text-lg text-foreground leading-tight">{automation.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed ml-8 text-sm">{automation.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
