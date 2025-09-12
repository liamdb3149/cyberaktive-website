import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Clock, Users, DollarSign, TrendingUp } from "lucide-react";
import iconLogo from "@assets/Cyberaktive Logos t_1757653334662.png";
import CalendarModal from "@/components/calendar-modal";

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
        <section className="pt-20 lg:pt-24 pb-20 lg:pb-32 premium-hero min-h-screen flex items-center">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <img 
                  src={iconLogo} 
                  alt="Cyberaktive" 
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
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
                <CalendarModal>
                  <Button 
                    size="lg" 
                    className="premium-button text-white font-semibold text-lg px-10 py-5 rounded-2xl"
                    data-testid="button-get-audit"
                  >
                    Get Your Free Workflow Audit
                  </Button>
                </CalendarModal>
                <CalendarModal>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-10 py-5 rounded-2xl drop-shadow-md"
                    data-testid="button-see-solutions"
                  >
                    Schedule Your Free Consultation
                  </Button>
                </CalendarModal>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Workflow Automations */}
        <section className="py-20 lg:py-32 bg-white shadow-lg">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground">
                  Complete AI Workflow Automation Solutions
                </h2>
                <p className="premium-text-lg text-muted-foreground max-w-4xl mx-auto">
                  Discover every automation that transforms your property management operations from manual tasks to intelligent, 24/7 systems
                </p>
              </div>

              {/* Revenue-Generating Automations */}
              <div className="mb-20">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center px-6 py-2 rounded-full bg-accent/20 border border-accent/30 mb-4">
                    <TrendingUp className="w-5 h-5 text-accent mr-2" />
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">Revenue Growth</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">Revenue-Generating Automations</h3>
                  <p className="text-xl text-muted-foreground">Intelligent AI systems that directly increase your bottom line, grow your portfolio and save the business BIG in the process.</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Speed-to-Lead System */}
                  <Card className="p-8 premium-card-sm h-fit">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl mr-4 flex items-center justify-center">
                          <Clock className="w-6 h-6 text-accent" />
                        </div>
                        <h4 className="text-xl font-bold text-accent">Speed-to-Lead System</h4>
                      </div>
                      <p className="text-lg mb-6 font-medium text-foreground">
                        Instantly captures and responds to leads within minutes to maximize conversion rates before prospects contact competitors.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Property management firms lose an average of 73% of potential revenue when leads aren't contacted within the first hour</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Automatically captures inquiries from your website, social media, and listing platforms with immediate personalized responses via email, SMS, and phone calls</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Integrates seamlessly with popular CRMs like AppFolio, Buildium, and Rent Manager for complete lead tracking</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Automated qualification questions prioritize hot prospects while nurturing cooler leads to ensure no opportunities are missed</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* AI Social Media Content Generation */}
                  <Card className="p-8 premium-card-sm h-fit">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl mr-4 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-accent" />
                        </div>
                        <h4 className="text-xl font-bold text-accent">AI Social Media Content Generation, Scheduling & Publishing</h4>
                      </div>
                      <p className="text-lg mb-6 font-medium text-foreground">
                        Automatically creates and posts engaging property content across platforms to attract tenants and property owners without manual effort.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Generates both imagery and video content tailored to your properties and local market conditions</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Publishes optimized content to Facebook, Instagram, TikTok, Twitter, and Google Business Profile</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Creates property showcase posts, market updates, tenant tips, and community highlights while maintaining your brand voice</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Advanced scheduling ensures optimal posting times while automated hashtag research and local SEO optimization maximize discoverability</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* AI Cold Email Prospecting */}
                  <Card className="p-8 premium-card-sm h-fit">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl mr-4 flex items-center justify-center">
                          <Users className="w-6 h-6 text-accent" />
                        </div>
                        <h4 className="text-xl font-bold text-accent">AI Cold Email Prospecting</h4>
                      </div>
                      <p className="text-lg mb-6 font-medium text-foreground">
                        Systematically reaches out to potential property owners and investors to grow your portfolio through automated, personalized outreach campaigns.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Advanced lead sourcing from public records, MLS data, and property databases identifies owners of under-managed properties</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">AI-powered copywriting creates personalized outreach messages referencing specific property details and local market conditions</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Complete technical setup includes domain warming, deliverability optimization, and reputation management for high inbox rates</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Continuous campaign optimization tracks performance metrics and automatically adjusts messaging and targeting for maximum effectiveness</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Seamless CRM integration ensures smooth lead handoff when prospects express interest</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Personalized Follow-up & Nurture Systems */}
                  <Card className="p-8 premium-card-sm h-fit">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl mr-4 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-accent" />
                        </div>
                        <h4 className="text-xl font-bold text-accent">Personalized Follow-up & Nurture Systems</h4>
                      </div>
                      <p className="text-lg mb-6 font-medium text-foreground">
                        Automatically maintains relationships with prospects through targeted email sequences that convert leads into signed contracts over time.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Multi-channel nurture campaigns engage prospects over email, phone calls, and WhatsApp with content tailored to their interests and timeline</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Speed-to-lead integration ensures immediate follow-up while long-term nurturing keeps your firm top-of-mind for future opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">AI copywriting personalizes messages based on prospect behavior, property preferences, and engagement history</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Automated scheduling coordinates phone calls and property tours while smart segmentation delivers relevant market updates and success stories</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Section Divider */}
              <div className="relative py-16">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/30"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-gradient-to-r from-accent to-primary px-8 py-4 rounded-full shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-white/60 rounded-full animate-pulse delay-75"></div>
                      <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operations Efficiency Automations */}
              <div>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center px-6 py-2 rounded-full bg-primary/20 border border-primary/30 mb-4">
                    <DollarSign className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Cost Efficiency</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">Operations Efficiency Automations</h3>
                  <p className="text-xl text-muted-foreground">Intelligent AI systems that streamline operations, reduce your team's workload & reduce related expenses up to 80%</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Social Media DM & Website Bot */}
                  <Card className="p-8 premium-card-sm h-fit">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl mr-4 flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-primary">Social Media DM & Website Bot/AI Customer Service Agent</h4>
                      </div>
                      <p className="text-lg mb-6 font-medium text-foreground">
                        Handles tenant inquiries and prospect questions 24/7 across all digital channels, reducing staff workload while improving response times.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Manages inquiries across website chat, Facebook Messenger, Instagram DMs, and Google Business Profile messaging</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Handles common questions about rent payments, maintenance requests, lease terms, and property availability while escalating complex issues</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Integration with property management software like AppFolio, Buildium, and Yardi provides real-time access to tenant information</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Smart routing directs urgent maintenance issues, payment problems, and lease inquiries to appropriate team members immediately</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* AI Receptionist */}
                  <Card className="p-8 premium-card-sm h-fit">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl mr-4 flex items-center justify-center">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-primary">AI Receptionist</h4>
                      </div>
                      <p className="text-lg mb-6 font-medium text-foreground">
                        Answers calls, schedules appointments, and routes urgent matters to appropriate staff, ensuring no leads or tenant issues are missed.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Operates 24/7 across multiple branches and properties, handling hundreds of calls daily with human-like interactions</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Stays calm under pressure and never gets frustrated with difficult tenants or repetitive questions</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Schedules maintenance appointments, property tours, and meetings while checking staff availability in real-time</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Advanced call routing ensures emergency situations reach on-call staff immediately while handling routine inquiries efficiently</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Integration with scheduling tools and CRMs automatically updates calendars and logs call details for follow-up</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* AI Outbound Calling */}
                  <Card className="p-8 premium-card-sm h-fit">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl mr-4 flex items-center justify-center">
                          <DollarSign className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-primary">AI Outbound Calling: Rent Collection Follow-ups</h4>
                      </div>
                      <p className="text-lg mb-6 font-medium text-foreground">
                        Automatically contacts tenants with overdue rent through professional phone calls, reducing collections workload and improving payment rates.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Makes several hundred calls per day, systematically contacting tenants with overdue balances using consistent, professional messaging</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Automatically sends payment links via SMS for immediate resolution and can schedule payment plans for tenants experiencing hardship</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Maintains detailed conversation logs in your CRM system while escalating serious delinquencies to human collectors</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Real-time integration with property management software ensures payment status updates and compliance with local regulations</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Lease Renewal Negotiations */}
                  <Card className="p-8 premium-card-sm h-fit">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl mr-4 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-primary">Lease Renewal Negotiations & Prospective Tenant Calls</h4>
                      </div>
                      <p className="text-lg mb-6 font-medium text-foreground">
                        Proactively contacts tenants approaching lease expiration and qualifies new prospects through automated phone conversations to maximize occupancy rates.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Automatically reaches out to tenants 90-120 days before lease expiration to discuss renewal terms and gauge intentions</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Conducts initial qualification calls for prospective tenants, answers property questions, and schedules tours with leasing staff</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">Advanced conversation flows handle objections, explain lease terms, and negotiate basic renewal rates within predetermined parameters</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm">All interactions sync with your property management system to update tenant records and trigger appropriate follow-up actions</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
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
              <h2 className="premium-text-2xl lg:text-5xl mb-8 text-white drop-shadow-lg font-black">
                Ready to Automate Your Property Management?
              </h2>
              <p className="premium-text-lg text-white/90 drop-shadow-md mb-12 font-medium">
                Book your free workflow audit and discover exactly where you're losing time and money
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <CalendarModal>
                  <Button 
                    size="lg" 
                    className="premium-button text-white font-semibold text-lg px-10 py-5 rounded-2xl"
                    data-testid="button-book-audit"
                  >
                    Book Your Free Audit Now
                  </Button>
                </CalendarModal>
                <a 
                  href="mailto:team@cyberaktive.com" 
                  className="text-white hover:text-white/80 font-semibold text-lg transition-colors drop-shadow-md"
                  data-testid="link-email"
                >
                  team@cyberaktive.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/90 drop-shadow-md">
                <span className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-white drop-shadow-sm" />
                  <span className="font-medium">No obligation</span>
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-white drop-shadow-sm" />
                  <span className="font-medium">30-minute consultation</span>
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-white drop-shadow-sm" />
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
