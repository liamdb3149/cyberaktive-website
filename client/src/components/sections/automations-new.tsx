import { useState } from "react";
import { DollarSign, Settings, ArrowRight, Bot, Phone, MessageSquare, Calendar, Mail } from "lucide-react";
import { Section, GlassCard, BentoGrid, BentoItem, FloatingOrb, RevealOnScroll, GeometricBlob, CodeFrame } from "@/components/ui/visual";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Automations() {
  const [activeTab, setActiveTab] = useState("revenue");

  const revenueAutomations = [
    {
      icon: MessageSquare,
      title: "Speed-to-Lead System",
      description: "Instantly captures and responds to leads within minutes to maximize conversion rates before prospects contact competitors",
      flow: "Lead → AI Response → Qualification → Schedule Tour"
    },
    {
      icon: Bot,
      title: "AI Social Media Content Generation",
      description: "Automatically creates and posts engaging property content across platforms to attract tenants and property owners without manual effort",
      flow: "Content Creation → Scheduling → Multi-Platform Publishing"
    },
    {
      icon: Mail,
      title: "AI Cold Email Prospecting",
      description: "Systematically reaches out to potential property owners and investors to grow your portfolio through automated, personalized outreach campaigns",
      flow: "Target Identification → Personalization → Automated Outreach"
    },
    {
      icon: Calendar,
      title: "Personalized Follow-up Systems",
      description: "Automatically maintains relationships with prospects through targeted email sequences that convert leads into signed contracts over time",
      flow: "Lead Nurturing → Automated Follow-ups → Contract Conversion"
    }
  ];

  const operationsAutomations = [
    {
      icon: MessageSquare,
      title: "AI Customer Service Agent",
      description: "Handles tenant inquiries and prospect questions 24/7 across all digital channels, reducing staff workload while improving response times",
      flow: "Inquiry → AI Processing → Smart Response → Escalation if Needed"
    },
    {
      icon: Phone,
      title: "AI Receptionist",
      description: "Answers calls, schedules appointments, and routes urgent matters to appropriate staff, ensuring no leads or tenant issues are missed",
      flow: "Incoming Call → AI Assistant → Appointment Booking → Staff Routing"
    },
    {
      icon: DollarSign,
      title: "Automated Rent Collection",
      description: "Automatically contacts tenants with overdue rent through professional phone calls, reducing collections workload and improving payment rates",
      flow: "Payment Due → Automated Reminder → Follow-up Call → Collection Report"
    },
    {
      icon: Settings,
      title: "Lease Renewal Automation",
      description: "Proactively contacts tenants approaching lease expiration and qualifies new prospects through automated phone conversations to maximize occupancy rates",
      flow: "Lease Expiring → Automated Contact → Renewal Negotiation → Documentation"
    }
  ];

  const currentAutomations = activeTab === "revenue" ? revenueAutomations : operationsAutomations;

  return (
    <Section className="section-mesh relative bg-gradient-to-br from-sky-50/30 via-blue-50/20 to-indigo-50/30">
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "20%", left: "5%" }} />
      <FloatingOrb size="medium" style={{ bottom: "15%", right: "10%" }} />
      <GeometricBlob style={{ top: "50%", right: "5%", width: "180px", height: "180px" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground text-glow">
              AI Workflow Automation Packages
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-4xl mx-auto">
              AI-powered workflow automations that allow you to run a more efficient business, 
              generate more revenue with the same or smaller team size, and increase your price-to-earnings ratio
            </p>
          </div>
        </RevealOnScroll>

        {/* Sticky Navigation */}
        <RevealOnScroll delay={200}>
          <div className="flex justify-center mb-12 sticky top-20 z-20">
            <GlassCard className="p-2 flex gap-2 backdrop-blur-md">
              <Button
                variant={activeTab === "revenue" ? "default" : "ghost"}
                onClick={() => setActiveTab("revenue")}
                className={cn(
                  "px-8 py-3 rounded-xl transition-all duration-300",
                  activeTab === "revenue" 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "hover:bg-primary/10"
                )}
                data-testid="tab-revenue"
              >
                <DollarSign className="w-4 h-4 mr-2" />
                Revenue-Generating
              </Button>
              <Button
                variant={activeTab === "operations" ? "default" : "ghost"}
                onClick={() => setActiveTab("operations")}
                className={cn(
                  "px-8 py-3 rounded-xl transition-all duration-300",
                  activeTab === "operations" 
                    ? "bg-accent text-accent-foreground shadow-lg" 
                    : "hover:bg-accent/10"
                )}
                data-testid="tab-operations"
              >
                <Settings className="w-4 h-4 mr-2" />
                Operations
              </Button>
            </GlassCard>
          </div>
        </RevealOnScroll>

        <BentoGrid className="max-w-7xl mx-auto">
          {/* Header Card */}
          <BentoItem span={12}>
            <RevealOnScroll delay={400}>
              <GlassCard className="text-center bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mr-4">
                    {activeTab === "revenue" ? (
                      <DollarSign className="w-8 h-8 text-primary" />
                    ) : (
                      <Settings className="w-8 h-8 text-accent" />
                    )}
                  </div>
                  <div className="text-left">
                    <h3 className="premium-text-xl text-foreground">
                      {activeTab === "revenue" ? "Revenue-Generating Automations" : "Operations Automations"}
                    </h3>
                    <p className="text-muted-foreground">
                      {activeTab === "revenue" 
                        ? "Systems that directly increase your bottom line"
                        : "Streamline operations and reduce overhead costs"
                      }
                    </p>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          </BentoItem>

          {/* Automations Grid */}
          {currentAutomations.map((automation, index) => (
            <BentoItem key={`${activeTab}-${index}`} span={6}>
              <RevealOnScroll delay={600 + index * 100}>
                <GlassCard className="h-full group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform",
                      activeTab === "revenue" ? "bg-primary/20" : "bg-accent/20"
                    )}>
                      <automation.icon className={cn(
                        "w-6 h-6",
                        activeTab === "revenue" ? "text-primary" : "text-accent"
                      )} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-foreground mb-2" data-testid={`text-${activeTab}-title-${index}`}>
                        {automation.title}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-${activeTab}-description-${index}`}>
                    {automation.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <ArrowRight className={cn(
                        "w-4 h-4",
                        activeTab === "revenue" ? "text-primary" : "text-accent"
                      )} />
                      <span className="text-sm font-semibold text-foreground">Workflow:</span>
                    </div>
                    <CodeFrame title="Automation Flow" className="text-xs">
                      <div className="text-green-400">
                        {automation.flow}
                      </div>
                    </CodeFrame>
                  </div>
                </GlassCard>
              </RevealOnScroll>
            </BentoItem>
          ))}

          {/* Bottom Stats */}
          <BentoItem span={4}>
            <RevealOnScroll delay={1000}>
              <GlassCard className="text-center h-full flex flex-col justify-center">
                <div className="text-4xl font-black gradient-text mb-2">8</div>
                <div className="font-bold text-lg text-foreground mb-2">Core Automations</div>
                <div className="text-sm text-muted-foreground">
                  Covering every aspect of property management
                </div>
              </GlassCard>
            </RevealOnScroll>
          </BentoItem>

          <BentoItem span={4}>
            <RevealOnScroll delay={1100}>
              <GlassCard className="text-center h-full flex flex-col justify-center">
                <div className="text-4xl font-black gradient-text mb-2">2.5</div>
                <div className="font-bold text-lg text-foreground mb-2">Months Setup</div>
                <div className="text-sm text-muted-foreground">
                  Average implementation timeline
                </div>
              </GlassCard>
            </RevealOnScroll>
          </BentoItem>

          <BentoItem span={4}>
            <RevealOnScroll delay={1200}>
              <GlassCard className="text-center h-full flex flex-col justify-center">
                <div className="text-4xl font-black gradient-text mb-2">80+</div>
                <div className="font-bold text-lg text-foreground mb-2">Hours Saved</div>
                <div className="text-sm text-muted-foreground">
                  Weekly time savings after implementation
                </div>
              </GlassCard>
            </RevealOnScroll>
          </BentoItem>
        </BentoGrid>
      </div>
    </Section>
  );
}