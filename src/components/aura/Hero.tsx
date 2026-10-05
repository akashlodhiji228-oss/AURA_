import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImage from "@/assets/forge-hero.jpg";
import { Magnetic, usePointer, useHydrated } from "./primitives";
import { ProjectBriefButton } from "./ProjectBrief";

const ticker = [
  "Brand",
  "Technology",
  "AI",
  "Creative",
  "Marketing",
  "Automation",
  "Growth",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const pointer = usePointer();
  const hydrated = useHydrated();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      {/* Cursor-reactive image field */}
      <motion.div className="absolute inset-0" style={{ y: imageY }} aria-hidden>
        <motion.img
          src={heroImage}
          alt=""
          width={1600}
          height={1200}
          fetchPriority="high"
          className="max-w-none h-[112%] w-[112%] -translate-x-[6%] -translate-y-[6%] object-cover opacity-55"
          animate={{
            x: `${-6 + (hydrated ? pointer.x * 2.5 : 0)}%`,
            y: `${-6 + (hydrated ? pointer.y * 2.5 : 0)}%`,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/55 to-background" />
        <motion.div
          className="absolute h-[46vw] w-[46vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[90px]"
          style={{ background: "radial-gradient(circle, var(--aura), transparent 65%)" }}
          animate={{
            left: `${50 + pointer.x * 60}%`,
            top: `${50 + pointer.y * 60}%`,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 22 }}
        />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-center px-5 py-24 sm:justify-end sm:pb-20 sm:pt-32 md:px-10"
      >
        <p className="label-mono mb-4 text-primary sm:mb-8">
          Brand <span className="text-muted-foreground">×</span> Technology{" "}
          <span className="text-muted-foreground">×</span> AI{" "}
          <span className="text-muted-foreground">×</span> Growth
        </p>

        <h1 className="display-xl text-[clamp(2.25rem,8vw,8rem)] leading-[0.94] md:leading-[0.88]">
          {["We don't", "make websites."].map((line, index) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block text-muted-foreground"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          {["We build", "digital", "dominance."].map((line, index) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block ${line === "dominance." ? "text-primary" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  delay: 0.18 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-6 flex flex-col gap-4 border-t border-border pt-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-8">
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Magnetic className="w-full sm:w-auto">
              <ProjectBriefButton className="label-mono h-auto w-full justify-center rounded-none px-6 py-3.5 sm:w-auto sm:px-7 sm:py-4 shine-sweep">
                Start a project <span aria-hidden>→</span>
              </ProjectBriefButton>
            </Magnetic>
            <a
              href="#work"
              className="label-mono inline-flex w-full items-center justify-center gap-3 border border-border px-6 py-3.5 text-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto sm:px-7 sm:py-4"
            >
              Explore our work <span aria-hidden>↓</span>
            </a>
          </div>
          <p className="max-w-xs font-editorial text-lg leading-snug text-muted-foreground">
            A full-service digital execution studio for people who refuse to build
            ordinary things.
          </p>
        </div>
      </motion.div>

      {/* Ticker */}
      <div className="absolute inset-x-0 bottom-0 hidden overflow-hidden border-t border-border bg-background/60 py-3 backdrop-blur-sm md:block">
        <motion.div
          className="flex w-max gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...ticker, ...ticker, ...ticker, ...ticker].map((item, index) => (
            <span key={`${item}-${index}`} className="label-mono text-muted-foreground">
              {item} <span className="text-primary">/</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
