import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Scale, FileText, Search, Users, Zap, CheckCircle, Building2, Clock } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { RevealOnScroll } from "@/components/ui/visual";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/tlZAXVaHxTw9fvistaTr";

const practiceAreas = [
  { slug: "personal-injury", name: "Personal Injury", icon: Scale, description: "Intake automation, case triage, and follow-up workflows for high-volume PI firms." },
  { slug: "corporate-law", name: "Corporate Law", icon: Building2, description: "Matter intake, document review, and contract analysis automation for transactional teams." },
  { slug: "family-law", name: "Family Law", icon: Users, description: "24/7 intake, consultation booking, and case management for divorce and custody practices." },
  { slug: "immigration", name: "Immigration", icon: FileText, description: "Multilingual intake, application tracking, and status updates for immigration firms." },
  { slug: "employment-law", name: "Employment Law", icon: Zap, description: "Case qualification, document review, and research automation for employment practices." },
  { slug: "criminal-defense", name: "Criminal Defense", icon: Scale, description: "After-hours intake, court date tracking, and case preparation support." },
  { slug: "estate-planning", name: "Estate Planning", icon: FileText, description: "Client onboarding, document assembly, and follow-up workflows for estate and probate." },
  { slug: "real-estate-law", name: "Real Estate Law", icon: Building2, description: "Contract review, closing document automation, and transaction management." },
  { slug: "intellectual-property", name: "Intellectual Property", icon: Search, description: "Prior art research, application tracking, and prosecution management." },
  { slug: "workers-comp", name: "Workers Compensation", icon: Users, description: "Intake qualification, medical record management, and claim status workflows." },
  { slug: "medical-malpractice", name: "Medical Malpractice", icon: Scale, description: "Case intake, expert research, and document review for medical liability practices." },
  { slug: "bankruptcy", name: "Bankruptcy", icon: FileText, description: "Client intake, petition preparation support, and creditor communication workflows." },
];

const services = [
  {
    icon: Users,
    title: "AI Client Intake Automation",
    description: "Respond to every inquiry within 60 seconds, qualify cases automatically, and book consultations 24/7 without staff involvement.",
    href: "/legal/personal-injury/intake-automation",
    stat: "40-60% more consultations booked",
  },
  {
    icon: FileText,
    title: "AI Document Review",
    description: "Review contracts, discovery documents, and due diligence materials faster and more consistently than manual review.",
    href: "/legal/corporate-law/document-review",
    stat: "60-80% reduction in review time",
  },
  {
    icon: Search,
    title: "Legal Research Automation",
    description: "AI-assisted research that surfaces relevant case law, statutes, and secondary sources in minutes rather than hours.",
    href: "/legal/corporate-law/legal-research-automation",
    stat: "3x faster research output",
  },
  {
    icon: Zap,
    title: "AI Workshops for Legal Teams",
    description: "Half-day training where your team walks out using AI tools the same afternoon. We arrive with a pre-built automation of one of your real processes.",
    href: "/legal-ai-workshops",
    stat: "AI in use the same day",
  },
  {
    icon: Building2,
    title: "AI Readiness Assessment",
    description: "We analyze your firm's workflows, identify the 2-3 automations with the highest ROI, and deliver a 90-day roadmap with cost and timeline.",
    href: "/ai-strategy-assessment",
    stat: "ROI-ranked roadmap",
  },
];

const stats = [
  { value: "$175K+", label: "average annual savings" },
  { value: "80%+", label: "team adoption at 90 days" },
  { value: "90 days", label: "to measurable ROI" },
  { value: "25+", label: "law firms served" },
];

const cities = [
  { name: "New York", slug: "new-york" },
  { name: "Los Angeles", slug: "los-angeles" },
  { name: "Chicago", slug: "chicago" },
  { name: "Houston", slug: "houston" },
  { name: "Dallas", slug: "dallas" },
  { name: "San Francisco", slug: "san-francisco" },
  { name: "Washington DC", slug: "washington-dc" },
  { name: "Atlanta", slug: "atlanta" },
  { name: "Miami", slug: "miami" },
  { name: "Boston", slug: "boston" },
  { name: "Seattle", slug: "seattle" },
  { name: "Denver", slug: "denver" },
  { name: "Austin", slug: "austin" },
  { name: "Phoenix", slug: "phoenix" },
  { name: "Philadelphia", slug: "philadelphia" },
  { name: "San Diego", slug: "san-diego" },
  { name: "Minneapolis", slug: "minneapolis" },
  { name: "Portland", slug: "portland" },
  { name: "Charlotte", slug: "charlotte" },
  { name: "Nashville", slug: "nashville" },
  { name: "Las Vegas", slug: "las-vegas" },
  { name: "Tampa", slug: "tampa" },
  { name: "Orlando", slug: "orlando" },
  { name: "San Antonio", slug: "san-antonio" },
  { name: "Indianapolis", slug: "indianapolis" },
  { name: "Columbus", slug: "columbus" },
  { name: "Baltimore", slug: "baltimore" },
  { name: "Pittsburgh", slug: "pittsburgh" },
  { name: "Kansas City", slug: "kansas-city" },
  { name: "Salt Lake City", slug: "salt-lake-city" },
  { name: "London", slug: "london" },
  { name: "Manchester", slug: "manchester" },
  { name: "Edinburgh", slug: "edinburgh" },
  { name: "Birmingham", slug: "birmingham" },
  { name: "Bristol", slug: "bristol" },
  { name: "Leeds", slug: "leeds" },
  { name: "Liverpool", slug: "liverpool" },
  { name: "Glasgow", slug: "glasgow" },
  { name: "Sydney", slug: "sydney" },
  { name: "Melbourne", slug: "melbourne" },
  { name: "Brisbane", slug: "brisbane" },
  { name: "Perth", slug: "perth" },
  { name: "Adelaide", slug: "adelaide" },
  { name: "Canberra", slug: "canberra" },
];

