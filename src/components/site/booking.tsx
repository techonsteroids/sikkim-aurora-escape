import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, Check } from "lucide-react";
import { hotel } from "@/data/hotel";

type BookingContextValue = { open: () => void; close: () => void; isOpen: boolean };
const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => {
    // If the hotel supplies a real booking engine URL, send guests straight there.
    if (hotel.bookingUrl) {
      window.open(hotel.bookingUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <EnquiryModal />
    </BookingContext.Provider>
  );
}

function EnquiryModal() {
  const { isOpen, close } = useBooking();
  const [sent, setSent] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            aria-label="Close enquiry dialog"
            onClick={close}
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[92dvh] w-full overflow-y-auto bg-background p-7 sm:max-w-lg sm:p-10"
            onKeyDown={(e) => {
              if (e.key === "Escape") close();
            }}
          >
            <button
              onClick={close}
              aria-label="Close enquiry dialog"
              className="absolute right-5 top-5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            {sent ? (
              <div className="py-8 text-center">
                <Check className="mx-auto size-8 text-primary" aria-hidden="true" />
                <h2 id="enquiry-title" className="display-md mt-5">
                  Enquiry noted
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  For the fastest reply, please call us directly — we answer through the day.
                </p>
                <a
                  href={hotel.phoneHref}
                  className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 eyebrow text-primary-foreground"
                >
                  <Phone className="size-3.5" aria-hidden="true" /> Call {hotel.phone}
                </a>
              </div>
            ) : (
              <>
                <p className="eyebrow text-muted-foreground">Check availability</p>
                <h2 id="enquiry-title" className="display-md mt-3">
                  Enquire about your stay
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Send us your dates and we&apos;ll confirm availability at Hotel Sikkim Aurora.
                </p>

                <form
                  className="mt-7 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Check-in" id="modal-checkin" type="date" required />
                    <Field label="Check-out" id="modal-checkout" type="date" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Guests" id="modal-guests" type="number" min={1} defaultValue={2} required />
                    <Field label="Phone" id="modal-phone" type="tel" required />
                  </div>
                  <Field label="Name" id="modal-name" type="text" required />
                  <Field label="Email" id="modal-email" type="email" required />
                  <div>
                    <label htmlFor="modal-notes" className="eyebrow text-muted-foreground">
                      Anything we should know
                    </label>
                    <textarea
                      id="modal-notes"
                      rows={3}
                      className="mt-2 w-full border border-border bg-transparent px-3 py-2.5 text-sm placeholder:text-muted-foreground"
                    />
                  </div>
                  <button
                    type="submit"
                    className="min-h-11 w-full bg-primary px-6 eyebrow text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Send enquiry
                  </button>
                </form>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 text-sm">
                  <a href={hotel.phoneHref} className="inline-flex items-center gap-2 rule-hover">
                    <Phone className="size-3.5" aria-hidden="true" /> {hotel.phone}
                  </a>
                  <a
                    href={hotel.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rule-hover"
                  >
                    <MapPin className="size-3.5" aria-hidden="true" /> Get directions
                  </a>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  id,
  ...props
}: { label: string; id: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="mt-2 min-h-11 w-full border border-border bg-transparent px-3 text-sm"
      />
    </div>
  );
}