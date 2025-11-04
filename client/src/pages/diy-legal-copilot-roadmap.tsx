import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, Lock, Unlock, FileText, Zap, DollarSign } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function DIYLegalCopilotRoadmap() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Set SEO metadata
  useEffect(() => {
    document.title = "DIY Legal Copilot Roadmap - Build Your AI Legal Assistant for $15K | Cyberaktive";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free technical blueprint to build your own Harvey-class legal AI copilot in 8-12 weeks for under $17K. Complete roadmap with architecture diagrams, tool recommendations, and step-by-step instructions.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'DIY Legal Copilot Roadmap - The $15K Blueprint');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Build 80% of Harvey\'s functionality for under $17K vs $300K annually. Get the free 8-week technical blueprint with tool recommendations and architecture diagrams.');
    }

    return () => {
      document.title = "Cyberaktive AI - Legal AI Consulting & Automation";
    };
  }, []);

  // Listen for form submission via postMessage from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Check if message is from GoHighLevel form
      if (event.data?.type === 'form-submitted' || event.data?.formSubmitted) {
        setFormSubmitted(true);
        localStorage.setItem('roadmap-form-submitted', 'true');
      }
    };

    // Check if already submitted
    const alreadySubmitted = localStorage.getItem('roadmap-form-submitted');
    if (alreadySubmitted === 'true') {
      setFormSubmitted(true);
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Manual unlock for testing/support
  const handleUnlock = () => {
    setFormSubmitted(true);
    localStorage.setItem('roadmap-form-submitted', 'true');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Free Technical Blueprint
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              DIY Legal Copilot Roadmap:<br />
              <span className="text-blue-600 dark:text-blue-400">The $15K Blueprint</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              "The step-by-step technical roadmap to build your own 'Harvey-class' legal copilot in 8–12 weeks—or hand it to a contractor as a ready-to-execute brief."
            </p>

            {/* Value Proposition Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">$17K vs $300K</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Build 80% of Harvey's functionality for under $17K year-one costs vs $240K–$300K annually for 20 seats
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">8–12 Weeks</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Complete technical roadmap with architecture diagrams and step-by-step setup instructions
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Contractor-Ready</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Hand this to your IT team or contractor as a ready-to-execute brief with all technical specs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Inside Preview */}
        <section className="bg-white dark:bg-slate-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-slate-100">
                What's Inside the Roadmap
              </h2>
              <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                This roadmap is your detailed, step-by-step guide to building a legal AI copilot in-house using off-the-shelf tools like n8n, Supabase, and OpenAI. You can follow it yourself if you're technical, or hand it to a contractor as a starting-point brief.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">Complete Architecture Diagrams</h3>
                    <p className="text-slate-600 dark:text-slate-400">Visual system design with all components, integrations, and data flows clearly mapped</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">Tool Stack Recommendations</h3>
                    <p className="text-slate-600 dark:text-slate-400">Specific platforms (n8n, Supabase, OpenAI) with setup instructions and cost breakdowns</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">Week-by-Week Implementation Plan</h3>
                    <p className="text-slate-600 dark:text-slate-400">8–12 week timeline with clear milestones, deliverables, and testing checkpoints</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">Technical Specifications</h3>
                    <p className="text-slate-600 dark:text-slate-400">Detailed specs for document retrieval, workflow automation, and human-in-the-loop controls</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">Cost Analysis & ROI Model</h3>
                    <p className="text-slate-600 dark:text-slate-400">Year-one costs vs commercial alternatives with clear ROI calculations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">Customization Guidance</h3>
                    <p className="text-slate-600 dark:text-slate-400">How to adapt for your DMS, workflows, and document structures</p>
                  </div>
                </div>
              </div>

              {/* Teaser Image - First Slide Partially Visible */}
              <div className="relative mb-8">
                <div className="overflow-hidden rounded-lg border-4 border-slate-200 dark:border-slate-700 shadow-2xl">
                  {/* Placeholder for first slide - blurred/partial view */}
                  <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 aspect-[16/10]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <FileText className="w-24 h-24 text-slate-400 dark:text-slate-600 mx-auto mb-4" />
                        <p className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                          Preview of Roadmap Architecture
                        </p>
                        <p className="text-slate-500 dark:text-slate-500 mt-2">
                          Complete the form below to access the full roadmap
                        </p>
                      </div>
                    </div>
                    {/* Blur overlay effect */}
                    {!formSubmitted && (
                      <div className="absolute inset-0 backdrop-blur-sm bg-white/30 dark:bg-slate-900/30 flex items-center justify-center">
                        <Lock className="w-16 h-16 text-slate-400" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {!formSubmitted ? (
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                      Download Your Free Roadmap
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      Want to stress-test your build vs buy decision before you commit budget? Get the free DIY Legal Copilot Roadmap—it's the 8-week technical blueprint with tool recommendations, architecture diagrams, and step-by-step setup instructions you can hand to a contractor tomorrow.
                    </p>
                  </div>

                  {/* GoHighLevel Form Embed */}
                  <div className="min-h-[400px]">
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/Cj9UhspkV2U5S7OBr13E"
                      style={{ width: '100%', height: '500px', border: 'none', borderRadius: '3px' }}
                      id="roadmap-form-Cj9UhspkV2U5S7OBr13E"
                      data-layout="{'id':'INLINE'}"
                      data-form-name="Cyberaktive AI Lead Magnet"
                      data-height="500"
                      data-form-id="Cj9UhspkV2U5S7OBr13E"
                      title="Cyberaktive AI Lead Magnet"
                      data-testid="iframe-roadmap-form"
                    />
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 text-center">
                    Already submitted? <button onClick={handleUnlock} className="text-blue-600 underline">Click here to unlock</button>
                  </p>
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-8 text-center">
                  <Unlock className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                    🎉 Success! Check Your Email
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    We've sent the DIY Legal Copilot Roadmap to your email. You can also access the full content below.
                  </p>
                  <Button size="lg" className="mb-4" data-testid="button-download-roadmap">
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF Roadmap
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Gated Content - Full Roadmap Images */}
        {formSubmitted && (
          <section className="py-16 bg-white dark:bg-slate-800">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
                  Your Complete Roadmap
                </h2>

                {/* Placeholder for roadmap images */}
                <div className="space-y-8">
                  {[1, 2, 3, 4, 5].map((slideNum) => (
                    <Card key={slideNum} className="overflow-hidden" data-testid={`roadmap-slide-${slideNum}`}>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 aspect-[16/10] flex items-center justify-center">
                        <div className="text-center p-8">
                          <FileText className="w-16 h-16 text-slate-400 dark:text-slate-600 mx-auto mb-4" />
                          <p className="text-xl font-semibold text-slate-600 dark:text-slate-400">
                            Roadmap Slide {slideNum}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                            Image will be loaded here once PNG files are provided
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Disclaimer */}
        <section className="py-12 bg-slate-100 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-yellow-200 dark:border-yellow-800">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-yellow-600" />
                    Important Disclaimer
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Every law firm's DMS, workflows, and document structures are different. This roadmap is directionally accurate and will get you 70–80% of the way there, but expect to adjust connectors, retrieval settings, and human-in-the-loop checkpoints based on your firm's specific needs. We cannot guarantee code completeness or that no further development will be required—but this will save you weeks of discovery and give you a clear architecture to build from.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discuss Your Implementation?
            </h2>
            <p className="text-xl mb-8 text-slate-200 max-w-2xl mx-auto">
              Book a free 15-minute introductory call to discuss whether building or buying makes sense for your firm.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-slate-100"
              onClick={() => window.location.href = '/#calendar'}
              data-testid="button-book-call"
            >
              Book Your Free Call
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* GoHighLevel Form Script */}
      <script src="https://link.msgsndr.com/js/form_embed.js" />
    </div>
  );
}
