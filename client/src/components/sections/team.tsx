import { GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob, Section } from "@/components/ui/visual";
import liamPhoto from "@assets/1_1757653847958.png";
import alanPhoto from "@assets/2_1757653847958.png";

export default function Team() {
  return (
    <Section 
      id="team" 
      className="section-mesh relative bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/40"
    >
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "20%", left: "8%" }} />
      <FloatingOrb size="medium" style={{ bottom: "25%", right: "12%" }} />
      <FloatingOrb size="small" style={{ top: "60%", left: "15%" }} />
      <GeometricBlob style={{ top: "10%", right: "20%", width: "180px", height: "180px" }} />
      <GeometricBlob style={{ bottom: "10%", left: "10%", width: "120px", height: "120px" }} />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="premium-text-2xl lg:text-5xl mb-8 text-foreground text-glow">
              Meet Our Team
            </h2>
            <p className="premium-text-lg text-muted-foreground max-w-3xl mx-auto">
              45+ years of combined experience in growth strategy, automation, and sales excellence
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Liam - Founder */}
          <RevealOnScroll delay={200}>
            <GlassCard className="p-10 group hover:scale-105 transition-all duration-300 gradient-border" data-testid="card-team-liam">
              <div className="text-center mb-8">
                <div className="relative w-32 h-32 rounded-3xl mx-auto mb-8 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={liamPhoto} 
                    alt="Liam - Founder" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 mix-blend-multiply"></div>
                  <div className="absolute inset-0 ring-2 ring-primary/20 rounded-3xl"></div>
                </div>
                <h3 className="premium-text-xl text-foreground mb-4 font-bold" data-testid="text-liam-name">
                  Liam - Founder
                </h3>
                <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                  <p className="text-sm font-semibold text-primary" data-testid="text-liam-title">
                    20 Years Marketing Growth Strategist & Automation Expert
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-liam-bio">
                Led marketing acquisition & scaled two businesses to 9-figure valuations. For the past 12 months, has been building AI workflow automations that eliminate manual tasks and drive consistent growth. Previously held senior roles at high-profile startups & Tier 1 global agencies (Saatchi & Saatchi, Ogilvy & Mather). Has driven more than $10M ARR for clients across SaaS, Cyber Security, Web Applications, and Local Businesses through strategic automation implementations.
              </p>
              
              {/* Premium accent line */}
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity"></div>
            </GlassCard>
          </RevealOnScroll>

          {/* Alan - Advisor */}
          <RevealOnScroll delay={400}>
            <GlassCard className="p-10 group hover:scale-105 transition-all duration-300 gradient-border" data-testid="card-team-alan">
              <div className="text-center mb-8">
                <div className="relative w-32 h-32 rounded-3xl mx-auto mb-8 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={alanPhoto} 
                    alt="Alan - Advisor" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-accent/40 mix-blend-multiply"></div>
                  <div className="absolute inset-0 ring-2 ring-secondary/20 rounded-3xl"></div>
                </div>
                <h3 className="premium-text-xl text-foreground mb-4 font-bold" data-testid="text-alan-name">
                  Alan - Advisor & Strategic Business Partnerships
                </h3>
                <div className="inline-block px-6 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
                  <p className="text-sm font-semibold text-secondary" data-testid="text-alan-title">
                    25 Years Sales Experience in Blue-Chip Organizations
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-alan-bio">
                Led large sales teams at multi-national firms and continues to provide sales coaching to multinational companies. For the past 12 months, has been instrumental in developing and refining AI workflow automations that transform sales processes and operational efficiency. His extensive experience ensures our automation solutions integrate seamlessly with existing business structures while driving measurable revenue growth.
              </p>
              
              {/* Premium accent line */}
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity"></div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </Section>
  );
}
