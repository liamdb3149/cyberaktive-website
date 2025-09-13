import { Card, CardContent } from "@/components/ui/card";
import { Clock, TrendingUp, Users, CheckCircle } from "lucide-react";

export default function RiskReversal() {
  const guarantees = [
    {
      icon: Clock,
      title: "Short 3-Month Contract",
      description: "Prove results before full investment",
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: "Prove ROI First",
      description: "See results before full investment",
      color: "primary"
    },
    {
      icon: Users,
      title: "Limited Capacity",
      description: "Only 10 new clients per quarter",
      color: "secondary"
    },
    {
      icon: CheckCircle,
      title: "Free Audit",
      description: "Limited-time value offer",
      color: "accent"
    }
  ];

  return (
    <section id="risk-reversal" className="py-16 lg:py-24 bg-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-foreground">
            Risk-Free Trial with Proven Results
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="p-6 text-center premium-card-sm bg-white border-white" data-testid={`card-guarantee-${index}`}>
                <CardContent className="p-0">
                  <div className={`w-12 h-12 bg-${guarantee.color}/10 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <guarantee.icon className={`w-6 h-6 text-${guarantee.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" data-testid={`text-guarantee-title-${index}`}>
                    {guarantee.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-guarantee-description-${index}`}>
                    {guarantee.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
