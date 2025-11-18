import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { prompts, categories, Prompt } from "@/data/prompts-library";
import {
  Search,
  FileText,
  Scale,
  BookOpen,
  Users,
  Building2,
  Check,
  Copy,
  ChevronDown,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const categoryIcons = {
  "Contract Review": FileText,
  "Discovery & Litigation": Scale,
  "Legal Research": BookOpen,
  "Client Management": Users,
  "Due Diligence": Building2,
};

export default function LegalAIPromptLibrary() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const { toast } = useToast();

  // Set meta tags and check localStorage on mount
  useEffect(() => {
    // Cache original values before modifying (use null for non-existent tags)
    const originalTitle = document.title;
    const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || null;
    const originalKeywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content') || null;
    const originalOgTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || null;
    const originalOgDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || null;
    const originalOgType = document.querySelector('meta[property="og:type"]')?.getAttribute('content') || null;
    const originalTwitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || null;
    
    // Set page title
    document.title = "Free Legal AI Prompt Library | 18 Ready-to-Use Prompts for Lawyers";
    
    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Get 18 battle-tested AI prompts for contract review, discovery, legal research & more. Copy-paste templates using Chain-of-Thought techniques. Free access for legal professionals.'
    );
    
    // Set or update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'legal AI prompts, AI prompts for lawyers, legal prompt templates, contract review AI, legal AI tools, chain-of-thought prompting for legal, legal document analysis AI'
    );
    
    // Set or update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'The Legal AI Director\'s Prompt Library | Free Templates' },
      {
        property: 'og:description',
        content: 'Turn your legal team into AI directors with 18 copy-ready prompts for contract review, discovery, research & more.'
      },
      { property: 'og:type', content: 'website' }
    ];
    
    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
    
    // Set Twitter Card
    let twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute('content', 'summary_large_image');
    
    // Check unlock status
    const unlocked = localStorage.getItem("promptLibraryUnlocked");
    if (unlocked === "true") {
      setIsUnlocked(true);
      setShowForm(false);
    }
    
    // Cleanup function to restore all original meta tags when component unmounts
    return () => {
      // Restore original title
      document.title = originalTitle;
      
      // Restore original description
      const descTag = document.querySelector('meta[name="description"]');
      if (descTag) {
        if (originalDescription !== null) {
          descTag.setAttribute('content', originalDescription);
        } else {
          descTag.remove();
        }
      }
      
      // Restore original keywords
      const keywordsTag = document.querySelector('meta[name="keywords"]');
      if (keywordsTag) {
        if (originalKeywords !== null) {
          keywordsTag.setAttribute('content', originalKeywords);
        } else {
          keywordsTag.remove();
        }
      }
      
      // Restore original OG tags
      const ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (ogTitleTag) {
        if (originalOgTitle !== null) {
          ogTitleTag.setAttribute('content', originalOgTitle);
        } else {
          ogTitleTag.remove();
        }
      }
      
      const ogDescTag = document.querySelector('meta[property="og:description"]');
      if (ogDescTag) {
        if (originalOgDescription !== null) {
          ogDescTag.setAttribute('content', originalOgDescription);
        } else {
          ogDescTag.remove();
        }
      }
      
      const ogTypeTag = document.querySelector('meta[property="og:type"]');
      if (ogTypeTag) {
        if (originalOgType !== null) {
          ogTypeTag.setAttribute('content', originalOgType);
        } else {
          ogTypeTag.remove();
        }
      }
      
      // Restore original Twitter Card
      const twitterCardTag = document.querySelector('meta[name="twitter:card"]');
      if (twitterCardTag) {
        if (originalTwitterCard !== null) {
          twitterCardTag.setAttribute('content', originalTwitterCard);
        } else {
          twitterCardTag.remove();
        }
      }
    };
  }, []);

  // Listen for GHL form submission
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // GHL sends data as Array with JSON string at index 2
      if (Array.isArray(event.data) && event.data.length > 2) {
        try {
          const messageData = JSON.parse(event.data[2]);
          if (messageData.type === "hsFormCallback" && messageData.eventName === "onFormSubmitted") {
            handleFormSubmit();
          }
        } catch (e) {
          // Not a GHL message, ignore
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const handleFormSubmit = () => {
    localStorage.setItem("promptLibraryUnlocked", "true");
    
    // Show success toast
    toast({
      title: "🎉 Success!",
      description: "Your prompts are unlocked below.",
      duration: 3000,
    });

    // Hide form and unlock content after brief delay
    setTimeout(() => {
      setShowForm(false);
      setIsUnlocked(true);
      
      // Scroll to prompts after animation
      setTimeout(() => {
        document.getElementById("prompt-library-container")?.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }, 300);
    }, 1500);
  };

  const copyToClipboard = async (text: string, promptId: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(promptId);
      toast({
        title: "Copied!",
        description: "Prompt copied to clipboard",
        duration: 2000,
      });
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try selecting and copying manually",
        variant: "destructive",
      });
    }
  };

  // Filter prompts based on search and category
  const filteredPrompts = prompts.filter((prompt) => {
    const matchesSearch =
      !searchQuery ||
      prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.useCase.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || prompt.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 border-green-300",
    Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-300",
    Advanced: "bg-orange-100 text-orange-800 border-orange-300",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Always Visible */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6" data-testid="badge-trust-indicator">
              <Sparkles className="w-4 h-4" />
              Used by 500+ legal professionals
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6" data-testid="heading-hero">
              The Legal AI Director's Prompt Library
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-subheading">
              18 battle-tested AI prompts that turn your associates into AI directors. Copy, customize, deploy—no technical skills required. Free for legal professionals.
            </p>

            {/* Supporting Copy */}
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-primary/10">
              <p className="text-lg text-foreground mb-6">
                Stop wasting time with vague prompts that produce mediocre outputs. This library gives you exact prompts for contract review, discovery summarization, legal research, and more—using Chain-of-Thought and Self-Reflection techniques proven to improve AI accuracy by 40%+.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  "Exact wording (copy-paste ready)",
                  "Use case example",
                  "Expected output preview",
                  "Verification checklist"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2" data-testid={`feature-${idx}`}>
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-foreground font-semibold mt-6">
                Enter your email below to unlock the full library →
              </p>
            </div>

            {/* Preview Cards - Teaser */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {prompts.slice(0, 3).map((prompt, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm opacity-60"
                  data-testid={`preview-card-${idx}`}
                >
                  <div className="text-2xl mb-2">
                    {prompt.category === "Contract Review" && "📄"}
                    {prompt.category === "Discovery & Litigation" && "🔍"}
                    {prompt.category === "Legal Research" && "📚"}
                  </div>
                  <h3 className="font-bold text-sm mb-2 line-clamp-2">{prompt.title}</h3>
                  <div className="h-12 bg-gray-100 dark:bg-gray-700 rounded blur-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Overlay */}
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-40 transition-opacity duration-300"
            data-testid="form-backdrop"
          />
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 w-[90%] max-w-2xl transition-all duration-300"
            data-testid="form-overlay"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" data-testid="form-title">
                Unlock 18 AI Prompts for Legal Teams
              </h2>
              <p className="text-muted-foreground text-lg" data-testid="form-subtitle">
                Get instant access to the full library. No credit card required.
              </p>
            </div>

            <iframe
              src="https://api.leadconnectorhq.com/widget/form/Cj9UhspkV2U5S7OBr13E"
              style={{
                width: "100%",
                height: "400px",
                border: "none",
                borderRadius: "8px",
              }}
              id="inline-form-Cj9UhspkV2U5S7OBr13E"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Cyberaktive AI Lead Magnet"
              data-height="400"
              data-layout-iframe-id="inline-form-Cj9UhspkV2U5S7OBr13E"
              data-form-id="Cj9UhspkV2U5S7OBr13E"
              title="Cyberaktive AI Lead Magnet"
              data-testid="ghl-form-iframe"
            />
          </div>
        </>
      )}

      {/* Prompt Library - With Blur Effect When Locked */}
      <section
        className={`relative py-16 transition-all duration-300 ${
          !isUnlocked ? "filter blur-sm pointer-events-none" : ""
        }`}
        id="prompt-library-container"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Bar */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 mb-8 sticky top-20 z-30 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search Input */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search prompts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  data-testid="input-search-prompts"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                    data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          {isUnlocked && (
            <div className="text-center mb-8">
              <p className="text-muted-foreground" data-testid="text-results-count">
                Showing {filteredPrompts.length} {filteredPrompts.length === 1 ? "prompt" : "prompts"}
              </p>
            </div>
          )}

          {/* Prompt Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg" data-testid="text-no-results">
                  No prompts found. Try a different search or category.
                </p>
              </div>
            ) : (
              filteredPrompts.map((prompt) => {
                const CategoryIcon = categoryIcons[prompt.category];
                return (
                  <div
                    key={prompt.id}
                    className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300"
                    data-testid={`card-prompt-${prompt.id}`}
                  >
                    {/* Header with Icon and Badges */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <CategoryIcon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <Badge variant="outline" className="text-xs">
                          {prompt.category}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-xs ${difficultyColors[prompt.difficulty]}`}
                        >
                          {prompt.difficulty}
                        </Badge>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-lg mb-3 line-clamp-2 text-foreground" data-testid={`text-prompt-title-${prompt.id}`}>
                      {prompt.title}
                    </h3>

                    {/* Use Case */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3" data-testid={`text-use-case-${prompt.id}`}>
                      {prompt.useCase}
                    </p>

                    {/* Time Savings */}
                    <p className="text-sm font-semibold text-primary mb-6" data-testid={`text-time-savings-${prompt.id}`}>
                      ⏱️ Time Savings: {prompt.timeSavings}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1"
                        onClick={() => setSelectedPrompt(prompt)}
                        data-testid={`button-view-prompt-${prompt.id}`}
                      >
                        View Full Prompt
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(prompt.fullPrompt, prompt.id)}
                        data-testid={`button-copy-${prompt.id}`}
                      >
                        {copiedId === prompt.id ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Modal for Expanded Prompt View */}
      <Dialog open={!!selectedPrompt} onOpenChange={() => setSelectedPrompt(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="modal-prompt-details">
          {selectedPrompt && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold pr-8" data-testid="modal-title">
                  {selectedPrompt.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Meta Info */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{selectedPrompt.category}</Badge>
                  <Badge
                    variant="outline"
                    className={difficultyColors[selectedPrompt.difficulty]}
                  >
                    {selectedPrompt.difficulty}
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    {selectedPrompt.timeSavings}
                  </Badge>
                </div>

                {/* Use Case */}
                <div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">Use Case</h3>
                  <p className="text-muted-foreground">{selectedPrompt.useCase}</p>
                </div>

                {/* Technique */}
                <div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">Technique</h3>
                  <p className="text-muted-foreground">{selectedPrompt.technique}</p>
                </div>

                {/* The Prompt */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground">The Prompt</h3>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(selectedPrompt.fullPrompt, selectedPrompt.id)
                      }
                      data-testid="button-copy-full-prompt"
                    >
                      {copiedId === selectedPrompt.id ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Full Prompt
                        </>
                      )}
                    </Button>
                  </div>
                  <pre className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap font-mono border border-gray-200 dark:border-gray-700">
                    {selectedPrompt.fullPrompt}
                  </pre>
                </div>

                {/* Verification Checklist */}
                <div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">Verification Checklist</h3>
                  <ul className="space-y-2">
                    {selectedPrompt.verification.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expected Output */}
                <div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">Expected Output</h3>
                  <p className="text-muted-foreground">{selectedPrompt.expectedOutput}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}