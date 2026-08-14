import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Small desktop-only cursor dot with contextual label. Hidden on touch devices. */
export function Cursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset["cursor"] ?? "");
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[120] hidden select-none items-center justify-center rounded-full bg-ivory/90 text-[0.6rem] uppercase tracking-[0.18em] text-ink mix-blend-difference lg:flex"
      animate={{
        x: pos.x,
        y: pos.y,
        width: label ? 74 : 10,
        height: label ? 74 : 10,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 32, mass: 0.4 }}
      style={{ translateX: "-50%", translateY: "-50%", top: 0, left: 0 }}
    >
      {label}
    </motion.div>
  );
}