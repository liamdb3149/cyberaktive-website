import { Link } from "wouter";
import { ArrowRight, BookOpen, Calendar, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { RevealOnScroll } from "@/components/ui/visual";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/tlZAXVaHxTw9fvistaTr";

const resources = [
  { slug: "ai-intake-automation", title: "What Is AI Intake Automation?", category: "Legal AI" },
  { slug: "ai-for-law-firms", title: "AI for Law Firms: Complete Guide", category: "Legal AI" },
  { slug: "chatgpt-for-law-firms", title: "ChatGPT for Law Firms: What Works", category: "Legal AI" },
  { slug: "ai-contract-review", title: "What Is AI Contract Review?", category: "Legal AI" },
  { slug: "legal-workflow-automation", title: "Legal Workflow Automation Guide", category: "Legal AI" },
  { slug: "ai-document-review", title: "What Is AI Document Review?", category: "Legal AI" },
  { slug: "ai-legal-research", title: "What Is AI Legal Research?", category: "Legal AI" },
  { slug: "ai-billing-automation-attorneys", title: "AI Billing Automation for Attorneys", category: "Legal AI" },
  { slug: "ai-legal-drafting", title: "What Is AI Legal Drafting?", category: "Legal AI" },
  { slug: "ai-deposition-prep", title: "AI Deposition Preparation Guide", category: "Legal AI" },
  { slug: "ai-due-diligence", title: "Legal Due Diligence Automation", category: "Legal AI" },
  { slug: "ai-compliance-monitoring", title: "AI Compliance Monitoring Guide", category: "Legal AI" },
  { slug: "implement-ai-law-firm", title: "How to Implement AI in Your Law Firm", category: "Guides" },
  { slug: "how-to-choose-ai-consultant", title: "How to Choose an AI Consultant", category: "Guides" },
  { slug: "ai-readiness-assessment", title: "What Is an AI Readiness Assessment?", category: "Guides" },
  { slug: "ai-ethics-law-firms", title: "AI Ethics for Law Firms", category: "Compliance" },
  { slug: "legal-ai-compliance", title: "Legal AI Compliance Guide", category: "Compliance" },
  { slug: "ai-roi-law-firms", title: "AI ROI Calculation for Law Firms", category: "Guides" },
  { slug: "ai-code-review-automation", title: "AI Code Review Automation Guide", category: "SaaS AI" },
  { slug: "ai-ticket-triage", title: "Support Ticket Triage Automation", category: "SaaS AI" },
  { slug: "ai-customer-onboarding", title: "Customer Onboarding Automation", category: "SaaS AI" },
  { slug: "ai-documentation-generation", title: "AI Documentation Generation", category: "SaaS AI" },
  { slug: "ai-automation-vs-hiring", title: "AI Automation vs. Hiring Guide", category: "Guides" },
  { slug: "ai-pilot-program", title: "AI Pilot Program Guide", category: "Guides" },
  { slug: "devops-ai-automation", title: "DevOps AI Automation Guide", category: "SaaS AI" },
];

const categories = ["Legal AI", "SaaS AI", "Guides", "Compliance"];

export default function ResourcesHub() {
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
              <span className="text-gray-300">Resources</span>
            </nav>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  <BookOpen className="w-3.5 h-3.5" />
                  AI Automation Resource Library
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                  AI Automation Guides & Glossary
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  In-depth guides on AI automation for law firms and SaaS companies. Every resource is written for decision-makers - not developers - with real numbers and implementation guidance.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Resources by category */}
        {categories.map((cat) => {
          const catResources = resources.filter((r) => r.category === cat);
          return (
            <section key={cat} className="py-16 border-b border-gray-100">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll>
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-6 bg-blue-600 rounded-full" />
                    {cat}
                  </h2>
                </RevealOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl">
                  {catResources.map((r, i) => (
                    <RevealOnScroll key={i} delay={i * 40}>
                      <Link href={`/resources/${r.slug}`}>
                        <div className="group border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all duration-200 cursor-pointer bg-white">
                          <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                            <span className="text-xs text-blue-600 font-medium">{r.category}</span>
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors leading-snug">
                            {r.title}
                          </h3>
                          <div className="flex items-center gap-1 mt-3 text-xs text-blue-600 font-medium">
                            Read guide <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </Link>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="bg-[#050d1a] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Ready to Start Automating?</h2>
                  <ul className="space-y-4">
                    {["Free 15-minute strategy call", "We identify your highest-ROI automation", "Clear cost and timeline - upfront"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <ArrowRight className="w-3 h-3 text-white" />
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
