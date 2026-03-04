import { useEffect } from "react";
import { Link } from "wouter";
import { useParams } from "wouter";
import { ArrowRight, BookOpen, Calendar, Mail, CheckCircle } from "lucide-react";
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
import { getResourcePage } from "@/data/resourcePages";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/tlZAXVaHxTw9fvistaTr";

// Split a long paragraph into readable chunks of ~2-3 sentences each
function toParas(text: string, sentencesPerPara = 3): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+["']?/g) ?? [text];
  const result: string[] = [];
  for (let i = 0; i < sentences.length; i += sentencesPerPara) {
    result.push(sentences.slice(i, i + sentencesPerPara).join(" ").trim());
  }
  return result;
}

export default function ResourcePage() {
  const { term } = useParams<{ term: string }>();
  const page = getResourcePage(term);

  useEffect(() => {
    if (!page) return;

    document.title = page.metaTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", page.metaDescription);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", page.metaTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", page.metaDescription);

    const canonicalHref = `https://cyberaktive.com/resources/${page.slug}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalHref);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", canonicalHref);
      document.head.appendChild(canonical);
    }

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.h1,
      description: page.metaDescription,
      author: {
        "@type": "Organization",
        name: "Cyberaktive",
        url: "https://cyberaktive.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Cyberaktive",
        url: "https://cyberaktive.com",
      },
    };

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

    const existingArticle = document.getElementById("article-schema");
    if (existingArticle) existingArticle.remove();
    const articleScript = document.createElement("script");
    articleScript.id = "article-schema";
    articleScript.type = "application/ld+json";
    articleScript.text = JSON.stringify(articleSchema);
    document.head.appendChild(articleScript);

    const existingFaq = document.getElementById("faq-schema");
    if (existingFaq) existingFaq.remove();
    const faqScript = document.createElement("script");
    faqScript.id = "faq-schema";
    faqScript.type = "application/ld+json";
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      document.title = "Cyberaktive AI - Legal AI Consulting & Automation";
      document.getElementById("article-schema")?.remove();
      document.getElementById("faq-schema")?.remove();
    };
  }, [page]);

  if (!page) {
    return (
      <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Resource Not Found</h1>
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
              <span className="text-gray-300">{page.h1}</span>
            </nav>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  <BookOpen className="w-3.5 h-3.5" />
                  {page.badge}
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight">
                  {page.h1}
                </h1>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Quick Answer - GEO optimized anchor block */}
        <section className="py-12 bg-blue-50 border-b border-blue-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wider">Quick Answer</h2>
                </div>
                <div className="space-y-3">
                  {toParas(page.quickAnswer).map((para, i) => (
                    <p key={i} className="text-gray-800 leading-relaxed text-lg">{para}</p>
                  ))}
                </div>
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

        {/* Main Content Sections */}
        {page.sections.map((section, i) => {
          const isDark = i % 3 === 2;
          const isSlate = i % 3 === 1;
          const bg = isDark ? "bg-[#0a1628]" : isSlate ? "bg-slate-50" : "bg-white";

          return (
            <section key={i} className={`py-16 ${bg}`}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll delay={80}>
                  <div className="max-w-3xl">

                    {/* Section number + heading */}
                    <div className="flex items-start gap-4 mb-7">
                      <span className={`text-6xl font-black leading-none select-none mt-1 flex-shrink-0 ${isDark ? "text-white/8" : "text-gray-100"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className={`text-2xl md:text-3xl font-bold leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                        {section.h2}
                      </h2>
                    </div>

                    {section.h3s ? (
                      <>
                        <div className={`space-y-4 mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                          {toParas(section.content).map((para, k) => (
                            <p key={k} className="leading-relaxed text-base">{para}</p>
                          ))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {section.h3s.map((h3, j) => (
                            <div
                              key={j}
                              className={`rounded-xl p-5 border transition-all duration-200 hover:shadow-sm ${
                                isDark
                                  ? "bg-white/5 border-white/10 hover:border-blue-400/30 hover:bg-white/8"
                                  : "bg-white border-gray-200 hover:border-blue-200"
                              }`}
                            >
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-3 ${isDark ? "bg-blue-500/20" : "bg-blue-50"}`}>
                                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                              </div>
                              <h3 className={`font-semibold mb-2 text-sm ${isDark ? "text-white" : "text-gray-900"}`}>{h3.title}</h3>
                              <div className={`text-sm leading-relaxed space-y-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                {toParas(h3.content, 2).map((para, k) => (
                                  <p key={k}>{para}</p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className={`rounded-2xl p-8 border ${
                        isDark
                          ? "bg-white/5 border-white/10"
                          : "bg-white border-gray-100 shadow-sm"
                      }`}>
                        <div className={`w-10 h-1 rounded-full mb-6 ${isDark ? "bg-blue-500/60" : "bg-blue-500"}`} />
                        <div className={`space-y-5 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                          {toParas(section.content).map((para, k) => (
                            <p key={k} className="leading-[1.9] text-[17px]">{para}</p>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </RevealOnScroll>
              </div>
            </section>
          );
        })}

        {/* Comparison Table */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-10">
                <h2 className="text-3xl font-bold text-gray-900">
                  {page.comparisonTable.headers[1]} vs. {page.comparisonTable.headers[2]}
                </h2>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="max-w-4xl overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#050d1a]">
                      {page.comparisonTable.headers.map((header, i) => (
                        <th
                          key={i}
                          className={`text-left py-4 px-6 font-semibold text-sm ${
                            i === 0 ? "text-gray-300" : i === 1 ? "text-red-400" : "text-emerald-400"
                          }`}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {page.comparisonTable.rows.map((row, i) => (
                      <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                        <td className="py-3.5 px-6 font-medium text-gray-800 text-sm">{row[0]}</td>
                        <td className="py-3.5 px-6 text-gray-500 text-sm">{row[1]}</td>
                        <td className="py-3.5 px-6 text-emerald-700 font-medium text-sm">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Expert Quote */}
        <section className="py-16 bg-[#050d1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-6xl text-blue-500/30 font-serif leading-none mb-4">&ldquo;</div>
                <blockquote className="text-xl text-white font-medium leading-relaxed mb-6">
                  {page.expertQuote.quote}
                </blockquote>
                <cite className="text-blue-400 font-medium not-italic text-sm">
                  - {page.expertQuote.author}
                </cite>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
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
                      className="border border-gray-200 rounded-xl px-6 overflow-hidden data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/30 transition-colors"
                    >
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

        {/* Related Resources */}
        <section className="py-12 bg-slate-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Resources</p>
            <div className="flex flex-wrap gap-2">
              {page.relatedPages.map((link) => (
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
                      Ready to See This in Action?
                    </h2>
                    <ul className="space-y-4">
                      {[
                        "Free 15-minute strategy call",
                        "We identify your highest-ROI automation",
                        "Clear cost and timeline - no obligation",
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
