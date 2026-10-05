import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import work01 from "@/assets/work-01.jpg";
import { Reveal, FadeIn } from "./primitives";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";

const projects = [
  {
    number: "01",
    name: "StockIN Pro",
    category: "Inventory & Business OS · SaaS",
    outcome: "An all-in-one inventory and business management solution designed to simplify everyday business operations.",
    image: work01,
    mandate: "Manage inventory, billing, sales, quotations, customers and invoices from one simple dashboard — track stock in real time, create GST invoices, convert quotations into invoices and keep an eye on business performance. Manage your stock. Simplify your billing. Grow your business.",
    system: [
      "Live Inventory & Stock Tracking",
      "GST Billing & Invoicing",
      "Customer CRM",
      "Quotation to Invoice",
      "Sales Analytics & Reports",
      "Purchase & Sales Management",
      "Low Stock Tracking",
      "Business Dashboard",
    ],
    stack: ["Inventory", "GST Billing", "CRM", "Analytics", "Dashboard"],
    measures: [["Live", "Stock tracking"], ["GST", "Billing & invoicing"], ["01", "Unified dashboard"]],
  },
];

function Panel({ project, index, onOpen }: { project: (typeof projects)[number]; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.02, 1.12]);
  const flipped = index % 2 === 1;

  return (
    <article
      ref={ref}
      className={`grid items-center gap-8 border-b border-border py-16 md:grid-cols-12 md:gap-12 md:py-24 ${
        flipped ? "" : ""
      }`}
    >
      <div
        className={`md:col-span-7 ${flipped ? "md:order-2 md:col-start-6" : "md:order-1"}`}
      >
        <button
          type="button"
          onClick={onOpen}
          className="group relative block aspect-[4/3] w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          data-cursor="VIEW"
          aria-label={`View ${project.name} case study`}
        >
          <motion.img
            src={project.image}
            alt={`${project.name} — ${project.category}`}
            width={1408}
            height={1008}
            loading="lazy"
            style={{ y, scale }}
            className="h-full w-full object-cover transition-[filter] duration-500 group-hover:brightness-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-background/10" />
        </button>
      </div>

      <div
        className={`md:col-span-5 ${flipped ? "md:order-1 md:col-start-1 md:row-start-1" : "md:order-2"}`}
      >
        <FadeIn>
          <p className="label-mono text-primary">{project.number} — Selected</p>
          <h3 className="display-xl mt-4 text-3xl sm:text-4xl md:text-[2.6vw]">{project.name}</h3>
          <p className="label-mono mt-4 text-muted-foreground">{project.category}</p>
          <p className="mt-6 max-w-md font-editorial text-xl leading-snug text-foreground/85 md:text-2xl">
            {project.outcome}
          </p>
          <Button
            type="button"
            variant="ghost"
            onClick={onOpen}
            data-cursor="VIEW"
            className="label-mono group mt-8 h-auto rounded-none border-b border-border px-0 pb-2 text-foreground hover:border-primary hover:bg-transparent hover:text-primary"
          >
            View project
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </Button>
        </FadeIn>
      </div>
    </article>
  );
}

export function Work() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="work" className="border-t border-border px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display-xl text-[10vw] md:text-[5.6vw]">
            <Reveal>Built.</Reveal>
            <Reveal delay={0.06}>
              <span className="text-primary">Not promised.</span>
            </Reveal>
          </h2>
          <p className="label-mono max-w-xs text-muted-foreground">
            Selected engagements across brand, product and growth.
          </p>
        </div>

        <div className="border-t border-border">
          {projects.map((project, index) => (
            <Panel key={project.number} project={project} index={index} onOpen={() => setSelected(project)} />
          ))}
        </div>
      </div>

      <Sheet open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent side="right" className="w-full overflow-y-auto border-border bg-background p-0 sm:max-w-2xl">
          {selected ? (
            <div>
              <div className="aspect-[4/3] overflow-hidden border-b border-border">
                <img src={selected.image} alt={`${selected.name} digital system`} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 md:p-10">
                <p className="label-mono text-primary">Case study / {selected.number}</p>
                <SheetTitle className="display-xl mt-4 text-3xl sm:text-5xl md:text-7xl">{selected.name}</SheetTitle>
                <SheetDescription className="label-mono mt-4 text-muted-foreground">{selected.category}</SheetDescription>
                <p className="mt-8 font-editorial text-2xl leading-snug text-foreground">{selected.outcome}</p>

                <div className="mt-10 grid border-l border-t border-border sm:grid-cols-3">
                  {selected.measures.map(([value, label]) => (
                    <div key={label} className="border-b border-r border-border p-5">
                      <p className="display-xl text-3xl text-primary">{value}</p>
                      <p className="label-mono mt-3 text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
                  <div>
                    <h3 className="label-mono text-primary">The mandate</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{selected.mandate}</p>
                  </div>
                  <div>
                    <h3 className="label-mono text-primary">The system</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {selected.system.map((item) => <li key={item}>↗ {item}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 border-t border-border pt-8">
                  <p className="label-mono text-primary">Stack</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selected.stack.map((item) => <span key={item} className="label-mono border border-border px-3 py-2 text-muted-foreground">{item}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </SheetContent>
      </Sheet>
    </section>
  );
}
