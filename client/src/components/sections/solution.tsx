import { Card, CardContent } from "@/components/ui/card";
import { Moon, Zap, Target, TrendingUp, DollarSign, Heart } from "lucide-react";

export default function Solution() {
  const solutions = [
    {
      icon: Moon,
      title: "24/7 Automated Systems",
      description: "Your systems handle tenant inquiries around the clock, even when you're sleeping."
    },
    {
      icon: Zap,
      title: "Automatic Administrative Tasks",
      description: "Administrative tasks happen automatically, freeing your team for high-value relationship work."
    },
    {
      icon: Target,
      title: "Never Miss Opportunities",
      description: "You never miss a lead, maintenance request, or tenant concern again."
    },
    {
      icon: TrendingUp,
      title: "50% More Clients",
      description: "You can take on 50% more clients without hiring additional staff."
    },
    {
      icon: DollarSign,
      title: "Double-Digit Profit Margins",
      description: "Your profit margins jump from single digits to double digits."
    },
    {
      icon: Heart,
      title: "Focus on Relationships",
      description: "Staff focus on relationship-building instead of repetitive tasks."
    }
  ];

  return (
    <section id="solution" className="py-20 lg:py-32 section-gradient-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground">
            Imagine running your property management business where...
          </h2>
          <p className="premium-text-lg text-muted-foreground">
            The better future that's possible with intelligent automation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="premium-card-sm" data-testid={`card-solution-${index}`}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3" data-testid={`text-solution-title-${index}`}>
                  {solution.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-solution-description-${index}`}>
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
