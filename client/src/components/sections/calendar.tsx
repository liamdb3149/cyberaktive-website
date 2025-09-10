import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react";
import ContactForm from "@/components/ui/contact-form";

export default function Calendar() {
  return (
    <section id="calendar" className="py-16 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Book Your Free Workflow Audit (30 Minutes)
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We'll identify exactly where you're losing time and money
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {/* GoHighLevel Calendar Placeholder */}
          <Card className="border-2 border-dashed border-border p-12 text-center mb-8" data-testid="card-calendar-placeholder">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                GoHighLevel Calendar Integration
              </h3>
              <p className="text-sm text-muted-foreground">
                Embedded booking widget will be inserted here
              </p>
            </CardContent>
          </Card>
          
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
