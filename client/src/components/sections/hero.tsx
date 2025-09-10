import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Stop Losing Money to</span>
            <span className="text-primary block">Manual Property Management Tasks</span>
            <span className="text-foreground">That Never End</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Take on 50% more clients with your current staff while increasing profit margins from single to double digits—without the hiring headaches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg shadow-lg"
              onClick={() => scrollToSection('calendar')}
              data-testid="button-get-audit"
            >
              Get Your Free Workflow Audit
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg border-secondary"
              onClick={() => scrollToSection('automations')}
              data-testid="button-see-solutions"
            >
              See Property Management Solutions
            </Button>
          </div>
          <div className="flex items-center justify-center text-muted-foreground">
            <CheckCircle className="w-5 h-5 mr-2 text-accent" />
            <span data-testid="text-trust-indicator">Trusted by 100+ property management firms</span>
          </div>
        </div>
      </div>
    </section>
  );
}
