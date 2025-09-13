import { Moon, Zap, Target, TrendingUp, DollarSign, Heart, ArrowUpRight } from "lucide-react";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob, CodeFrame } from "@/components/ui/visual";

export default function Solution() {
  const solutions = [
    {
      icon: Moon,
      title: "24/7 Automated Systems",
      description: "Your systems handle tenant inquiries around the clock, even when you're sleeping.",
      benefit: "Never Miss a Lead"
    },
    {
      icon: Zap,
      title: "Automatic Administrative Tasks",
      description: "Administrative tasks happen automatically, freeing your team for high-value relationship work.",
      benefit: "16+ Hours Saved Weekly"
    },
    {
      icon: Target,
      title: "Never Miss Opportunities", 
      description: "You never miss a lead, maintenance request, or tenant concern again.",
      benefit: "100% Coverage"
    }
  ];

  const bigBenefits = [
    {
      icon: TrendingUp,
      title: "50% More Clients",
      description: "You can take on 50% more clients without hiring additional staff.",
      metric: "+50%"
    },
    {
      icon: DollarSign,
      title: "Double-Digit Profit Margins", 
      description: "Your profit margins jump from single digits to double digits.",
      metric: "15-25%"
    },
    {
      icon: Heart,
      title: "Focus on Relationships",
      description: "Staff focus on relationship-building instead of repetitive tasks.",
      metric: "24/7"
    }
  ];

  return (
    <Section className="section-mesh relative bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30">
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "15%", right: "10%" }} />
      <FloatingOrb size="medium" style={{ bottom: "20%", left: "8%" }} />
      <GeometricBlob style={{ top: "40%", left: "5%", width: "120px", height: "120px" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground text-glow">
              Imagine running your property management business where...
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-3xl mx-auto">
              The better future that's possible with intelligent automation
            </p>
          </div>
        </RevealOnScroll>

        {/* Responsive Layout - No BentoGrid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {/* Hero Card - Large */}
          <div className="lg:col-span-2">
            <RevealOnScroll delay={200}>
              <GlassCard className="h-full bg-gradient-to-br from-primary/5 to-accent/5 group">
                <div className="flex flex-col lg:flex-row items-center gap-8 h-full">
                  <div className="flex-1 space-y-6">
                    <div className="inline-block">
                      <div className="text-5xl font-black text-primary/20 mb-4">02</div>
                      <h3 className="premium-text-xl text-foreground mb-4">
                        The AI-Powered Transformation
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Your property management business runs like a well-oiled machine. 
                      AI handles the routine, your team focuses on relationships, 
                      and you finally achieve the freedom and profitability you started this business for.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Double Margins</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
                        <Heart className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-accent">Happy Team</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <CodeFrame title="AI Workflow Demo" className="w-80">
                      <div className="space-y-2 text-sm">
                        <div className="text-green-400">✓ New tenant inquiry received</div>
                        <div className="text-blue-400">→ AI responds within 2 minutes</div>
                        <div className="text-yellow-400">→ Scheduling property tour</div>
                        <div className="text-green-400">✓ Lead converted to application</div>
                        <div className="text-purple-400">→ Processing background check</div>
                        <div className="text-green-400">✓ New lease generated</div>
                      </div>
                    </CodeFrame>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          </div>

          {/* Stats Card */}
          <div className="lg:col-span-1">
            <RevealOnScroll delay={400}>
              <GlassCard className="h-full flex flex-col justify-between text-center group hover:scale-105 transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-accent/30 transition-colors">
                    <ArrowUpRight className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-accent mb-2">75%</div>
                    <h4 className="font-bold text-lg text-foreground mb-2">
                      Time Reduction
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      On administrative tasks, freeing your team for growth-focused activities
                    </p>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          </div>
        </div>

        {/* Big Benefits Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {bigBenefits.map((benefit, index) => (
            <RevealOnScroll key={index} delay={600 + index * 100}>
              <GlassCard className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-black text-primary mb-2">{benefit.metric}</div>
                <h4 className="font-bold text-lg text-foreground mb-3" data-testid={`text-benefit-title-${index}`}>
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground" data-testid={`text-benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}