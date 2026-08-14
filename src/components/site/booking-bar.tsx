import { hotel } from "@/data/hotel";
import { useBooking } from "./booking";

export function BookingBar() {
  const { open } = useBooking();

  return (
    <>
      {/* Desktop / tablet enquiry strip */}
      <section aria-label="Check availability" className="relative z-30 bg-ink text-ivory">
        <form
          className="mx-auto hidden max-w-[1500px] items-end gap-6 px-8 py-6 md:flex"
          onSubmit={(e) => {
            e.preventDefault();
            open();
          }}
        >
          <BarField id="bar-checkin" label="Check-in" type="date" />
          <BarField id="bar-checkout" label="Check-out" type="date" />
          <BarField id="bar-guests" label="Guests" type="number" min={1} defaultValue={2} />
          <button
            type="submit"
            className="ml-auto min-h-11 shrink-0 bg-ivory px-8 eyebrow text-ink transition-opacity hover:opacity-85"
          >
            Check availability
          </button>
        </form>
        <div className="flex items-center justify-between gap-4 px-5 py-4 md:hidden">
          <p className="eyebrow text-ivory/70">Rooms in Pelling</p>
          <a href={hotel.phoneHref} className="eyebrow rule-hover">
            Call now
          </a>
        </div>
      </section>

      {/* Mobile persistent CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-xl md:hidden">
        <div className="flex gap-2">
          <button
            onClick={open}
            className="min-h-12 flex-1 bg-primary px-4 eyebrow text-primary-foreground"
          >
            Check availability
          </button>
          <a
            href={hotel.phoneHref}
            className="flex min-h-12 min-w-12 items-center justify-center border border-border px-4 eyebrow"
          >
            Call
          </a>
        </div>
      </div>
    </>
  );
}

function BarField({
  id,
  label,
  ...props
}: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="min-w-40 flex-1">
      <label htmlFor={id} className="eyebrow text-ivory/60">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="mt-2 min-h-10 w-full border-b border-ivory/30 bg-transparent pb-1 text-sm text-ivory [color-scheme:dark]"
      />
    </div>
  );
}