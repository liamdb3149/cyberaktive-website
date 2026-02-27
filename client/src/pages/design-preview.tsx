import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Shield, Zap, BarChart3, Brain,
  CheckCircle2, Sparkles, ChevronRight, Star,
  Code2, Lock, Layers, Rocket
} from "lucide-react";

/* ───────────────────────────────────────────
   CYBERAKTIVE DESIGN SYSTEM PREVIEW
   Proposed redesign - Mixpanel-inspired,
   brand-aligned color treatment
   ─────────────────────────────────────────── */

// ── Brand Tokens ──
const colors = {
  primaryLight: "#2DA8FF",
  primaryDeep: "#0057D8",
  indigo: "#1C46F2",
  navy: "#0E2E72",
  magenta: "#C845FF",
  pinkViolet: "#F04BFF",
  bg: "#FAFAFA",
  white: "#FFFFFF",
  textPrimary: "#0E2E72",
  textSecondary: "#4A5568",
  border: "#E2E8F0",
};

const gradients = {
  brand: "linear-gradient(135deg, #C845FF 0%, #2DA8FF 50%, #0057D8 100%)",
  brandReverse: "linear-gradient(135deg, #0057D8 0%, #2DA8FF 50%, #C845FF 100%)",
  lightAccent: "linear-gradient(135deg, #f0f4ff 0%, #f5f0ff 50%, #fff0f8 100%)",
  darkNavy: "linear-gradient(135deg, #0E2E72 0%, #1a1a4e 50%, #2d1654 100%)",
  glowBar: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(45,168,255,0.4) 0%, rgba(200,69,255,0.3) 40%, transparent 70%)",
  heroOverlay: "linear-gradient(180deg, rgba(14,46,114,0.95) 0%, rgba(26,26,78,0.9) 50%, rgba(45,22,84,0.85) 100%)",
  subtleCard: "linear-gradient(135deg, rgba(45,168,255,0.05) 0%, rgba(200,69,255,0.05) 100%)",
};

const shadows = {
  sm: "0 2px 8px rgba(14, 46, 114, 0.06)",
  md: "0 4px 20px rgba(14, 46, 114, 0.08)",
  lg: "0 12px 40px rgba(14, 46, 114, 0.12)",
  glow: "0 4px 30px rgba(45, 168, 255, 0.2)",
  glowMagenta: "0 4px 30px rgba(200, 69, 255, 0.2)",
};

// ── Reusable Components ──

