import { useEffect, useRef } from "react";
import { diningGallery } from "@/data/hotel";
import { Reveal } from "./reveal";

export function Dining() {
  const galleryRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let previousTime = performance.now();
    let direction = 1;

    const timer = window.setInterval(() => {
      const time = performance.now();
      const gallery = galleryRef.current;
      const elapsed = time - previousTime;
      previousTime = time;

      if (
        gallery &&
        !gallery.matches(":hover") &&
        !gallery.contains(document.activeElement)
      ) {
        const maxScroll = gallery.scrollWidth - gallery.clientWidth;
        if (maxScroll > 0) {
          const step = (elapsed / 1000) * 22;
          const nextScroll = gallery.scrollLeft + direction * step;

          if (nextScroll >= maxScroll) {
            gallery.scrollLeft = maxScroll;
            direction = -1;
          } else if (nextScroll <= 0) {
            gallery.scrollLeft = 0;
            direction = 1;
          } else {
            gallery.scrollLeft = nextScroll;
          }
        }
      }
    }, 30);

    return () => window.clearInterval(timer);
  }, []);

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
          ref={galleryRef}
          className="mt-14 flex snap-none gap-5 overflow-x-auto px-5 pb-4 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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