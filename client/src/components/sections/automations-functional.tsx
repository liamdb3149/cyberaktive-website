import { useState } from "react";
import { TrendingUp, DollarSign, Clock, Users, CheckCircle, ArrowRight, Settings, Zap, Phone, FileText } from "lucide-react";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";

export default function Automations() {
  const [activeTab, setActiveTab] = useState<'revenue' | 'operations'>('revenue');

  const revenueAutomations = [
    {
      icon: Users,
      title: "Review your team's real workflow—not just software screens",
      description: "We analyze how work actually gets done, identifying true bottlenecks and inefficiencies in your processes."
    },
    {
      icon: Users,
      title: "Talk to your team and map what's slowing them down",
      description: "Direct conversations with your staff reveal the real pain points that need addressing."
    },
    {
      icon: TrendingUp,
      title: "Spot AI wins that impact the bottom line",
      description: "We identify specific automation opportunities that deliver measurable financial returns."
    },
    {
      icon: CheckCircle,
      title: "Lay out every next step in plain English",
      description: "Clear, jargon-free roadmap so you understand exactly what happens next."
    },
    {
      icon: DollarSign,
      title: "You know costs and expected gains before making any decisions",
      description: "Complete transparency on investment required and projected ROI before you commit."
    }
  ];

  const operationsAutomations = [
    {
      icon: Users,
      title: "Review your team's real workflow—not just software screens",
      description: "We analyze how work actually gets done, identifying true bottlenecks and inefficiencies in your processes."
    },
    {
      icon: Users,
      title: "Talk to your team and map what's slowing them down",
      description: "Direct conversations with your staff reveal the real pain points that need addressing."
    },
    {
      icon: TrendingUp,
      title: "Spot AI wins that impact the bottom line",
      description: "We identify specific automation opportunities that deliver measurable financial returns."
    },
    {
      icon: CheckCircle,
      title: "Lay out every next step in plain English",
      description: "Clear, jargon-free roadmap so you understand exactly what happens next."
    },
    {
      icon: DollarSign,
      title: "You know costs and expected gains before making any decisions",
      description: "Complete transparency on investment required and projected ROI before you commit."
    }
  ];

  const currentAutomations = activeTab === 'revenue' ? revenueAutomations : operationsAutomations;
  const currentTitle = 'How We Work with You';
  const currentSubtitle = 'A transparent, practical approach to finding real AI opportunities in your legal team';
  const CurrentIcon = CheckCircle;

  return (
    <Section id="automations" className="relative bg-white">
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "20%", left: "8%" }} />
      <FloatingOrb size="medium" style={{ bottom: "30%", right: "12%" }} />
      <GeometricBlob style={{ top: "50%", right: "5%", width: "180px", height: "180px" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground text-glow">
              Real AI Gains, ROI-Backed Change
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not here to sell tech. Our job is to help you spot where automation and AI will actually work—improving your business with clear, measurable ROI. If there's no business case, we say so.
            </p>
          </div>
        </RevealOnScroll>


        {/* Dynamic Content - Wide Hero Card */}
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll delay={200}>
            <GlassCard className="w-full group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-2xl mr-5 flex items-center justify-center group-hover:scale-110 transition-transform bg-primary/20">
                  <CurrentIcon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-primary">
                    {currentTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {currentSubtitle}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {currentAutomations.map((automation, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center text-center p-4 rounded-xl border transition-all duration-300 bg-primary/5 border-primary/10"
                  >
                    <div className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center bg-primary/10">
                      <automation.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 text-primary" data-testid={`text-automation-overview-${index}`}>
                      {automation.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {automation.description}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </Section>
  );
}