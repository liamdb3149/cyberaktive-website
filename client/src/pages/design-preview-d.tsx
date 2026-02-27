import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Shield, Zap, BarChart3, Brain,
  CheckCircle2, Sparkles, ChevronRight, Star,
  Code2, Lock, Layers, Rocket
} from "lucide-react";

/* ───────────────────────────────────────────
   OPTION D: NAVY + WHITE + ELECTRIC BLUE (MINIMAL)
   Almost monochrome. One electric blue pop.
   Ultra-clean, ultra-premium. Pink only in logo.
   ─────────────────────────────────────────── */

const C = {
  blue: "#2DA8FF",       // the ONE accent
  navy: "#0E2E72",
  navyLight: "#1a3a7a",
  slate: "#334155",
  bg: "#FAFAFA",
  white: "#FFFFFF",
  text: "#0E2E72",
  textSec: "#64748B",
  border: "#E2E8F0",
  borderLight: "#F1F5F9",
};

const G = {
  brand: "linear-gradient(135deg, #0E2E72 0%, #2DA8FF 100%)",
  blueFlat: "#2DA8FF",
  lightAccent: "linear-gradient(135deg, #f8fafc 0%, #f0f4ff 50%, #f8fafc 100%)",
  darkNavy: "linear-gradient(135deg, #0E2E72 0%, #0a1f52 50%, #061840 100%)",
  hero: "linear-gradient(180deg, #0E2E72 0%, #0a1f52 60%, #061840 100%)",
};

const S = {
  sm: "0 1px 4px rgba(14,46,114,0.04)",
  md: "0 4px 16px rgba(14,46,114,0.06)",
  lg: "0 8px 32px rgba(14,46,114,0.1)",
  glow: "0 4px 30px rgba(45,168,255,0.2)",
};

function Card({ children, className = "", elevation = "md" as "sm"|"md"|"lg", hover = true }: { children: React.ReactNode; className?: string; elevation?: "sm"|"md"|"lg"; hover?: boolean }) {
  const sMap = { sm: S.sm, md: S.md, lg: S.lg };
  return (
    <motion.div className={`rounded-2xl border ${className}`} style={{ background: C.white, boxShadow: sMap[elevation], borderColor: C.border }}
      whileHover={hover ? { y: -6, scale: 1.01, boxShadow: S.lg, transition: { duration: 0.25, ease: "easeOut" } } : undefined}>
      {children}
    </motion.div>
  );
}

function DarkCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={`rounded-2xl border border-white/8 ${className}`} style={{ background: "rgba(255,255,255,0.04)", boxShadow: S.sm }}
      whileHover={{ y: -6, scale: 1.02, boxShadow: S.glow, borderColor: "rgba(45,168,255,0.2)", transition: { duration: 0.25, ease: "easeOut" } }}>
      {children}
    </motion.div>
  );
}

function BtnPrimary({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <motion.button className={`inline-flex items-center gap-2 text-white font-semibold rounded-full ${large ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm"}`}
      style={{ background: C.blue, boxShadow: S.glow }}
      whileHover={{ y: -2, boxShadow: "0 8px 40px rgba(45,168,255,0.3)", transition: { duration: 0.2 } }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.button>
  );
}

function BtnNavy({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <motion.button className={`inline-flex items-center gap-2 text-white font-semibold rounded-full ${large ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm"}`}
      style={{ background: C.navy }}
      whileHover={{ y: -2, boxShadow: S.lg, transition: { duration: 0.2 } }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.button>
  );
}

function BtnOutline({ children, large = false, dark = false }: { children: React.ReactNode; large?: boolean; dark?: boolean }) {
  return (
    <motion.button className={`inline-flex items-center gap-2 font-semibold rounded-full border-2 ${large ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm"} ${dark ? "border-white/20 text-white" : "border-[#0E2E72]/15 text-[#0E2E72]"}`}
      style={{ background: "transparent" }}
      whileHover={{ y: -2, borderColor: dark ? "rgba(45,168,255,0.5)" : C.blue, color: dark ? undefined : C.blue, transition: { duration: 0.2 } } as any} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.button>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="h-px flex-1 max-w-[40px]" style={{ background: C.blue }} />
      <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: C.blue }}>{children}</span>
    </div>
  );
}

