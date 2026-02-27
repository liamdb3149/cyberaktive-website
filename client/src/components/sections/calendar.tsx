import { useEffect, useRef } from "react";
import { GlassCard, FloatingOrb, RevealOnScroll, GeometricBlob, Section } from "@/components/ui/visual";
import { Calendar as CalendarIcon, Clock, CheckCircle } from "lucide-react";

export default function Calendar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    // Create iframe with exact attributes from GoHighLevel embed code
    const iframe = document.createElement("iframe");
    iframe.src = "https://api.leadconnectorhq.com/widget/booking/tlZAXVaHxTw9fvistaTr";
    iframe.style.cssText = "width:100%;border:none;overflow:hidden;min-height:700px;height:700px";
    iframe.scrolling = "no";
    iframe.id = "6paoXxyP7IK2sAlPFkv3_1772167275045";
    iframe.title = "Book Your 15-Minute Introductory Call";
    container.appendChild(iframe);
    // Load form_embed.js on document.body with cache-bust to force fresh execution
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js?t=" + Date.now();
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      container.replaceChildren();
      script.remove();
    };
  }, []);
  return (
    <Section 
      id="calendar" 
      className="section-mesh relative bg-gradient-to-br from-sky-50/40 via-blue-50/30 to-indigo-50/40"
    >
      {/* Floating Elements */}
      <FloatingOrb size="large" style={{ top: "15%", right: "10%" }} />
      <FloatingOrb size="medium" style={{ bottom: "20%", left: "15%" }} />
      <FloatingOrb size="small" style={{ top: "50%", left: "5%" }} />
      <GeometricBlob style={{ top: "25%", left: "20%", width: "160px", height: "160px" }} />
      <GeometricBlob style={{ bottom: "15%", right: "10%", width: "120px", height: "120px" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-block mb-4">
              <GlassCard className="px-5 py-2.5 bg-gradient-to-r from-accent/20 to-primary/10">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-4 h-4 text-accent" />
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">Free Consultation</span>
                </div>
              </GlassCard>
            </div>
            
            <h2 className="premium-text-2xl lg:text-4xl mb-4 text-foreground text-glow">
              Book Your 15-Minute Call
            </h2>
            <p className="premium-text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Quick, no-obligation consult to see if we can make AI work for you. Pick a time—we'll show you what's possible.
            </p>
            
            {/* Value props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <RevealOnScroll delay={200}>
                <GlassCard className="text-center group hover:scale-105 transition-all duration-300 py-4">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm text-foreground mb-1">15 Minutes</h3>
                  <p className="text-xs text-muted-foreground">Fast & focused</p>
                </GlassCard>
              </RevealOnScroll>
              
              <RevealOnScroll delay={300}>
                <GlassCard className="text-center group hover:scale-105 transition-all duration-300 py-4">
                  <CheckCircle className="w-6 h-6 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-sm text-foreground mb-1">100% Free</h3>
                  <p className="text-xs text-muted-foreground">No strings attached</p>
                </GlassCard>
              </RevealOnScroll>
              
              <RevealOnScroll delay={400}>
                <GlassCard className="text-center group hover:scale-105 transition-all duration-300 py-4">
                  <CalendarIcon className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm text-foreground mb-1">Clear Next Steps</h3>
                  <p className="text-xs text-muted-foreground">Know what's possible</p>
                </GlassCard>
              </RevealOnScroll>
            </div>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={600}>
          <div className="max-w-3xl mx-auto">
            {/* GoHighLevel Calendar Integration */}
            <GlassCard className="p-0 overflow-hidden border border-primary/10 gradient-border">
              <div ref={containerRef} />
            </GlassCard>
          </div>
        </RevealOnScroll>
        
        {/* Bottom highlight */}
        <RevealOnScroll delay={800}>
          <div className="text-center mt-10">
            <div className="inline-block bg-accent/5 rounded-xl px-6 py-4 backdrop-blur-sm border border-accent/10">
              <p className="text-base text-foreground mb-1 font-semibold">
                See What AI Can Do for Your Team
              </p>
              <p className="text-sm text-muted-foreground">
                Let's discuss whether AI can deliver real ROI for your legal team
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
