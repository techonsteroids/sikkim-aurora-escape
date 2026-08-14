import { Star, ArrowUpRight } from "lucide-react";
import { ratings, reviews } from "@/data/hotel";
import { Reveal } from "./reveal";

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="eyebrow text-muted-foreground">Guest reviews</p>
        <h2 className="display-lg mt-5 max-w-[20ch] uppercase">Heard from our guests.</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <ul className="mt-12 flex flex-wrap gap-x-16 gap-y-8 border-y border-border py-8">
          {ratings.map((r) => (
            <li key={r.source} className="flex items-baseline gap-4">
              <span className="font-display text-5xl leading-none">{r.score}</span>
              <span className="text-sm">
                <span className="flex items-center gap-1.5">
                  <Star className="size-3.5 fill-current text-accent" aria-hidden="true" />
                  {r.source}
                </span>
                <span className="mt-1 block text-muted-foreground">{r.count} reviews</span>
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <ul className="mt-14 grid gap-10 md:grid-cols-3">
        {reviews.map((review, i) => (
          <Reveal key={i} delay={0.06 * i}>
            <li className="flex h-full flex-col border-t border-border pt-6">
              <blockquote className="text-[1.35rem] leading-snug">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <p className="mt-5 eyebrow text-muted-foreground">
                {review.attribution}
                {!review.verified && " · awaiting verified excerpt"}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <a
          href={ratings[0]?.url ?? "#reviews"}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 eyebrow rule-hover"
        >
          Read all reviews <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}