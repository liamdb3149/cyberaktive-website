import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleBookAudit = () => {
    if (location === '/') {
      scrollToSection('calendar');
    } else {
      window.location.href = '/#calendar';
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 header-with-sky">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold gradient-text" data-testid="link-logo">
              Cyberaktive
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/property-management" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              data-testid="link-property-management"
            >
              Property Management
            </Link>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold header-button" 
              onClick={handleBookAudit}
              data-testid="button-book-audit-header"
            >
              Book Free Audit
            </Button>
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
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/property-management"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="link-property-management-mobile"
              >
                Property Management
              </Link>
              <Button 
                className="w-full justify-start bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mt-2" 
                onClick={handleBookAudit}
                data-testid="button-book-audit-mobile"
              >
                Book Free Audit
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
