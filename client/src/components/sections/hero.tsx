import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Code2, Clock, Unlock, TrendingDown, Users, FileSearch } from "lucide-react";
import iconLogo from "@assets/Cyberaktive Logos t_1757653334662.png";
import CalendarModal from "@/components/calendar-modal";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const differentiators = [
    {
      icon: Code2,
      title: "We're In The Weeds With You",
      description: "Our developers ARE the consultants. We understand legal workflows, technical feasibility, and what's actually possible—because we're the ones implementing it. No handoffs to junior teams learning on your dime.",
      badge: "Technical + Legal Expertise"
    },
    {
      icon: Clock,
      title: "90 Days to ROI, Not 90-Page Reports",
      description: "Big consulting firms deliver strategy decks. We deliver working automations your team uses daily. Measurable savings in one quarter or you don't pay.",
      badge: "Results Guaranteed"
    },
    {
      icon: Unlock,
      title: "No Platform Lock-In",
      description: "Vendor-agnostic solutions that work with your existing tech stack (Clio, NetDocuments, iManage). You own the automation, not us.",
      badge: "Freedom & Flexibility"
    }
  ];

  const painPoints = [
    { icon: TrendingDown, text: "Realization rates down 7-10%?" },
    { icon: Users, text: "Best associates leaving for firms with better tech?" },
    { icon: FileSearch, text: "Every RFP asks: What's your AI strategy?" }
  ];

  const metrics = [
    { value: "$150K+", label: "Average Annual Savings" },
    { value: "75%+", label: "Team Adoption Rate" },
    { value: "90 Days", label: "Implementation Guarantee" },
    { value: "12+", label: "Legal Teams Served" }
  ];

  return (
    <section id="hero" className="pt-16 lg:pt-20 pb-0 homepage-hero">
      {/* Main Hero - Above the Fold */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pb-10 lg:pb-14">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <img 
              src={iconLogo} 
              alt="Cyberaktive" 
              className="w-14 h-14 md:w-16 md:h-16"
              data-testid="img-logo"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl mb-5 lg:mb-6" data-testid="heading-hero">
            <span className="text-white drop-shadow-lg block font-black leading-tight">
              Turn Legal Busywork and Lead Qualification Into Consistent Billable Hours—
              <span className="block mt-1">Guaranteed in 90 Days</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg lg:text-xl text-white/95 drop-shadow-md mb-6 max-w-3xl mx-auto font-medium leading-relaxed" data-testid="text-subheadline">
            We implement AI Growth Solutions that accelerate client acquisition and automate client intake processes for mid-sized legal teams, saving them <span className="font-bold text-white">$150K+ annually</span> and maximizing billable time—with measurable ROI in one quarter, <span className="font-bold text-white">75%+ team adoption</span>, and <span className="font-bold text-white">zero ethics risk</span>. If we don't hit our targets, you don't pay.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center mb-6">
            <CalendarModal>
              <Button 
                size="lg" 
                className="premium-button text-white font-semibold text-base px-8 py-5 rounded-xl shadow-xl"
                data-testid="button-book-call"
              >
                Book Your Free AI Readiness Call
              </Button>
            </CalendarModal>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 font-semibold text-base px-8 py-5 rounded-xl backdrop-blur-sm bg-white/10"
              onClick={() => scrollToSection('roi-calculators')}
              data-testid="button-roi-calculators"
            >
              See ROI Calculators
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white/90 text-sm md:text-base font-semibold shadow-xl" data-testid="badge-guarantee">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>90-Day Money-Back Guarantee | Results or Full Refund</span>
          </div>
        </div>
      </div>

      {/* Problem Awareness Strip */}
      <div className="bg-slate-900/80 backdrop-blur-sm border-y border-white/10 py-4">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-center justify-center md:justify-start gap-2 text-white/80" data-testid={`pain-point-${index}`}>
                  <point.icon className="w-4 h-4 text-amber-400 flex-shrink-0" />
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
                <Card key={index} className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-testid={`card-differentiator-${index}`}>
                  <CardContent className="pt-5 pb-5">
                    <div className="w-11 h-11 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 text-center" data-testid={`text-differentiator-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 text-center leading-relaxed" data-testid={`text-differentiator-description-${index}`}>
                      {item.description}
                    </p>
                    <div className="text-center">
                      <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded-full text-xs font-semibold">
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
                <div key={index} className="space-y-1" data-testid={`metric-${index}`}>
                  <div className="text-2xl lg:text-3xl font-black text-white drop-shadow-lg" data-testid={`text-metric-value-${index}`}>
                    {metric.value}
                  </div>
                  <div className="text-xs lg:text-sm text-white/70 font-medium" data-testid={`text-metric-label-${index}`}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
