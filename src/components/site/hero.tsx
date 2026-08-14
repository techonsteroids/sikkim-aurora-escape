import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { hotel, images } from "@/data/hotel";
import { useBooking } from "./booking";
import { MagneticButton } from "./cta";

const EASE = [0.22, 1, 0.36, 1] as const;
const words = ["Wake up", "to the", "Himalayas."];

export function Hero() {
  const { open } = useBooking();
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, reduced ? 0 : 140]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-ivory">
      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <motion.img
          src={images.heroHimalayas}
          alt="Sunrise light on the Himalayan range above the pine valleys of Pelling, Sikkim"
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
          className="size-full scale-105 object-cover"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={loaded ? { scale: 1.04, opacity: 1 } : {}}
          transition={{ duration: 1.8, ease: EASE }}
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--ink)_88%,transparent),color-mix(in_oklab,var(--ink)_18%,transparent)_55%,color-mix(in_oklab,var(--ink)_55%,transparent))]"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-end px-5 pb-28 pt-32 sm:px-8 sm:pb-24">
        <motion.p
          className="eyebrow text-ivory/80"
          initial={{ opacity: 0, y: 14 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
        >
          Pelling · Sikkim
        </motion.p>

        <h1 className="mt-5">
          {words.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                className="display-xl block"
                initial={{ y: "110%" }}
                animate={loaded ? { y: "0%" } : {}}
                transition={{ duration: 1.15, delay: 0.5 + i * 0.13, ease: EASE }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-8 max-w-xl text-[0.95rem] leading-relaxed text-ivory/85 sm:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1, ease: EASE }}
        >
          An inviting mountain stay in Pelling, where peaceful surroundings, warm hospitality and
          unforgettable Himalayan views come together.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 18 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
        >
          <MagneticButton variant="light" onClick={open}>
            Check availability
          </MagneticButton>
          <MagneticButton variant="ghost" href="#stay" className="text-ivory">
            Explore the hotel <ArrowDown className="size-3.5" aria-hidden="true" />
          </MagneticButton>
        </motion.div>

        <div className="mt-14 flex items-end justify-between gap-6 border-t border-ivory/20 pt-6">
          <p className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-ivory/70">
            <MapPin className="size-3.5" aria-hidden="true" />
            Karki Dara · New Helipad · Pelling
          </p>
          <div aria-hidden="true" className="hidden items-center gap-3 text-ivory/60 sm:flex">
            <span className="text-[0.7rem] uppercase tracking-[0.2em]">Scroll</span>
            <span className="relative block h-10 w-px overflow-hidden bg-ivory/30">
              <motion.span
                className="absolute inset-x-0 top-0 block h-4 bg-sunrise"
                animate={{ y: [-16, 40] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}