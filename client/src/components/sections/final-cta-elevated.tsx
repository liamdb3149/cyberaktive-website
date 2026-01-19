import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Mail, Sparkles } from "lucide-react";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";

export default function FinalCTA() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    { icon: CheckCircle, text: "No obligation" },
    { icon: Calendar, text: "15-minute consultation" },
    { icon: Sparkles, text: "Clear next steps" }
  ];

  return (
    <Section 
      id="final-cta" 
      className="section-mesh relative bg-gradient-to-br from-violet-50/50 via-rose-50/40 to-amber-50/30"
    >
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "10%", left: "15%" }} />
      <FloatingOrb size="medium" style={{ bottom: "10%", right: "20%" }} />
      <GeometricBlob style={{ top: "40%", right: "10%", width: "200px", height: "200px" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <GlassCard className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 gradient-border">
            <div className="space-y-6">
              {/* Hero Content */}
              <div>
                <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground text-glow">
                  AI That Moves the Needle
                </h2>
                <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                  You didn't get into law to waste hours on admin. Let's figure out where AI can help—and where it can't. Book a quick call and we'll show you what's realistic, what's profitable, and what to skip.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="premium-button text-white font-semibold px-12 py-6 rounded-2xl group"
                  onClick={() => scrollToSection('calendar')}
                  data-testid="button-book-final-audit"
                >
                  <Calendar className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Book Your Call Now
                </Button>
                
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href="mailto:team@cyberaktive.com" 
                    className="text-foreground hover:text-primary font-semibold transition-colors"
                    data-testid="link-email-final"
                  >
                    team@cyberaktive.com
                  </a>
                </div>
              </div>

              {/* Benefits List */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium" data-testid={`text-${benefit.text.toLowerCase().replace(' ', '-')}`}>
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-60"></div>
              </div>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </Section>
  );
}