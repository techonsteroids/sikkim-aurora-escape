import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { hotel, nav } from "@/data/hotel";
import { useBooking } from "./booking";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border/70 bg-background/85 py-3 text-foreground backdrop-blur-xl"
            : "border-b border-transparent py-6 text-ivory",
        )}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 sm:px-8">
          <a href="#top" className="eyebrow text-[0.7rem] leading-none sm:text-xs">
            Hotel Sikkim Aurora
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="eyebrow rule-hover opacity-90">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={open}
              className={cn(
                "hidden min-h-10 items-center px-5 eyebrow transition-colors sm:inline-flex",
                scrolled
                  ? "bg-primary text-primary-foreground"
                  : "border border-ivory/70 text-ivory hover:bg-ivory hover:text-ink",
              )}
            >
              Book your stay
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="inline-flex size-11 items-center justify-center lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex flex-col bg-ink text-ivory"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="flex items-center justify-between px-5 py-6">
              <span className="eyebrow text-[0.7rem]">Hotel Sikkim Aurora</span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-11 items-center justify-center"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-2 px-5">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="display-lg border-b border-ivory/15 py-4"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="space-y-3 px-5 pb-10">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  open();
                }}
                className="min-h-12 w-full bg-ivory px-6 eyebrow text-ink"
              >
                Book your stay
              </button>
              <a
                href={hotel.phoneHref}
                className="flex min-h-12 w-full items-center justify-center border border-ivory/40 px-6 eyebrow"
              >
                Call {hotel.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}