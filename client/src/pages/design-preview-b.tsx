import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Shield, Zap, BarChart3, Brain,
  CheckCircle2, Sparkles, ChevronRight, Star,
  Code2, Lock, Layers, Rocket
} from "lucide-react";

/* ───────────────────────────────────────────
   OPTION B: BLUE-DOMINANT + TEAL/CYAN ACCENT
   Clean, modern, techy - Stripe/Linear vibes
   ─────────────────────────────────────────── */

const C = {
  blueLight: "#2DA8FF",
  blueDeep: "#0057D8",
  navy: "#0E2E72",
  teal: "#0D9488",
  cyan: "#06B6D4",
  cyanLight: "#67E8F9",
  tealPale: "#F0FDFA",
  bg: "#FAFAFA",
  white: "#FFFFFF",
  text: "#0E2E72",
  textSec: "#4A5568",
  border: "#E2E8F0",
};

const G = {
  brand: "linear-gradient(135deg, #0057D8 0%, #2DA8FF 40%, #06B6D4 100%)",
  brandBlue: "linear-gradient(135deg, #0057D8 0%, #2DA8FF 100%)",
  tealGrad: "linear-gradient(135deg, #0D9488 0%, #06B6D4 100%)",
  lightAccent: "linear-gradient(135deg, #f0f4ff 0%, #f0fdfa 50%, #ecfeff 100%)",
  darkNavy: "linear-gradient(135deg, #0E2E72 0%, #0a2260 50%, #061840 100%)",
  hero: "linear-gradient(180deg, #0E2E72 0%, #0a2260 60%, #061840 100%)",
};

const S = {
  sm: "0 2px 8px rgba(14,46,114,0.06)",
  md: "0 4px 20px rgba(14,46,114,0.08)",
  lg: "0 12px 40px rgba(14,46,114,0.12)",
  glow: "0 4px 30px rgba(45,168,255,0.25)",
  glowTeal: "0 4px 30px rgba(13,148,136,0.25)",
};

function GradText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={className} style={{ background: G.brand, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{children}</span>;
}

function Card({ children, className = "", elevation = "md" as "sm"|"md"|"lg", hover = true }: { children: React.ReactNode; className?: string; elevation?: "sm"|"md"|"lg"; hover?: boolean }) {
  const sMap = { sm: S.sm, md: S.md, lg: S.lg };
  return (
    <motion.div className={`rounded-2xl border border-white/60 backdrop-blur-xl ${className}`} style={{ background: "rgba(255,255,255,0.75)", boxShadow: sMap[elevation] }}
      whileHover={hover ? { y: -6, scale: 1.02, boxShadow: S.lg, transition: { duration: 0.25, ease: "easeOut" } } : undefined}>
      {children}
    </motion.div>
  );
}

function DarkCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={`rounded-2xl border border-white/10 backdrop-blur-xl ${className}`} style={{ background: "rgba(14,46,114,0.5)", boxShadow: S.md }}
      whileHover={{ y: -6, scale: 1.02, boxShadow: S.glow, transition: { duration: 0.25, ease: "easeOut" } }}>
      {children}
    </motion.div>
  );
}

