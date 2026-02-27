import { TrendingUp, DollarSign, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";

export default function Automations() {
  const revenueAutomations = [
    {
      icon: Clock,
      title: "Speed-to-Lead System",
      description: "Instantly captures and responds to leads within minutes to maximize conversion rates before prospects contact competitors."
    },
    {
      icon: TrendingUp,
      title: "AI Social Media Content Generation",
      description: "Automatically creates and posts engaging property content across platforms to attract tenants and property owners without manual effort."
    },
    {
      icon: Users,
      title: "AI Cold Email Prospecting",
      description: "Systematically reaches out to potential property owners and investors to grow your portfolio through automated, personalized outreach campaigns."
    },
    {
      icon: CheckCircle,
      title: "Personalized Follow-up & Nurture Systems",
      description: "Automatically maintains relationships with prospects through targeted email sequences that convert leads into signed contracts over time."
    }
  ];

  return (
    <Section className="section-mesh relative bg-gradient-to-br from-sky-50/40 via-blue-50/30 to-indigo-50/40">
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "20%", left: "8%" }} />
      <FloatingOrb size="medium" style={{ bottom: "30%", right: "12%" }} />
      <GeometricBlob style={{ top: "50%", right: "5%", width: "180px", height: "180px" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto text-center mb-20">
            <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground text-glow">
              AI-powered workflow automations that allow you to run a more efficient business, generate more revenue with the same or smaller team size, and increase your price-to-earnings ratio
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-4xl mx-auto">
              Discover every automation that transforms your property management operations from manual tasks to intelligent, 24/7 systems
            </p>
          </div>
        </RevealOnScroll>

        {/* Tab Navigation */}
        <RevealOnScroll delay={200}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-2">
              <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold flex items-center space-x-2">
                <DollarSign className="w-4 h-4" />
                <span>Revenue-Generating</span>
              </button>
              <button className="px-6 py-3 rounded-full text-muted-foreground font-semibold flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Operations</span>
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Revenue-Generating Automations - Wide Hero Card */}
        <div className="mb-16">
          {/* Wide Overview Card */}
          <RevealOnScroll delay={400}>
            <GlassCard className="w-full mb-12 group hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-primary/20 rounded-3xl mr-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <DollarSign className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="premium-text-2xl font-bold text-primary mb-2">
                    Revenue-Generating Automations
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Systems that directly increase your bottom line and grow your portfolio
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {revenueAutomations.map((automation, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl mb-4 flex items-center justify-center">
                      <automation.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2" data-testid={`text-automation-overview-${index}`}>
                      {automation.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {automation.description.substring(0, 100)}...
                    </p>
                    {/* Workflow Demo */}
                    <div className="mt-4 bg-gray-900 rounded-lg p-3 w-full max-w-xs text-left">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-400 ml-2">Automation Flow</span>
                      </div>
                      <div className="space-y-1 text-xs">
                        {index === 0 && (
                          <>
                            <div className="text-green-400">Lead → AI Response →</div>
                            <div className="text-blue-400">Qualification →</div>
                            <div className="text-yellow-400">Schedule Tour</div>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <div className="text-green-400">Content Creation →</div>
                            <div className="text-blue-400">Scheduling →</div>
                            <div className="text-yellow-400">Multi-Platform Publishing</div>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <div className="text-green-400">Target Identification →</div>
                            <div className="text-blue-400">Personalization →</div>
                            <div className="text-yellow-400">Automated Outreach</div>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <div className="text-green-400">Lead Management →</div>
                            <div className="text-blue-400">Automated Follow-up →</div>
                            <div className="text-yellow-400">Contract Conversion</div>
                          </>
                        )}
                      </div>
                    </div>
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