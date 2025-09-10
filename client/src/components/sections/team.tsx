import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground">
            45+ years of combined experience in growth strategy, automation, and sales excellence
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Liam - Founder */}
          <Card className="p-8 shadow-lg" data-testid="card-team-liam">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground" data-testid="text-liam-name">
                  Liam - Founder
                </h3>
                <p className="text-lg text-primary font-semibold" data-testid="text-liam-title">
                  20 Years Marketing Growth Strategist & Automation Expert
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-liam-bio">
                Led marketing acquisition & scaled two businesses to 9-figure valuations. For the past 12 months, has been building AI workflow automations that eliminate manual tasks and drive consistent growth. Previously held senior roles at high-profile startups & Tier 1 global agencies (Saatchi & Saatchi, Ogilvy & Mather). Has driven more than $10M ARR for clients across SaaS, Cyber Security, Web Applications, and Local Businesses through strategic automation implementations.
              </p>
            </CardContent>
          </Card>

          {/* Alan - Advisor */}
          <Card className="p-8 shadow-lg" data-testid="card-team-alan">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground" data-testid="text-alan-name">
                  Alan - Advisor & Strategic Business Partnerships
                </h3>
                <p className="text-lg text-secondary font-semibold" data-testid="text-alan-title">
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
