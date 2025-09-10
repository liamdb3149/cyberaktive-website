import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Wrench, CheckCircle, Rocket, BarChart } from "lucide-react";

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
      title: "Free Workflow Audit",
      description: "We identify your biggest time drains and inefficiencies",
      duration: "30 minutes",
      icon: Clock,
      color: "primary"
    },
    {
      number: 2,
      title: "Custom Build",
      description: "AI workflows designed for your specific tech stack",
      duration: "2-4 weeks",
      icon: Wrench,
      color: "secondary"
    },
    {
      number: 3,
      title: "QA Testing",
      description: "Rigorous testing before going live",
      duration: "3-5 days",
      icon: CheckCircle,
      color: "accent"
    },
    {
      number: 4,
      title: "Deployment",
      description: "Seamless integration with your existing systems",
      duration: "1-2 days",
      icon: Rocket,
      color: "primary"
    },
    {
      number: 5,
      title: "Ongoing Monitoring",
      description: "Continuous optimization as systems evolve",
      duration: "Ongoing",
      icon: BarChart,
      color: "secondary"
    }
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Our Process (The Path)
          </h2>
          <p className="text-xl text-muted-foreground">
            A proven 5-phase approach that ensures seamless integration and maximum ROI
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center" data-testid={`step-${index}`}>
                <div className={`w-16 h-16 bg-${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold text-primary-foreground" data-testid={`step-number-${index}`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2" data-testid={`step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2" data-testid={`step-description-${index}`}>
                  {step.description}
                </p>
                <div className={`text-xs text-${step.color} font-medium`} data-testid={`step-duration-${index}`}>
                  Duration: {step.duration}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg"
              onClick={() => scrollToSection('calendar')}
              data-testid="button-start-process"
            >
              Start Your Free Audit Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
