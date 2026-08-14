import { motion } from "framer-motion";
import { rooms } from "@/data/hotel";
import { Reveal, stagger, staggerItem } from "./reveal";
import { useBooking } from "./booking";

export function Rooms() {
  const { open } = useBooking();

  return (
    <section className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-border pb-10">
          <div>
            <p className="eyebrow text-muted-foreground">Rooms &amp; stay</p>
            <h2 className="display-lg mt-5 uppercase">Rest. Reset. Repeat.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Simple, comfortable rooms with mountain air at the window. Tell us your dates and
            we&apos;ll suggest the room that fits your stay best.
          </p>
        </div>
      </Reveal>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-3"
      >
        {rooms.map((room) => (
          <motion.li key={room.name} variants={staggerItem} className="group flex flex-col">
            <div className="overflow-hidden">
              <img
                src={room.image}
                alt={room.alt}
                width={room.width}
                height={room.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-[var(--ease-editorial)] group-hover:scale-[1.05]"
              />
            </div>
            <h3 className="display-md mt-6">{room.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{room.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {room.amenities.map((a) => (
                <li
                  key={a}
                  className="border border-border px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground"
                >
                  {a}
                </li>
              ))}
            </ul>
            <button
              onClick={open}
              className="mt-7 self-start eyebrow rule-hover text-foreground"
              aria-label={`Enquire about the ${room.name}`}
            >
              View room
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}