function BtnPrimary({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <motion.button className={`inline-flex items-center gap-2 text-white font-semibold rounded-full ${large ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm"}`}
      style={{ background: G.brandBlue, boxShadow: S.glow }}
      whileHover={{ y: -2, boxShadow: "0 8px 40px rgba(45,168,255,0.35)", transition: { duration: 0.2 } }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.button>
  );
}

function BtnTeal({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <motion.button className={`inline-flex items-center gap-2 text-white font-semibold rounded-full ${large ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm"}`}
      style={{ background: G.tealGrad, boxShadow: S.glowTeal }}
      whileHover={{ y: -2, boxShadow: "0 8px 40px rgba(13,148,136,0.35)", transition: { duration: 0.2 } }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.button>
  );
}

function BtnOutline({ children, large = false, dark = false }: { children: React.ReactNode; large?: boolean; dark?: boolean }) {
  return (
    <motion.button className={`inline-flex items-center gap-2 font-semibold rounded-full border-2 ${large ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm"} ${dark ? "border-white/30 text-white" : "border-[#0E2E72]/20 text-[#0E2E72]"}`}
      style={{ background: dark ? "rgba(255,255,255,0.05)" : "transparent" }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.button>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="h-px flex-1 max-w-[40px]" style={{ background: G.tealGrad }} />
      <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: C.teal }}>{children}</span>
    </div>
  );
}

function IconBox({ icon: Icon, color = C.blueDeep }: { icon: any; color?: string }) {
  return (
    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${color}12`, border: `1px solid ${color}20` }}>
      <Icon size={22} style={{ color }} />
    </div>
  );
}

export default function DesignPreviewB() {
  const [tab, setTab] = useState(0);

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="text-center py-3 text-xs font-bold tracking-wider text-white" style={{ background: G.tealGrad }}>
        OPTION B: BLUE + TEAL/CYAN ACCENT
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ background: "rgba(250,250,250,0.8)", borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg" style={{ background: G.brandBlue }} />
            <span className="text-lg font-bold" style={{ color: C.navy }}>Cyberaktive</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Solutions", "Resources", "About"].map((i) => (
              <motion.a key={i} className="text-sm font-medium cursor-pointer" style={{ color: C.textSec }} whileHover={{ color: C.blueDeep }}>{i}</motion.a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <BtnOutline>Contact Sales</BtnOutline>
            <BtnPrimary>Get Started <ArrowRight size={16} /></BtnPrimary>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: G.hero, minHeight: "85vh" }}>
        <div className="absolute top-20 left-[15%] w-[400px] h-[400px] rounded-full opacity-25 blur-[100px]" style={{ background: C.blueLight }} />
        <div className="absolute bottom-20 right-[10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: C.teal }} />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full opacity-15 blur-[80px]" style={{ background: C.cyan }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 mb-8">
              <Sparkles size={14} style={{ color: C.cyanLight }} />
              <span className="text-sm text-white/70">AI-Powered Solutions for Modern Teams</span>
            </div>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="text-white">Build Smarter.</span><br />
            <span style={{ background: "linear-gradient(135deg, #2DA8FF 0%, #06B6D4 50%, #67E8F9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Scale Faster.</span>
          </motion.h1>

          <motion.p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Cyberaktive helps teams implement AI solutions that reduce operational overhead, automate workflows, and deliver measurable ROI.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <BtnPrimary large>Book a Strategy Call <ArrowRight size={18} /></BtnPrimary>
            <BtnOutline large dark>See How It Works <ChevronRight size={18} /></BtnOutline>
          </motion.div>
        </div>

        <div className="relative h-24">
          <div className="absolute inset-x-0 bottom-0 h-full" style={{ background: "radial-gradient(ellipse 50% 80% at 50% 100%, rgba(45,168,255,0.3) 0%, rgba(6,182,212,0.2) 50%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px]" style={{ background: "linear-gradient(90deg, transparent, rgba(45,168,255,0.6), rgba(6,182,212,0.5), transparent)", boxShadow: "0 0 30px rgba(45,168,255,0.3), 0 0 60px rgba(6,182,212,0.2)" }} />
        </div>
      </section>

      {/* Colors */}
      <section className="py-24 px-6" style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto">
          <Label>Color Palette</Label>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.navy }}>Option B: Blue + Teal/Cyan</h2>
          <p className="text-lg mb-12" style={{ color: C.textSec }}>Cool, clean palette. Think Stripe or Linear. Zero purple.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {[
              { name: "Blue Light", hex: "#2DA8FF" }, { name: "Blue Deep", hex: "#0057D8" },
              { name: "Navy", hex: "#0E2E72" }, { name: "Teal", hex: "#0D9488" },
              { name: "Cyan", hex: "#06B6D4" }, { name: "Cyan Light", hex: "#67E8F9" },
              { name: "Background", hex: "#FAFAFA" },
            ].map((c) => (
              <motion.div key={c.hex + c.name} className="rounded-xl overflow-hidden border" style={{ borderColor: C.border }} whileHover={{ y: -4, boxShadow: S.md }}>
                <div className="h-24" style={{ background: c.hex }} />
                <div className="p-3 bg-white"><div className="text-xs font-bold" style={{ color: C.navy }}>{c.name}</div><div className="text-xs font-mono" style={{ color: C.textSec }}>{c.hex}</div></div>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[{ name: "Brand (Blue to Teal)", bg: G.brand }, { name: "Light Accent", bg: G.lightAccent }, { name: "Dark Navy", bg: G.darkNavy }].map((g) => (
              <motion.div key={g.name} className="rounded-xl overflow-hidden border" style={{ borderColor: C.border }} whileHover={{ y: -4, boxShadow: S.md }}>
                <div className="h-20" style={{ background: g.bg }} /><div className="p-3 bg-white"><div className="text-xs font-bold" style={{ color: C.navy }}>{g.name}</div></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="py-24 px-6" style={{ background: G.lightAccent }}>
        <div className="max-w-6xl mx-auto">
          <Label>Buttons</Label>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: C.navy }}>Button Styles</h2>
          <div className="space-y-8">
            <div><p className="text-sm font-semibold mb-4" style={{ color: C.textSec }}>Primary (Blue)</p>
              <div className="flex flex-wrap gap-4"><BtnPrimary large>Large CTA <ArrowRight size={18} /></BtnPrimary><BtnPrimary>Default <ArrowRight size={16} /></BtnPrimary></div></div>
            <div><p className="text-sm font-semibold mb-4" style={{ color: C.textSec }}>Teal Accent</p>
              <div className="flex flex-wrap gap-4"><BtnTeal large>Teal CTA <ArrowRight size={18} /></BtnTeal><BtnTeal>Teal Default <ArrowRight size={16} /></BtnTeal></div></div>
            <div><p className="text-sm font-semibold mb-4" style={{ color: C.textSec }}>Outline</p>
              <div className="flex flex-wrap gap-4"><BtnOutline large>Large Outline <ChevronRight size={18} /></BtnOutline><BtnOutline>Default <ChevronRight size={16} /></BtnOutline></div></div>
            <div className="p-8 rounded-2xl" style={{ background: G.darkNavy }}>
              <p className="text-sm font-semibold mb-4 text-white/60">On Dark</p>
              <div className="flex flex-wrap gap-4"><BtnPrimary large>Primary <ArrowRight size={18} /></BtnPrimary><BtnTeal large>Teal <ArrowRight size={18} /></BtnTeal><BtnOutline large dark>Outline <ChevronRight size={18} /></BtnOutline></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 px-6" style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto">
          <Label>Cards & Depth</Label>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: C.navy }}>Card Styles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Shield, title: "AI Risk Assessment", desc: "Identify and mitigate compliance risks with intelligent analysis", color: C.blueDeep },
              { icon: Zap, title: "Workflow Automation", desc: "Automate repetitive tasks and free up your team", color: C.teal },
              { icon: BarChart3, title: "ROI Analytics", desc: "Track measurable outcomes and prove AI investment value", color: C.cyan },
              { icon: Brain, title: "Smart Integration", desc: "Seamlessly connect AI tools with your existing stack", color: C.blueLight },
            ].map((card, i) => (
              <Card key={i} elevation="md" className="p-6">
                <IconBox icon={card.icon} color={card.color} /><h4 className="text-lg font-bold mt-4 mb-2" style={{ color: C.navy }}>{card.title}</h4><p className="text-sm leading-relaxed" style={{ color: C.textSec }}>{card.desc}</p>
              </Card>
            ))}
          </div>

          <div className="p-8 rounded-3xl" style={{ background: G.darkNavy }}>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: CheckCircle2, title: "Performance that scales", desc: "Sub-second response times at enterprise volume." },
                { icon: Lock, title: "Secure by default", desc: "SOC 2, encryption at rest, SSO/SAML, audit logs." },
                { icon: Layers, title: "Open ecosystem", desc: "Connect to your stack with flexibility, no lock-in." },
                { icon: Code2, title: "Built for teams", desc: "Define workflows, manage access, keep teams aligned." },
              ].map((card, i) => (
                <DarkCard key={i} className="p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.2)" }}>
                    <card.icon size={20} style={{ color: C.cyan }} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{card.title}</h4><p className="text-sm leading-relaxed text-white/60">{card.desc}</p>
                </DarkCard>
              ))}
            </div>
            <div className="relative h-16 mt-8">
              <div className="absolute inset-x-0 top-0 h-full" style={{ background: "radial-gradient(ellipse 40% 100% at 50% 0%, rgba(6,182,212,0.2) 0%, rgba(45,168,255,0.1) 50%, transparent 80%)" }} />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.5), rgba(45,168,255,0.3), transparent)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento */}
      <section className="py-24 px-6" style={{ background: C.white }}>
        <div className="max-w-6xl mx-auto">
          <Label>Feature Layout</Label>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: C.navy }}>Everything you need to <GradText>scale AI</GradText></h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: C.textSec }}>A complete platform for AI strategy, implementation, and optimization.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card elevation="lg" className="md:col-span-2 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-8 blur-[60px]" style={{ background: C.cyan }} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: G.brandBlue }}><Rocket size={16} className="text-white" /></div>
                  <span className="text-xs font-bold tracking-wider uppercase" style={{ color: C.blueDeep }}>Strategy</span>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: C.navy }}>The Right AI Approach</h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: C.textSec }}>We design comprehensive strategies aligned with your business goals.</p>
                <div className="grid grid-cols-3 gap-4">
                  {[{ m: "3x", l: "Faster workflows" }, { m: "60%", l: "Cost reduction" }, { m: "2 wks", l: "First results" }].map((s) => (
                    <div key={s.l} className="text-center p-3 rounded-xl" style={{ background: `${C.teal}10` }}>
                      <div className="text-2xl font-extrabold" style={{ color: C.blueDeep }}>{s.m}</div><div className="text-xs" style={{ color: C.textSec }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <Card elevation="md" className="p-8 flex flex-col justify-between" style={{ background: `linear-gradient(180deg, ${C.tealPale}, rgba(255,255,255,0.8))` } as any}>
              <div>
                <IconBox icon={Star} color={C.teal} />
                <h3 className="text-xl font-bold mt-4 mb-3" style={{ color: C.navy }}>Proven Results</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.textSec }}>Measurable ROI within the first month.</p>
              </div>
              <div className="mt-6 p-4 rounded-xl border" style={{ borderColor: C.border }}>
                <p className="text-sm italic" style={{ color: C.textSec }}>"Transformed our document review - 70% faster with better accuracy."</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 px-6" style={{ background: G.darkNavy }}>
        <div className="absolute top-10 left-[20%] w-[300px] h-[300px] rounded-full opacity-15 blur-[80px]" style={{ background: C.teal }} />
        <div className="absolute bottom-10 right-[20%] w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]" style={{ background: C.blueLight }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your workflow?</h2>
          <p className="text-lg text-white/60 mb-10">Book a free strategy call.</p>
          <div className="flex flex-wrap justify-center gap-4"><BtnPrimary large>Book a Strategy Call <ArrowRight size={18} /></BtnPrimary><BtnOutline large dark>Learn More <ChevronRight size={18} /></BtnOutline></div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-24 px-6" style={{ background: G.lightAccent }}>
        <div className="max-w-6xl mx-auto">
          <Label>Interactive Elements</Label>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: C.navy }}>Process Steps</h2>
          <div className="flex gap-1 p-1 rounded-xl mb-8 inline-flex" style={{ background: "rgba(14,46,114,0.06)" }}>
            {["Discovery", "Strategy", "Build", "Launch"].map((t, i) => (
              <motion.button key={t} className="px-6 py-3 rounded-lg text-sm font-semibold"
                style={tab === i ? { background: G.brandBlue, color: "white" } : { color: C.textSec }}
                onClick={() => setTab(i)} whileTap={{ scale: 0.98 }}>{t}</motion.button>
            ))}
          </div>
          <Card elevation="lg" hover={false} className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: G.tealGrad }}>
                <span className="text-white font-bold text-xl">{tab + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: C.navy }}>{["Discovery & Assessment", "Strategy Design", "Build & Implement", "Launch & Optimize"][tab]}</h3>
                <p className="text-base leading-relaxed" style={{ color: C.textSec }}>{["Thorough audit of workflows, pain points, and AI opportunities.", "Tailored strategy with milestones and ROI projections.", "Incremental build with weekly check-ins and refinements.", "Launch with support, monitoring, and continuous optimization."][tab]}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t" style={{ background: C.white, borderColor: C.border }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-lg" style={{ background: G.brandBlue }} /><span className="text-lg font-bold" style={{ color: C.navy }}>Cyberaktive</span></div>
            <p className="text-sm leading-relaxed" style={{ color: C.textSec }}>AI consulting and development for modern teams.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[{ t: "Services", l: ["AI Strategy", "Automation", "Development"] }, { t: "Resources", l: ["Case Studies", "Blog", "Calculators"] }, { t: "Company", l: ["About", "Team", "Contact"] }].map((col) => (
              <div key={col.t}><h4 className="text-sm font-bold mb-4" style={{ color: C.navy }}>{col.t}</h4>
                {col.l.map((link) => (<motion.a key={link} className="block text-sm mb-2 cursor-pointer" style={{ color: C.textSec }} whileHover={{ color: C.blueDeep, x: 2 }}>{link}</motion.a>))}
              </div>
            ))}
          </div>
        </div>
      </footer>

      <div className="py-6 px-6 text-center" style={{ background: C.bg }}><p className="text-xs" style={{ color: C.textSec }}>
        Option B Preview | <a href="/design-preview-a" className="underline" style={{ color: C.blueDeep }}>Option A</a> | <a href="/design-preview" className="underline" style={{ color: C.blueDeep }}>Original</a> | <a href="/design-preview-c" className="underline" style={{ color: C.blueDeep }}>Option C</a> | <a href="/design-preview-d" className="underline" style={{ color: C.blueDeep }}>Option D</a>
      </p></div>
    </div>
  );
}
