export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="text-2xl font-bold gradient-text mb-2">Cyberaktive</div>
              <p className="text-muted-foreground mb-2">AI Workflow Automations for Property Management</p>
              <a 
                href="mailto:team@cyberaktive.com" 
                className="text-primary hover:text-primary/80 transition-colors"
                data-testid="link-email-footer"
              >
                team@cyberaktive.com
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                &copy; 2024 Cyberaktive. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
