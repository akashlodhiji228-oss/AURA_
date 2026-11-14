import { motion } from "motion/react";
import { Lightbulb, Compass, PenTool, Code2, Rocket, TrendingUp } from "lucide-react";

const stages = [
  { icon: Lightbulb, label: "Idea", detail: "A quick chat to understand your business and goals." },
  { icon: Compass, label: "Strategy", detail: "Clear plan, scope and a fixed price — before we start." },
  { icon: PenTool, label: "Design", detail: "Clean, modern designs you review and approve." },
  { icon: Code2, label: "Build", detail: "We develop, test and connect everything you need." },
  { icon: Rocket, label: "Launch", detail: "Go live smoothly — we handle every detail." },
  { icon: TrendingUp, label: "Scale", detail: "Ads, content and updates to keep you growing." },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden px-5 py-24 md:px-6 lg:px-10 md:py-32 scroll-mt-20">
      <div aria-hidden className="dot-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">How we work</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.02] tracking-[-0.035em] md:text-6xl">
            Six simple steps. <span className="font-editorial font-normal italic tracking-normal text-primary">Zero</span> confusion.
          </h2>
          <p className="mt-4 text-muted-foreground">From the first message to growth after launch — you always know what's next.</p>
        </div>

        <ol className="relative mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background/80 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glass)] md:p-7"
            >
              <span aria-hidden className="pointer-events-none absolute -right-2 -top-6 font-display text-[7rem] font-bold leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-primary/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-mono text-xs text-muted-foreground">Step {String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="relative mt-6 font-display text-2xl font-bold tracking-tight">{s.label}</h3>
              <p className="relative mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.detail}</p>
              <span aria-hidden className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
