import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import iconLogo from "@assets/Cyberaktive Logos t_1757653334662.png";
import CalendarModal from "@/components/calendar-modal";

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

  // Remove the old handleBookAudit function since we're using the modal now

  const headerClass = location === '/' ? 'header-with-mountain' : 'header-with-sky';

  return (
    <>
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-accent to-primary text-white py-2 text-center text-sm font-semibold z-50 relative" data-testid="banner-urgency">
        Limited spots: Only 3 discovery calls available this week
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
          
          <nav className="hidden md:flex items-center space-x-8">
            <CalendarModal>
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold header-button" 
                data-testid="button-book-audit-header"
              >
                Book Your ROI Assessment (15 min)
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
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <CalendarModal>
                <Button 
                  className="w-full justify-start bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" 
                  data-testid="button-book-audit-mobile"
                >
                  Book Your ROI Assessment (15 min)
                </Button>
              </CalendarModal>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