function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={className}
      style={{
        background: gradients.brand,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

function GlassCard({
  children,
  className = "",
  hover = true,
  elevation = "md",
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  elevation?: "sm" | "md" | "lg";
}) {
  const shadowMap = { sm: shadows.sm, md: shadows.md, lg: shadows.lg };
  const hoverShadow = elevation === "lg" ? shadows.glow : shadows.lg;

  return (
    <motion.div
      className={`rounded-2xl border border-white/60 backdrop-blur-xl ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        boxShadow: shadowMap[elevation],
      }}
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.02,
              boxShadow: hoverShadow,
              transition: { duration: 0.25, ease: "easeOut" },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}

function NavyCard({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      className={`rounded-2xl border border-white/10 backdrop-blur-xl ${className}`}
      style={{
        background: "rgba(14, 46, 114, 0.6)",
        boxShadow: shadows.md,
      }}
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.02,
              boxShadow: shadows.glow,
              transition: { duration: 0.25, ease: "easeOut" },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}

function PrimaryButton({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <motion.button
      className={`inline-flex items-center gap-2 text-white font-semibold rounded-full ${
        large ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm"
      }`}
      style={{
        background: gradients.brand,
        boxShadow: shadows.glow,
      }}
      whileHover={{
        y: -2,
        boxShadow: "0 8px 40px rgba(45, 168, 255, 0.35)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

function OutlineButton({ children, large = false, dark = false }: { children: React.ReactNode; large?: boolean; dark?: boolean }) {
  return (
    <motion.button
      className={`inline-flex items-center gap-2 font-semibold rounded-full border-2 ${
        large ? "px-8 py-4 text-lg" : "px-6 py-3 text-sm"
      } ${dark ? "border-white/30 text-white hover:border-white/60" : "border-[#0E2E72]/20 text-[#0E2E72] hover:border-[#0057D8]"}`}
      style={{ background: dark ? "rgba(255,255,255,0.05)" : "transparent" }}
      whileHover={{
        y: -2,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

function GhostButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full text-[#0057D8]"
      whileHover={{
        backgroundColor: "rgba(45, 168, 255, 0.08)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="h-px flex-1 max-w-[40px]" style={{ background: gradients.brand }} />
      <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: colors.primaryDeep }}>
        {children}
      </span>
    </div>
  );
}

function IconBox({ icon: Icon, color = colors.primaryDeep }: { icon: any; color?: string }) {
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${color}15, ${color}08)`,
        border: `1px solid ${color}20`,
      }}
    >
      <Icon size={22} style={{ color }} />
    </div>
  );
}

// ── Main Preview Page ──

export default function DesignPreview() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ background: colors.bg, color: colors.textPrimary, fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ═══════════════════════════════════════
          SECTION 1: HEADER / NAV PREVIEW
          ═══════════════════════════════════════ */}
      <nav
        className="sticky top-0 z-50 border-b backdrop-blur-xl"
        style={{
          background: "rgba(250, 250, 250, 0.8)",
          borderColor: colors.border,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg"
              style={{ background: gradients.brand }}
            />
            <span className="text-lg font-bold" style={{ color: colors.navy }}>
              Cyberaktive
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Solutions", "Resources", "About"].map((item) => (
              <motion.a
                key={item}
                className="text-sm font-medium cursor-pointer"
                style={{ color: colors.textSecondary }}
                whileHover={{ color: colors.primaryDeep }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <OutlineButton>Contact Sales</OutlineButton>
            <PrimaryButton>
              Get Started <ArrowRight size={16} />
            </PrimaryButton>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          SECTION 2: HERO
          ═══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: gradients.darkNavy,
          minHeight: "85vh",
        }}
      >
        {/* Floating gradient orbs */}
        <div
          className="absolute top-20 left-[15%] w-[400px] h-[400px] rounded-full opacity-30 blur-[100px]"
          style={{ background: colors.magenta }}
        />
        <div
          className="absolute bottom-20 right-[10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: colors.primaryLight }}
        />
        <div
          className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full opacity-15 blur-[80px]"
          style={{ background: colors.indigo }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 mb-8">
              <Sparkles size={14} className="text-[#C845FF]" />
              <span className="text-sm text-white/70">AI-Powered Solutions for Modern Teams</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-white">Build Smarter.</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #C845FF 0%, #2DA8FF 50%, #8DD8FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Scale Faster.
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cyberaktive helps teams implement AI solutions that reduce operational overhead,
            automate workflows, and deliver measurable ROI.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <PrimaryButton large>
              Book a Strategy Call <ArrowRight size={18} />
            </PrimaryButton>
            <OutlineButton large dark>
              See How It Works <ChevronRight size={18} />
            </OutlineButton>
          </motion.div>
        </div>

        {/* ── Glow Bar (Mixpanel-inspired) ── */}
        <div className="relative h-24">
          <div
            className="absolute inset-x-0 bottom-0 h-full"
            style={{
              background: "radial-gradient(ellipse 50% 80% at 50% 100%, rgba(45,168,255,0.35) 0%, rgba(200,69,255,0.2) 40%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(45,168,255,0.6), rgba(200,69,255,0.6), transparent)",
              boxShadow: "0 0 30px rgba(45,168,255,0.4), 0 0 60px rgba(200,69,255,0.2)",
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3: COLOR PALETTE
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: colors.bg }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Color Palette</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.navy }}>
            Proposed Brand Colors
          </h2>
          <p className="text-lg mb-12" style={{ color: colors.textSecondary }}>
            Derived from the Cyberaktive logo gradient - blue-forward with magenta accents.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {[
              { name: "Primary Light", hex: "#2DA8FF", textDark: false },
              { name: "Primary Deep", hex: "#0057D8", textDark: false },
              { name: "Indigo", hex: "#1C46F2", textDark: false },
              { name: "Navy", hex: "#0E2E72", textDark: false },
              { name: "Magenta", hex: "#C845FF", textDark: false },
              { name: "Pink-Violet", hex: "#F04BFF", textDark: false },
              { name: "Background", hex: "#FAFAFA", textDark: true },
            ].map((c) => (
              <motion.div
                key={c.hex}
                className="rounded-xl overflow-hidden border"
                style={{ borderColor: colors.border }}
                whileHover={{ y: -4, boxShadow: shadows.md }}
              >
                <div
                  className="h-24"
                  style={{ background: c.hex }}
                />
                <div className="p-3 bg-white">
                  <div className="text-xs font-bold" style={{ color: colors.navy }}>{c.name}</div>
                  <div className="text-xs font-mono" style={{ color: colors.textSecondary }}>{c.hex}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient swatches */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Core Brand Gradient", bg: gradients.brand },
              { name: "Light Accent Background", bg: gradients.lightAccent },
              { name: "Dark Navy Section", bg: gradients.darkNavy },
            ].map((g) => (
              <motion.div
                key={g.name}
                className="rounded-xl overflow-hidden border"
                style={{ borderColor: colors.border }}
                whileHover={{ y: -4, boxShadow: shadows.md }}
              >
                <div className="h-20" style={{ background: g.bg }} />
                <div className="p-3 bg-white">
                  <div className="text-xs font-bold" style={{ color: colors.navy }}>{g.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4: TYPOGRAPHY
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: colors.white }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Typography</SectionLabel>
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono block mb-1" style={{ color: colors.textSecondary }}>h1 - 4.5rem / 800</span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" style={{ color: colors.navy }}>
                Heading One
              </h1>
            </div>
            <div>
              <span className="text-xs font-mono block mb-1" style={{ color: colors.textSecondary }}>h2 - 2.5rem / 700</span>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.navy }}>
                Heading Two - Section Title
              </h2>
            </div>
            <div>
              <span className="text-xs font-mono block mb-1" style={{ color: colors.textSecondary }}>h3 - 1.5rem / 600</span>
              <h3 className="text-xl md:text-2xl font-semibold" style={{ color: colors.navy }}>
                Heading Three - Card Title
              </h3>
            </div>
            <div>
              <span className="text-xs font-mono block mb-1" style={{ color: colors.textSecondary }}>h4 - 1.125rem / 600</span>
              <h4 className="text-lg font-semibold" style={{ color: colors.navy }}>
                Heading Four - Subtitle
              </h4>
            </div>
            <div>
              <span className="text-xs font-mono block mb-1" style={{ color: colors.textSecondary }}>body - 1rem / 400</span>
              <p className="text-base leading-relaxed max-w-2xl" style={{ color: colors.textSecondary }}>
                Body text looks like this. It uses Inter at regular weight with relaxed line-height for comfortable reading.
                The secondary text color provides enough contrast while keeping the overall feel light and airy.
              </p>
            </div>
            <div>
              <span className="text-xs font-mono block mb-1" style={{ color: colors.textSecondary }}>Gradient text</span>
              <GradientText className="text-3xl md:text-4xl font-bold">
                Gradient Text Treatment
              </GradientText>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5: BUTTON STYLES
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: gradients.lightAccent }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Buttons</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: colors.navy }}>
            Button Styles
          </h2>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold mb-4" style={{ color: colors.textSecondary }}>Primary (Gradient)</p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton large>Large CTA <ArrowRight size={18} /></PrimaryButton>
                <PrimaryButton>Default Size <ArrowRight size={16} /></PrimaryButton>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4" style={{ color: colors.textSecondary }}>Secondary (Outline)</p>
              <div className="flex flex-wrap gap-4">
                <OutlineButton large>Large Outline <ChevronRight size={18} /></OutlineButton>
                <OutlineButton>Default Outline <ChevronRight size={16} /></OutlineButton>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4" style={{ color: colors.textSecondary }}>Ghost</p>
              <div className="flex flex-wrap gap-4">
                <GhostButton>Ghost Button <ChevronRight size={16} /></GhostButton>
              </div>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: gradients.darkNavy }}>
              <p className="text-sm font-semibold mb-4 text-white/60">On Dark Background</p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton large>Primary on Dark <ArrowRight size={18} /></PrimaryButton>
                <OutlineButton large dark>Outline on Dark <ChevronRight size={18} /></OutlineButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 6: CARD STYLES & DEPTH
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: colors.bg }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Cards & Depth</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.navy }}>
            Card Styles with Layered Depth
          </h2>
          <p className="text-lg mb-12" style={{ color: colors.textSecondary }}>
            Hover over cards to see lift, shadow, and scale animations.
          </p>

          {/* Elevation comparison */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {(["sm", "md", "lg"] as const).map((elev, i) => (
              <GlassCard key={elev} elevation={elev} className="p-8">
                <div className="text-xs font-mono mb-3 px-2 py-1 rounded-md inline-block"
                     style={{ background: `${colors.primaryLight}15`, color: colors.primaryDeep }}>
                  elevation: {elev}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.navy }}>
                  {["Flat", "Raised", "Floating"][i]} Card
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
                  {[
                    "Subtle shadow for inline content. Good for lists and secondary elements.",
                    "Medium depth for feature cards and content blocks. The default level.",
                    "Maximum depth for hero cards and focal points. Commands attention.",
                  ][i]}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* Feature cards grid */}
          <h3 className="text-2xl font-bold mb-8" style={{ color: colors.navy }}>Feature Cards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Shield, title: "AI Risk Assessment", desc: "Identify and mitigate compliance risks with intelligent analysis", color: colors.primaryDeep },
              { icon: Zap, title: "Workflow Automation", desc: "Automate repetitive tasks and free up your team for strategic work", color: colors.indigo },
              { icon: BarChart3, title: "ROI Analytics", desc: "Track measurable outcomes and prove the value of AI investment", color: colors.primaryLight },
              { icon: Brain, title: "Smart Integration", desc: "Seamlessly connect AI tools with your existing tech stack", color: colors.magenta },
            ].map((card, i) => (
              <GlassCard key={i} elevation="md" className="p-6">
                <IconBox icon={card.icon} color={card.color} />
                <h4 className="text-lg font-bold mt-4 mb-2" style={{ color: colors.navy }}>{card.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>{card.desc}</p>
              </GlassCard>
            ))}
          </div>

          {/* Navy/dark cards */}
          <h3 className="text-2xl font-bold mb-8" style={{ color: colors.navy }}>Dark Cards (for gradient sections)</h3>
          <div className="p-8 rounded-3xl" style={{ background: gradients.darkNavy }}>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: CheckCircle2, title: "Performance that scales", desc: "Sub-second response times, even at enterprise volume." },
                { icon: Lock, title: "Secure by default", desc: "SOC 2, encryption at rest, SSO/SAML, and full audit logs." },
                { icon: Layers, title: "Open ecosystem", desc: "Connect to your existing stack with flexibility and no lock-in." },
                { icon: Code2, title: "Built for teams", desc: "Define workflows, manage access, and keep teams aligned." },
              ].map((card, i) => (
                <NavyCard key={i} className="p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                       style={{ background: "rgba(45,168,255,0.15)", border: "1px solid rgba(45,168,255,0.2)" }}>
                    <card.icon size={20} style={{ color: colors.primaryLight }} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-sm leading-relaxed text-white/60">{card.desc}</p>
                </NavyCard>
              ))}
            </div>

            {/* Glow bar inside dark section */}
            <div className="relative h-16 mt-8">
              <div
                className="absolute inset-x-0 top-0 h-full"
                style={{
                  background: "radial-gradient(ellipse 40% 100% at 50% 0%, rgba(45,168,255,0.25) 0%, rgba(200,69,255,0.15) 50%, transparent 80%)",
                }}
              />
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px]"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(45,168,255,0.5), rgba(200,69,255,0.5), transparent)",
                  boxShadow: "0 0 20px rgba(45,168,255,0.3), 0 0 40px rgba(200,69,255,0.15)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 7: BENTO / FEATURE LAYOUT
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: colors.white }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Feature Layout</SectionLabel>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: colors.navy }}>
              Everything you need to <GradientText>scale AI</GradientText>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
              A complete platform for AI strategy, implementation, and ongoing optimization.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large card spanning 2 columns */}
            <GlassCard elevation="lg" className="md:col-span-2 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-[60px]"
                   style={{ background: colors.primaryLight }} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                       style={{ background: gradients.brand }}>
                    <Rocket size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase" style={{ color: colors.primaryDeep }}>
                    Strategy
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: colors.navy }}>
                  The Right AI Approach
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: colors.textSecondary }}>
                  We don't just deploy AI tools - we design comprehensive strategies aligned with your business goals,
                  ensuring every implementation delivers measurable outcomes.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { metric: "3x", label: "Faster workflows" },
                    { metric: "60%", label: "Cost reduction" },
                    { metric: "2 weeks", label: "To first results" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl" style={{ background: `${colors.primaryLight}08` }}>
                      <div className="text-2xl font-extrabold" style={{ color: colors.primaryDeep }}>{stat.metric}</div>
                      <div className="text-xs" style={{ color: colors.textSecondary }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* Tall card */}
            <GlassCard elevation="md" className="p-8 flex flex-col justify-between"
                       style={{ background: `linear-gradient(180deg, rgba(200,69,255,0.04), rgba(45,168,255,0.04))` } as any}>
              <div>
                <IconBox icon={Star} color={colors.magenta} />
                <h3 className="text-xl font-bold mt-4 mb-3" style={{ color: colors.navy }}>
                  Proven Results
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
                  Our clients see measurable ROI within the first month of implementation.
                </p>
              </div>
              <div className="mt-6 p-4 rounded-xl border" style={{ borderColor: colors.border }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full" style={{ background: gradients.brand }} />
                  <div>
                    <div className="text-sm font-bold" style={{ color: colors.navy }}>Client Review</div>
                    <div className="text-xs" style={{ color: colors.textSecondary }}>Legal Team Lead</div>
                  </div>
                </div>
                <p className="text-sm italic" style={{ color: colors.textSecondary }}>
                  "Transformed how our team handles document review - 70% faster with better accuracy."
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 8: CTA SECTION (DARK)
          ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 px-6" style={{ background: gradients.darkNavy }}>
        {/* Glow orbs */}
        <div className="absolute top-10 left-[20%] w-[300px] h-[300px] rounded-full opacity-20 blur-[80px]"
             style={{ background: colors.magenta }} />
        <div className="absolute bottom-10 right-[20%] w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
             style={{ background: colors.primaryLight }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Book a free strategy call and see exactly how AI can reduce costs
            and accelerate your team's output.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton large>
              Book a Strategy Call <ArrowRight size={18} />
            </PrimaryButton>
            <OutlineButton large dark>
              Learn More <ChevronRight size={18} />
            </OutlineButton>
          </div>
        </div>

        {/* Bottom glow bar */}
        <div className="absolute bottom-0 inset-x-0 h-20">
          <div
            className="absolute inset-x-0 bottom-0 h-full"
            style={{
              background: "radial-gradient(ellipse 50% 80% at 50% 100%, rgba(45,168,255,0.3) 0%, rgba(200,69,255,0.15) 50%, transparent 80%)",
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 9: TABS / INTERACTIVE DEMO
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: gradients.lightAccent }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Interactive Elements</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: colors.navy }}>
            Tabs & Process Steps
          </h2>

          {/* Tab bar */}
          <div className="flex gap-1 p-1 rounded-xl mb-8 inline-flex" style={{ background: "rgba(14,46,114,0.06)" }}>
            {["Discovery", "Strategy", "Build", "Launch"].map((tab, i) => (
              <motion.button
                key={tab}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === i ? "text-white" : ""
                }`}
                style={
                  activeTab === i
                    ? { background: gradients.brand, color: "white" }
                    : { color: colors.textSecondary }
                }
                onClick={() => setActiveTab(i)}
                whileHover={activeTab !== i ? { backgroundColor: "rgba(14,46,114,0.06)" } : undefined}
                whileTap={{ scale: 0.98 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          <GlassCard elevation="lg" hover={false} className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                   style={{ background: gradients.brand }}>
                <span className="text-white font-bold text-xl">{activeTab + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.navy }}>
                  {["Discovery & Assessment", "Strategy Design", "Build & Implement", "Launch & Optimize"][activeTab]}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: colors.textSecondary }}>
                  {[
                    "We start by understanding your current workflows, pain points, and objectives. This includes a thorough audit of existing processes and identification of high-impact AI opportunities.",
                    "Based on discovery findings, we design a tailored AI strategy with clear milestones, expected ROI projections, and a prioritized implementation roadmap.",
                    "Our team builds and integrates your AI solutions incrementally, with weekly check-ins and iterative refinements based on real feedback from your team.",
                    "We launch with full support, monitor performance metrics, and continuously optimize to ensure you're getting maximum value from your AI investment.",
                  ][activeTab]}
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: `${colors.primaryLight}15`, color: colors.primaryDeep }}>
                    {["1-2 weeks", "1 week", "4-6 weeks", "Ongoing"][activeTab]}
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 10: SHADOW & DEPTH DEMO
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6" style={{ background: colors.white }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Depth & Shadows</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: colors.navy }}>
            Shadow System
          </h2>

          <div className="flex flex-wrap gap-8 items-end">
            {[
              { name: "shadow-sm", shadow: shadows.sm, size: "w-32 h-32" },
              { name: "shadow-md", shadow: shadows.md, size: "w-36 h-36" },
              { name: "shadow-lg", shadow: shadows.lg, size: "w-40 h-40" },
              { name: "glow-blue", shadow: shadows.glow, size: "w-40 h-40" },
              { name: "glow-magenta", shadow: shadows.glowMagenta, size: "w-40 h-40" },
            ].map((s) => (
              <motion.div
                key={s.name}
                className={`${s.size} rounded-2xl bg-white flex items-center justify-center border`}
                style={{ boxShadow: s.shadow, borderColor: colors.border }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <span className="text-xs font-mono" style={{ color: colors.textSecondary }}>{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER PREVIEW
          ═══════════════════════════════════════ */}
      <footer className="py-16 px-6 border-t" style={{ background: colors.white, borderColor: colors.border }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg" style={{ background: gradients.brand }} />
                <span className="text-lg font-bold" style={{ color: colors.navy }}>Cyberaktive</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
                AI consulting and development for modern teams. Strategy, implementation, and results.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "Services", links: ["AI Strategy", "Automation", "Development", "Workshops"] },
                { title: "Resources", links: ["Case Studies", "Blog", "Calculators", "Prompt Library"] },
                { title: "Company", links: ["About", "Team", "Contact", "Privacy"] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="text-sm font-bold mb-4" style={{ color: colors.navy }}>{col.title}</h4>
                  <div className="space-y-3">
                    {col.links.map((link) => (
                      <motion.a
                        key={link}
                        className="block text-sm cursor-pointer"
                        style={{ color: colors.textSecondary }}
                        whileHover={{ color: colors.primaryDeep, x: 2 }}
                      >
                        {link}
                      </motion.a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center" style={{ borderColor: colors.border }}>
            <p className="text-xs" style={{ color: colors.textSecondary }}>
              2025 Cyberaktive. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ── Design System Note ── */}
      <div className="py-8 px-6 text-center" style={{ background: colors.bg }}>
        <p className="text-xs" style={{ color: colors.textSecondary }}>
          This is a design preview page - not part of the live site. Visit{" "}
          <a href="/" className="underline" style={{ color: colors.primaryDeep }}>the homepage</a>{" "}
          to see the current design.
        </p>
      </div>
    </div>
  );
}
