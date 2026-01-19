import { Moon, Zap, Target, TrendingUp, DollarSign, Heart, ArrowUpRight } from "lucide-react";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob, CodeFrame } from "@/components/ui/visual";

export default function Solution() {
  const solutions = [
    {
      icon: Zap,
      title: "Cut document review time by 70%",
      description: "Automate repetitive tasks so your team focuses on billable legal work.",
      benefit: "More Billable Hours"
    },
    {
      icon: Moon,
      title: "Capture 20% more billable hours automatically",
      description: "Improved responsiveness strengthens client relationships and trust.",
      benefit: "Better Service"
    },
    {
      icon: Target,
      title: "Reduce billing errors by 25%", 
      description: "Automation reduces human error and the costly time spent fixing mistakes.",
      benefit: "Higher Quality"
    }
  ];

  const bigBenefits = [
    {
      icon: DollarSign,
      title: "Margin growth without growing your headcount",
      description: "Increase profitability through efficiency, not just expansion.",
      metric: "ROI+"
    },
    {
      icon: TrendingUp,
      title: "More Time for High-Value Work", 
      description: "Focus on strategy and client relationships, not administrative tasks.",
      metric: "Focus"
    },
    {
      icon: Heart,
      title: "Improved Client Satisfaction",
      description: "Faster, more accurate service leads to happier clients.",
      metric: "Quality"
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground text-glow">
              Where AI Pays Off (If You Get It Right)
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
              Real benefits when AI is implemented strategically
            </p>
          </div>
        </RevealOnScroll>

        {/* Responsive Layout - No BentoGrid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Hero Card - Large */}
          <div className="lg:col-span-2">
            <RevealOnScroll delay={200}>
              <GlassCard className="h-full bg-gradient-to-br from-primary/5 to-accent/5 group">
                <div className="flex flex-col lg:flex-row items-center gap-8 h-full">
                  <div className="flex-1 space-y-6">
                    <div className="inline-block">
                      <div className="text-5xl font-black text-primary/20 mb-4">02</div>
                      <h3 className="premium-text-xl text-foreground mb-4">
                        The Right AI Approach
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Your legal team operates more efficiently with AI handling routine work. 
                      Your team focuses on high-value legal services, 
                      and you achieve the profitability and growth you envisioned.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Better Margins</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
                        <Heart className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-accent">Strategic Focus</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <CodeFrame title="AI Workflow Demo" className="w-80">
                      <div className="space-y-2 text-sm">
                        <div className="text-green-400">✓ Client inquiry received</div>
                        <div className="text-blue-400">→ AI categorizes & routes</div>
                        <div className="text-yellow-400">→ Automated intake started</div>
                        <div className="text-green-400">✓ Document prep initiated</div>
                        <div className="text-purple-400">→ Compliance check running</div>
                        <div className="text-green-400">✓ Attorney review ready</div>
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
                    <div className="text-4xl font-black text-accent mb-2">ROI</div>
                    <h4 className="font-bold text-lg text-foreground mb-2">
                      Measurable Impact
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Clear business case for every AI implementation we recommend
                    </p>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          </div>
        </div>

        {/* Big Benefits Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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