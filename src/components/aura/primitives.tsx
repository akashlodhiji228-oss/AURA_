import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

/** Reveals children with a masked upward slide once scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });

  return (
    <span ref={ref} className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "110%", opacity: 0 }}
        animate={inView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Fades + lifts a block into view. */
export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Button/link wrapper that magnetically leans toward the cursor. */
export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", className)}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setOffset({
          x: (event.clientX - (rect.left + rect.width / 2)) * strength,
          y: (event.clientY - (rect.top + rect.height / 2)) * strength,
        });
      }}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
    >
      {children}
    </motion.span>
  );
}

/** True after hydration — used to gate pointer-only enhancements. */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

/** Normalised (-0.5..0.5) pointer position over the whole viewport. */
export function usePointer() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      setPointer({
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return pointer;
}
