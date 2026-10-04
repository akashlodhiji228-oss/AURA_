import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 420, damping: 32, mass: 0.45 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 32, mass: 0.45 });
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-cursor]") : null;
      setLabel(target?.dataset["cursor"] ?? "");
    };
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground mix-blend-difference md:flex"
      style={{ x: smoothX, y: smoothY }}
      animate={{ opacity: visible ? 1 : 0, scale: label ? 1 : 0.16 }}
      transition={{ duration: 0.18 }}
    >
      <span className="font-mono text-[9px] uppercase">{label}</span>
    </motion.div>
  );
}