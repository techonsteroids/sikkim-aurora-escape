import { Phone } from "lucide-react";
import { hotel, images } from "@/data/hotel";
import { Reveal } from "./reveal";
import { MagneticButton } from "./cta";
import { useBooking } from "./booking";

export function FinalCTA() {
  const { open } = useBooking();

  return (
    <section className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-ink text-ivory">
      <img
        src={images.sunsetClosing}
        alt="Sunset over layered Himalayan ridges near Pelling, Sikkim"
        width={1920}
        height={1088}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--ink)_80%,transparent),color-mix(in_oklab,var(--ink)_25%,transparent))]"
      />
      <div className="mx-auto w-full max-w-[1500px] px-5 py-28 sm:px-8">
        <Reveal>
          <h2 className="display-lg max-w-[20ch] uppercase">Your Himalayan escape starts here.</h2>
          <p className="mt-7 max-w-md text-base leading-relaxed text-ivory/85">
            Come for the mountains. Stay for the warmth.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticButton variant="light" onClick={open}>
              Check availability
            </MagneticButton>
            <MagneticButton variant="ghost" href={hotel.phoneHref} className="text-ivory">
              <Phone className="size-3.5" aria-hidden="true" /> Call {hotel.phone}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}