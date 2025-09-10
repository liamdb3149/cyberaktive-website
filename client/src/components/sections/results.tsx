import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export default function Results() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const results = [
    { value: "40%", label: "Time Savings", description: "Administrative time saved (16+ hours per week)", color: "primary" },
    { value: "50%", label: "Faster Response", description: "Reduction in maintenance response time", color: "accent" },
    { value: "5-15%", label: "Margin Increase", description: "Percentage point increase in profit margins", color: "primary" },
    { value: "50%", label: "Client Growth", description: "More clients handled with same staff size", color: "accent" },
    { value: "85%", label: "Better Decisions", description: "Report improved decision-making capabilities", color: "primary" },
    { value: "24/7", label: "Always On", description: "Never miss another opportunity or inquiry", color: "accent" }
  ];

  return (
    <section id="results" className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Here's exactly what property management firms achieve with our automations:
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from real property management companies
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <Card key={index} className={`text-center p-8 shadow-lg bg-${result.color}/5 border-${result.color}/20`} data-testid={`card-result-${index}`}>
              <CardContent className="p-0">
                <div className={`text-4xl lg:text-5xl font-bold text-${result.color} mb-2`} data-testid={`text-result-value-${index}`}>
                  {result.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2" data-testid={`text-result-label-${index}`}>
                  {result.label}
                </div>
                <div className="text-muted-foreground" data-testid={`text-result-description-${index}`}>
                  {result.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
            onClick={() => scrollToSection('calendar')}
            data-testid="button-transform-business"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            See How We Can Transform Your Business
          </Button>
        </div>
      </div>
    </section>
  );
}
