import { useEffect } from "react";
import { Link } from "wouter";
import { useParams } from "wouter";
import { ArrowRight, CheckCircle, Building2, Scale, FileText, Calendar, Mail, MapPin } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { RevealOnScroll } from "@/components/ui/visual";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getLegalCityPage } from "@/data/legalCityPages";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/tlZAXVaHxTw9fvistaTr";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Client Intake Automation": Scale,
  "Document Review Automation": FileText,
  "Legal Research Automation": FileText,
  "AI Readiness Workshop": Building2,
};

export default function LegalCityPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = getLegalCityPage(slug);

  useEffect(() => {
    if (!page) return;

    document.title = page.metaTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", page.metaDescription);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", page.metaTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", page.metaDescription);

    const canonicalHref = `https://cyberaktive.com/legal/${page.slug}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalHref);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", canonicalHref);
      document.head.appendChild(canonical);
    }

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const existing = document.getElementById("faq-schema");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "faq-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.title = "Cyberaktive AI - Legal AI Consulting & Automation";
      document.getElementById("faq-schema")?.remove();
    };
  }, [page]);

  if (!page) {
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
              <span className="text-gray-300">{page.cityName}</span>
            </nav>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    {page.badge}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                  {page.h1}
                </h1>

                <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
                  {page.intro.split('.').slice(0, 2).join('. ') + '.'}
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

        {/* Market Stats */}
        <section className="bg-[#0a1628] border-b border-white/5 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {page.legalMarketStats.map((stat, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400 leading-snug">{stat.label}</div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Market Context + Ethics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl grid md:grid-cols-2 gap-12">
              <RevealOnScroll>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-5">
                    Why {page.cityName} Law Firms Are Investing in AI Now
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{page.marketContext}</p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={150}>
                <div className="border border-gray-200 rounded-xl p-6 bg-slate-50/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Scale className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Ethics & Compliance</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{page.regulatoryContext}</p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  AI Services for {page.cityName} Law Firms
                </h2>
                <p className="text-gray-500">
                  Everything we build is delivered as working automations your team owns outright - no platform subscriptions.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
              {page.services.map((service, i) => {
                const Icon = iconMap[service.name] ?? Building2;
                return (
                  <RevealOnScroll key={i} delay={i * 80}>
                    <Link href={service.href}>
                      <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer h-full">
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-base font-bold text-gray-900 mb-2">{service.name}</h3>
                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">{service.description}</p>
                        <div className="flex items-center gap-1.5 text-sm text-blue-600 font-medium group-hover:gap-2 transition-all">
                          Learn more <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </Link>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Cyberaktive */}
        <section className="py-20 bg-white">
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
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-sm hover:border-blue-200 transition-all duration-200 group h-full">
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

        {/* FAQ */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Questions from {page.cityName} Firms
                </h2>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="max-w-2xl">
                <Accordion type="single" collapsible className="space-y-3">
                  {page.faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="border border-gray-200 bg-white rounded-xl px-6 overflow-hidden data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/30 transition-colors"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors py-4 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Also Serving */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Also Serving</p>
            <div className="flex flex-wrap gap-2">
              {page.nearbyPages.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-sm bg-white border border-gray-200 hover:border-blue-300 hover:text-blue-600 text-gray-700 rounded-full px-4 py-2 cursor-pointer transition-all duration-200 inline-flex items-center gap-1.5">
                    {link.text}
                    <ArrowRight className="w-3 h-3" />
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
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                      Talk to a {page.cityName} Legal AI Expert
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
