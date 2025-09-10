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
    <section id="hero" className="pt-32 lg:pt-40 pb-20 lg:pb-32 homepage-hero min-h-screen flex items-center">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="premium-text-4xl md:text-6xl lg:text-7xl mb-8">
            <span className="text-white drop-shadow-lg block mb-2">Take On</span>
            <span className="text-white drop-shadow-lg block mb-2 font-black">50% More Doors</span>
            <span className="text-white drop-shadow-lg block">With Your Existing Team</span>
          </h1>
          <p className="premium-text-xl lg:text-2xl text-white/90 drop-shadow-md mb-4 max-w-4xl mx-auto font-medium">
            Leverage AI workflow automations to increase profit margins from single to double digits.
          </p>
          <p className="text-lg text-white/80 drop-shadow-md mb-4 max-w-3xl mx-auto">
            Solve hiring headaches and retention stresses forever.
          </p>
          <p className="text-lg text-white/80 drop-shadow-md mb-12 max-w-3xl mx-auto">
            On average, each automation saves 16-80 hours per week after 2.5 months.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="premium-button text-white font-semibold text-lg px-10 py-5 rounded-2xl"
              onClick={() => scrollToSection('calendar')}
              data-testid="button-get-audit"
            >
              Get Your Free Workflow Audit
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-10 py-5 rounded-2xl premium-card-sm"
              onClick={() => scrollToSection('automations')}
              data-testid="button-see-solutions"
            >
              See Our Automation Solutions
            </Button>
          </div>
          <div className="flex items-center justify-center text-white/80 text-lg drop-shadow-md">
            <CheckCircle className="w-6 h-6 mr-3 text-white/90 drop-shadow-md" />
            <span data-testid="text-trust-indicator" className="font-medium">Trusted by 100+ property management firms across the US</span>
          </div>
        </div>
      </div>
    </section>
  );
}
