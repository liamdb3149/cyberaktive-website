import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import iconLogo from "@assets/Cyberaktive Logos t_1757653334662.png";
import CalendarModal from "@/components/calendar-modal";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 lg:pt-24 pb-20 lg:pb-32 homepage-hero min-h-screen flex items-center">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src={iconLogo} 
              alt="Cyberaktive" 
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <h1 className="premium-text-4xl md:text-6xl lg:text-7xl mb-8">
            <span className="text-white drop-shadow-lg block mb-2 font-black">AI That Works, Not Just Hype</span>
          </h1>
          <p className="premium-text-xl lg:text-2xl text-white/90 drop-shadow-md mb-4 max-w-4xl mx-auto font-medium">
            AI Transformation Partners & Consultants to the Legal Industry
          </p>
          <p className="text-lg text-white/80 drop-shadow-md mb-12 max-w-3xl mx-auto">
            No guesswork. No "buzzword" projects. Just measurable results and a partner for every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <CalendarModal>
              <Button 
                size="lg" 
                className="premium-button text-white font-semibold text-lg px-10 py-5 rounded-2xl"
                data-testid="button-get-audit"
              >
                Book Your ROI Assessment (15 min)
              </Button>
            </CalendarModal>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-10 py-5 rounded-2xl premium-card-sm"
              onClick={() => scrollToSection('automations')}
              data-testid="button-see-solutions"
            >
              Learn More
            </Button>
          </div>
          <div className="flex items-center justify-center text-white/80 text-lg drop-shadow-md">
            <span data-testid="text-trust-indicator" className="font-medium">Helping law firms make real AI gains with measurable ROI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
