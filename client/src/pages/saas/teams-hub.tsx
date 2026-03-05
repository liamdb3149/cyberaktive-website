import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Users, Calendar, Mail, CheckCircle } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { RevealOnScroll } from "@/components/ui/visual";
import { Button } from "@/components/ui/button";
import saasSegmentPages from "@/data/saasSegmentPages";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/tlZAXVaHxTw9fvistaTr";

export default function SaasTeamsHub() {
  useEffect(() => {
    document.title = "AI Automation by Team or Industry | Cyberaktive";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "AI automation built for your specific team or industry. Engineering, sales, customer success, HR, fintech, healthtech, and more. Custom workflows with a 90-day ROI guarantee.");

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "AI Automation by Team or Industry | Cyberaktive");

    const canonicalHref = "https://cyberaktive.com/saas/ai-by-team/";
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
  }, []);

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
              <Link href="/saas" className="text-blue-400 hover:text-blue-300 transition-colors">SaaS AI</Link>
              <span className="text-gray-600">/</span>
              <span className="text-gray-300">AI by Team</span>
            </nav>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium">
                    <Users className="w-3.5 h-3.5" />
                    SaaS AI Automation
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                  AI Automation by Team or Industry
                </h1>

                <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
                  The right AI automation depends on who you are and what you're trying to fix. Browse by team function or industry vertical to find the workflows built for your specific context.
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

        {/* Segments Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Browse by Team or Industry
                </h2>
                <p className="text-gray-500">
                  Each page covers the specific AI workflows, use cases, and ROI data most relevant to that function or vertical.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
              {saasSegmentPages.map((segment, i) => (
                <RevealOnScroll key={i} delay={i * 60}>
                  <Link href={`/saas/${segment.slug}`}>
                    <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer h-full">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{segment.segmentName}</h3>
                      <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                        {segment.intro.split('.')[0]}.
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
                  title: "Engineers Who Consult",
                  description: "Our developers are your consultants. No sales handoff to an offshore build team.",
                },
                {
                  title: "90-Day ROI Guarantee",
                  description: "Working automations in 4-6 weeks. Measurable results tracked before and after.",
                },
                {
                  title: "You Own the System",
                  description: "No platform subscription. No vendor lock-in. Integrates with your existing stack.",
                },
              ].map((item, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-sm hover:border-blue-200 transition-all duration-200 group h-full bg-white">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
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
                      Not Sure Where to Start?
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
