import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react";

export default function Calendar() {
  return (
    <section id="calendar" className="py-16 lg:py-24 bg-white shadow-lg">
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
              style={{ width: '100%', border: 'none', overflow: 'hidden', height: '800px', minHeight: '800px' }} 
              scrolling="auto" 
              id="msgsndr-calendar"
              title="Book Your Free Workflow Audit"
              data-testid="calendar-booking-widget"
              allow="payment; geolocation"
            />
            <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript"></script>
          </div>
          
        </div>
      </div>
    </section>
  );
}
