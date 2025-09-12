import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import iconLogo from "@/assets/cyberaktive-icon.jpg";

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

  const headerClass = location === '/' ? 'header-with-mountain' : 'header-with-sky';

  return (
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
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/property-management" 
              className="group flex items-center px-4 py-2 rounded-lg text-white hover:text-white transition-all duration-300 font-medium drop-shadow-md hover:bg-white/10 hover:backdrop-blur-sm border border-transparent hover:border-white/20"
              data-testid="link-property-management"
            >
              <span>Property Management</span>
              <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
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
                className="group flex items-center px-4 py-3 rounded-lg text-white hover:text-white transition-all duration-300 font-medium drop-shadow-md hover:bg-white/10 border border-transparent hover:border-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="link-property-management-mobile"
              >
                <span>Property Management</span>
                <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
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
