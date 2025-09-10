import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-32 section-gradient-1">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground">
            Meet Our Team
          </h2>
          <p className="premium-text-lg text-muted-foreground">
            45+ years of combined experience in growth strategy, automation, and sales excellence
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Liam - Founder */}
          <Card className="p-10 premium-card" data-testid="card-team-liam">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <div className="w-28 h-28 bg-primary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <User className="w-14 h-14 text-primary" />
                </div>
                <h3 className="premium-text-xl text-foreground mb-3" data-testid="text-liam-name">
                  Liam - Founder
                </h3>
                <p className="premium-text-lg text-primary font-semibold" data-testid="text-liam-title">
                  20 Years Marketing Growth Strategist & Automation Expert
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-liam-bio">
                Led marketing acquisition & scaled two businesses to 9-figure valuations. For the past 12 months, has been building AI workflow automations that eliminate manual tasks and drive consistent growth. Previously held senior roles at high-profile startups & Tier 1 global agencies (Saatchi & Saatchi, Ogilvy & Mather). Has driven more than $10M ARR for clients across SaaS, Cyber Security, Web Applications, and Local Businesses through strategic automation implementations.
              </p>
            </CardContent>
          </Card>

          {/* Alan - Advisor */}
          <Card className="p-10 premium-card" data-testid="card-team-alan">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <div className="w-28 h-28 bg-secondary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <User className="w-14 h-14 text-secondary" />
                </div>
                <h3 className="premium-text-xl text-foreground mb-3" data-testid="text-alan-name">
                  Alan - Advisor & Strategic Business Partnerships
                </h3>
                <p className="premium-text-lg text-secondary font-semibold" data-testid="text-alan-title">
                  25 Years Sales Experience in Blue-Chip Organizations
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-alan-bio">
                Led large sales teams at multi-national firms and continues to provide sales coaching to multinational companies. For the past 12 months, has been instrumental in developing and refining AI workflow automations that transform sales processes and operational efficiency. His extensive experience ensures our automation solutions integrate seamlessly with existing business structures while driving measurable revenue growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
