import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, FadeIn } from "./primitives";

const categories = [
  {
    number: "01",
    title: "Identity",
    items: ["Branding", "Creative Direction", "UI/UX"],
    note: "Who you are before anyone asks.",
  },
  {
    number: "02",
    title: "Digital",
    items: ["Web", "Apps", "Software", "E-commerce"],
    note: "Products that survive contact with real users.",
  },
  {
    number: "03",
    title: "Intelligence",
    items: ["AI Systems", "Automation", "AI Agents"],
    note: "Leverage, not novelty.",
  },
  {
    number: "04",
    title: "Attention",
    items: ["Social", "Content", "Video", "Advertising"],
    note: "Earned in the first two seconds.",
  },
  {
    number: "05",
    title: "Growth",
    items: ["Performance", "Leads", "Conversion"],
    note: "Numbers that move, not dashboards that look nice.",
  },
  {
    number: "06",
    title: "Scale",
    items: ["Recruitment", "Creator Campaigns", "Real Estate Marketing"],
    note: "Systems that keep working without you.",
  },
];

export function Philosophy() {
  return (
    <section className="relative border-t border-border px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="display-xl text-[8vw] leading-[0.9] md:text-[4.6vw]">
            <Reveal>
              <span className="text-muted-foreground">Most agencies</span>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="text-muted-foreground">sell services.</span>
            </Reveal>
            <Reveal delay={0.12}>
              <span className="mt-[0.2em] block">We build</span>
            </Reveal>
            <Reveal delay={0.18}>
              <span className="text-primary">systems.</span>
            </Reveal>
          </h2>
        </div>
        <FadeIn delay={0.1} className="lg:col-span-4 lg:pt-6">
          <p className="font-editorial text-2xl leading-tight md:text-3xl">
            Strategy without execution is chaos.
            <br />
            Execution without strategy is noise.
          </p>
          <p className="label-mono mt-8 text-primary">We do both.</p>
        </FadeIn>
      </div>
    </section>
  );
}

export function Forge() {
  const [active, setActive] = useState<string | null>(null);
  const current = categories.find((category) => category.title === active);

  return (
    <section
      id="forge"
      className="relative overflow-hidden border-t border-border bg-card/40 px-5 py-24 md:px-10 md:py-36"
    >
      <AnimatePresence>
        {current ? (
          <motion.div
            key={current.title}
            className="pointer-events-none absolute inset-0 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            aria-hidden
          >
            <div
              className="absolute right-[-10%] top-1/2 h-[70vh] w-[70vh] -translate-y-1/2 rounded-full blur-[120px]"
              style={{
                background: "radial-gradient(circle, var(--aura), transparent 62%)",
                opacity: 0.22,
              }}
            />
            <span className="display-xl absolute bottom-6 right-8 text-[22vw] leading-none text-foreground/[0.04]">
              {current.number}
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display-xl text-[9vw] md:text-[4.9vw]">
            <Reveal>What we forge</Reveal>
          </h2>
          <p className="label-mono max-w-xs text-muted-foreground">
            Six disciplines. One team. No handoffs between agencies.
          </p>
        </div>

        <ul className="border-t border-border">
          {categories.map((category, index) => (
            <li key={category.title}>
              <FadeIn delay={index * 0.04}>
                <div
                  onMouseEnter={() => setActive(category.title)}
                  onMouseLeave={() => setActive(null)}
                  data-cursor="FORGE"
                  className="group grid grid-cols-1 items-baseline gap-2 border-b border-border py-7 transition-colors md:grid-cols-12 md:gap-6 md:py-9"
                >
                  <span className="label-mono text-primary md:col-span-1">
                    {category.number}
                  </span>
                  <h3 className="display-xl text-4xl transition-transform duration-500 group-hover:translate-x-2 md:col-span-4 md:text-[3vw]">
                    <span className="transition-colors duration-300 group-hover:text-primary">
                      {category.title}
                    </span>
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:col-span-4">
                    {category.items.join(" · ")}
                  </p>
                  <p className="font-editorial text-lg text-foreground/70 md:col-span-3 md:text-right">
                    {category.note}
                  </p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
