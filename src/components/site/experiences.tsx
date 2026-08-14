import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { experiences, hotel } from "@/data/hotel";
import { Reveal, stagger, staggerItem } from "./reveal";

export function Experiences() {
  return (
    <section id="experience" className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="eyebrow text-muted-foreground">Discover nearby</p>
        <h2 className="display-lg mt-5 max-w-[18ch] uppercase">Make Pelling yours.</h2>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
          Viewpoints, monasteries, forest and mountain roads — West Sikkim rewards travellers who
          take their time. Our team is happy to help you plan each day.
        </p>
      </Reveal>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
      >
        {experiences.map((item) => (
          <motion.li key={item.name} variants={staggerItem} className="group">
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover transition-transform duration-[900ms] ease-[var(--ease-editorial)] group-hover:scale-[1.05]"
              />
            </div>
            <h3 className="display-md mt-5 text-[1.4rem]">{item.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            <a
              href={hotel.mapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 eyebrow rule-hover"
              aria-label={`Explore ${item.name} around Pelling on the map`}
            >
              Explore <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}