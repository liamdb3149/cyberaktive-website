import { TrendingUp, Clock, DollarSign, Users, Target, Heart } from "lucide-react";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";
import CalendarModal from "@/components/calendar-modal";
import { Button } from "@/components/ui/button";

export default function Results() {
  const results = [
    { 
      icon: Clock,
      value: "Faster", 
      label: "Shorter turnarounds on tasks", 
      description: "Automated workflows reduce time from request to completion", 
      color: "primary" 
    },
    { 
      icon: Target,
      value: "Fewer", 
      label: "Fewer errors and admin hours", 
      description: "Automation reduces human error and administrative overhead", 
      color: "accent" 
    },
    { 
      icon: DollarSign,
      value: "ROI", 
      label: "Measurable savings and higher billables", 
      description: "Clear financial impact from efficiency gains", 
      color: "primary" 
    },
    { 
      icon: Heart,
      value: "More", 
      label: "Less busywork, more value for clients", 
      description: "Team focuses on high-value legal work that matters", 
      color: "accent" 
    }
  ];

  const testimonialHighlights = [
    {
      quote: "We only implement what makes business sense—no wasteful pilots",
      author: "Law Firm Partner",
      company: "Mid-Size Practice",
      metric: "Smart ROI"
    },
    {
      quote: "Our team actually uses the tools because they solve real problems",
      author: "Managing Attorney", 
      company: "Regional Firm",
      metric: "Real Adoption"
    },
    {
      quote: "Finally, a partner who tells us 'no' when something won't work",
      author: "Senior Partner",
      company: "Corporate Law Firm",
      metric: "Honest Guidance"
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
              Results That Matter
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-3xl mx-auto">
              Measurable outcomes from strategic AI implementation
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
                  {results.map((result, index) => (
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

          {/* Side Results - Additional Context */}
          <div className="lg:col-span-1">
            <RevealOnScroll delay={400}>
              <GlassCard className="h-full flex flex-col justify-center text-center group hover:scale-105 transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-accent/30 transition-colors">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">
                      Strategic Implementation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We focus on changes that deliver measurable ROI, not just "innovation theater"
                    </p>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          </div>
        </div>

        {/* Client Metrics Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <RevealOnScroll>
            <GlassCard className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
              <h3 className="premium-text-xl text-foreground mb-6 font-bold">
                Our clients typically see:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-black text-primary mb-2">35%</div>
                  <p className="text-sm text-muted-foreground">workflow efficiency improvement</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-accent mb-2">25%</div>
                  <p className="text-sm text-muted-foreground">fewer missed deadlines</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary mb-2">58%</div>
                  <p className="text-sm text-muted-foreground">better lead capture</p>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>

        {/* Urgency Message */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <RevealOnScroll>
            <p className="text-lg text-muted-foreground italic font-medium" data-testid="text-urgency-message">
              While you're reading this, your competitors are already automating. Don't fall behind.
            </p>
          </RevealOnScroll>
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
                Ready for Real Results?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                These outcomes come from strategic AI implementation focused on genuine business value, 
                not just adopting technology for its own sake.
              </p>
              <CalendarModal>
                <Button 
                  size="lg" 
                  className="premium-button text-white font-semibold px-12 py-6 rounded-2xl group"
                  data-testid="button-transform-business"
                >
                  <TrendingUp className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Discover What's Possible for Your Firm
                </Button>
              </CalendarModal>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </Section>
  );
}