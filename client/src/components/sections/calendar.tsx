import { GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob, Section } from "@/components/ui/visual";
import { Calendar as CalendarIcon, Clock, CheckCircle } from "lucide-react";

export default function Calendar() {
  return (
    <Section 
      id="calendar" 
      className="section-mesh relative bg-gradient-to-br from-green-50/40 via-blue-50/30 to-purple-50/40"
    >
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "15%", right: "10%" }} />
      <FloatingOrb size="medium" style={{ bottom: "20%", left: "15%" }} />
      <FloatingOrb size="small" style={{ top: "50%", left: "5%" }} />
      <GeometricBlob style={{ top: "25%", left: "20%", width: "160px", height: "160px" }} />
      <GeometricBlob style={{ bottom: "15%", right: "10%", width: "120px", height: "120px" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block mb-6">
              <GlassCard className="px-8 py-4 bg-gradient-to-r from-accent/20 to-primary/10">
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="w-6 h-6 text-accent" />
                  <span className="text-sm font-bold text-accent uppercase tracking-wider">Free Consultation</span>
                </div>
              </GlassCard>
            </div>
            
            <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground text-glow">
              Book Your 15-Minute Call
            </h2>
            <p className="premium-text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Quick, no-obligation consult to see if we can make AI work for you. Pick a time—we'll show you what's possible.
            </p>
            
            {/* Value props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <RevealOnScroll delay={200}>
                <GlassCard className="text-center group hover:scale-105 transition-all duration-300">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">15 Minutes</h3>
                  <p className="text-sm text-muted-foreground">Fast & focused</p>
                </GlassCard>
              </RevealOnScroll>
              
              <RevealOnScroll delay={300}>
                <GlassCard className="text-center group hover:scale-105 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">100% Free</h3>
                  <p className="text-sm text-muted-foreground">No strings attached</p>
                </GlassCard>
              </RevealOnScroll>
              
              <RevealOnScroll delay={400}>
                <GlassCard className="text-center group hover:scale-105 transition-all duration-300">
                  <CalendarIcon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Clear Next Steps</h3>
                  <p className="text-sm text-muted-foreground">Know what's possible</p>
                </GlassCard>
              </RevealOnScroll>
            </div>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={600}>
          <div className="max-w-4xl mx-auto">
            {/* GoHighLevel Calendar Integration */}
            <GlassCard className="p-0 overflow-hidden border-2 border-primary/10 gradient-border">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/EDeYrzypdFYfanS9vQQk" 
                style={{ width: '100%', border: 'none', overflow: 'hidden', height: '800px', minHeight: '800px', borderRadius: '1rem' }} 
                scrolling="auto" 
                id="msgsndr-calendar"
                title="Book Your 15-Minute Introductory Call"
                data-testid="calendar-booking-widget"
                allow="payment; geolocation"
              />
              <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript"></script>
            </GlassCard>
          </div>
        </RevealOnScroll>
        
        {/* Bottom highlight */}
        <RevealOnScroll delay={800}>
          <div className="text-center mt-16">
            <div className="inline-block bg-accent/5 rounded-2xl px-8 py-6 backdrop-blur-sm border border-accent/10">
              <p className="premium-text-lg text-foreground mb-2 font-semibold">
                See What AI Can Do for Your Firm
              </p>
              <p className="text-muted-foreground">
                Let's discuss whether AI can deliver real ROI for your law firm
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
