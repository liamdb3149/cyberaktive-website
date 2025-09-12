import fullLogo from "@/assets/cyberaktive-full-logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <img 
                  src={fullLogo} 
                  alt="Cyberaktive - AI Workflow Automation" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-muted-foreground mb-2">AI Workflow and Process Automation for Property Management firms throughout the U.S., Canada, the U.K., Europe, Australia, Singapore, Hong Kong, and New Zealand.</p>
              <a 
                href="mailto:team@cyberaktive.com" 
                className="text-primary hover:text-primary/80 transition-colors relative z-10 font-semibold"
                data-testid="link-email-footer"
              >
                team@cyberaktive.com
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                &copy; 2025 Cyberaktive. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
