import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem-fixed";
import Solution from "@/components/sections/solution-fixed";
import Automations from "@/components/sections/automations-fixed";
import Results from "@/components/sections/results-new";
import Process from "@/components/sections/process";
import Team from "@/components/sections/team";
import RiskReversal from "@/components/sections/risk-reversal";
import Calendar from "@/components/sections/calendar";
import FinalCTA from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="min-h-screen homepage-hero text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Automations />
        <Results />
        <Process />
        <Team />
        <RiskReversal />
        <Calendar />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
