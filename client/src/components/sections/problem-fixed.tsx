import { Phone, FileText, Users, TrendingDown, Wrench, Moon } from "lucide-react";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";

export default function Problem() {
  const problems = [
    {
      icon: FileText,
      title: "Too much repeat admin and manual work", 
      description: "Repetitive administrative tasks consume valuable time that could be spent on billable legal work.",
      impact: "Time Drain"
    },
    {
      icon: TrendingDown,
      title: "Intake, billing, or compliance feel slow",
      description: "Inefficient processes create bottlenecks in client onboarding, invoicing, and regulatory compliance.",
      impact: "Process Inefficiency"
    },
    {
      icon: Users,
      title: "Attorneys tied up doing checks, not billables",
      description: "Lawyers spending time on administrative verification instead of high-value legal work.",
      impact: "Revenue Impact"
    },
    {
      icon: TrendingDown,
      title: "Partners expect better margins and speed",
      description: "Pressure to improve profitability and operational efficiency without clear solutions.",
      impact: "Profit Pressure"
    },
    {
      icon: Moon,
      title: "Working late to keep up with routine tasks",
      description: "Nights and weekends spent on work that could be automated or streamlined.",
      impact: "Work-Life Balance"
    },
    {
      icon: Wrench,
      title: "Unsure if new tools or vendors will actually improve things",
      description: "Uncertainty about whether technology investments will deliver real ROI.",
      impact: "Decision Paralysis"
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
              What Slows Down Most Legal Teams?
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
              Common challenges that prevent you from scaling efficiently
            </p>
          </div>
        </RevealOnScroll>

        {/* Responsive Layout - No BentoGrid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Large Problem Narrative */}
          <div className="lg:col-span-5">
            <RevealOnScroll delay={200}>
              <GlassCard className="h-full flex flex-col justify-center gradient-border">
                <div className="space-y-8">
                  <div className="text-6xl font-black text-destructive/30">01</div>
                  <h3 className="premium-text-xl text-foreground">
                    The Legal Team Challenge
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    You built your legal team to provide exceptional legal services and grow profitably. 
                    Instead, you're caught in a cycle of manual administrative tasks, 
                    inefficient processes, and uncertainty about which technology investments will actually deliver results.
                  </p>
                  <div className="flex items-center space-x-4 text-destructive font-semibold">
                    <TrendingDown className="w-6 h-6" />
                    <span>Growth Barriers</span>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          </div>

          {/* Right Column - Problem Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          </div>
        </div>

        {/* Bottom - Call to Action */}
        <RevealOnScroll delay={800}>
          <div className="text-center mt-16">
            <div className="inline-block bg-destructive/5 rounded-2xl px-8 py-6 backdrop-blur-sm">
              <p className="premium-text-lg text-foreground mb-2 font-semibold">
                Sound familiar?
              </p>
              <p className="text-muted-foreground">
                These aren't just inconveniences – they're barriers that prevent your team from scaling efficiently and profitably.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}