import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";
import Solution from "@/components/sections/solution";
import Automations from "@/components/sections/automations";
import Results from "@/components/sections/results";
import Process from "@/components/sections/process";
import Team from "@/components/sections/team";
import RiskReversal from "@/components/sections/risk-reversal";
import Calendar from "@/components/sections/calendar";
import FinalCTA from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
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
