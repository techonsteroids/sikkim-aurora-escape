import { Coffee, Wifi, Car, BellRing, Baby, Plane } from "lucide-react";
import { amenities } from "@/data/hotel";
import { Reveal } from "./reveal";

const icons = {
  coffee: Coffee,
  wifi: Wifi,
  car: Car,
  concierge: BellRing,
  family: Baby,
  plane: Plane,
} as const;

export function Amenities() {
  return (
    <section className="border-y border-border py-24 sm:py-28">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <h2 className="display-md max-w-[20ch] uppercase">
              Everything you need for a comfortable stay.
            </h2>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
              {amenities.map((a) => {
                const Icon = icons[a.icon];
                return (
                  <li key={a.label} className="flex items-center gap-3 border-t border-border pt-5">
                    <Icon className="size-4 shrink-0 text-primary" strokeWidth={1.4} aria-hidden="true" />
                    <span className="text-sm">{a.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}