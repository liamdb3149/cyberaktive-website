import { Clock, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";

export default function RiskReversal() {
  const guarantees = [
    {
      icon: CheckCircle,
      title: "Practical recommendations, not just theory",
      description: "Solutions based on real-world implementation, not abstract concepts",
      color: "primary"
    },
    {
      icon: Users,
      title: "You stay in control at every step",
      description: "Clear decision points with full transparency on costs and outcomes",
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "If we don't find a fit, we'll tell you",
      description: "Honest assessment—we won't recommend AI if it doesn't make business sense",
      color: "accent"
    }
  ];

  return (
    <Section
      id="risk-reversal"
      className="relative bg-white"
    >
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "15%", left: "10%" }} />
      <FloatingOrb size="medium" style={{ bottom: "20%", right: "15%" }} />
      <GeometricBlob style={{ top: "30%", right: "5%", width: "140px", height: "140px" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground text-glow">
              Proven Approach, No Guesswork
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent, practical partnership focused on real business value
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <RevealOnScroll key={index} delay={200 + index * 100}>
              <GlassCard 
                className="text-center group hover:scale-105 transition-all duration-300 gradient-border"
                data-testid={`card-guarantee-${index}`}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                  <guarantee.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-foreground" data-testid={`text-guarantee-title-${index}`}>
                  {guarantee.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-guarantee-description-${index}`}>
                  {guarantee.description}
                </p>
                
                {/* Premium accent line */}
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity"></div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom highlight */}
        <RevealOnScroll delay={800}>
          <div className="text-center mt-10">
            <div className="inline-block bg-primary/5 rounded-xl px-6 py-4 backdrop-blur-sm border border-primary/10">
              <p className="text-base text-foreground mb-1 font-semibold">
                ROI-Focused Partnership
              </p>
              <p className="text-sm text-muted-foreground">
                We only succeed when you see measurable business value from our recommendations
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}