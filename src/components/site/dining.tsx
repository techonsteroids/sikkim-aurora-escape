import { diningGallery } from "@/data/hotel";
import { Reveal } from "./reveal";

export function Dining() {
  return (
    <section id="dining" className="border-y border-border bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Dining</p>
          <h2 className="display-lg mt-5 max-w-[22ch] uppercase">Good food. Mountain air.</h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            Enjoy comforting meals and the warmth of local hospitality after a day exploring
            Pelling.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <ul
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Dining gallery"
        >
          {diningGallery.map((item) => (
            <li
              key={item.title}
              className="group w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-[var(--ease-editorial)] group-hover:scale-[1.05]"
                />
              </div>
              <h3 className="display-md mt-5 text-[1.4rem]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.caption}</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto max-w-[1500px] px-5 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground sm:px-8">
          Swipe for more
        </p>
      </Reveal>
    </section>
  );
}