import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Mail, Sparkles, TrendingUp } from "lucide-react";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/tlZAXVaHxTw9fvistaTr";

export default function FinalCTA() {
  const benefits = [
    { icon: CheckCircle, text: "No obligation, no sales pressure" },
    { icon: Calendar, text: "15-minute focused consultation" },
    { icon: TrendingUp, text: "Clear next steps or honest 'not a fit'" }
  ];

  return (
    <Section
      id="final-cta"
      className="section-mesh relative bg-gradient-to-br from-indigo-50/50 via-sky-50/40 to-blue-50/30"
    >
      <div className="glow-bar-top absolute top-0 left-0 right-0 z-20" />
      <FloatingOrb size="large" style={{ top: "10%", left: "15%" }} />
      <FloatingOrb size="medium" style={{ bottom: "10%", right: "20%" }} />
      <GeometricBlob style={{ top: "40%", right: "10%", width: "200px", height: "200px" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <GlassCard className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 gradient-border">
            <div className="space-y-8">
              <div>
                <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground text-glow">
                  AI That Moves the Needle
                </h2>
                <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
                  You didn't get into law to waste hours on admin. Let's figure out where AI can help - and where it can't. Book a quick call and we'll show you what's realistic, what's profitable, and what to skip.
                </p>
              </div>

              {/* Hero booking button */}
              <div className="flex justify-center">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group">
                  <Button
                    size="lg"
                    className="booking-cta-button premium-button text-white font-bold px-14 py-7 rounded-2xl text-lg shadow-lg shadow-primary/25 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300"
                  >
                    <Calendar className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                    Book 15-Minute Strategy Call
                  </Button>
                </a>
              </div>

              {/* Email contact */}
              <div className="flex items-center justify-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/30 mx-auto w-fit">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:team@cyberaktive.com"
                  className="text-foreground hover:text-primary font-semibold transition-colors"
                  data-testid="link-email-final"
                >
                  team@cyberaktive.com
                </a>
              </div>

              {/* Benefits */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Urgency */}
              <p className="text-sm text-amber-600 font-semibold italic">
                Every week without automation costs your team 20-30 hours of productivity.
              </p>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
