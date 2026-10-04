import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "./primitives";

const stages = [
  { label: "Idea", detail: "We interrogate the ambition before we touch a pixel." },
  { label: "Strategy", detail: "Positioning, audience, offer, and the maths behind it." },
  { label: "Design", detail: "Art direction that earns attention and keeps it." },
  { label: "Build", detail: "Engineering, AI and automation shipped to production." },
  { label: "Launch", detail: "Coordinated release across product, content and paid." },
  { label: "Scale", detail: "Compounding systems, measured weekly, tuned relentlessly." },
];

function Stage({ stage, index }: { stage: (typeof stages)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center 45%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.18, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 ? 60 : -60, 0]);
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative py-8 md:py-12">
      <motion.div style={{ width }} className="absolute left-0 top-0 h-px bg-primary" />
      <motion.div
        style={{ opacity, x }}
        className="grid items-baseline gap-3 md:grid-cols-12 md:gap-8"
      >
        <span className="label-mono text-primary md:col-span-2">
          {String(index + 1).padStart(2, "0")} / 06
        </span>
        <h3 className="display-xl text-[9vw] leading-[0.92] md:col-span-6 md:text-[4.2vw]">
          {stage.label}
        </h3>
        <p className="max-w-sm font-editorial text-lg leading-snug text-muted-foreground md:col-span-4 md:text-xl">
          {stage.detail}
        </p>
      </motion.div>
    </div>
  );
}

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 90%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      ref={ref}
      className="relative border-t border-border bg-card/40 px-5 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display-xl text-[9vw] md:text-[4.9vw]">
            <Reveal>The forge process</Reveal>
          </h2>
          <p className="label-mono max-w-xs text-muted-foreground">
            Six stages. One continuous line from idea to compounding growth.
          </p>
        </div>

        <div className="relative pl-6 md:pl-0">
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 top-0 hidden h-full w-px origin-top bg-primary/60 md:block"
            aria-hidden
          />
          <div className="md:pl-10">
            {stages.map((stage, index) => (
              <Stage key={stage.label} stage={stage} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
