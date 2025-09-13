import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PropertyHero from "@/components/sections/property-hero-original";
import PropertyAutomations from "@/components/sections/property-automations-fixed";

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