import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Clock, Users, DollarSign, TrendingUp } from "lucide-react";

export default function PropertyManagement() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-16 lg:pb-24 hero-gradient futuristic-mountains min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Property Management
                <span className="gradient-text block">AI Automation Solutions</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive workflow automations designed specifically for property management firms to eliminate manual tasks and maximize profitability
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold card-3d-sm px-8 py-4"
                  onClick={() => scrollToSection('calendar')}
                  data-testid="button-get-audit"
                >
                  Get Your Free Workflow Audit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground card-3d-sm px-8 py-4"
                  onClick={() => scrollToSection('solutions')}
                  data-testid="button-see-solutions"
                >
                  See Our Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Bundles */}
        <section id="solutions" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Two Powerful AI Automation Bundles
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the bundle that matches your needs or combine both for maximum impact
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Revenue Rocket Bundle */}
              <Card className="p-8 card-3d bg-gradient-to-br from-card to-accent/5">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 gradient-text">Revenue Rocket Bundle</h3>
                    <p className="text-lg text-accent font-semibold">Marketing, Sales & Leads AI Automation</p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-medium">The Speed to Lead System</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>AI Social Media Content Generation, scheduling and publishing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>AI Cold Email Prospecting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Personalized follow-up and nurture systems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* OpFlow AI Suite */}
              <Card className="p-8 card-3d bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <DollarSign className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 gradient-text">OpFlow AI Suite</h3>
                    <p className="text-lg text-primary font-semibold">Business Operations Efficiency Automation</p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>The Social Media DM & Website Bot / AI Customer Service Agent</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-medium">The AI Receptionist</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>AI Outbound Calling: Rent collection follow-ups</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Lease renewal negotiations & prospective tenant calls</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Transform Your Property Management Business
              </h2>
              <p className="text-xl text-muted-foreground">
                Real benefits that property management firms achieve with our automation solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="p-6 text-center card-3d-sm bg-gradient-to-br from-card to-primary/10">
                <CardContent className="p-0">
                  <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">40%</div>
                  <div className="text-lg font-semibold mb-2">Time Savings</div>
                  <div className="text-muted-foreground text-sm">Reduce administrative workload by 16+ hours per week</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center card-3d-sm bg-gradient-to-br from-card to-secondary/10">
                <CardContent className="p-0">
                  <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">50%</div>
                  <div className="text-lg font-semibold mb-2">More Clients</div>
                  <div className="text-muted-foreground text-sm">Handle more properties with your current team</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center card-3d-sm bg-gradient-to-br from-card to-accent/10">
                <CardContent className="p-0">
                  <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">5-15%</div>
                  <div className="text-lg font-semibold mb-2">Margin Increase</div>
                  <div className="text-muted-foreground text-sm">Boost profit margins significantly</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center card-3d-sm bg-gradient-to-br from-card to-primary/10">
                <CardContent className="p-0">
                  <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-lg font-semibold mb-2">Operations</div>
                  <div className="text-muted-foreground text-sm">Never miss opportunities again</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="calendar" className="py-16 lg:py-24 hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Automate Your Property Management?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book your free workflow audit and discover exactly where you're losing time and money
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold card-3d-sm px-8 py-4"
                  data-testid="button-book-audit"
                >
                  Book Your Free Audit Now
                </Button>
                <a 
                  href="mailto:team@cyberaktive.com" 
                  className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
                  data-testid="link-email"
                >
                  team@cyberaktive.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-muted-foreground text-sm">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  No obligation
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  30-minute consultation
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Immediate insights
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
