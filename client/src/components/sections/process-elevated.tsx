import { Button } from "@/components/ui/button";
import { Clock, Wrench, CheckCircle, Rocket, BarChart, ArrowRight, Users } from "lucide-react";
import { Section, GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob } from "@/components/ui/visual";

export default function Process() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      number: 1,
      title: "Book a short call and share your key pain points",
      description: "Quick introductory call to understand your firm's specific challenges",
      duration: "15 minutes",
      icon: Clock,
      color: "primary"
    },
    {
      number: 2,
      title: "We review your main workflows and talk to your team",
      description: "Deep dive into how work actually gets done to identify opportunities",
      duration: "1-2 weeks",
      icon: Users,
      color: "secondary"
    },
    {
      number: 3,
      title: "We outline where AI makes sense and show projected impact",
      description: "Clear recommendations with financial impact and ROI projections",
      duration: "1 week",
      icon: BarChart,
      color: "accent"
    },
    {
      number: 4,
      title: "You get a plain-English plan with ROI and a clear 'go/no-go' decision point",
      description: "Transparent roadmap with costs, timeline, and expected outcomes",
      duration: "Decision time",
      icon: CheckCircle,
      color: "primary"
    }
  ];

  return (
    <Section 
      id="process" 
      className="section-mesh relative bg-gradient-to-br from-indigo-50/40 via-cyan-50/30 to-purple-50/40"
    >
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "20%", right: "8%" }} />
      <FloatingOrb size="medium" style={{ bottom: "15%", left: "12%" }} />
      <GeometricBlob style={{ top: "50%", left: "5%", width: "160px", height: "160px" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground text-glow">
              Simple Steps, Straightforward Outcomes
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear, practical path from discovery to implementation
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="max-w-5xl mx-auto">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <RevealOnScroll key={index} delay={200 + index * 100}>
                <GlassCard 
                  className="text-center group hover:scale-105 transition-all duration-300 h-full"
                  data-testid={`step-${index}`}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-black shadow-lg">
                    {step.number}
                  </div>
                  
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="font-bold text-lg mb-3 text-foreground" data-testid={`step-title-${index}`}>
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`step-description-${index}`}>
                    {step.description}
                  </p>
                  
                  <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-xs font-semibold text-accent" data-testid={`step-duration-${index}`}>
                    {step.duration}
                  </div>
                  
                  {/* Connection Arrow - Hide on last item */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-primary/40" />
                    </div>
                  )}
                </GlassCard>
              </RevealOnScroll>
            ))}
          </div>
          
          {/* Enhanced CTA Section */}
          <RevealOnScroll delay={800}>
            <GlassCard className="text-center bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 max-w-3xl mx-auto">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg text-foreground mb-4 font-bold">
                  Ready to Get Started?
                </h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
                  Book a quick call to see if AI can deliver real value for your legal team
                </p>
                <Button 
                  size="lg" 
                  className="premium-button text-white font-semibold px-12 py-6 rounded-2xl group"
                  onClick={() => scrollToSection('calendar')}
                  data-testid="button-start-process"
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
  );
}