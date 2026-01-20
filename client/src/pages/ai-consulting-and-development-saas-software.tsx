import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Code2, Clock, Unlock, Zap, Users, FileSearch, TrendingDown, Cpu, Shield, Target, Rocket, BarChart, ArrowRight, Calendar, Mail, Sparkles, DollarSign, Heart, TrendingUp, GitBranch, Layers, AlertTriangle } from "lucide-react";
import iconLogo from "@assets/Cyberaktive Logos t_1757653334662.png";
import CalendarModal from "@/components/calendar-modal";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob, CodeFrame } from "@/components/ui/visual";
import liamPhoto from "@assets/1_1757653847958.png";
import alanPhoto from "@assets/2_1757653847958.png";

export default function SaaSLandingPage() {
  useEffect(() => {
    document.title = "AI Automation for SaaS Companies - Ship 40% Faster in 90 Days | Cyberaktive";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Turn developer burnout into competitive velocity with AI automation for SaaS teams. Recover $200K+ in productivity annually, ship 40% faster, and achieve 80%+ team adoption. Measurable ROI in 90 days.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'AI Automation for SaaS Companies - Ship 40% Faster in 90 Days');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Turn developer burnout into competitive velocity with AI automation for SaaS teams. Recover $200K+ in productivity annually, ship 40% faster, and achieve 80%+ team adoption.');
    }

    return () => {
      document.title = "Cyberaktive AI - Legal AI Consulting & Automation";
    };
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const differentiators = [
    {
      icon: Code2,
      title: "We're Engineers Who Get SaaS",
      description: "Our developers ARE the consultants. We understand SaaS architectures, CI/CD pipelines, and what's actually possible—because we're the ones building it. No handoffs to junior teams who've never shipped production code.",
      badge: "Technical + Product Expertise"
    },
    {
      icon: Clock,
      title: "90 Days to Shipping Faster, Not 90-Page Decks",
      description: "Big consulting firms spend months delivering strategy PowerPoints. We deliver working automations your team uses daily—in weeks, not quarters. Measurable productivity gains in 90 days.",
      badge: "Results Guaranteed"
    },
    {
      icon: Unlock,
      title: "No Vendor Lock-In",
      description: "Tool-agnostic solutions that integrate with your existing stack (GitHub, Jira, Slack, AWS/Azure). You own the automation, not us.",
      badge: "Freedom & Flexibility"
    }
  ];

  const painPoints = [
    { icon: TrendingDown, text: "AI-native competitors shipping features faster?" },
    { icon: Users, text: "Developers spending 30% of time on manual tasks?" },
    { icon: FileSearch, text: "Every investor deck asks: What's your AI moat?" }
  ];

  const metrics = [
    { value: "$200K+", label: "Average Annual Productivity Recovery" },
    { value: "80%+", label: "Team Adoption Rate" },
    { value: "90 Days", label: "Implementation Guarantee" },
    { value: "15+", label: "SaaS Companies Served" }
  ];

  const problems = [
    {
      icon: Cpu,
      title: "Developers Burning Out on Repetitive Work",
      description: "Your engineering team spends 30% of their time on manual testing, infrastructure setup, and documentation instead of building features that differentiate your product.",
      impact: "Productivity Drain"
    },
    {
      icon: Zap,
      title: "AI-Native Competitors Moving Faster",
      description: "Startups built on AI-first architectures are commoditizing features that took you months to build, eroding your competitive moat.",
      impact: "Competitive Threat"
    },
    {
      icon: Layers,
      title: "Engineering Resources Tied Up in Maintenance",
      description: "Your best developers are firefighting technical debt and handling support escalations instead of innovating on your roadmap.",
      impact: "Innovation Bottleneck"
    },
    {
      icon: Target,
      title: "Investors and Board Expect an AI Strategy",
      description: "Pressure to demonstrate AI capabilities and automation efficiency without a clear roadmap for implementation.",
      impact: "Strategic Pressure"
    },
    {
      icon: Clock,
      title: "Shipping Velocity Slowing As You Scale",
      description: "What used to take days now takes weeks. Manual QA, deployment processes, and coordination overhead are killing your momentum.",
      impact: "Scaling Friction"
    },
    {
      icon: TrendingDown,
      title: "CAC Rising While Conversion Rates Stagnate",
      description: "You're spending more to acquire customers, but manual onboarding workflows and slow response times are preventing you from scaling acquisition.",
      impact: "Growth Inefficiency"
    },
    {
      icon: Users,
      title: "Internal Resistance to AI Adoption",
      description: "Your team is skeptical about AI tools. Middle managers are slow-rolling initiatives, and 70% of pilots fail due to cultural issues, not technology.",
      impact: "Organizational Friction"
    },
    {
      icon: Shield,
      title: "Product Differentiation Getting Harder",
      description: "Feature parity is easier than ever. Your unique capabilities are being replicated by competitors within months, forcing price compression.",
      impact: "Commoditization Risk"
    }
  ];

  const bigBenefits = [
    {
      icon: DollarSign,
      title: "Margin Expansion Without Headcount Inflation",
      description: "Increase output and efficiency through automation, not just hiring.",
      metric: "ROI+"
    },
    {
      icon: Target,
      title: "More Time for Product Innovation",
      description: "Your team focuses on differentiation and customer value, not toil.",
      metric: "Focus"
    },
    {
      icon: Rocket,
      title: "Faster Shipping Cycles",
      description: "Ship features 40% faster with automated testing, deployment, and QA.",
      metric: "Velocity"
    }
  ];

  const results = [
    {
      icon: Clock,
      value: "Faster",
      label: "Shorter development cycles",
      description: "Automated pipelines reduce deployment time from hours to minutes",
      color: "saas-primary"
    },
    {
      icon: Target,
      value: "Fewer",
      label: "Fewer bugs and production issues",
      description: "Automated testing catches regressions before they reach production",
      color: "saas-accent"
    },
    {
      icon: DollarSign,
      value: "ROI",
      label: "Measurable cost savings and velocity gains",
      description: "Clear financial impact from reduced manual overhead",
      color: "saas-primary"
    },
    {
      icon: Heart,
      value: "More",
      label: "More innovation, less toil",
      description: "Engineers focus on building features, not fighting infrastructure",
      color: "saas-accent"
    }
  ];

  const testimonialHighlights = [
    {
      quote: "We only automated what made business sense—no wasteful experimentation",
      author: "VP Engineering",
      company: "Mid-Market SaaS",
      metric: "Clear ROI"
    },
    {
      quote: "Our developers actually love the tools because they eliminate real friction",
      author: "CTO",
      company: "B2B Software Company",
      metric: "Real Adoption"
    },
    {
      quote: "Finally, consultants who tell us 'no' when automation doesn't make sense",
      author: "Head of Product",
      company: "Enterprise SaaS",
      metric: "Honest Partnership"
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Book a short call and share your key bottlenecks",
      description: "Quick introductory call to understand your team's specific friction points",
      duration: "15 minutes",
      icon: Clock,
      color: "saas-primary"
    },
    {
      number: 2,
      title: "We review your workflows and talk to your engineering team",
      description: "Deep dive into how work actually gets done to identify automation opportunities",
      duration: "1-2 weeks",
      icon: Users,
      color: "secondary"
    },
    {
      number: 3,
      title: "We outline where automation makes sense and show projected impact",
      description: "Clear recommendations with velocity gains and cost-benefit analysis",
      duration: "1 week",
      icon: BarChart,
      color: "saas-accent"
    },
    {
      number: 4,
      title: "You get a plain-English plan with ROI and a clear 'go/no-go' decision point",
      description: "Transparent roadmap with costs, implementation timeline, and expected outcomes",
      duration: "Decision time",
      icon: CheckCircle,
      color: "saas-primary"
    }
  ];

  const guarantees = [
    {
      icon: CheckCircle,
      title: "Practical implementations, not just theory",
      description: "Solutions based on real production environments, not abstract consulting frameworks",
      color: "saas-primary"
    },
    {
      icon: Users,
      title: "You stay in control at every step",
      description: "Clear decision points with full transparency on costs, risks, and outcomes",
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "If we don't find a fit, we'll tell you",
      description: "Honest assessment—we won't recommend automation if it doesn't make business sense",
      color: "saas-accent"
    }
  ];

  const ctaBenefits = [
    { icon: CheckCircle, text: "No obligation" },
    { icon: Calendar, text: "15-minute consultation" },
    { icon: Sparkles, text: "Clear next steps" }
  ];

  return (
    <div className="min-h-screen saas-homepage-hero text-foreground antialiased">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-16 lg:pt-20 pb-0 saas-homepage-hero">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pb-10 lg:pb-14">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-5">
                <img
                  src={iconLogo}
                  alt="Cyberaktive"
                  className="w-14 h-14 md:w-16 md:h-16"
                />
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl mb-5 lg:mb-6">
                <span className="text-white drop-shadow-lg block font-black leading-tight">
                  Turn Developer Burnout and Feature Delays Into Competitive Velocity—
                  <span className="block mt-1">Guaranteed in 90 Days</span>
                </span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-white/95 drop-shadow-md mb-6 max-w-3xl mx-auto font-medium leading-relaxed">
                We implement AI Automation Solutions that accelerate product development and eliminate repetitive workflows for mid-sized SaaS teams, recovering <span className="font-bold text-white">$200K+ in productivity annually</span> and shipping <span className="font-bold text-white">40% faster</span>—with measurable ROI in one quarter, <span className="font-bold text-white">80%+ team adoption</span>, and <span className="font-bold text-white">zero disruption risk</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center mb-6">
                <CalendarModal>
                  <Button
                    size="lg"
                    className="saas-premium-button text-white font-semibold text-base px-8 py-5 rounded-xl shadow-xl"
                  >
                    Book Your Free AI Readiness Call
                  </Button>
                </CalendarModal>
              </div>

              <div className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white/90 text-sm md:text-base font-semibold shadow-xl">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Proven Results in 90 Days | Measurable ROI or Transparent Next Steps</span>
              </div>
            </div>
          </div>

          {/* Problem Awareness Strip */}
          <div className="bg-slate-900/80 backdrop-blur-sm border-y border-white/10 py-4">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
              <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
                  {painPoints.map((point, index) => (
                    <div key={index} className="flex items-center justify-center md:justify-start gap-2 text-white/80">
                      <point.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm font-medium">{point.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Differentiator Cards */}
          <div className="bg-gradient-to-b from-slate-900/60 to-transparent py-10 lg:py-12">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {differentiators.map((item, index) => (
                    <Card key={index} className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-teal-200 dark:border-teal-700 hover:border-teal-400 dark:hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <CardContent className="pt-5 pb-5">
                        <div className="w-11 h-11 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                          <item.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 text-center">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 text-center leading-relaxed">
                          {item.description}
                        </p>
                        <div className="text-center">
                          <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                            {item.badge}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Metrics */}
          <div className="bg-slate-900/40 backdrop-blur-sm py-6 lg:py-8 border-t border-white/10">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
              <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {metrics.map((metric, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-2xl lg:text-3xl font-black text-white drop-shadow-lg">
                        {metric.value}
                      </div>
                      <div className="text-xs lg:text-sm text-white/70 font-medium">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <Section className="section-mesh-saas relative">
          <FloatingOrb size="large" style={{ top: "10%", left: "5%" }} />
          <FloatingOrb size="small" style={{ top: "60%", right: "8%" }} />
          <GeometricBlob style={{ top: "30%", right: "15%", width: "150px", height: "150px" }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground saas-text-glow">
                  What Slows Down Most SaaS Companies?
                </h2>
                <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
                  Common challenges that prevent you from shipping faster and scaling efficiently
                </p>
              </div>
            </RevealOnScroll>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <RevealOnScroll delay={200}>
                  <GlassCard className="h-full flex flex-col justify-center saas-gradient-border">
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-foreground">
                        The SaaS Growth Challenge
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        You built your SaaS company to solve real problems and grow profitably.
                        Instead, your developers are drowning in manual tasks, your competitors are shipping AI features faster,
                        and you're uncertain which automation investments will actually deliver ROI.
                      </p>
                      <div className="flex items-center space-x-2 text-orange-600 font-semibold text-sm">
                        <TrendingDown className="w-4 h-4" />
                        <span>Growth Barriers</span>
                      </div>
                    </div>
                  </GlassCard>
                </RevealOnScroll>

                {problems.slice(0, 2).map((problem, index) => (
                  <RevealOnScroll key={index} delay={300 + index * 100}>
                    <GlassCard className="text-center group hover:scale-105 transition-all duration-300 h-full">
                      <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:bg-orange-200 transition-colors">
                        <problem.icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <h4 className="font-bold text-sm mb-1.5 text-foreground">
                        {problem.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {problem.description}
                      </p>
                      <div className="inline-block px-2 py-0.5 bg-orange-100 rounded-full text-xs font-semibold text-orange-600">
                        {problem.impact}
                      </div>
                    </GlassCard>
                  </RevealOnScroll>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {problems.slice(2, 8).map((problem, index) => (
                  <RevealOnScroll key={index + 2} delay={400 + index * 100}>
                    <GlassCard className="text-center group hover:scale-105 transition-all duration-300">
                      <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:bg-orange-200 transition-colors">
                        <problem.icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <h4 className="font-bold text-sm mb-1.5 text-foreground">
                        {problem.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {problem.description}
                      </p>
                      <div className="inline-block px-2 py-0.5 bg-orange-100 rounded-full text-xs font-semibold text-orange-600">
                        {problem.impact}
                      </div>
                    </GlassCard>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            <RevealOnScroll delay={800}>
              <div className="text-center mt-10">
                <div className="inline-block bg-orange-50 rounded-xl px-6 py-4 backdrop-blur-sm">
                  <p className="text-base text-foreground mb-1 font-semibold">
                    Sound familiar?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    These aren't just inconveniences—they're existential threats that prevent your company from defending market position and scaling profitably.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Section>

        {/* Solution Section */}
        <Section className="section-mesh-saas relative bg-gradient-to-br from-teal-50/30 via-cyan-50/20 to-emerald-50/30">
          <FloatingOrb size="large" style={{ top: "15%", right: "10%" }} />
          <FloatingOrb size="medium" style={{ bottom: "20%", left: "8%" }} />
          <GeometricBlob style={{ top: "40%", left: "5%", width: "120px", height: "120px" }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground saas-text-glow">
                  Where AI Automation Pays Off (If You Get It Right)
                </h2>
                <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
                  Real velocity gains when automation is implemented strategically
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <div className="lg:col-span-2">
                <RevealOnScroll delay={200}>
                  <GlassCard className="h-full bg-gradient-to-br from-teal-500/5 to-cyan-500/5 group">
                    <div className="flex flex-col lg:flex-row items-center gap-8 h-full">
                      <div className="flex-1 space-y-6">
                        <div className="inline-block">
                          <div className="text-5xl font-black text-teal-500/20 mb-4">02</div>
                          <h3 className="premium-text-xl text-foreground mb-4">
                            The Right Automation Approach
                          </h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Your SaaS team ships faster with AI handling repetitive workflows.
                          Your engineers focus on high-value feature development,
                          and you achieve the growth velocity and unit economics you envisioned.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center space-x-2 bg-teal-500/10 px-4 py-2 rounded-full">
                            <TrendingUp className="w-4 h-4 text-teal-600" />
                            <span className="text-sm font-semibold text-teal-600">Better Unit Economics</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-cyan-500/10 px-4 py-2 rounded-full">
                            <Heart className="w-4 h-4 text-cyan-600" />
                            <span className="text-sm font-semibold text-cyan-600">Strategic Focus</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <CodeFrame title="AI Workflow Demo" className="w-80">
                          <div className="space-y-2 text-sm">
                            <div className="text-green-400">✓ Code commit triggered</div>
                            <div className="text-cyan-400">→ AI runs automated testing suite</div>
                            <div className="text-yellow-400">→ Security & compliance checks</div>
                            <div className="text-green-400">✓ Deployment pipeline initiated</div>
                            <div className="text-cyan-400">→ Documentation auto-updated</div>
                            <div className="text-green-400">✓ Engineering team notified</div>
                            <div className="text-teal-400 font-bold">ROI ↑</div>
                          </div>
                        </CodeFrame>
                      </div>
                    </div>
                  </GlassCard>
                </RevealOnScroll>
              </div>

              <div className="lg:col-span-1">
                <RevealOnScroll delay={400}>
                  <GlassCard className="h-full flex flex-col justify-between text-center group hover:scale-105 transition-all duration-300">
                    <div className="space-y-6">
                      <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-cyan-500/30 transition-colors">
                        <TrendingUp className="w-8 h-8 text-cyan-600" />
                      </div>
                      <div>
                        <div className="text-4xl font-black text-cyan-600 mb-2">ROI</div>
                        <h4 className="font-bold text-lg text-foreground mb-2">
                          Measurable Impact
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Clear productivity metrics and time-to-ROI projections for every implementation
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </RevealOnScroll>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {bigBenefits.map((benefit, index) => (
                <RevealOnScroll key={index} delay={600 + index * 100}>
                  <GlassCard className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-teal-500/20 transition-colors">
                      <benefit.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="text-3xl font-black text-teal-600 mb-2">{benefit.metric}</div>
                    <h4 className="font-bold text-lg text-foreground mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>

        {/* Process Section */}
        <Section
          id="process"
          className="section-mesh-saas relative bg-gradient-to-br from-cyan-50/40 via-teal-50/30 to-emerald-50/40"
        >
          <FloatingOrb size="large" style={{ top: "20%", right: "8%" }} />
          <FloatingOrb size="medium" style={{ bottom: "15%", left: "12%" }} />
          <GeometricBlob style={{ top: "50%", left: "5%", width: "160px", height: "160px" }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-6">
                <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground saas-text-glow">
                  Real Automation Wins, ROI-Backed Change
                </h2>
                <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                  We're not here to sell AI hype. Our job is to identify where automation will actually move the needle—improving your velocity and margins with clear, measurable ROI.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h3 className="text-xl font-bold text-foreground mb-2">How We Work with You</h3>
                <p className="text-muted-foreground">
                  A transparent, practical approach to finding real automation opportunities in your SaaS operation
                </p>
              </div>
            </RevealOnScroll>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {processSteps.map((step, index) => (
                  <RevealOnScroll key={index} delay={200 + index * 100}>
                    <GlassCard
                      className="text-center group hover:scale-105 transition-all duration-300 h-full"
                    >
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-black shadow-lg">
                        {step.number}
                      </div>

                      <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500/30 transition-colors">
                        <step.icon className="w-8 h-8 text-teal-600" />
                      </div>

                      <h3 className="font-bold text-lg mb-3 text-foreground">
                        {step.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="inline-block px-3 py-1 bg-cyan-500/10 rounded-full text-xs font-semibold text-cyan-600">
                        {step.duration}
                      </div>

                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                          <ArrowRight className="w-6 h-6 text-teal-500/40" />
                        </div>
                      )}
                    </GlassCard>
                  </RevealOnScroll>
                ))}
              </div>

              <RevealOnScroll delay={800}>
                <GlassCard className="text-center bg-gradient-to-r from-teal-500/10 via-cyan-500/5 to-teal-500/10 max-w-3xl mx-auto">
                  <div className="max-w-2xl mx-auto">
                    <h3 className="text-lg text-foreground mb-4 font-bold">
                      Ready to Get Started?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
                      Book a quick call to see if automation can deliver real value for your SaaS team
                    </p>
                    <Button
                      size="lg"
                      className="saas-premium-button text-white font-semibold px-12 py-6 rounded-2xl group"
                      onClick={() => scrollToSection('calendar')}
                    >
                      <Clock className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      Book Your Introductory Call
                    </Button>
                  </div>
                </GlassCard>
              </RevealOnScroll>
            </div>
          </div>
        </Section>

        {/* Results Section */}
        <Section className="section-mesh-saas relative bg-gradient-to-br from-emerald-50/30 via-teal-50/20 to-cyan-50/30">
          <FloatingOrb size="large" style={{ top: "10%", right: "5%" }} />
          <FloatingOrb size="medium" style={{ bottom: "25%", left: "5%" }} />
          <GeometricBlob style={{ top: "40%", left: "10%", width: "160px", height: "160px" }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground saas-text-glow">
                  Results That Matter
                </h2>
                <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
                  Measurable outcomes from strategic automation implementation
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <div className="lg:col-span-2">
                <RevealOnScroll delay={200}>
                  <GlassCard className="h-full bg-gradient-to-br from-teal-500/5 to-cyan-500/5">
                    <div className="grid grid-cols-2 gap-8 h-full">
                      {results.map((result, index) => (
                        <div key={index} className="text-center group">
                          <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <result.icon className="w-8 h-8 text-teal-600" />
                          </div>
                          <div className="text-4xl lg:text-5xl font-black saas-gradient-text mb-2">
                            {result.value}
                          </div>
                          <div className="premium-text-lg font-semibold text-foreground mb-2">
                            {result.label}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </RevealOnScroll>
              </div>

              <div className="lg:col-span-1">
                <RevealOnScroll delay={400}>
                  <GlassCard className="h-full flex flex-col justify-center text-center group hover:scale-105 transition-all duration-300">
                    <div className="space-y-6">
                      <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-cyan-500/30 transition-colors">
                        <TrendingUp className="w-8 h-8 text-cyan-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-foreground mb-2">
                          Strategic Implementation
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          We focus on automations that deliver measurable velocity gains, not just "innovation theater"
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </RevealOnScroll>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center mb-10">
              <RevealOnScroll>
                <GlassCard className="bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10">
                  <h3 className="text-lg text-foreground mb-4 font-bold">
                    Our clients typically see:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-3xl font-black text-teal-600 mb-1">40%</div>
                      <p className="text-xs text-muted-foreground">faster shipping velocity</p>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-cyan-600 mb-1">30%</div>
                      <p className="text-xs text-muted-foreground">reduction in production incidents</p>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-teal-600 mb-1">45%</div>
                      <p className="text-xs text-muted-foreground">improvement in developer satisfaction</p>
                    </div>
                  </div>
                </GlassCard>
              </RevealOnScroll>
            </div>

            <div className="max-w-2xl mx-auto text-center mb-10">
              <RevealOnScroll>
                <p className="text-base text-muted-foreground italic font-medium">
                  While you're reading this, AI-native competitors are automating. Don't fall behind.
                </p>
              </RevealOnScroll>
            </div>

            {/* Testimonials Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {testimonialHighlights.map((testimonial, index) => (
                <RevealOnScroll key={index} delay={600 + index * 100}>
                  <GlassCard className="h-full text-center group hover:scale-105 transition-all duration-300">
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <div className="text-2xl font-black text-cyan-600 mb-3">
                          {testimonial.metric}
                        </div>
                        <blockquote className="text-sm text-muted-foreground mb-4 italic leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      <div className="mt-auto">
                        <div className="font-semibold text-foreground text-sm">
                          {testimonial.author}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={900}>
              <GlassCard className="text-center bg-gradient-to-r from-teal-500/10 via-cyan-500/5 to-teal-500/10 max-w-3xl mx-auto">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-lg text-foreground mb-4 font-bold">
                    Ready for Real Results?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
                    These outcomes come from strategic automation focused on genuine productivity gains,
                    not just adopting AI for its own sake.
                  </p>
                  <CalendarModal>
                    <Button
                      size="lg"
                      className="saas-premium-button text-white font-semibold px-12 py-6 rounded-2xl group"
                    >
                      <TrendingUp className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      Discover What's Possible for Your Team
                    </Button>
                  </CalendarModal>
                </div>
              </GlassCard>
            </RevealOnScroll>
          </div>
        </Section>

        {/* Team Section */}
        <Section
          id="team"
          className="section-mesh-saas relative bg-gradient-to-br from-teal-50/40 via-cyan-50/30 to-emerald-50/40"
        >
          <FloatingOrb size="large" style={{ top: "20%", left: "8%" }} />
          <FloatingOrb size="medium" style={{ bottom: "25%", right: "12%" }} />
          <FloatingOrb size="small" style={{ top: "60%", left: "15%" }} />
          <GeometricBlob style={{ top: "10%", right: "20%", width: "180px", height: "180px" }} />
          <GeometricBlob style={{ bottom: "10%", left: "10%", width: "120px", height: "120px" }} />

          <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground saas-text-glow">
                  Meet Your SaaS Automation Partners
                </h2>
                <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're specialists in software development operations and AI automation, focused on helping SaaS teams like yours achieve real productivity improvements. Our aim: only recommend what works for you—no pushy sales, just clear advice and partnership.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <RevealOnScroll delay={200}>
                <GlassCard className="p-10 group hover:scale-105 transition-all duration-300 saas-gradient-border">
                  <div className="text-center mb-8">
                    <div className="relative w-32 h-32 rounded-3xl mx-auto mb-8 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={liamPhoto}
                        alt="Liam - Founder"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/40 to-cyan-500/40 mix-blend-multiply"></div>
                      <div className="absolute inset-0 ring-2 ring-teal-500/20 rounded-3xl"></div>
                    </div>
                    <h3 className="premium-text-xl text-foreground mb-4 font-bold">
                      Liam - Founder
                    </h3>
                    <div className="inline-block px-6 py-2 bg-teal-500/10 rounded-full border border-teal-500/20 mb-6">
                      <p className="text-sm font-semibold text-teal-600">
                        AI & Automation Specialist for Software Companies
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Specializes in identifying genuine automation opportunities in SaaS operations. Focuses on measurable productivity ROI and practical implementation rather than AI hype. Works directly with engineering teams to understand workflows and recommend automation only where it delivers real velocity gains.
                  </p>
                  <p className="text-teal-600 font-semibold mt-4 text-sm">
                    Helped SaaS teams achieve average productivity ROI of 350% within 8 months
                  </p>

                  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </GlassCard>
              </RevealOnScroll>

              <RevealOnScroll delay={400}>
                <GlassCard className="p-10 group hover:scale-105 transition-all duration-300 saas-gradient-border">
                  <div className="text-center mb-8">
                    <div className="relative w-32 h-32 rounded-3xl mx-auto mb-8 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={alanPhoto}
                        alt="Alan - Advisor"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-teal-500/40 mix-blend-multiply"></div>
                      <div className="absolute inset-0 ring-2 ring-cyan-500/20 rounded-3xl"></div>
                    </div>
                    <h3 className="premium-text-xl text-foreground mb-4 font-bold">
                      Alan - Advisor & Strategic Business Partnerships
                    </h3>
                    <div className="inline-block px-6 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6">
                      <p className="text-sm font-semibold text-cyan-600">
                        Strategic Business Partnerships & Operations
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Brings extensive experience helping software companies improve operational efficiency. Ensures automation implementations align with business objectives and integrate smoothly with existing development processes. Committed to transparent communication and realistic expectations about what AI can and cannot deliver.
                  </p>

                  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </GlassCard>
              </RevealOnScroll>
            </div>
          </div>
        </Section>

        {/* Trust/Risk Reversal Section */}
        <Section
          id="risk-reversal"
          className="section-mesh-saas relative bg-gradient-to-br from-emerald-50/40 via-teal-50/30 to-cyan-50/40"
        >
          <FloatingOrb size="large" style={{ top: "15%", left: "10%" }} />
          <FloatingOrb size="medium" style={{ bottom: "20%", right: "15%" }} />
          <GeometricBlob style={{ top: "30%", right: "5%", width: "140px", height: "140px" }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground saas-text-glow">
                  Proven Approach, No Guesswork
                </h2>
                <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
                  A transparent, practical partnership focused on real productivity value
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {guarantees.map((guarantee, index) => (
                <RevealOnScroll key={index} delay={200 + index * 100}>
                  <GlassCard
                    className="text-center group hover:scale-105 transition-all duration-300 saas-gradient-border"
                  >
                    <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500/30 transition-colors">
                      <guarantee.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-foreground">
                      {guarantee.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {guarantee.description}
                    </p>

                    <div className="mt-4 w-12 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={800}>
              <div className="text-center mt-10">
                <div className="inline-block bg-teal-500/5 rounded-xl px-6 py-4 backdrop-blur-sm border border-teal-500/10">
                  <p className="text-base text-foreground mb-1 font-semibold">
                    ROI-Focused Partnership
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We only succeed when you see measurable velocity gains and productivity improvements from our recommendations
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Section>

        {/* Calendar/Booking Section */}
        <Section
          id="calendar"
          className="section-mesh-saas relative bg-gradient-to-br from-emerald-50/40 via-teal-50/30 to-cyan-50/40"
        >
          <FloatingOrb size="large" style={{ top: "15%", right: "10%" }} />
          <FloatingOrb size="medium" style={{ bottom: "20%", left: "15%" }} />
          <FloatingOrb size="small" style={{ top: "50%", left: "5%" }} />
          <GeometricBlob style={{ top: "25%", left: "20%", width: "160px", height: "160px" }} />
          <GeometricBlob style={{ bottom: "15%", right: "10%", width: "120px", height: "120px" }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-10">
                <div className="inline-block mb-4">
                  <GlassCard className="px-5 py-2.5 bg-gradient-to-r from-cyan-500/20 to-teal-500/10">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-cyan-600" />
                      <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Free Consultation</span>
                    </div>
                  </GlassCard>
                </div>

                <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground saas-text-glow">
                  Book Your 15-Minute Call
                </h2>
                <p className="premium-text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Quick, no-obligation consultation to see if we can accelerate your development velocity. Pick a time—we'll show you what's possible.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                  <RevealOnScroll delay={200}>
                    <GlassCard className="text-center group hover:scale-105 transition-all duration-300 py-4">
                      <Clock className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-sm text-foreground mb-1">15 Minutes</h3>
                      <p className="text-xs text-muted-foreground">Fast & focused</p>
                    </GlassCard>
                  </RevealOnScroll>

                  <RevealOnScroll delay={300}>
                    <GlassCard className="text-center group hover:scale-105 transition-all duration-300 py-4">
                      <CheckCircle className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-sm text-foreground mb-1">100% Free</h3>
                      <p className="text-xs text-muted-foreground">No strings attached</p>
                    </GlassCard>
                  </RevealOnScroll>

                  <RevealOnScroll delay={400}>
                    <GlassCard className="text-center group hover:scale-105 transition-all duration-300 py-4">
                      <Calendar className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-sm text-foreground mb-1">Clear Next Steps</h3>
                      <p className="text-xs text-muted-foreground">Know what's possible</p>
                    </GlassCard>
                  </RevealOnScroll>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={600}>
              <div className="max-w-3xl mx-auto">
                <GlassCard className="p-0 overflow-hidden border border-teal-500/10 saas-gradient-border">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/booking/EDeYrzypdFYfanS9vQQk"
                    style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px', height: '700px' }}
                    scrolling="no"
                    id="msgsndr-calendar-saas"
                    title="Book Your 15-Minute Introductory Call"
                  />
                  <br />
                </GlassCard>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={800}>
              <div className="text-center mt-10">
                <div className="inline-block bg-cyan-500/5 rounded-xl px-6 py-4 backdrop-blur-sm border border-cyan-500/10">
                  <p className="text-base text-foreground mb-1 font-semibold">
                    See What AI Automation Can Do for Your Team
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Let's discuss whether automation can deliver real velocity gains for your SaaS team
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Section>

        {/* Final CTA Section */}
        <Section
          id="final-cta"
          className="section-mesh-saas relative bg-gradient-to-br from-cyan-50/50 via-teal-50/40 to-emerald-50/30"
        >
          <FloatingOrb size="large" style={{ top: "10%", left: "15%" }} />
          <FloatingOrb size="medium" style={{ bottom: "10%", right: "20%" }} />
          <GeometricBlob style={{ top: "40%", right: "10%", width: "200px", height: "200px" }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <GlassCard className="max-w-3xl mx-auto text-center bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-teal-500/10 saas-gradient-border">
                <div className="space-y-6">
                  <div>
                    <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground saas-text-glow">
                      Automation That Moves the Needle
                    </h2>
                    <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                      You didn't build a SaaS company to have your engineers waste time on toil. Let's figure out where automation can help—and where it can't. Book a quick call and we'll show you what's realistic, what's profitable, and what to skip.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Button
                      size="lg"
                      className="saas-premium-button text-white font-semibold px-12 py-6 rounded-2xl group"
                      onClick={() => scrollToSection('calendar')}
                    >
                      <Calendar className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      Book Your Call Now
                    </Button>

                    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20">
                      <Mail className="w-5 h-5 text-teal-600" />
                      <a
                        href="mailto:team@cyberaktive.com"
                        className="text-foreground hover:text-teal-600 font-semibold transition-colors"
                      >
                        team@cyberaktive.com
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    {ctaBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                        <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                          <benefit.icon className="w-4 h-4 text-teal-600" />
                        </div>
                        <span className="font-medium">
                          {benefit.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-sm text-muted-foreground italic">
                    Every sprint cycle without automation costs you 20-30 developer hours.
                  </div>

                  <div className="flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 rounded-full opacity-60"></div>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
