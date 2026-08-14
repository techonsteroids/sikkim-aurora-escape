import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Magnetic button — nudges toward the cursor on pointer devices only. */
export function MagneticButton({
  children,
  onClick,
  href,
  variant = "solid",
  className,
  ariaLabel,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "solid" | "ghost" | "light";
  className?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const styles = {
    solid: "bg-primary text-primary-foreground",
    ghost: "border border-current text-current",
    light: "bg-ivory text-ink",
  }[variant];

  const inner = (
    <span
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 px-7 eyebrow transition-opacity duration-200 hover:opacity-85",
        styles,
        className,
      )}
    >
      {children}
    </span>
  );

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setOffset({
          x: (e.clientX - (r.left + r.width / 2)) * 0.18,
          y: (e.clientY - (r.top + r.height / 2)) * 0.28,
        });
      }}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
    >
      {href ? (
        <a
          href={href}
          aria-label={ariaLabel}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {inner}
        </a>
      ) : (
        <button type="button" onClick={onClick} aria-label={ariaLabel}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}