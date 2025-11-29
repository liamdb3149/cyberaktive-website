import { Phone, FileText, Users, TrendingDown, Wrench, Moon, Mail, Mic } from "lucide-react";
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
    },
    {
      icon: Mail,
      title: "Predictable client acquisition feels out of reach",
      description: "You lack a scalable, automated system to consistently identify, engage, and book qualified sales calls for your services.",
      impact: "System Scaling Gap"
    },
    {
      icon: Mic,
      title: "Struggling to build visibility and thought leadership",
      description: "Expert knowledge remains trapped in unstructured formats because producing content for multiple channels is too time-consuming.",
      impact: "Expertise Bottleneck"
    },
    {
      icon: Phone,
      title: "High-value leads are slipping through the cracks",
      description: "Speed-to-lead is too slow, resulting in missed opportunities and a low conversion rate from inbound paid traffic campaigns.",
      impact: "Lead Conversion Loss"
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

        {/* Responsive Grid Layout */}
        <div className="max-w-7xl mx-auto">
          {/* First Row - Narrative + 2 Problem Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* The Legal Team Challenge - Narrative Card */}
            <RevealOnScroll delay={200}>
              <GlassCard className="h-full flex flex-col justify-center gradient-border">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">
                    The Legal Team Challenge
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You built your legal team to provide exceptional legal services and grow profitably. 
                    Instead, you're caught in a cycle of manual administrative tasks, 
                    inefficient processes, and uncertainty about which technology investments will actually deliver results.
                  </p>
                  <div className="flex items-center space-x-3 text-destructive font-semibold text-sm">
                    <TrendingDown className="w-5 h-5" />
                    <span>Growth Barriers</span>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>

            {/* First 2 Problem Tiles */}
            {problems.slice(0, 2).map((problem, index) => (
              <RevealOnScroll key={index} delay={300 + index * 100}>
                <GlassCard className="text-center group hover:scale-105 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-destructive/20 transition-colors">
                    <problem.icon className="w-7 h-7 text-destructive" />
                  </div>
                  <h4 className="font-bold text-base mb-2 text-foreground" data-testid={`text-problem-title-${index}`}>
                    {problem.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3" data-testid={`text-problem-description-${index}`}>
                    {problem.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-destructive/10 rounded-full text-xs font-semibold text-destructive">
                    {problem.impact}
                  </div>
                </GlassCard>
              </RevealOnScroll>
            ))}
          </div>

          {/* Remaining Rows - 3 Columns Each */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.slice(2, 9).map((problem, index) => (
              <RevealOnScroll key={index + 2} delay={400 + index * 100}>
                <GlassCard className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-destructive/20 transition-colors">
                    <problem.icon className="w-7 h-7 text-destructive" />
                  </div>
                  <h4 className="font-bold text-base mb-2 text-foreground" data-testid={`text-problem-title-${index + 2}`}>
                    {problem.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3" data-testid={`text-problem-description-${index + 2}`}>
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