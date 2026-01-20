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
            Book your introductory call with Cyberaktive. Select a convenient time slot for your 15-minute consultation.
          </div>
          <div className="p-6 bg-white">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">
              Book Your Introductory Call (15 Minutes)
            </h2>
            <p className="text-center text-gray-600 mb-6">
              We'll give you a plan to identify exactly where your firm can leverage and implement AI automation
            </p>
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/tlZAXVaHxTw9fvistaTr" 
                style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px', height: '700px' }} 
                scrolling="no" 
                id="6paoXxyP7IK2sAlPFkv3_1768891746867"
                title="Book Your 15-Minute Introductory Call"
                data-testid="calendar-booking-modal"
              />
              <br />
              <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}