export default function LegalHub() {
  useEffect(() => {
    document.title = "AI Automation & Consulting for Law Firms | Cyberaktive";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "AI automation and consulting for law firms. Automate intake, document review, legal research, and administrative workflows. 90-day ROI guarantee. Serving US, UK, and Australian law firms.");
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "AI Automation & Consulting for Law Firms | Cyberaktive");

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "AI automation and consulting for law firms. Automate intake, document review, and legal research. 90-day ROI guarantee.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://cyberaktive.com/legal");
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://cyberaktive.com/legal";
      document.head.appendChild(link);
    }

    return () => {
      document.title = "Cyberaktive AI - Legal AI Consulting & Automation";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
      <Header />

      <main className="flex-1">

        {/* Dark Hero */}
        <section className="bg-[#050d1a] pt-16 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
                  AI for Law Firms & In-House Counsel
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                  AI Automation &amp; Consulting<br className="hidden md:block" /> for Law Firms
                </h1>

                <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl">
                  Your competitors are automating intake, document review, and legal research. We build working AI systems for law firms in 90 days - no failed pilots, no platform lock-in.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 w-full sm:w-auto">
                      Book Free Strategy Call
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                  <Link href="/ai-strategy-assessment">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base rounded-xl transition-all duration-200 w-full sm:w-auto bg-transparent">
                      Take the AI Assessment
                    </Button>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#0a1628] border-b border-white/5 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What We Build for Law Firms
                </h2>
                <p className="text-gray-500">
                  Production-ready AI automations built around your firm's workflows - not generic software you have to figure out yourself.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl">
              {services.map((service, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <Link href={service.href}>
                    <div className="group border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer h-full">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                        <service.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex items-center gap-1.5 text-sm text-emerald-600 font-medium mb-3">
                        <CheckCircle className="w-4 h-4" />
                        {service.stat}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-blue-600 font-medium group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  AI Automation by Practice Area
                </h2>
                <p className="text-gray-500">
                  Every practice area has different automation priorities. Choose yours to see specific workflows and ROI.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl">
              {practiceAreas.map((area, i) => (
                <RevealOnScroll key={area.slug} delay={(i % 4) * 60}>
                  <Link href={`/legal/${area.slug}/intake-automation`}>
                    <div className="group bg-white border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all duration-200 h-full">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                        <area.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{area.name}</h3>
                      <p className="text-xs text-gray-500 leading-snug hidden md:block">{area.description}</p>
                      <div className="flex items-center gap-1 text-xs text-blue-600 mt-2 group-hover:gap-1.5 transition-all font-medium">
                        View <ArrowRight className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Cyberaktive */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Law Firms Choose Cyberaktive
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
              {[
                {
                  icon: Users,
                  title: "Engineers Who Consult",
                  description: "Our developers are your consultants. When you have a question, you talk to the person who built it. No sales team handoffs to offshore development.",
                },
                {
                  icon: Clock,
                  title: "Results in 90 Days",
                  description: "Working automations in 4-6 weeks. Measurable ROI within 90 days. We track your metrics before and after so you see exactly what changed.",
                },
                {
                  icon: CheckCircle,
                  title: "No Vendor Lock-In",
                  description: "We build systems you own outright. No monthly platform subscription. No proprietary software. Integrations with tools you already use.",
                },
                {
                  icon: Scale,
                  title: "Ethics-Compliant by Design",
                  description: "Every system maintains attorney oversight, protects client confidentiality, and does not provide unauthorized legal advice.",
                },
              ].map((item, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-200 group h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 bg-slate-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Serving Law Firms Across the US, UK &amp; Australia
                </h2>
                <p className="text-sm text-gray-500">
                  All work is delivered remotely. Location does not affect the quality or timeline of our engagements.
                </p>
              </div>
            </RevealOnScroll>

            <div className="flex flex-wrap gap-2 max-w-4xl">
              {cities.map((city) => (
                <Link key={city.slug} href={`/legal/${city.slug}`}>
                  <span className="text-sm bg-white border border-gray-200 hover:border-blue-300 hover:text-blue-600 text-gray-700 rounded-full px-4 py-2 cursor-pointer transition-all duration-200 inline-block">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#050d1a] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to See What AI Can Do for Your Firm?
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Book a free 15-minute strategy call. No obligation. We'll tell you exactly which automations make the most sense for your practice - and which ones don't.
                </p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200">
                    Book Free 15-Minute Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <p className="text-gray-600 text-sm mt-4">No sales pressure. No obligation. Just a straight conversation about what's possible.</p>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
