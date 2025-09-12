import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CalendarModalProps {
  children: React.ReactNode;
}

export default function CalendarModal({ children }: CalendarModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-auto p-0" aria-describedby="calendar-modal-description">
        <div className="relative">
          <div id="calendar-modal-description" className="sr-only">
            Book your free workflow audit with Cyberaktive. Select a convenient time slot for your 30-minute consultation.
          </div>
          <div className="p-6 bg-white">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">
              Book Your Free Workflow Audit (30 Minutes)
            </h2>
            <p className="text-center text-gray-600 mb-6">
              We'll identify exactly where you're losing time and money
            </p>
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/EDeYrzypdFYfanS9vQQk" 
                style={{ width: '100%', border: 'none', overflow: 'hidden', height: 'min(80vh, 700px)', minHeight: '400px' }} 
                scrolling="auto" 
                id="modal-calendar"
                title="Book Your Free Workflow Audit Modal"
                data-testid="calendar-booking-modal"
                allow="payment; geolocation"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}