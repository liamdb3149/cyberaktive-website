import { useEffect } from "react";
import { Link } from "wouter";
import { useParams } from "wouter";
import { ArrowRight, Scale, FileText, Search, Users, Zap, Building2, Calendar, Mail, CheckCircle } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { RevealOnScroll } from "@/components/ui/visual";
import { Button } from "@/components/ui/button";
import legalServicePages from "@/data/legalServicePages";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/tlZAXVaHxTw9fvistaTr";

const practiceAreaMeta: Record<string, { name: string; description: string; icon: React.ComponentType<{ className?: string }> }> = {
  "personal-injury": { name: "Personal Injury", description: "Intake automation, case triage, and follow-up workflows for high-volume PI firms.", icon: Scale },
  "corporate-law": { name: "Corporate Law", description: "Matter intake, document review, and contract analysis automation for transactional teams.", icon: Building2 },
  "family-law": { name: "Family Law", description: "24/7 intake, consultation booking, and case management for divorce and custody practices.", icon: Users },
  "immigration": { name: "Immigration", description: "Multilingual intake, application tracking, and status updates for immigration firms.", icon: FileText },
  "employment-law": { name: "Employment Law", description: "Case qualification, document review, and research automation for employment practices.", icon: Zap },
  "criminal-defense": { name: "Criminal Defense", description: "After-hours intake, court date tracking, and case preparation support.", icon: Scale },
  "estate-planning": { name: "Estate Planning", description: "Client onboarding, document assembly, and follow-up workflows for estate and probate.", icon: FileText },
  "real-estate-law": { name: "Real Estate Law", description: "Contract review, closing document automation, and transaction management.", icon: Building2 },
  "intellectual-property": { name: "Intellectual Property", description: "Prior art research, application tracking, and prosecution management.", icon: Search },
  "workers-comp": { name: "Workers Compensation", description: "Intake qualification, medical record management, and claim status workflows.", icon: Users },
  "medical-malpractice": { name: "Medical Malpractice", description: "Case intake, expert research, and document review for medical liability practices.", icon: Scale },
  "bankruptcy": { name: "Bankruptcy", description: "Client intake, petition preparation support, and creditor communication workflows.", icon: FileText },
};

export default function LegalPracticeAreaPage() {
  const params = useParams<{ practiceArea?: string; slug?: string }>();
  const practiceArea = params.practiceArea ?? params.slug;
  const meta = practiceArea ? practiceAreaMeta[practiceArea] : undefined;
  // Strip trailing " Law" before appending "Law Firms" to avoid "Corporate Law Law Firms"
  const firmName = meta ? meta.name.replace(/ Law$/, '') : '';
  const services = practiceArea
    ? legalServicePages.filter((p) => p.practiceArea === practiceArea)
    : [];

  useEffect(() => {
    if (!meta) return;

    document.title = `AI Automation for ${firmName} Law Firms | Cyberaktive`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", `AI workflow automation for ${firmName.toLowerCase()} law firms. ${meta.description} Book a free strategy call.`);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", `AI Automation for ${firmName} Law Firms | Cyberaktive`);

    const canonicalHref = `https://cyberaktive.com/legal/${practiceArea}/`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalHref);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", canonicalHref);
      document.head.appendChild(canonical);
    }

    return () => {
      document.title = "Cyberaktive AI - Legal AI Consulting & Automation";
    };
  }, [meta, practiceArea]);

  if (!meta) {
    return (
      <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
            <Link href="/legal">
              <Button>Back to Legal AI Services</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = meta.icon;

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
      <Header />

      <main className="flex-1">

        {/* Dark Hero */}
        <section className="bg-[#050d1a] pt-6 pb-20">
          {/* Breadcrumb */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
            <nav className="text-sm flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
              <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">Home</Link>
              <span className="text-gray-600">/</span>
              <Link href="/legal" className="text-blue-400 hover:text-blue-300 transition-colors">Legal AI</Link>
              <span className="text-gray-600">/</span>
              <span className="text-gray-300">{meta.name}</span>
            </nav>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium">
                    <Icon className="w-3.5 h-3.5" />
                    {meta.name} AI
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                  AI Automation for {firmName} Law Firms
                </h1>

                <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
                  {meta.description} Cyberaktive builds custom AI workflows for {meta.name.toLowerCase()} practices - delivered as working automations your team owns outright.
                </p>

                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200">
                    Book Free Strategy Call
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  AI Services for {meta.name} Firms
                </h2>
                <p className="text-gray-500">
                  Every automation is delivered as a working system your team owns outright - no platform subscriptions, no vendor lock-in.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
              {services.map((service, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <Link href={`/legal/${service.practiceArea}/${service.service}`}>
                    <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer h-full">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{service.serviceName}</h3>
                      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                        {service.intro.split('.')[0]}.
                      </p>
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

        {/* Why Cyberaktive */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  What Makes Cyberaktive Different
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              {[
                {
                  icon: Building2,
                  title: "Engineers Who Consult",
                  description: "Our developers are your consultants. No sales handoff to an offshore build team.",
                },
                {
                  icon: CheckCircle,
                  title: "90-Day ROI Guarantee",
                  description: "Working automations in 4-6 weeks. Measurable results tracked before and after.",
                },
                {
                  icon: Scale,
                  title: "You Own the System",
                  description: "No platform subscription. No vendor lock-in. Integrates with tools you already use.",
                },
              ].map((item, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-sm hover:border-blue-200 transition-all duration-200 group h-full bg-white">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#050d1a] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                      Talk to a {meta.name} AI Expert
                    </h2>
                    <ul className="space-y-4">
                      {[
                        "Free 15-minute strategy call",
                        "We identify your highest-ROI automation",
                        "Clear cost and timeline - upfront",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                          <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col items-start md:items-center gap-4">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                      <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-6 rounded-xl text-lg shadow-lg shadow-blue-500/20 w-full md:w-auto transition-all duration-200">
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Free 15-Minute Call
                      </Button>
                    </a>
                    <p className="text-gray-500 text-sm">No obligation. No sales pressure.</p>
                    <a href="mailto:team@cyberaktive.com" className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm">
                      <Mail className="w-4 h-4" />
                      team@cyberaktive.com
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
