import { Link } from "wouter";
import { ArrowRight, Scale, Calendar, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { RevealOnScroll } from "@/components/ui/visual";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/tlZAXVaHxTw9fvistaTr";

const comparisons = [
  { slug: "best-ai-consultants-law-firms", title: "Best AI Consultants for Law Firms", description: "Cyberaktive vs. Alpha Apex, Simplexico, and ApricotLaw - how to choose the right legal AI consulting firm." },
  { slug: "ai-consulting-vs-harvey", title: "AI Consulting vs. Harvey AI", description: "Harvey is an AI platform. Cyberaktive is the consulting firm that helps you implement, configure, and get ROI from tools like Harvey." },
  { slug: "ai-consulting-vs-cocounsel", title: "AI Consulting vs. CoCounsel", description: "CoCounsel (Thomson Reuters) is a legal research tool. Understanding when you need a platform vs. a consulting implementation." },
  { slug: "ai-consulting-vs-clio", title: "AI Consulting vs. Clio", description: "Clio is practice management software with AI features. How it compares to bespoke AI workflow automation." },
  { slug: "ai-consultant-vs-legal-ai-software", title: "AI Consultant vs. Legal AI Software", description: "The definitive guide: when to buy a legal AI tool vs. when to hire an AI consulting firm to build custom workflows." },
  { slug: "ai-consulting-vs-in-house-team", title: "AI Consulting vs. Hiring In-House", description: "Should you hire an in-house AI team or work with an AI consulting firm? Costs, timelines, and tradeoffs." },
  { slug: "best-ai-tools-law-firms", title: "Best AI Tools for Law Firms 2026", description: "A curated, honest review of the leading legal AI tools and where each one fits in a firm's AI strategy." },
  { slug: "ai-agency-vs-diy", title: "AI Automation Agency vs. DIY", description: "Building AI workflows internally vs. using an AI automation agency - when each approach makes sense." },
  { slug: "best-ai-consultants-saas", title: "Best AI Consultants for SaaS Companies", description: "How to evaluate and select an AI consulting firm for SaaS workflow automation." },
  { slug: "ai-consulting-firms", title: "AI Consulting Firms Compared", description: "A comparison of the leading AI consulting firms - what they specialize in, how they price, and who they're best for." },
];

export default function CompareHub() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-[#050d1a] pt-6 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
            <nav className="text-sm flex items-center gap-2" aria-label="Breadcrumb">
              <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">Home</Link>
              <span className="text-gray-600">/</span>
              <span className="text-gray-300">Compare</span>
            </nav>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  <Scale className="w-3.5 h-3.5" />
                  AI Consulting Comparisons
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                  AI Tools & Consultants Compared
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  Honest comparisons to help you make the right decision - whether you're evaluating AI platforms, consulting firms, or whether to build in-house.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Comparison pages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
              {comparisons.map((c, i) => (
                <RevealOnScroll key={i} delay={i * 60}>
                  <Link href={`/compare/${c.slug}`}>
                    <div className="group border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer bg-white h-full">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{c.title}</h3>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{c.description}</p>
                    </div>
                  </Link>
                </RevealOnScroll>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Still Not Sure What You Need?</h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">Book a free 15-minute call. We'll help you figure out the right approach for your firm or company - even if that means recommending a tool over our services.</p>
                </div>
                <div className="flex flex-col items-start md:items-center gap-4">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                    <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-6 rounded-xl text-lg shadow-lg shadow-blue-500/20 w-full md:w-auto transition-all duration-200">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Free 15-Minute Call
                    </Button>
                  </a>
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
