import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight, Newspaper, Scale, Rocket, Code2, Users } from "lucide-react";
import { Link, useLocation } from "wouter";
import iconLogo from "@assets/Cyberaktive Logos t_1757653334662.png";
import CalendarModal from "@/components/calendar-modal";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  const headerClass = 'header-with-sky';

  const navItems = [
    {
      label: "SaaS",
      icon: Rocket,
      items: [
        { label: "Consult & Dev", href: "/ai-consulting-and-development-saas-software", icon: Code2 }
      ]
    },
    {
      label: "Legal",
      icon: Scale,
      items: [
        { label: "Consult & Dev", href: "/ai-consulting-development-legal", icon: Code2 },
        { label: "AI Workshops for Team", href: "/legal-ai-workshops", icon: Users }
      ]
    }
  ];

  return (
    <>
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-accent to-primary text-white py-2 text-center text-sm font-semibold z-50 relative" data-testid="banner-urgency">
        Book a Free AI Transformation Introductory Call
      </div>
      <header className={`sticky top-0 z-50 w-full border-b border-border/30 ${headerClass}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" data-testid="link-logo-icon">
                <img 
                  src={iconLogo} 
                  alt="Cyberaktive" 
                  className="w-10 h-10"
                />
              </Link>
              <Link href="/" className="text-2xl font-bold gradient-text" data-testid="link-logo">
                Cyberaktive
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((navItem) => (
                <div 
                  key={navItem.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(navItem.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-foreground hover:text-primary transition-all font-medium py-2 cursor-pointer">
                    <navItem.icon className="w-4 h-4" />
                    {navItem.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === navItem.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-1 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-border/50 min-w-[200px] py-2 transition-all duration-200 ${openDropdown === navItem.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    {navItem.items.map((item) => (
                      <Link 
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2.5 text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <a 
                href="https://www.theailaw.xyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-all font-medium cursor-pointer"
                data-testid="link-newsletter"
              >
                <Newspaper className="w-4 h-4" />
                Newsletter
                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <CalendarModal>
                <Button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold header-button" 
                  data-testid="button-book-audit-header"
                >
                  Book Strategy Call (15 min)
                </Button>
              </CalendarModal>
            </nav>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background pb-4">
              <div className="px-2 pt-2 space-y-1">
                {navItems.map((navItem) => (
                  <div key={navItem.label} className="space-y-1">
                    <div className="flex items-center gap-2 px-3 py-2 text-foreground font-semibold text-sm uppercase tracking-wider">
                      <navItem.icon className="w-4 h-4" />
                      {navItem.label}
                    </div>
                    {navItem.items.map((item) => (
                      <Link 
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-6 py-2 text-foreground hover:text-primary hover:bg-accent/10 transition-colors rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                ))}
                
                <a 
                  href="https://www.theailaw.xyz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-foreground hover:text-primary hover:bg-accent/10 transition-colors font-medium rounded-md"
                  data-testid="link-newsletter-mobile"
                >
                  <Newspaper className="w-5 h-5" />
                  Newsletter
                  <ChevronRight className="w-4 h-4" />
                </a>
                
                <div className="pt-2 px-2">
                  <CalendarModal>
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" 
                      data-testid="button-book-audit-mobile"
                    >
                      Book Strategy Call (15 min)
                    </Button>
                  </CalendarModal>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
