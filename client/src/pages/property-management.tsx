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
        <section className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Property Management
                <span className="text-primary block">AI Automation Solutions</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive workflow automations designed specifically for property management firms to eliminate manual tasks and maximize profitability
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  onClick={() => scrollToSection('calendar')}
                  data-testid="button-get-audit"
                >
                  Get Your Free Workflow Audit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('solutions')}
                  data-testid="button-see-solutions"
                >
                  See Our Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section id="solutions" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Comprehensive Property Management Automation
              </h2>
              <p className="text-xl text-muted-foreground">
                Transform every aspect of your property management operations with intelligent automation
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Tenant Management */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Tenant Management</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Automated tenant screening and application processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>24/7 tenant inquiry handling and response system</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Automated lease renewal notifications and processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Smart move-in/move-out coordination</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Maintenance Management */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold">Maintenance Management</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Instant maintenance request routing and prioritization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Automated vendor coordination and scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Real-time maintenance tracking and updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Preventive maintenance scheduling and alerts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Financial Management */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <DollarSign className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold">Financial Management</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Automated rent collection and payment processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Intelligent delinquency management workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Automated financial reporting and owner statements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>Expense tracking and budget management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Lead Generation */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Lead Generation & Sales</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>AI-powered lead qualification and scoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Automated proposal generation and follow-up</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Multi-channel lead capture and nurturing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>CRM integration and contact management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-muted/50">
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
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">40%</div>
                <div className="text-lg font-semibold mb-2">Time Savings</div>
                <div className="text-muted-foreground text-sm">Reduce administrative workload by 16+ hours per week</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">50%</div>
                <div className="text-lg font-semibold mb-2">More Clients</div>
                <div className="text-muted-foreground text-sm">Handle more properties with your current team</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">5-15%</div>
                <div className="text-lg font-semibold mb-2">Margin Increase</div>
                <div className="text-muted-foreground text-sm">Boost profit margins significantly</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-lg font-semibold mb-2">Operations</div>
                <div className="text-muted-foreground text-sm">Never miss opportunities again</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="calendar" className="py-16 lg:py-24 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-foreground">
                Ready to Automate Your Property Management?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Book your free workflow audit and discover exactly where you're losing time and money
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  data-testid="button-book-audit"
                >
                  Book Your Free Audit Now
                </Button>
                <a 
                  href="mailto:team@cyberaktive.com" 
                  className="text-primary-foreground hover:text-primary-foreground/80 font-semibold text-lg transition-colors"
                  data-testid="link-email"
                >
                  team@cyberaktive.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-primary-foreground/80 text-sm">
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
