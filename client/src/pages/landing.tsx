import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Scale, Rocket, Lightbulb, Compass, Code2, Users, Clock, TrendingUp, Shield, ArrowRight, Mail, Calendar, Unlock } from "lucide-react";
import iconLogo from "@assets/Cyberaktive Logos t_1757653334662.png";
import CalendarModal from "@/components/calendar-modal";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Landing() {
  const [tickerIndex, setTickerIndex] = useState(0);

  const tickerStatements = [
    "Your competitors are automating while you're still doing manual work",
    "AI-native companies are moving 3x faster than traditional firms",
    "Top talent is leaving for companies with better technology",
    "Every quarter without automation costs you 6-figures in productivity"
  ];

  useEffect(() => {
    document.title = "Cyberaktive - AI Consultants & Developers for Legal Teams and SaaS Companies";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI consultants and developers helping legal teams and SaaS companies implement automation that delivers measurable ROI in 90 days. Reduce costs by 30-40%, ship faster, and eliminate repetitive work.');
    }

    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerStatements.length);
    }, 4000);

    return () => {
      clearInterval(interval);
      document.title = "Cyberaktive AI";
    };
  }, []);

  const keyBenefits = [
    "Reduce operational costs by 30-40% through intelligent automation",
    "Ship faster and scale revenue without proportional headcount growth",
    "Eliminate repetitive work so teams focus on strategy, not busywork"
  ];

  const industryCards = [
    {
      icon: Scale,
      title: "AI for Law Firms & In-House Counsel",
      description: "Turn legal busywork into billable hours. We automate client intake, document processing, and research workflows for mid-sized legal teams—saving $150K+ annually while maintaining zero ethics risk. Plus, we build marketing and sales automations including lead generation, lead follow-up, speed-to-lead optimization, content creation, and CRM hygiene to help legal teams grow their practice efficiently.",
      outcomes: [
        "More billable hours, less admin",
        "Faster client onboarding",
        "75%+ team adoption in 90 days"
      ],
      cta: "Explore AI for Legal",
      link: "/ai-consulting-development-legal",
      color: "pink"
    },
    {
      icon: Rocket,
      title: "AI for SaaS",
      description: "Ship features 40% faster without burning out your engineers. We automate CI/CD pipelines, testing, and deployment workflows—so your developers build products, not fight infrastructure. We also create marketing and sales automations including lead generation, lead follow-up, speed-to-lead optimization, content creation, and CRM hygiene to help SaaS companies scale their customer acquisition efficiently.",
      outcomes: [
        "3-5x faster than big consulting",
        "Developers focus on innovation",
        "Measurable velocity gains in 90 days"
      ],
      cta: "Explore AI for SaaS",
      link: "/ai-consulting-and-development-saas-software",
      color: "teal"
    }
  ];

  const services = [
    {
      icon: Lightbulb,
      title: "AI Readiness & Strategy Workshops",
      description: "Stop wasting budget on random AI experiments. We assess your workflows, identify high-ROI automation opportunities, and build a clear 90-day implementation roadmap.",
      features: [
        "Workflow analysis and bottleneck identification",
        "ROI-ranked automation opportunities",
        "90-day implementation roadmap with clear costs",
        "Team readiness assessment"
      ],
      ideal: "Teams that need strategic clarity before implementation"
    },
    {
      icon: Compass,
      title: "Hands-On AI Consulting",
      description: "You don't need another 90-page strategy deck. Our developers are the consultants—we work alongside your team to implement automations that actually get used.",
      features: [
        "Direct access to senior engineers who've shipped production AI",
        "Tool-agnostic recommendations (we work with your existing stack)",
        "Weekly progress reviews with measurable KPIs",
        "Team training and adoption support"
      ],
      ideal: "Teams ready to implement with expert guidance"
    },
    {
      icon: Code2,
      title: "Custom AI & Automation Development",
      description: "Need it built, not just planned? We develop custom automations, AI agents, and workflow integrations tailored to your operations.",
      features: [
        "Production-ready automation built to your specs",
        "Integration with existing tools (no platform lock-in)",
        "Comprehensive documentation and training",
        "90-day support and iteration"
      ],
      ideal: "Teams that need dedicated development resources"
    }
  ];

  const stats = [
    { value: "$175K+", label: "Average Annual Cost Savings", sublabel: "Across legal and SaaS clients" },
    { value: "80%+", label: "Team Adoption Rate", sublabel: "Because we build what actually gets used" },
    { value: "90 Days", label: "Time to Measurable ROI", sublabel: "Not quarters, not years—results in 90 days" },
    { value: "25+", label: "Teams Served", sublabel: "Legal firms and SaaS companies from 10-500 employees" }
  ];

  const outcomes = [
    "35-40% reduction in manual operational tasks",
    "3-5x faster implementation than traditional consulting firms",
    "75%+ of automations still in active use after 12 months",
    "Zero failed pilots—every engagement delivers measurable value"
  ];

  const testimonials = [
    {
      quote: "We only implemented what delivered clear ROI—no wasteful experimentation.",
      author: "Legal Operations Director",
      company: "Mid-Market Law Firm"
    },
    {
      quote: "Our developers actually use the automations because they solve real problems.",
      author: "VP Engineering",
      company: "B2B SaaS Company"
    },
    {
      quote: "Finally, partners who tell us 'no' when something won't work. That honesty is rare.",
      author: "Head of Product",
      company: "Enterprise SaaS"
    }
  ];

  const differentiators = [
    {
      icon: Users,
      title: "Engineers Who Consult",
      description: "Our developers ARE the consultants. We understand technical feasibility and business ROI because we're the ones building it. No handoffs to offshore teams learning on your budget."
    },
    {
      icon: Clock,
      title: "Speed Over Decks",
      description: "Big consulting firms spend months on PowerPoints. We deliver working automations in weeks. Measurable productivity gains in 90 days—3-5x faster than traditional firms."
    },
    {
      icon: Shield,
      title: "Honest Partners",
      description: "We'll tell you 'no' when automation doesn't make business sense. We only implement what delivers clear ROI. If there's no business case, we say so."
    },
    {
      icon: Unlock,
      title: "No Long-Term Lock-In",
      description: "Tool-agnostic solutions that integrate with your existing stack. You own the automation, not us. No proprietary platforms, no vendor dependency."
    }
  ];

  const ctaBenefits = [
    { icon: CheckCircle, text: "No obligation, no sales pressure" },
    { icon: Calendar, text: "15-minute focused consultation" },
    { icon: TrendingUp, text: "Clear next steps or honest 'not a fit'" }
  ];

  return (
    <div className="min-h-screen homepage-hero text-foreground antialiased">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-16 lg:pt-24 pb-16 lg:pb-20 homepage-hero">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={iconLogo}
                  alt="Cyberaktive"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 lg:mb-6">
                <span className="text-white drop-shadow-lg block font-black leading-tight">
                  Your Competitors Are Already Automating.
                  <span className="block mt-2">Don't Get Left Behind.</span>
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl text-white/90 drop-shadow-md mb-4 font-semibold">
                AI Consultants & Developers for Legal Teams and SaaS Companies
              </h2>

              <p className="text-base md:text-lg text-white/85 drop-shadow-md mb-6 max-w-3xl mx-auto leading-relaxed">
                We help mid-sized legal teams and SaaS companies (10-500 employees) implement AI automation that delivers measurable ROI in 90 days. While others waste budget on pilots that fail, we deliver working solutions that reduce costs, accelerate revenue, and free your team to focus on high-value work.
              </p>

              <div className="flex flex-col items-center gap-3 mb-6 max-w-2xl mx-auto">
                {keyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5">
                <Link href="/ai-consulting-development-legal">
                  <Button
                    size="lg"
                    className="premium-button text-white font-semibold text-base px-8 py-5 rounded-xl shadow-xl"
                  >
                    <Scale className="w-5 h-5 mr-2" />
                    AI for Legal Teams
                  </Button>
                </Link>
                <Link href="/ai-consulting-and-development-saas-software">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold text-base px-8 py-5 rounded-xl shadow-xl"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    AI for SaaS Companies
                  </Button>
                </Link>
              </div>

              <CalendarModal>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 font-semibold px-6 py-4 rounded-xl"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book 15-Minute Strategy Call
                </Button>
              </CalendarModal>

              <div className="mt-6 inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white/90 text-sm font-semibold">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>Proven Results in 90 Days | Measurable ROI or Transparent Next Steps</span>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Ticker */}
        <div className="bg-slate-900 py-4 border-y border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-3 text-white">
              <span className="text-amber-400 font-bold">→</span>
              <p className="text-sm md:text-base font-medium text-center transition-opacity duration-500">
                {tickerStatements[tickerIndex]}
              </p>
            </div>
          </div>
        </div>

        {/* Who We Serve Section */}
        <Section className="section-mesh relative bg-gradient-to-br from-purple-50/40 via-pink-50/30 to-blue-50/40">
          <FloatingOrb size="large" style={{ top: "10%", left: "5%" }} />
          <FloatingOrb size="medium" style={{ bottom: "15%", right: "10%" }} />
          <GeometricBlob style={{ top: "30%", right: "15%", width: "150px", height: "150px" }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground text-glow">
                  Specialized AI Solutions for Your Industry
                </h2>
                <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're not generalists. We understand the unique workflows, compliance requirements, and competitive pressures in your industry.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {industryCards.map((card, index) => (
                <RevealOnScroll key={index} delay={index * 200}>
                  <GlassCard className={`h-full p-8 group hover:scale-[1.02] transition-all duration-300 ${card.color === 'pink' ? 'gradient-border' : 'border-2 border-teal-200 hover:border-teal-400'}`}>
                    <div className={`w-14 h-14 ${card.color === 'pink' ? 'bg-pink-100' : 'bg-teal-100'} rounded-xl flex items-center justify-center mb-6`}>
                      <card.icon className={`w-7 h-7 ${card.color === 'pink' ? 'text-pink-600' : 'text-teal-600'}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{card.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{card.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {card.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className={`w-4 h-4 flex-shrink-0 ${card.color === 'pink' ? 'text-pink-500' : 'text-teal-500'}`} />
                          <span className="text-foreground font-medium">{outcome}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={card.link}>
                      <Button className={`w-full ${card.color === 'pink' ? 'premium-button' : 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600'} text-white font-semibold`}>
                        {card.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>

        {/* How We Help Section */}
        <Section className="section-mesh relative bg-gradient-to-br from-blue-50/40 via-indigo-50/30 to-purple-50/40">
          <FloatingOrb size="small" style={{ top: "20%", right: "8%" }} />
          <GeometricBlob style={{ bottom: "20%", left: "10%", width: "120px", height: "120px" }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground text-glow">
                  Real AI Implementation, Not Innovation Theater
                </h2>
                <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're engineers who consult—not consultants who talk. Three ways we help you gain competitive advantage through AI.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <RevealOnScroll key={index} delay={index * 150}>
                  <GlassCard className="h-full p-6 group hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-border/50">
                      <p className="text-xs text-primary font-semibold">
                        Ideal for: {service.ideal}
                      </p>
                    </div>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>

        {/* Social Proof Section */}
        <Section className="section-mesh relative bg-gradient-to-br from-green-50/40 via-emerald-50/30 to-teal-50/40">
          <FloatingOrb size="large" style={{ top: "15%", right: "10%" }} />
          <FloatingOrb size="small" style={{ bottom: "25%", left: "8%" }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground text-glow">
                  Results That Actually Matter
                </h2>
                <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
                  Measurable outcomes from teams that chose speed over analysis paralysis
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <GlassCard className="text-center p-6 group hover:scale-105 transition-all duration-300">
                    <div className="text-3xl lg:text-4xl font-black text-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={400}>
              <GlassCard className="max-w-3xl mx-auto p-6 mb-10">
                <h3 className="text-lg font-bold text-foreground mb-4 text-center">Client Outcomes</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <RevealOnScroll key={index} delay={500 + index * 100}>
                  <GlassCard className="p-6 h-full">
                    <p className="text-sm text-foreground italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                    <div className="text-xs">
                      <span className="font-semibold text-foreground">{testimonial.author}</span>
                      <span className="text-muted-foreground">, {testimonial.company}</span>
                    </div>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>

        {/* Why Cyberaktive Section */}
        <Section className="section-mesh relative bg-gradient-to-br from-purple-50/40 via-pink-50/30 to-rose-50/40">
          <FloatingOrb size="medium" style={{ top: "20%", left: "5%" }} />
          <GeometricBlob style={{ bottom: "15%", right: "10%", width: "140px", height: "140px" }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground text-glow">
                  Why Teams Choose Cyberaktive
                </h2>
                <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
                  We're different from traditional consultants—and our clients notice immediately
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
              {differentiators.map((diff, index) => (
                <RevealOnScroll key={index} delay={index * 150}>
                  <GlassCard className="p-6 h-full group hover:scale-105 transition-all duration-300 gradient-border">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mb-5">
                      <diff.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{diff.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{diff.description}</p>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={500}>
              <div className="text-center">
                <div className="inline-block bg-accent/10 rounded-xl px-6 py-4 border border-accent/20">
                  <p className="text-lg font-bold text-foreground mb-1">ROI-Focused Partnership</p>
                  <p className="text-sm text-muted-foreground">We only succeed when you see measurable productivity improvements and cost savings.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Section>

        {/* Final CTA Section */}
        <Section
          id="final-cta"
          className="section-mesh relative bg-gradient-to-br from-pink-50/50 via-purple-50/40 to-indigo-50/30"
        >
          <FloatingOrb size="large" style={{ top: "10%", left: "15%" }} />
          <FloatingOrb size="medium" style={{ bottom: "10%", right: "20%" }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <GlassCard className="max-w-3xl mx-auto text-center bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 gradient-border">
                <div className="space-y-6">
                  <div>
                    <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground text-glow">
                      Stop Watching Competitors Pull Ahead
                    </h2>
                    <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                      You didn't build your company to waste time on manual work. Every quarter without automation costs you productivity, talent retention, and competitive positioning. Let's figure out where AI can help—and where it can't.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/ai-consulting-development-legal">
                      <Button
                        size="lg"
                        className="premium-button text-white font-semibold px-8 py-5 rounded-xl"
                      >
                        <Scale className="w-5 h-5 mr-2" />
                        AI for Legal Teams
                      </Button>
                    </Link>
                    <Link href="/ai-consulting-and-development-saas-software">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-8 py-5 rounded-xl"
                      >
                        <Rocket className="w-5 h-5 mr-2" />
                        AI for SaaS Companies
                      </Button>
                    </Link>
                  </div>

                  <CalendarModal>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-primary/30 text-foreground hover:bg-primary/10 font-semibold px-6 py-4 rounded-xl"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book 15-Minute Strategy Call
                    </Button>
                  </CalendarModal>

                  <div className="flex items-center justify-center gap-4 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-border/30 mx-auto w-fit">
                    <Mail className="w-5 h-5 text-primary" />
                    <a
                      href="mailto:team@cyberaktive.com"
                      className="text-foreground hover:text-primary font-semibold transition-colors"
                    >
                      team@cyberaktive.com
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {ctaBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                          <benefit.icon className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-sm font-medium">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-sm text-amber-600 font-semibold italic">
                    Every week without automation costs your team 20-30 hours of productivity.
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
