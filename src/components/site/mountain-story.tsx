import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { images } from "@/data/hotel";
import { Reveal } from "./reveal";

export function MountainStory() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1.08, 1]);
  const x = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-3%", "3%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-ink text-ivory">
      <motion.div className="absolute inset-0 -z-10" style={{ scale, x }}>
        <img
          src={images.mountainWide}
          alt="Himalayan ridges and low cloud seen from a terrace in Pelling"
          width={1920}
          height={1088}
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--ink)_82%,transparent),color-mix(in_oklab,var(--ink)_30%,transparent))]"
      />

      <div className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 sm:py-40">
        <Reveal>
          <h2 className="display-lg max-w-[20ch] uppercase">
            The mountains are part of the stay.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/85">
            From peaceful mornings to changing Himalayan skies, Pelling&apos;s mountain landscape
            becomes part of your everyday experience.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-20 grid gap-6 border-t border-ivory/20 pt-8 sm:grid-cols-3">
            {["Pelling", "Sikkim", "Himalayas"].map((word) => (
              <li key={word} className="display-md uppercase tracking-tight text-ivory/90">
                {word}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}