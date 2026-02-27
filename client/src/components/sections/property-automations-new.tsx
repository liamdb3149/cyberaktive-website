import { TrendingUp, DollarSign, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Section, GlassCard, BentoGrid, BentoItem, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";

export default function PropertyAutomations() {
  const revenueAutomations = [
    {
      icon: Clock,
      title: "Speed-to-Lead System",
      description: "Instantly captures and responds to leads within minutes to maximize conversion rates before prospects contact competitors.",
      features: [
        "Property management firms lose an average of 73% of potential revenue when leads aren't contacted within the first hour",
        "Automatically captures inquiries from your website, social media, and listing platforms with immediate personalized responses via email, SMS, and phone calls",
        "Integrates seamlessly with popular CRMs like AppFolio, Buildium, and Rent Manager for complete lead tracking",
        "Automated qualification questions prioritize hot prospects while nurturing cooler leads to ensure no opportunities are missed"
      ]
    },
    {
      icon: TrendingUp,
      title: "AI Social Media Content Generation",
      description: "Automatically creates and posts engaging property content across platforms to attract tenants and property owners without manual effort.",
      features: [
        "Generates both imagery and video content tailored to your properties and local market conditions",
        "Publishes optimized content to Facebook, Instagram, TikTok, Twitter, and Google Business Profile",
        "Creates property showcase posts, market updates, tenant tips, and community highlights while maintaining your brand voice",
        "Advanced scheduling ensures optimal posting times while automated hashtag research and local SEO optimization maximize discoverability"
      ]
    },
    {
      icon: Users,
      title: "AI Cold Email Prospecting",
      description: "Systematically reaches out to potential property owners and investors to grow your portfolio through automated, personalized outreach campaigns.",
      features: [
        "Advanced lead sourcing from public records, MLS data, and property databases identifies owners of under-managed properties",
        "AI-powered copywriting creates personalized outreach messages referencing specific property details and local market conditions",
        "Complete technical setup includes domain warming, deliverability optimization, and reputation management for high inbox rates",
        "Continuous campaign optimization tracks performance metrics and automatically adjusts messaging and targeting for maximum effectiveness",
        "Seamless CRM integration ensures smooth lead handoff when prospects express interest"
      ]
    },
    {
      icon: CheckCircle,
      title: "Personalized Follow-up & Nurture Systems",
      description: "Automatically maintains relationships with prospects through targeted email sequences that convert leads into signed contracts over time.",
      features: [
        "Multi-channel nurture campaigns engage prospects over email, phone calls, and WhatsApp with content tailored to their interests and timeline",
        "Speed-to-lead integration ensures immediate follow-up while long-term nurturing keeps your firm top-of-mind for future opportunities",
        "AI copywriting personalizes messages based on prospect behavior, property preferences, and engagement history",
        "Automated scheduling coordinates phone calls and property tours while smart segmentation delivers relevant market updates and success stories"
      ]
    }
  ];

  const operationsAutomations = [
    {
      icon: Users,
      title: "AI Customer Service Agent",
      description: "Handles tenant inquiries and prospect questions 24/7 across all digital channels, reducing staff workload while improving response times.",
      features: [
        "Manages inquiries across website chat, Facebook Messenger, Instagram DMs, and Google Business Profile messaging",
        "Handles common questions about rent payments, maintenance requests, lease terms, and property availability while escalating complex issues",
        "Integration with property management software like AppFolio, Buildium, and Yardi provides real-time access to tenant information",
        "Smart routing directs urgent maintenance issues, payment problems, and lease inquiries to appropriate team members immediately"
      ]
    },
    {
      icon: Clock,
      title: "AI Receptionist",
      description: "Answers calls, schedules appointments, and routes urgent matters to appropriate staff, ensuring no leads or tenant issues are missed.",
      features: [
        "Operates 24/7 across multiple branches and properties, handling hundreds of calls daily with human-like interactions",
        "Stays calm under pressure and never gets frustrated with difficult tenants or repetitive questions",
        "Schedules maintenance appointments, property tours, and meetings while checking staff availability in real-time",
        "Advanced call routing ensures emergency situations reach on-call staff immediately while handling routine inquiries efficiently",
        "Integration with scheduling tools and CRMs automatically updates calendars and logs call details for follow-up"
      ]
    },
    {
      icon: DollarSign,
      title: "Automated Rent Collection",
      description: "Automatically contacts tenants with overdue rent through professional phone calls, reducing collections workload and improving payment rates.",
      features: [
        "Makes several hundred calls per day, systematically contacting tenants with overdue balances using consistent, professional messaging",
        "Automatically sends payment links via SMS for immediate resolution and can schedule payment plans for tenants experiencing hardship",
        "Maintains detailed conversation logs in your CRM system while escalating serious delinquencies to human collectors",
        "Real-time integration with property management software ensures payment status updates and compliance with local regulations"
      ]
    },
    {
      icon: CheckCircle,
      title: "Lease Renewal Automation",
      description: "Proactively contacts tenants approaching lease expiration and qualifies new prospects through automated phone conversations to maximize occupancy rates.",
      features: [
        "Proactively identifies units with leases expiring in 60-90 days and initiates renewal conversations with tenants",
        "AI-powered phone conversations handle lease renewal negotiations, discussing market-rate adjustments and renewal incentives",
        "Automated follow-up ensures tenants receive renewal paperwork promptly while tracking response rates and renewal success",
        "When tenants decline renewal, the system immediately begins marketing vacant units and screening replacement tenants"
      ]
    }
  ];

  return (
    <Section className="section-mesh relative bg-gradient-to-br from-sky-50/40 via-blue-50/30 to-indigo-50/40">
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "20%", left: "8%" }} />
      <FloatingOrb size="medium" style={{ bottom: "30%", right: "12%" }} />
      <GeometricBlob style={{ top: "50%", right: "5%", width: "180px", height: "180px" }} />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto text-center mb-20">
            <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground text-glow">
              Complete AI Workflow Automation Solutions
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-4xl mx-auto">
              Discover every automation that transforms your property management operations from manual tasks to intelligent, 24/7 systems
            </p>
          </div>
        </RevealOnScroll>

        {/* Revenue-Generating Automations */}
        <div className="mb-24">
          <RevealOnScroll delay={200}>
            <div className="text-center mb-16">
              <GlassCard className="inline-block px-8 py-4 bg-gradient-to-r from-accent/20 to-accent/10">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  <span className="text-sm font-bold text-accent uppercase tracking-wider">Revenue Growth</span>
                </div>
              </GlassCard>
              <h3 className="premium-text-xl lg:text-4xl font-bold mt-6 mb-4 gradient-text">
                Revenue-Generating Automations
              </h3>
              <p className="premium-text-lg text-muted-foreground max-w-3xl mx-auto">
                Intelligent AI systems that directly increase your bottom line, grow your portfolio and save the business BIG in the process.
              </p>
            </div>
          </RevealOnScroll>
          
          <BentoGrid className="max-w-7xl mx-auto">
            {revenueAutomations.map((automation, index) => (
              <BentoItem key={index} span={6}>
                <RevealOnScroll delay={400 + index * 100}>
                  <GlassCard className="h-full group hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-accent/20 rounded-2xl mr-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <automation.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="premium-text-lg font-bold text-accent" data-testid={`text-revenue-title-${index}`}>
                        {automation.title}
                      </h4>
                    </div>
                    
                    <p className="text-lg mb-6 font-medium text-foreground leading-relaxed" data-testid={`text-revenue-description-${index}`}>
                      {automation.description}
                    </p>
                    
                    <ul className="space-y-4">
                      {automation.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start group/item">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                          <span className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-revenue-feature-${index}-${featureIndex}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </RevealOnScroll>
              </BentoItem>
            ))}
          </BentoGrid>
        </div>

        {/* Section Divider */}
        <RevealOnScroll delay={800}>
          <div className="relative py-16 mb-24">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <GlassCard className="px-8 py-4 bg-gradient-to-r from-primary/20 to-accent/20">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary/60 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-accent/60 rounded-full animate-pulse delay-75"></div>
                  <div className="w-3 h-3 bg-primary/40 rounded-full animate-pulse delay-150"></div>
                </div>
              </GlassCard>
            </div>
          </div>
        </RevealOnScroll>

        {/* Operations Efficiency Automations */}
        <div>
          <RevealOnScroll delay={1000}>
            <div className="text-center mb-16">
              <GlassCard className="inline-block px-8 py-4 bg-gradient-to-r from-primary/20 to-primary/10">
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">Cost Efficiency</span>
                </div>
              </GlassCard>
              <h3 className="premium-text-xl lg:text-4xl font-bold mt-6 mb-4 gradient-text">
                Operations Efficiency Automations
              </h3>
              <p className="premium-text-lg text-muted-foreground max-w-3xl mx-auto">
                Intelligent AI systems that streamline operations, reduce your team's workload & reduce related expenses up to 80%
              </p>
            </div>
          </RevealOnScroll>
          
          <BentoGrid className="max-w-7xl mx-auto">
            {operationsAutomations.map((automation, index) => (
              <BentoItem key={index} span={6}>
                <RevealOnScroll delay={1200 + index * 100}>
                  <GlassCard className="h-full group hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary/20 rounded-2xl mr-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <automation.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="premium-text-lg font-bold text-primary" data-testid={`text-operations-title-${index}`}>
                        {automation.title}
                      </h4>
                    </div>
                    
                    <p className="text-lg mb-6 font-medium text-foreground leading-relaxed" data-testid={`text-operations-description-${index}`}>
                      {automation.description}
                    </p>
                    
                    <ul className="space-y-4">
                      {automation.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start group/item">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                          <span className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-operations-feature-${index}-${featureIndex}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </RevealOnScroll>
              </BentoItem>
            ))}
          </BentoGrid>
        </div>
      </div>
    </Section>
  );
}