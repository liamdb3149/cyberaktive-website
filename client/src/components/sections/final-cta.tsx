import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function FinalCTA() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="final-cta" className="py-16 lg:py-24 hero-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 drop-shadow-lg">
            Ready to Transform Your Property Management Business?
          </h2>
          <p className="text-xl text-white/95 mb-8 drop-shadow-md">
            Join the property management firms already saving 40% of their time and doubling their profit margins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold card-3d-sm px-8 py-4"
              onClick={() => scrollToSection('calendar')}
              data-testid="button-book-final-audit"
            >
              Book Your Free Audit Now
            </Button>
            <a 
              href="mailto:team@cyberaktive.com" 
              className="hover:text-white/90 font-semibold text-lg transition-colors drop-shadow-md"
              data-testid="link-email-final"
            >
              team@cyberaktive.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-white/80 text-sm">
            <span className="flex items-center" data-testid="text-no-obligation">
              <CheckCircle className="w-4 h-4 mr-2" />
              No obligation
            </span>
            <span className="flex items-center" data-testid="text-consultation">
              <CheckCircle className="w-4 h-4 mr-2" />
              30-minute consultation
            </span>
            <span className="flex items-center" data-testid="text-insights">
              <CheckCircle className="w-4 h-4 mr-2" />
              Immediate insights
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