function IconBox({ icon: Icon, accent = false }: { icon: any; accent?: boolean }) {
  return (
    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{
      background: accent ? `${C.blue}12` : `${C.navy}08`,
      border: `1px solid ${accent ? C.blue : C.navy}15`,
    }}>
      <Icon size={22} style={{ color: accent ? C.blue : C.navy }} />
    </div>
  );
}

export default function DesignPreviewD() {
  const [tab, setTab] = useState(0);

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="text-center py-3 text-xs font-bold tracking-wider text-white" style={{ background: C.navy }}>
        OPTION D: NAVY + WHITE + ELECTRIC BLUE (MINIMAL)
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b" style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)", borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg" style={{ background: C.navy }} />
            <span className="text-lg font-bold" style={{ color: C.navy }}>Cyberaktive</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Solutions", "Resources", "About"].map((i) => (
              <motion.a key={i} className="text-sm font-medium cursor-pointer" style={{ color: C.textSec }} whileHover={{ color: C.navy }}>{i}</motion.a>
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
        <div className="absolute top-20 left-[15%] w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]" style={{ background: C.blue }} />
        <div className="absolute bottom-40 right-[15%] w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]" style={{ background: C.blue }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
              <Sparkles size={14} style={{ color: C.blue }} />
              <span className="text-sm text-white/60">AI-Powered Solutions for Modern Teams</span>
            </div>
          </motion.div>

          <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <span className="text-white">Build Smarter.</span><br />
            <span style={{ color: C.blue }}>Scale Faster.</span>
          </motion.h1>

          <motion.p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Cyberaktive helps teams implement AI solutions that reduce operational overhead, automate workflows, and deliver measurable ROI.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <BtnPrimary large>Book a Strategy Call <ArrowRight size={18} /></BtnPrimary>
            <BtnOutline large dark>See How It Works <ChevronRight size={18} /></BtnOutline>
          </motion.div>
        </div>

        {/* Minimal glow - just blue */}
        <div className="relative h-20">
          <div className="absolute inset-x-0 bottom-0 h-full" style={{ background: "radial-gradient(ellipse 40% 80% at 50% 100%, rgba(45,168,255,0.2) 0%, transparent 60%)" }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[1px]" style={{ background: "linear-gradient(90deg, transparent, rgba(45,168,255,0.5), transparent)", boxShadow: "0 0 20px rgba(45,168,255,0.2)" }} />
        </div>
      </section>

      {/* Colors */}
      <section className="py-24 px-6" style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto">
          <Label>Color Palette</Label>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.navy }}>Option D: Minimal - Navy + White + Electric Blue</h2>
          <p className="text-lg mb-12" style={{ color: C.textSec }}>Stripped back. Almost monochrome with one electric blue accent. Ultra-clean.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {[
              { name: "Navy", hex: "#0E2E72" }, { name: "Electric Blue", hex: "#2DA8FF" },
              { name: "Slate", hex: "#334155" }, { name: "White", hex: "#FFFFFF" },
              { name: "Background", hex: "#FAFAFA" },
            ].map((c) => (
              <motion.div key={c.hex + c.name} className="rounded-xl overflow-hidden border" style={{ borderColor: C.border }} whileHover={{ y: -4, boxShadow: S.md }}>
                <div className="h-24" style={{ background: c.hex, border: c.hex === "#FFFFFF" ? `1px solid ${C.border}` : "none" }} />
                <div className="p-3 bg-white"><div className="text-xs font-bold" style={{ color: C.navy }}>{c.name}</div><div className="text-xs font-mono" style={{ color: C.textSec }}>{c.hex}</div></div>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[{ name: "Navy to Blue", bg: G.brand }, { name: "Light Accent", bg: G.lightAccent }, { name: "Dark Navy", bg: G.darkNavy }].map((g) => (
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
            <div><p className="text-sm font-semibold mb-4" style={{ color: C.textSec }}>Primary (Electric Blue)</p>
              <div className="flex flex-wrap gap-4"><BtnPrimary large>Large CTA <ArrowRight size={18} /></BtnPrimary><BtnPrimary>Default <ArrowRight size={16} /></BtnPrimary></div></div>
            <div><p className="text-sm font-semibold mb-4" style={{ color: C.textSec }}>Navy Solid</p>
              <div className="flex flex-wrap gap-4"><BtnNavy large>Navy CTA <ArrowRight size={18} /></BtnNavy><BtnNavy>Navy Default <ArrowRight size={16} /></BtnNavy></div></div>
            <div><p className="text-sm font-semibold mb-4" style={{ color: C.textSec }}>Outline</p>
              <div className="flex flex-wrap gap-4"><BtnOutline large>Large <ChevronRight size={18} /></BtnOutline><BtnOutline>Default <ChevronRight size={16} /></BtnOutline></div></div>
            <div className="p-8 rounded-2xl" style={{ background: G.darkNavy }}>
              <p className="text-sm font-semibold mb-4 text-white/60">On Dark</p>
              <div className="flex flex-wrap gap-4"><BtnPrimary large>Blue <ArrowRight size={18} /></BtnPrimary><BtnOutline large dark>Outline <ChevronRight size={18} /></BtnOutline></div>
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
              { icon: Shield, title: "AI Risk Assessment", desc: "Identify compliance risks with intelligent analysis", accent: true },
              { icon: Zap, title: "Workflow Automation", desc: "Automate tasks and free up your team", accent: false },
              { icon: BarChart3, title: "ROI Analytics", desc: "Track outcomes and prove AI value", accent: true },
              { icon: Brain, title: "Smart Integration", desc: "Connect AI with your existing stack", accent: false },
            ].map((card, i) => (
              <Card key={i} elevation="md" className="p-6">
                <IconBox icon={card.icon} accent={card.accent} /><h4 className="text-lg font-bold mt-4 mb-2" style={{ color: C.navy }}>{card.title}</h4><p className="text-sm leading-relaxed" style={{ color: C.textSec }}>{card.desc}</p>
              </Card>
            ))}
          </div>

          <div className="p-8 rounded-3xl" style={{ background: G.darkNavy }}>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: CheckCircle2, title: "Performance that scales", desc: "Sub-second response times at scale." },
                { icon: Lock, title: "Secure by default", desc: "SOC 2, encryption, SSO/SAML." },
                { icon: Layers, title: "Open ecosystem", desc: "No vendor lock-in." },
                { icon: Code2, title: "Built for teams", desc: "Workflows and access control." },
              ].map((card, i) => (
                <DarkCard key={i} className="p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(45,168,255,0.1)", border: "1px solid rgba(45,168,255,0.15)" }}>
                    <card.icon size={20} style={{ color: C.blue }} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{card.title}</h4><p className="text-sm leading-relaxed text-white/50">{card.desc}</p>
                </DarkCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento */}
      <section className="py-24 px-6" style={{ background: C.white }}>
        <div className="max-w-6xl mx-auto">
          <Label>Feature Layout</Label>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: C.navy }}>Everything you need to <span style={{ color: C.blue }}>scale AI</span></h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: C.textSec }}>Strategy, implementation, and optimization.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card elevation="lg" className="md:col-span-2 p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: C.navy }}><Rocket size={16} className="text-white" /></div>
                <span className="text-xs font-bold tracking-wider uppercase" style={{ color: C.blue }}>Strategy</span>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: C.navy }}>The Right AI Approach</h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: C.textSec }}>Comprehensive strategies aligned with your goals.</p>
              <div className="grid grid-cols-3 gap-4">
                {[{ m: "3x", l: "Faster" }, { m: "60%", l: "Savings" }, { m: "2 wks", l: "Results" }].map((s) => (
                  <div key={s.l} className="text-center p-3 rounded-xl border" style={{ borderColor: C.border }}>
                    <div className="text-2xl font-extrabold" style={{ color: C.navy }}>{s.m}</div><div className="text-xs" style={{ color: C.textSec }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </Card>
            <Card elevation="md" className="p-8 flex flex-col justify-between">
              <div>
                <IconBox icon={Star} accent />
                <h3 className="text-xl font-bold mt-4 mb-3" style={{ color: C.navy }}>Proven Results</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.textSec }}>Measurable ROI within month one.</p>
              </div>
              <div className="mt-6 p-4 rounded-xl border" style={{ borderColor: C.border }}>
                <p className="text-sm italic" style={{ color: C.textSec }}>"70% faster document review with better accuracy."</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 px-6" style={{ background: G.darkNavy }}>
        <div className="absolute top-10 right-[20%] w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]" style={{ background: C.blue }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your workflow?</h2>
          <p className="text-lg text-white/50 mb-10">Book a free strategy call.</p>
          <div className="flex flex-wrap justify-center gap-4"><BtnPrimary large>Book a Strategy Call <ArrowRight size={18} /></BtnPrimary><BtnOutline large dark>Learn More <ChevronRight size={18} /></BtnOutline></div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-24 px-6" style={{ background: G.lightAccent }}>
        <div className="max-w-6xl mx-auto">
          <Label>Interactive Elements</Label>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: C.navy }}>Process Steps</h2>
          <div className="flex gap-1 p-1 rounded-xl mb-8 inline-flex" style={{ background: "rgba(14,46,114,0.04)" }}>
            {["Discovery", "Strategy", "Build", "Launch"].map((t, i) => (
              <motion.button key={t} className="px-6 py-3 rounded-lg text-sm font-semibold"
                style={tab === i ? { background: C.navy, color: "white" } : { color: C.textSec }}
                onClick={() => setTab(i)} whileTap={{ scale: 0.98 }}>{t}</motion.button>
            ))}
          </div>
          <Card elevation="lg" hover={false} className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: C.blue }}>
                <span className="text-white font-bold text-xl">{tab + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: C.navy }}>{["Discovery & Assessment", "Strategy Design", "Build & Implement", "Launch & Optimize"][tab]}</h3>
                <p className="text-base leading-relaxed" style={{ color: C.textSec }}>{["Thorough audit of workflows, pain points, and AI opportunities.", "Tailored strategy with milestones and ROI projections.", "Incremental build with weekly check-ins.", "Launch, monitor, and continuously optimize."][tab]}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t" style={{ background: C.white, borderColor: C.border }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-lg" style={{ background: C.navy }} /><span className="text-lg font-bold" style={{ color: C.navy }}>Cyberaktive</span></div>
            <p className="text-sm leading-relaxed" style={{ color: C.textSec }}>AI consulting and development.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[{ t: "Services", l: ["AI Strategy", "Automation", "Development"] }, { t: "Resources", l: ["Case Studies", "Blog", "Calculators"] }, { t: "Company", l: ["About", "Team", "Contact"] }].map((col) => (
              <div key={col.t}><h4 className="text-sm font-bold mb-4" style={{ color: C.navy }}>{col.t}</h4>
                {col.l.map((link) => (<motion.a key={link} className="block text-sm mb-2 cursor-pointer" style={{ color: C.textSec }} whileHover={{ color: C.blue, x: 2 }}>{link}</motion.a>))}
              </div>
            ))}
          </div>
        </div>
      </footer>

      <div className="py-6 px-6 text-center" style={{ background: C.bg }}><p className="text-xs" style={{ color: C.textSec }}>
        Option D Preview | <a href="/design-preview-a" className="underline" style={{ color: C.blue }}>Option A</a> | <a href="/design-preview-b" className="underline" style={{ color: C.blue }}>Option B</a> | <a href="/design-preview-c" className="underline" style={{ color: C.blue }}>Option C</a> | <a href="/design-preview" className="underline" style={{ color: C.blue }}>Original</a>
      </p></div>
    </div>
  );
}
