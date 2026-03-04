import { Link } from "wouter";
import { ArrowRight, Zap, Users, MapPin, TrendingUp, CheckCircle, Calendar, Mail } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { RevealOnScroll } from "@/components/ui/visual";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/tlZAXVaHxTw9fvistaTr";

const workflows = [
  { slug: "code-review-automation", name: "AI Code Review & PR Automation", metric: "74% of devs say it's most effective" },
  { slug: "lead-qualification", name: "AI Lead Qualification & Scoring", metric: "50% reduction in unqualified pipeline" },
  { slug: "ticket-triage", name: "Support Ticket Triage & Routing", metric: "80% of routine tickets automatable" },
  { slug: "documentation-generation", name: "AI Documentation Generation", metric: "5-8hrs/week saved per engineer" },
  { slug: "customer-onboarding", name: "Customer Onboarding Automation", metric: "60% reduction in time-to-value" },
  { slug: "employee-onboarding", name: "Employee Onboarding & Offboarding", metric: "$18K saved per hire in admin" },
  { slug: "qa-bug-triage", name: "QA & Bug Triage Automation", metric: "40% reduction in QA cycle time" },
  { slug: "data-pipeline-automation", name: "Data Pipeline & ETL Automation", metric: "70% reduction in manual data work" },
  { slug: "sales-outreach", name: "AI Sales Outreach Personalization", metric: "3x response rates vs. generic outreach" },
  { slug: "content-repurposing", name: "Content Creation & Repurposing", metric: "56% of users save 1-5hrs/week" },
];

const segments = [
  { slug: "engineering-teams", name: "Engineering Teams" },
  { slug: "product-teams", name: "Product Teams" },
  { slug: "marketing-teams", name: "Marketing Teams" },
  { slug: "sales-teams", name: "Sales Teams" },
  { slug: "customer-success", name: "Customer Success" },
  { slug: "hr-teams", name: "HR Teams" },
  { slug: "fintech", name: "Fintech" },
  { slug: "healthtech", name: "Healthtech" },
  { slug: "legal-tech", name: "Legal Tech" },
  { slug: "startup", name: "Startups" },
  { slug: "scale-up", name: "Scale-Ups" },
  { slug: "enterprise", name: "Enterprise" },
  { slug: "ai-consulting", name: "AI Consulting" },
  { slug: "ai-readiness-assessment", name: "AI Readiness Assessment" },
];

const cities = [
  { slug: "san-francisco", name: "San Francisco" },
  { slug: "seattle", name: "Seattle" },
  { slug: "austin", name: "Austin" },
  { slug: "new-york", name: "New York" },
  { slug: "boston", name: "Boston" },
  { slug: "los-angeles", name: "Los Angeles" },
  { slug: "denver", name: "Denver" },
  { slug: "chicago", name: "Chicago" },
  { slug: "miami", name: "Miami" },
  { slug: "atlanta", name: "Atlanta" },
  { slug: "washington-dc", name: "Washington" },
  { slug: "dallas", name: "Dallas" },
  { slug: "phoenix", name: "Phoenix" },
  { slug: "portland", name: "Portland" },
  { slug: "san-diego", name: "San Diego" },
  { slug: "minneapolis", name: "Minneapolis" },
  { slug: "nashville", name: "Nashville" },
  { slug: "raleigh", name: "Raleigh" },
  { slug: "salt-lake-city", name: "Salt Lake City" },
  { slug: "pittsburgh", name: "Pittsburgh" },
  { slug: "london", name: "London" },
  { slug: "manchester", name: "Manchester" },
  { slug: "edinburgh", name: "Edinburgh" },
  { slug: "bristol", name: "Bristol" },
  { slug: "birmingham", name: "Birmingham" },
  { slug: "sydney", name: "Sydney" },
  { slug: "melbourne", name: "Melbourne" },
  { slug: "brisbane", name: "Brisbane" },
  { slug: "perth", name: "Perth" },
  { slug: "adelaide", name: "Adelaide" },
];

export default function SaasHub() {
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
              <span className="text-gray-300">SaaS AI Consulting</span>
            </nav>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-3.5 h-3.5" />
                  AI Consulting for SaaS & Tech Companies
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                  AI Automation for SaaS & Tech Teams
                </h1>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
                  Cyberaktive helps SaaS companies automate the workflows that slow engineering, sales, support, and operations teams. We build custom AI systems - not generic tools - that integrate with your existing stack and deliver measurable ROI in 90 days.
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
              {[
                { value: "74%", label: "of developers say AI code review is most effective use of AI" },
                { value: "80%", label: "of routine support tickets are automatable" },
                { value: "50%", label: "reduction in unqualified pipeline with AI lead scoring" },
                { value: "90 days", label: "to measurable ROI on first automation" },
              ].map((stat, i) => (
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

        {/* Workflows */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Workflow Automations</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Automate Your Highest-Impact Workflows</h2>
                <p className="text-gray-500">We've identified the 10 SaaS workflows with the strongest ROI case for automation. Each page includes real metrics, implementation process, and what to expect in 90 days.</p>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
              {workflows.map((w, i) => (
                <RevealOnScroll key={i} delay={i * 60}>
                  <Link href={`/saas/${w.slug}`}>
                    <div className="group border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer bg-white">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{w.name}</h3>
                          <p className="text-xs font-bold text-emerald-600">{w.metric}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Segments */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">By Team or Industry</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI Consulting by Team & Vertical</h2>
                <p className="text-gray-500">Whether you're an engineering team automating code review or a fintech scaling compliance workflows, we have playbooks specific to your context.</p>
              </div>
            </RevealOnScroll>
            <div className="flex flex-wrap gap-3 max-w-4xl">
              {segments.map((s, i) => (
                <RevealOnScroll key={i} delay={i * 40}>
                  <Link href={`/saas/${s.slug}`}>
                    <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm text-gray-700 font-medium rounded-full px-5 py-2.5 text-sm cursor-pointer transition-all duration-200">
                      {s.name} <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Why Cyberaktive */}
        <section className="py-20 bg-[#050d1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="max-w-2xl mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why SaaS Companies Choose Cyberaktive</h2>
                <p className="text-gray-400">We're not an AI platform. We're the team that builds the system, integrates it with your stack, and makes sure it actually gets used.</p>
              </div>
            </RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              {[
                { icon: TrendingUp, title: "Engineers Who Consult", description: "Our developers are your consultants. No sales handoff to an offshore build team. The person scoping your project is the person building it." },
                { icon: CheckCircle, title: "90-Day ROI Guarantee", description: "Working automations in 4-6 weeks. Measurable results tracked against baseline before and after deployment." },
                { icon: Zap, title: "You Own the System", description: "No platform subscription. No vendor lock-in. Built on your infrastructure, integrated with your tools, owned by your team." },
              ].map((item, i) => (
                <RevealOnScroll key={i} delay={i * 80}>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-all">
                    <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Serving Tech Hubs Worldwide</span>
              </div>
            </RevealOnScroll>
            <div className="flex flex-wrap gap-2">
              {cities.map((c, i) => (
                <RevealOnScroll key={i} delay={i * 30}>
                  <Link href={`/saas/${c.slug}`}>
                    <span className="text-sm bg-slate-50 border border-gray-200 hover:border-blue-300 hover:text-blue-600 text-gray-600 rounded-full px-4 py-2 cursor-pointer transition-all duration-200 inline-flex items-center gap-1.5">
                      {c.name} <ArrowRight className="w-3 h-3" />
                    </span>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Ready to See What AI Can Do for Your Team?</h2>
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
