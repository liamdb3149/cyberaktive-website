import { Button } from "@/components/ui/button";
import { FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";
import iconLogo from "@assets/Cyberaktive Logos t_1757653334662.png";
import CalendarModal from "@/components/calendar-modal";

export default function PropertyHero() {
  return (
    <section 
      className="pt-20 lg:pt-24 pb-20 lg:pb-32 min-h-screen flex items-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/src/assets/apartment-buildings-optimized.jpg')`
      }}
    >
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "15%", left: "10%" }} />
      <FloatingOrb size="medium" style={{ bottom: "20%", right: "15%" }} />
      <FloatingOrb size="small" style={{ top: "40%", right: "8%" }} />
      <GeometricBlob style={{ top: "25%", right: "20%", width: "200px", height: "200px" }} />
      <GeometricBlob style={{ bottom: "15%", left: "5%", width: "150px", height: "150px" }} />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 md:w-24 md:h-24 glass-card rounded-3xl flex items-center justify-center p-2 group hover:scale-110 transition-transform duration-300">
                <img 
                  src={iconLogo} 
                  alt="Cyberaktive" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <h1 className="premium-text-4xl md:text-6xl lg:text-7xl mb-8">
              <span className="text-white drop-shadow-lg block mb-2">Property Management</span>
              <span className="text-white drop-shadow-lg block mb-2 font-black">AI Automation</span>
              <span className="text-white drop-shadow-lg block">That Actually Works</span>
            </h1>
            
            <RevealOnScroll delay={300}>
              <p className="premium-text-xl lg:text-2xl text-white/90 drop-shadow-md mb-4 max-w-4xl mx-auto font-medium">
                Handle 50% more doors with your existing team while boosting margins to 15-25%
              </p>
              <p className="text-lg text-white/80 drop-shadow-md mb-4 max-w-3xl mx-auto">
                Stop losing sleep over staff turnover and endless admin work—our AI does it all.
              </p>
              <p className="text-lg text-white/80 drop-shadow-md mb-12 max-w-3xl mx-auto">
                On average, each automation saves 16-80 hours per week after 2.5 months.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={600}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <CalendarModal>
                  <Button 
                    size="lg" 
                    className="premium-button text-white font-semibold text-lg px-12 py-6 rounded-2xl group hover:scale-105 transition-all duration-300"
                    data-testid="button-get-audit"
                  >
                    Get Your Free Workflow Audit
                  </Button>
                </CalendarModal>
                <CalendarModal>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-12 py-6 rounded-2xl drop-shadow-md hover:scale-105 transition-all duration-300"
                    data-testid="button-see-solutions"
                  >
                    Schedule Your Free Consultation
                  </Button>
                </CalendarModal>
              </div>
            </RevealOnScroll>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}