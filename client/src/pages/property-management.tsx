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
    <div className="min-h-screen premium-hero text-foreground antialiased">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 lg:pt-40 pb-20 lg:pb-32 premium-hero min-h-screen flex items-center">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="premium-text-4xl md:text-6xl lg:text-7xl mb-8">
                <span className="text-white drop-shadow-lg block mb-2">Property Management</span>
                <span className="text-white drop-shadow-lg block mb-2 font-black">AI Automation</span>
                <span className="text-white drop-shadow-lg block">That Actually Works</span>
              </h1>
              <p className="premium-text-xl lg:text-2xl text-white/90 drop-shadow-md mb-4 max-w-4xl mx-auto font-medium">
                Handle 50% more doors with your existing team while boosting margins to 15-25%
              </p>
              <p className="text-lg text-white/80 drop-shadow-md mb-4 max-w-3xl mx-auto">
                Stop losing sleep over staff turnover and endless admin work—our AI does it all.
              </p>
              <p className="text-lg text-white/80 drop-shadow-md mb-12 max-w-3xl mx-auto">
                On average, each automation saves 16-80 hours per week after 2.5 months.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button 
                  size="lg" 
                  className="premium-button text-white font-semibold text-lg px-10 py-5 rounded-2xl"
                  onClick={() => scrollToSection('calendar')}
                  data-testid="button-get-audit"
                >
                  Get Your Free Workflow Audit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-10 py-5 rounded-2xl premium-card-sm"
                  onClick={() => scrollToSection('solutions')}
                  data-testid="button-see-solutions"
                >
                  See Our Automation Bundles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Bundles */}
        <section id="solutions" className="py-20 lg:py-32 section-gradient-1">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto text-center mb-20">
              <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground">
                Two Powerful AI Automation Bundles
              </h2>
              <p className="premium-text-lg text-muted-foreground">
                Choose the bundle that matches your needs or combine both for maximum impact
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Revenue Rocket Bundle */}
              <Card className="p-12 premium-card">
                <CardContent className="p-0">
                  <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-accent/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <TrendingUp className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="premium-text-xl mb-3 gradient-text">Revenue Rocket Bundle</h3>
                    <p className="premium-text-lg text-accent font-semibold">Marketing, Sales & Leads AI Automation</p>
                  </div>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-accent mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-lg font-medium">Speed to Lead System</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-accent mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">AI social media content generation, scheduling and publishing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-accent mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">AI cold email prospecting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-accent mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Personalized follow-up and nurture systems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* OpFlow AI Suite */}
              <Card className="p-12 premium-card">
                <CardContent className="p-0">
                  <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <DollarSign className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="premium-text-xl mb-3 gradient-text">OpFlow AI Suite</h3>
                    <p className="premium-text-lg text-primary font-semibold">Business Operations Efficiency Automation</p>
                  </div>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Social media DM & website bot / AI customer service agent</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-lg font-medium">AI receptionist</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">AI outbound calling: rent collection follow-ups</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Lease renewal negotiations & prospective tenant calls</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-32 section-gradient-2">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-5xl mx-auto text-center mb-20">
              <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground">
                Transform Your Property Management Business
              </h2>
              <p className="premium-text-lg text-muted-foreground">
                Real benefits that property management firms achieve with our automation solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
              <Card className="p-8 text-center premium-card-sm">
                <CardContent className="p-0">
                  <div className="text-5xl lg:text-6xl font-bold gradient-text mb-4">40%</div>
                  <div className="premium-text-lg font-semibold mb-3">Time Savings</div>
                  <div className="text-muted-foreground">Reduce administrative workload by 16+ hours per week</div>
                </CardContent>
              </Card>
              <Card className="p-8 text-center premium-card-sm">
                <CardContent className="p-0">
                  <div className="text-5xl lg:text-6xl font-bold gradient-text mb-4">50%</div>
                  <div className="premium-text-lg font-semibold mb-3">More Clients</div>
                  <div className="text-muted-foreground">Handle more doors with your existing team</div>
                </CardContent>
              </Card>
              <Card className="p-8 text-center premium-card-sm">
                <CardContent className="p-0">
                  <div className="text-5xl lg:text-6xl font-bold gradient-text mb-4">15-25%</div>
                  <div className="premium-text-lg font-semibold mb-3">Margin Increase</div>
                  <div className="text-muted-foreground">Boost profit margins to industry-leading levels</div>
                </CardContent>
              </Card>
              <Card className="p-8 text-center premium-card-sm">
                <CardContent className="p-0">
                  <div className="text-5xl lg:text-6xl font-bold gradient-text mb-4">24/7</div>
                  <div className="premium-text-lg font-semibold mb-3">Operations</div>
                  <div className="text-muted-foreground">Never miss opportunities again</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="calendar" className="py-20 lg:py-32 premium-hero">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground">
                Ready to Automate Your Property Management?
              </h2>
              <p className="premium-text-lg text-muted-foreground mb-12">
                Book your free workflow audit and discover exactly where you're losing time and money
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  className="premium-button text-white font-semibold text-lg px-10 py-5 rounded-2xl"
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
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-muted-foreground">
                <span className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="font-medium">No obligation</span>
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="font-medium">30-minute consultation</span>
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="font-medium">Immediate insights</span>
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
