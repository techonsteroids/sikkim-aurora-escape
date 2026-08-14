import { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { hotel } from "@/data/hotel";
import { Reveal } from "./reveal";
import { MagneticButton } from "./cta";

const MAP_EMBED =
  "https://www.google.com/maps?q=Hotel+Sikkim+Aurora,+Karki+Dara,+New+Helipad,+Pelling,+Sikkim+737113&output=embed";

export function Location() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="location" className="border-t border-border bg-secondary py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Location</p>
          <h2 className="display-lg mt-5 max-w-[16ch] uppercase">Your base in Pelling.</h2>
          <address className="mt-8 not-italic text-base leading-relaxed">
            {hotel.name}
            <br />
            {hotel.address.street}
            <br />
            {hotel.address.locality}, {hotel.address.region} {hotel.address.postalCode}
          </address>
          <a
            href={hotel.phoneHref}
            className="mt-6 inline-flex items-center gap-2 text-base rule-hover"
          >
            <Phone className="size-4" aria-hidden="true" /> {hotel.phone}
          </a>
          <div className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href={hotel.mapsDirectionsUrl}>
              <MapPin className="size-3.5" aria-hidden="true" /> Get directions
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-muted">
            {mapLoaded ? (
              <iframe
                title="Map showing Hotel Sikkim Aurora in Pelling, Sikkim"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full border-0"
              />
            ) : (
              <button
                onClick={() => setMapLoaded(true)}
                className="group flex size-full flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_35%_30%,color-mix(in_oklab,var(--forest)_16%,transparent),transparent_60%)]"
              >
                <MapPin className="size-6 text-primary" strokeWidth={1.4} aria-hidden="true" />
                <span className="eyebrow">Load interactive map</span>
                <span className="max-w-xs px-6 text-center text-xs leading-relaxed text-muted-foreground">
                  Karki Dara, New Helipad, Pelling — the map loads only when you ask for it, keeping
                  the page fast.
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}