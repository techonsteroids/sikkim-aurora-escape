import { images } from "@/data/hotel";
import { Reveal, ClipReveal } from "./reveal";

export function Intro() {
  return (
    <section id="stay" className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
        <div className="lg:sticky lg:top-32">
          <Reveal>
            <p className="eyebrow text-muted-foreground">A stay above the ordinary</p>
            <h2 className="display-lg mt-6 max-w-[18ch]">Find your quiet corner of Pelling.</h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Set in the New Helipad area of Pelling, Hotel Sikkim Aurora offers travelers a
              comfortable base for discovering the landscapes, culture and mountain beauty of Sikkim.
            </p>
            <dl className="mt-12 grid max-w-md grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <dt className="eyebrow text-muted-foreground">Where</dt>
                <dd className="mt-2 text-sm leading-relaxed">
                  Karki Dara, New Helipad
                  <br />
                  Pelling, West Sikkim
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Rated</dt>
                <dd className="mt-2 text-sm leading-relaxed">
                  4.2 / 5 on Google
                  <br />
                  562 guest reviews
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="relative">
          <ClipReveal className="overflow-hidden">
            <img
              src={images.hotelExterior}
              alt="Exterior of a mountain hotel in Pelling with wooden balconies facing forested hills"
              width={1280}
              height={1600}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </ClipReveal>
          <ClipReveal
            delay={0.15}
            className="relative z-10 -mt-20 ml-auto w-[62%] overflow-hidden shadow-[var(--shadow-lift)] sm:-mt-28"
          >
            <img
              src={images.guestLounge}
              alt="Hotel lounge with woven chairs and a window looking onto Sikkim hills"
              width={1280}
              height={1600}
              loading="lazy"
              decoding="async"
              className="aspect-[3/4] w-full object-cover"
            />
          </ClipReveal>
          <ClipReveal
            delay={0.25}
            className="relative z-20 -mt-16 w-[46%] overflow-hidden shadow-[var(--shadow-soft)]"
          >
            <img
              src={images.breakfastBalcony}
              alt="Tea cup on a balcony railing above a valley filled with morning cloud"
              width={1200}
              height={1500}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          </ClipReveal>
        </div>
      </div>
    </section>
  );
}