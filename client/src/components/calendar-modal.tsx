const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/tlZAXVaHxTw9fvistaTr";

interface CalendarModalProps {
  children: React.ReactNode;
}

export default function CalendarModal({ children }: CalendarModalProps) {
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
