import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PropertyHero from "@/components/sections/property-hero-new";
import PropertyAutomations from "@/components/sections/property-automations-new";

export default function PropertyManagement() {
  return (
    <div className="min-h-screen text-foreground antialiased">
      <Header />
      <main>
        <PropertyHero />
        <PropertyAutomations />
      </main>
      <Footer />
    </div>
  );
}