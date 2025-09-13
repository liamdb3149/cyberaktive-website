import { Phone, FileText, Users, TrendingDown, Wrench, Moon } from "lucide-react";
import { Section, GlassCard, BentoGrid, BentoItem, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";

export default function Problem() {
  const problems = [
    {
      icon: Phone,
      title: "24/7 Tenant Calls & Emergencies",
      description: "Limited staff coverage means missed calls, frustrated tenants, and lost revenue opportunities after hours.",
      impact: "Revenue Loss"
    },
    {
      icon: FileText,
      title: "Manual Administrative Tasks", 
      description: "40+ hours per week consumed by repetitive paperwork, data entry, and administrative overhead.",
      impact: "Time Drain"
    },
    {
      icon: Users,
      title: "Staff Turnover Disruption",
      description: "Constant training new employees disrupts operations and damages client relationships.",
      impact: "Operational Chaos"
    },
    {
      icon: TrendingDown,
      title: "Rising Payroll Costs",
      description: "60-70% of expenses go to payroll, squeezing already thin margins down to single digits.",
      impact: "Profit Squeeze"
    },
    {
      icon: Wrench,
      title: "Maintenance Coordination Inefficiencies",
      description: "Poor coordination frustrates tenants, delays repairs, and damages property owner relationships.",
      impact: "Client Dissatisfaction"
    },
    {
      icon: Moon,
      title: "Missing After-Hours Inquiries",
      description: "Every missed inquiry is lost revenue while competitors capture leads 24/7.",
      impact: "Competitive Disadvantage"
    }
  ];

  return (
    <Section className="section-mesh relative">
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "10%", left: "5%" }} />
      <FloatingOrb size="small" style={{ top: "60%", right: "8%" }} />
      <GeometricBlob style={{ top: "30%", right: "15%", width: "150px", height: "150px" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground text-glow">
              If you're running a property management company, you know these problems all too well...
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
              The daily struggles that are crushing your margins and limiting your growth
            </p>
          </div>
        </RevealOnScroll>

        <BentoGrid className="max-w-7xl mx-auto">
          {/* Left Column - Large Problem Narrative */}
          <BentoItem span={5}>
            <RevealOnScroll delay={200}>
              <GlassCard className="h-full flex flex-col justify-center gradient-border">
                <div className="space-y-8">
                  <div className="text-6xl font-black text-destructive/30">01</div>
                  <h3 className="premium-text-xl text-foreground">
                    The Property Management Nightmare
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    You started your property management business to build wealth and freedom. 
                    Instead, you're trapped in a cycle of endless administrative tasks, 
                    emergency calls at 2 AM, and watching your margins shrink while your stress grows.
                  </p>
                  <div className="flex items-center space-x-4 text-destructive font-semibold">
                    <TrendingDown className="w-6 h-6" />
                    <span>Single-Digit Margins</span>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          </BentoItem>

          {/* Right Column - Problem Grid */}
          <BentoItem span={7}>
            <div className="grid grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <RevealOnScroll key={index} delay={300 + index * 100}>
                  <GlassCard className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-destructive/20 transition-colors">
                      <problem.icon className="w-8 h-8 text-destructive" />
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-foreground" data-testid={`text-problem-title-${index}`}>
                      {problem.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4" data-testid={`text-problem-description-${index}`}>
                      {problem.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-destructive/10 rounded-full text-xs font-semibold text-destructive">
                      {problem.impact}
                    </div>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>
          </BentoItem>

          {/* Bottom - Call to Action */}
          <BentoItem span={12}>
            <RevealOnScroll delay={800}>
              <div className="text-center mt-16">
                <div className="inline-block bg-destructive/5 rounded-2xl px-8 py-6 backdrop-blur-sm">
                  <p className="premium-text-lg text-foreground mb-2 font-semibold">
                    Sound familiar?
                  </p>
                  <p className="text-muted-foreground">
                    These aren't just inconveniences – they're business killers that prevent you from scaling beyond 50-100 doors.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </BentoItem>
        </BentoGrid>
      </div>
    </Section>
  );
}