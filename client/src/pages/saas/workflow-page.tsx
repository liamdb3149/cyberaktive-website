import { useEffect } from "react";
import { Link } from "wouter";
import { useParams } from "wouter";
import { ArrowRight, CheckCircle, TrendingUp, Calendar, Mail, AlertCircle, Zap } from "lucide-react";
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
import { getSaasWorkflowPage } from "@/data/saasWorkflowPages";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/tlZAXVaHxTw9fvistaTr";

function toParas(text: string, sentencesPerPara = 3): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+["']?/g) ?? [text];
  const result: string[] = [];
  for (let i = 0; i < sentences.length; i += sentencesPerPara) {
    result.push(sentences.slice(i, i + sentencesPerPara).join(" ").trim());
  }
  return result;
}

export default function SaasWorkflowPage() {
  const params = useParams<{ workflow?: string; slug?: string }>();
  const workflow = params.workflow ?? params.slug;
  const page = getSaasWorkflowPage(workflow);

  useEffect(() => {
    if (!page) return;
    document.title = page.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", page.metaDescription);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", page.metaTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", page.metaDescription);
    const canonicalHref = `https://cyberaktive.com/saas/${page.slug}`;
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
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
      document.title = "Cyberaktive AI - AI Consulting & Automation";
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
            <Link href="/saas"><Button>Back to SaaS AI Services</Button></Link>
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

        {/* Hero */}
        <section className="bg-[#050d1a] pt-6 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
            <nav className="text-sm flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
              <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">Home</Link>
              <span className="text-gray-600">/</span>
              <Link href="/saas" className="text-blue-400 hover:text-blue-300 transition-colors">SaaS AI</Link>
              <span className="text-gray-600">/</span>
              <span className="text-gray-300">{page.workflowName}</span>
            </nav>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-3.5 h-3.5" />
                  {page.badge}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                  {page.h1}
                </h1>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
                  {page.intro.split('.').slice(0, 2).join('. ') + '.'}
                </p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200">
                    Book Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#0a1628] border-b border-white/5 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {page.stats.map((stat, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400 leading-snug">{stat.label}</div>
                    <div className="text-xs text-gray-600 mt-1">Source: {stat.source}</div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-12">
                <span className="inline-block text-xs font-bold text-red-500 uppercase tracking-widest mb-3">The Problem</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Teams Are Still Doing This Manually</h2>
                <p className="text-gray-500">Every hour spent on this workflow is an hour not spent on work that actually moves the needle.</p>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
              {page.painPoints.map((point, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div className="relative overflow-hidden border border-gray-100 rounded-xl p-6 hover:border-red-100 hover:shadow-md transition-all duration-200 group bg-white">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-full -translate-y-12 translate-x-12 group-hover:bg-red-100 transition-colors" />
                    <div className="relative flex items-start gap-4">
                      <div className="w-9 h-9 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1.5">{point.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-12">
                <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">The Process</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                <p className="text-gray-500">From kickoff to live automation - here's exactly what happens.</p>
              </div>
            </RevealOnScroll>
            <div className="max-w-3xl space-y-3">
              {page.howItWorks.map((step, i) => (
                <RevealOnScroll key={i} delay={i * 100}>
                  <div className="flex items-start gap-5 p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all duration-200 group">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-10 h-10 bg-blue-600 group-hover:bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-sm transition-colors">
                        {step.step}
                      </div>
                      {i < page.howItWorks.length - 1 && <div className="w-px h-4 bg-blue-200 mt-2" />}
                    </div>
                    <div className="flex-1 pt-0.5">
                      <h3 className="font-semibold text-gray-900 mb-1.5">{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manual vs. AI: Side by Side</h2>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="max-w-4xl overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#050d1a]">
                      <th className="text-left py-4 px-6 font-semibold text-gray-300 text-sm">Factor</th>
                      <th className="text-left py-4 px-6 font-semibold text-red-400 text-sm">Without AI</th>
                      <th className="text-left py-4 px-6 font-semibold text-emerald-400 text-sm">With Cyberaktive AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {page.comparisonTable.map((row, i) => (
                      <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                        <td className="py-3.5 px-6 font-medium text-gray-800 text-sm">{row.feature}</td>
                        <td className="py-3.5 px-6 text-gray-500 text-sm">{row.withoutAI}</td>
                        <td className="py-3.5 px-6 text-emerald-700 font-medium text-sm">{row.withAI}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-[#050d1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-12">
                <span className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Outcomes</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You Get in 90 Days</h2>
                <p className="text-gray-400">Measurable outcomes your team will feel immediately.</p>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
              {page.results.map((result, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-200 group">
                    <div className="w-9 h-9 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{result.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{result.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Quote */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-6xl text-blue-500/20 font-serif leading-none mb-4">&ldquo;</div>
                <blockquote className="text-xl text-gray-900 font-medium leading-relaxed mb-6">{page.expertQuote.quote}</blockquote>
                <cite className="text-blue-600 font-medium not-italic text-sm">- {page.expertQuote.author}</cite>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="max-w-2xl">
                <Accordion type="single" collapsible className="space-y-3">
                  {page.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border border-gray-200 rounded-xl px-6 overflow-hidden data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/30 transition-colors">
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors py-4 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4">
                        <div className="space-y-2">
                          {toParas(faq.answer, 2).map((para, k) => (
                            <p key={k} className="text-gray-600 text-sm leading-relaxed">{para}</p>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Related */}
        <section className="py-12 bg-slate-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Resources</p>
            <div className="flex flex-wrap gap-2">
              {page.relatedPages.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-sm bg-white border border-gray-200 hover:border-blue-300 hover:text-blue-600 text-gray-700 rounded-full px-4 py-2 cursor-pointer transition-all duration-200 inline-flex items-center gap-1.5">
                    {link.text} <ArrowRight className="w-3 h-3" />
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
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Ready to Automate This?</h2>
                  <ul className="space-y-4">
                    {["Free 15-minute strategy call", "We identify your highest-ROI automation", "Clear cost and timeline - upfront"].map((item, i) => (
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
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
