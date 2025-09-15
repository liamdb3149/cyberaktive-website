import { Clock, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";

export default function RiskReversal() {
  const guarantees = [
    {
      icon: Clock,
      title: "Short 3-Month Contract",
      description: "Prove results before full investment",
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: "Prove ROI First",
      description: "See results before full investment",
      color: "primary"
    },
    {
      icon: Users,
      title: "Limited Capacity",
      description: "Only 10 new clients per quarter",
      color: "secondary"
    },
    {
      icon: CheckCircle,
      title: "Free Audit",
      description: "Limited-time value offer",
      color: "accent"
    }
  ];

  return (
    <Section 
      id="risk-reversal" 
      className="section-mesh relative bg-gradient-to-br from-purple-50/40 via-pink-50/30 to-blue-50/40"
    >
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "15%", left: "10%" }} />
      <FloatingOrb size="medium" style={{ bottom: "20%", right: "15%" }} />
      <GeometricBlob style={{ top: "30%", right: "5%", width: "140px", height: "140px" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground text-glow">
              Risk-Free Trial with Proven Results
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
              We're so confident in our results, we've made it impossible for you to lose
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
          <div className="text-center mt-16">
            <div className="inline-block bg-primary/5 rounded-2xl px-8 py-6 backdrop-blur-sm border border-primary/10">
              <p className="premium-text-lg text-foreground mb-2 font-semibold">
                Zero Risk, Maximum Reward
              </p>
              <p className="text-white">
                Join the property management companies already transforming their operations with AI automation
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}