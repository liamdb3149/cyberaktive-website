import { TrendingUp, Clock, DollarSign, Users, Target, Heart } from "lucide-react";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";
import CalendarModal from "@/components/calendar-modal";
import { Button } from "@/components/ui/button";

export default function Results() {
  const results = [
    { 
      icon: Clock,
      value: "40%", 
      label: "Time Savings", 
      description: "Administrative time saved (16+ hours per week)", 
      color: "primary" 
    },
    { 
      icon: TrendingUp,
      value: "50%", 
      label: "Faster Response", 
      description: "Reduction in maintenance response time", 
      color: "accent" 
    },
    { 
      icon: DollarSign,
      value: "5-15%", 
      label: "Margin Increase", 
      description: "Percentage point increase in profit margins", 
      color: "primary" 
    },
    { 
      icon: Users,
      value: "50%", 
      label: "More Doors", 
      description: "More doors handled with existing team", 
      color: "accent" 
    },
    { 
      icon: Target,
      value: "85%", 
      label: "Better Decisions", 
      description: "Report improved decision-making capabilities", 
      color: "primary" 
    },
    { 
      icon: Heart,
      value: "24/7", 
      label: "Always On", 
      description: "Never miss another opportunity or inquiry", 
      color: "accent" 
    }
  ];

  const testimonialHighlights = [
    {
      quote: "Our margins went from 8% to 18% within 6 months",
      author: "Sarah M.",
      company: "Denver Property Solutions",
      metric: "+125% Profit"
    },
    {
      quote: "We handle 200 doors with the same team we used for 100",
      author: "Mike R.", 
      company: "Atlanta Property Management",
      metric: "2x Capacity"
    },
    {
      quote: "No more 2 AM emergency calls disrupting my life",
      author: "Jennifer L.",
      company: "Phoenix Residential",
      metric: "True Freedom"
    }
  ];

  return (
    <Section className="section-mesh relative bg-gradient-to-br from-green-50/30 via-blue-50/20 to-teal-50/30">
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "10%", right: "5%" }} />
      <FloatingOrb size="medium" style={{ bottom: "25%", left: "5%" }} />
      <GeometricBlob style={{ top: "40%", left: "10%", width: "160px", height: "160px" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground text-glow">
              Here's exactly what property management firms achieve with our automations:
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-3xl mx-auto">
              Real results from real property management companies
            </p>
          </div>
        </RevealOnScroll>

        {/* Responsive Layout - No BentoGrid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {/* Hero Results - Large Panel */}
          <div className="lg:col-span-2">
            <RevealOnScroll delay={200}>
              <GlassCard className="h-full bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="grid grid-cols-2 gap-8 h-full">
                  {results.slice(0, 4).map((result, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <result.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-4xl lg:text-5xl font-black gradient-text mb-2" data-testid={`text-result-value-${index}`}>
                        {result.value}
                      </div>
                      <div className="premium-text-lg font-semibold text-foreground mb-2" data-testid={`text-result-label-${index}`}>
                        {result.label}
                      </div>
                      <div className="text-sm text-muted-foreground" data-testid={`text-result-description-${index}`}>
                        {result.description}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </RevealOnScroll>
          </div>

          {/* Side Results - Vertical Stack */}
          <div className="lg:col-span-1">
            <div className="space-y-6 h-full">
              {results.slice(4).map((result, index) => (
                <RevealOnScroll key={index + 4} delay={400 + index * 100}>
                  <GlassCard className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                      <result.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-3xl font-black gradient-text mb-1" data-testid={`text-result-value-${index + 4}`}>
                      {result.value}
                    </div>
                    <div className="font-bold text-foreground mb-1" data-testid={`text-result-label-${index + 4}`}>
                      {result.label}
                    </div>
                    <div className="text-xs text-muted-foreground" data-testid={`text-result-description-${index + 4}`}>
                      {result.description}
                    </div>
                  </GlassCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonialHighlights.map((testimonial, index) => (
            <RevealOnScroll key={index} delay={600 + index * 100}>
              <GlassCard className="h-full text-center group hover:scale-105 transition-all duration-300">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="text-2xl font-black text-accent mb-3">
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

        {/* CTA Section */}
        <RevealOnScroll delay={900}>
          <GlassCard className="text-center bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
            <div className="max-w-3xl mx-auto">
              <h3 className="premium-text-xl text-foreground mb-6 font-bold">
                Ready to Join These Success Stories?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                These aren't isolated cases – they're the predictable results of implementing 
                AI workflow automation in your property management business.
              </p>
              <CalendarModal>
                <Button 
                  size="lg" 
                  className="premium-button text-white font-semibold px-12 py-6 rounded-2xl group"
                  data-testid="button-transform-business"
                >
                  <TrendingUp className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  See How We Can Transform Your Business
                </Button>
              </CalendarModal>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </Section>
  );
}