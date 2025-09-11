import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react";

export default function Calendar() {
  return (
    <section id="calendar" className="py-16 lg:py-24 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Book Your Free Workflow Audit (30 Minutes)
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We'll identify exactly where you're losing time and money
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* GoHighLevel Calendar Integration */}
          <div className="mb-12">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/EDeYrzypdFYfanS9vQQk" 
              style={{ width: '100%', border: 'none', overflow: 'hidden', height: '600px' }} 
              scrolling="no" 
              id="msgsndr-calendar"
              title="Book Your Free Workflow Audit"
              data-testid="calendar-booking-widget"
            />
            <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript"></script>
          </div>
          
          {/* New Contact Form */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">Or Contact Us Directly</h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/PSidgPqZ08dp5TT8IYvX"
                style={{ width: '100%', height: '848px', border: 'none', borderRadius: '3px' }}
                id="inline-PSidgPqZ08dp5TT8IYvX" 
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Cyberaktive AI Auto - Main"
                data-height="848"
                data-layout-iframe-id="inline-PSidgPqZ08dp5TT8IYvX"
                data-form-id="PSidgPqZ08dp5TT8IYvX"
                title="Cyberaktive AI Auto - Main"
                data-testid="contact-form-widget"
              />
              <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
