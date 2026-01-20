import { useState, useEffect } from "react";
import { 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Building2, 
  Briefcase, 
  Scale,
  FileText,
  Search,
  MessageSquare,
  Zap,
  ArrowRight
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LegalAIWorkshops() {
  const [activeTab, setActiveTab] = useState<'lawfirms' | 'inhouse'>('lawfirms');

  useEffect(() => {
    document.title = "AI Workshop for Legal Teams - Practical AI Training in One Afternoon | Cyberaktive";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get your legal team using practical AI automations in a single afternoon. See immediate results in contract review, legal research, and document drafting. No tech expertise required.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'AI Workshop for Legal Teams - Practical AI Training in One Afternoon');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Get your legal team using practical AI automations in a single afternoon. See immediate results in contract review, legal research, and document drafting. No tech expertise required.');
    }

    return () => {
      document.title = "Cyberaktive AI - Legal AI Consulting & Automation";
    };
  }, []);

  const scrollToForm = () => {
    document.getElementById('workshop-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const lawFirmBenefits = [
    {
      icon: TrendingUp,
      title: "Win more clients",
      description: "Deliver faster turnaround times without increasing headcount"
    },
    {
      icon: Users,
      title: "Retain top talent",
      description: "Top talent expects modern tools, not outdated manual processes"
    },
    {
      icon: Building2,
      title: "Scale profitably",
      description: "Handle higher caseloads with your existing team capacity"
    },
    {
      icon: Zap,
      title: "Stay competitive",
      description: "Clients increasingly demand AI-enabled efficiency and pricing"
    }
  ];

  const inHouseBenefits = [
    {
      icon: TrendingUp,
      title: "Reduce external counsel spend",
      description: "Handle more work internally with AI-powered efficiency"
    },
    {
      icon: Users,
      title: "Do more with less",
      description: "Manage growing workloads without burnout"
    },
    {
      icon: Clock,
      title: "Respond faster",
      description: "Accelerated contract review and legal research for business needs"
    },
    {
      icon: Building2,
      title: "Demonstrate value",
      description: "Show measurable time and cost savings to leadership"
    }
  ];

  const results = [
    {
      icon: Zap,
      title: "Immediate implementation",
      description: "Your team starts using automations within 2 hours of completing the workshop"
    },
    {
      icon: Search,
      title: "Cut research time in half",
      description: "AI-powered legal research delivers comprehensive results in minutes, not hours"
    },
    {
      icon: FileText,
      title: "Faster contract review",
      description: "Identify key clauses, risks, and redlines 3x faster with AI assistance"
    },
    {
      icon: CheckCircle,
      title: "Better work product",
      description: "Improve consistency and accuracy while simultaneously reducing review time"
    },
    {
      icon: Clock,
      title: "Reclaim 5-10 hours per week",
      description: "Per lawyer by automating routine correspondence, drafting, and research"
    },
    {
      icon: MessageSquare,
      title: "Real skills, not theory",
      description: "Hands-on training with Claude, ChatGPT Enterprise, and legal-specific AI tools"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Pre-Workshop Assessment",
      subtitle: "Before we arrive",
      description: "Our AI-powered assessment surveys your team to identify the 2-3 repetitive processes draining the most time. We pinpoint exactly where AI will deliver immediate ROI for your specific workflows—whether that's contract review, legal research, client communications, or document drafting."
    },
    {
      number: "2",
      title: "Live Workshops: We Come With Pre-Built Automations Your Team Needs",
      subtitle: "This isn't theory",
      description: "We show up with a pre-built automation of one of your actual processes—optimized and ready to use. Your team watches their own work get done 10x faster, live on screen. Then we train them hands-on with the specific AI platforms you choose: Claude for complex legal analysis, ChatGPT Enterprise for drafting, or specialized legal AI tools.",
      bullets: [
        "See your process automated in real-time (breaking through skepticism instantly)",
        "Learn practical prompts and workflows your lawyers use that same day",
        "Practice on real work examples, not generic exercises",
        "Leave with templates and systems ready to implement immediately"
      ],
      highlight: true
    },
    {
      number: "3",
      title: "4-Week Adoption Follow-Up",
      subtitle: "Preventing 'workshop amnesia'",
      description: "Most workshops fail because teams forget what they learned. We prevent this with four weekly 1-hour group calls where we:",
      bullets: [
        "Answer specific implementation questions as your team uses the tools daily",
        "Refine prompts and workflows based on real usage",
        "Troubleshoot challenges and optimize results",
        "Ensure lasting adoption, not short-term excitement"
      ]
    }
  ];

  const audiences = [
    {
      icon: Briefcase,
      title: "Managing Partners & Senior Partners",
      description: "Who need their firm to stay competitive while attracting and retaining top talent"
    },
    {
      icon: Scale,
      title: "General Counsel & Legal Operations Leaders",
      description: "Who need to reduce external counsel spend and handle more with existing resources"
    },
    {
      icon: Users,
      title: "Any legal team",
      description: "Tired of watching competitors move faster while your lawyers drown in repetitive work"
    }
  ];

  const faqs = [
    {
      question: "Will this actually work for our practice areas?",
      answer: "Yes. We customize the workshop for your specific work—whether that's litigation, corporate law, IP, compliance, or in-house legal operations."
    },
    {
      question: "Our team isn't technical. Can they really learn this?",
      answer: "That's exactly who this is for. If they can use Google, they can use these tools. No coding or technical background required."
    },
    {
      question: "How quickly will we see results?",
      answer: "Your team starts using automations within 2 hours of the workshop. Most firms report measurable time savings within the first week."
    }
  ];

  const currentBenefits = activeTab === 'lawfirms' ? lawFirmBenefits : inHouseBenefits;

  return (
    <div className="min-h-screen flex flex-col homepage-hero text-foreground antialiased">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Section className="section-mesh relative bg-gradient-to-br from-pink-50/40 via-purple-50/30 to-blue-50/40 pt-24 lg:pt-32">
          <FloatingOrb size="large" style={{ top: "15%", left: "5%" }} />
          <FloatingOrb size="medium" style={{ bottom: "20%", right: "15%" }} />
          <FloatingOrb size="small" style={{ top: "50%", right: "25%" }} />
          <GeometricBlob style={{ top: "30%", right: "12%", width: "200px", height: "200px" }} />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-block mb-6">
                  <span className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold shadow-lg">
                    Live AI Training for Legal Teams
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-glow">
                  Stop Losing Hours to Work AI Can Handle in Minutes
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Get your legal team using practical AI automations in a single afternoon—no tech expertise required. See immediate results in contract review, legal research, and document drafting.
                </p>

                <Button 
                  size="lg" 
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Your Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </Section>

        {/* What Your Team Gets - Tabbed Section */}
        <Section className="section-mesh relative bg-gradient-to-br from-blue-50/40 via-white to-purple-50/40">
          <FloatingOrb size="medium" style={{ top: "30%", left: "8%" }} />
          <GeometricBlob style={{ bottom: "20%", right: "5%", width: "150px", height: "150px" }} />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-glow">
                  What Your Team Gets
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Tailored benefits for your specific legal environment
                </p>
              </div>
            </RevealOnScroll>

            {/* Tab Buttons */}
            <RevealOnScroll delay={100}>
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-white/50 backdrop-blur-sm rounded-xl p-1 border border-primary/10">
                  <button
                    onClick={() => setActiveTab('lawfirms')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeTab === 'lawfirms'
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    For Law Firms
                  </button>
                  <button
                    onClick={() => setActiveTab('inhouse')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeTab === 'inhouse'
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    For In-House Teams
                  </button>
                </div>
              </div>
            </RevealOnScroll>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {currentBenefits.map((benefit, index) => (
                <RevealOnScroll key={`${activeTab}-${index}`} delay={150 + index * 100}>
                  <GlassCard className="group hover:scale-105 transition-all duration-300 gradient-border h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>

        {/* Results You'll See */}
        <Section className="section-mesh relative bg-gradient-to-br from-purple-50/40 via-pink-50/30 to-blue-50/40">
          <FloatingOrb size="large" style={{ top: "20%", right: "10%" }} />
          <FloatingOrb size="small" style={{ bottom: "30%", left: "15%" }} />
          <GeometricBlob style={{ top: "40%", left: "5%", width: "120px", height: "120px" }} />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-glow">
                  The Results You'll See
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Measurable improvements from day one
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {results.map((result, index) => (
                <RevealOnScroll key={index} delay={100 + index * 75}>
                  <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {result.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>

        {/* Workshop Process */}
        <Section className="section-mesh relative bg-gradient-to-br from-blue-50/40 via-white to-pink-50/40">
          <FloatingOrb size="medium" style={{ top: "25%", left: "5%" }} />
          <FloatingOrb size="large" style={{ bottom: "15%", right: "8%" }} />
          <GeometricBlob style={{ top: "60%", right: "15%", width: "180px", height: "180px" }} />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-glow">
                  How Our Workshop Process Works
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A proven three-phase approach that delivers lasting results
                </p>
              </div>
            </RevealOnScroll>

            {/* Process Timeline */}
            <div className="max-w-4xl mx-auto">
              {/* Horizontal Step Indicators */}
              <RevealOnScroll delay={100}>
                <div className="hidden md:flex justify-between items-center mb-8 px-8">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        step.highlight 
                          ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {step.number}
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="w-24 lg:w-32 h-1 bg-gradient-to-r from-primary/30 to-accent/30 mx-4 rounded-full" />
                      )}
                    </div>
                  ))}
                </div>
              </RevealOnScroll>

              {/* Step Cards */}
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <RevealOnScroll key={index} delay={200 + index * 150}>
                    <GlassCard className={`group hover:scale-[1.02] transition-all duration-300 ${
                      step.highlight ? 'gradient-border ring-2 ring-primary/20' : 'gradient-border'
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 md:hidden ${
                          step.highlight 
                            ? 'bg-gradient-to-r from-primary to-accent text-white' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                              {step.subtitle}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-3">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {step.description}
                          </p>
                          {step.bullets && (
                            <ul className="space-y-2">
                              {step.bullets.map((bullet, bIndex) => (
                                <li key={bIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </GlassCard>
                  </RevealOnScroll>
                ))}
              </div>

              {/* Outcome Highlight */}
              <RevealOnScroll delay={700}>
                <div className="mt-8 text-center">
                  <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl px-6 py-4 border border-primary/20">
                    <p className="text-foreground font-semibold">
                      The outcome? AI becomes part of how your team actually works—not just another "nice idea" that fades away.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </Section>

        {/* Who This Is For */}
        <Section className="section-mesh relative bg-gradient-to-br from-pink-50/40 via-purple-50/30 to-blue-50/40">
          <FloatingOrb size="small" style={{ top: "20%", right: "15%" }} />
          <GeometricBlob style={{ bottom: "25%", left: "8%", width: "140px", height: "140px" }} />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-glow">
                  Who This Is For
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {audiences.map((audience, index) => (
                <RevealOnScroll key={index} delay={100 + index * 100}>
                  <GlassCard className="text-center group hover:scale-105 transition-all duration-300 gradient-border h-full">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <audience.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {audience.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {audience.description}
                    </p>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>

        {/* Ready to Transform CTA */}
        <Section className="relative bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-shift">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Transform How Your Legal Team Works?
                </h2>
                <p className="text-lg mb-4 opacity-90">
                  Most legal professionals don't realize how quickly they can start using AI—not in months, in hours.
                </p>
                <p className="text-base mb-6 opacity-80">
                  Your competitors are already implementing this. Your clients are starting to expect it. Your team wants to work with modern tools.
                </p>
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30 mb-6">
                  <p className="font-semibold">
                    Book your workshop now and see measurable productivity gains within 30 days.
                  </p>
                </div>
                <div>
                  <Button 
                    size="lg" 
                    onClick={scrollToForm}
                    className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book Your Discovery Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Section>

        {/* Form Section */}
        <Section id="workshop-form" className="section-mesh relative bg-gradient-to-br from-blue-50/40 via-white to-purple-50/40">
          <FloatingOrb size="medium" style={{ top: "30%", right: "10%" }} />
          <GeometricBlob style={{ bottom: "20%", left: "5%", width: "160px", height: "160px" }} />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-glow">
                  Get Started Today
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Schedule a 15-minute discovery call to see if our workshop is right for your team.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="max-w-3xl mx-auto">
                <GlassCard className="gradient-border">
                  <div className="grid md:grid-cols-5 gap-6">
                    {/* Left side - Info */}
                    <div className="md:col-span-2 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        What happens next?
                      </h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>We'll discuss your specific challenges</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Identify the processes draining the most time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Explore how our workshop delivers immediate results</span>
                        </li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-4 italic">
                        We'll be in touch within 24 hours
                      </p>
                    </div>

                    {/* Right side - Form */}
                    <div className="md:col-span-3">
                      <div className="min-h-[400px]">
                        <iframe
                          src="https://api.leadconnectorhq.com/widget/form/Cj9UhspkV2U5S7OBr13E"
                          style={{ width: '100%', height: '450px', border: 'none', borderRadius: '8px' }}
                          id="workshop-form-Cj9UhspkV2U5S7OBr13E"
                          data-layout="{'id':'INLINE'}"
                          data-form-name="Workshop Discovery Form"
                          data-height="450"
                          data-form-id="Cj9UhspkV2U5S7OBr13E"
                          title="Workshop Discovery Form"
                          data-testid="iframe-workshop-form"
                        />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </RevealOnScroll>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="section-mesh relative bg-gradient-to-br from-purple-50/40 via-pink-50/30 to-blue-50/40">
          <FloatingOrb size="small" style={{ top: "25%", left: "10%" }} />
          <GeometricBlob style={{ bottom: "30%", right: "8%", width: "120px", height: "120px" }} />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-glow">
                  Still Have Questions?
                </h2>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="max-w-2xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`faq-${index}`}
                      className="bg-white/60 backdrop-blur-sm rounded-xl border border-primary/10 px-6 overflow-hidden"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </RevealOnScroll>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="relative bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Book Your Discovery Call Now
                </h2>
                <Button 
                  size="lg" 
                  onClick={scrollToForm}
                  className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
