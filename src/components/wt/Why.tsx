import { FadeIn } from "@/components/aura/primitives";

const points = [
  { t: "Small on purpose", d: "You talk to the people doing the work. No account managers, no lost messages." },
  { t: "Fixed, clear pricing", d: "You know the cost before we start. No surprise invoices halfway through." },
  { t: "Built to be used", d: "Every screen, post and system is measured by one thing: does it help your business?" },
  { t: "We stay after launch", d: "Updates, fixes and growth support — we don't disappear once it's live." },
];

export function Why() {
  return (
    <section id="studio" className="relative overflow-hidden px-5 py-24 md:px-6 lg:px-10 md:py-32 scroll-mt-20">
      <div aria-hidden className="animate-blob absolute left-1/2 top-1/2 -z-10 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="mx-auto max-w-[1440px]">
        <div className="glass-strong grid gap-10 rounded-[2rem] p-7 md:p-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-primary">Why WT&amp;tudio</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.02] tracking-[-0.035em] md:text-5xl">
              The name is a reaction. <span className="font-editorial font-normal italic tracking-normal text-primary">What the…</span> — that's what we want people to say about your brand.
            </h2>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
            {points.map((p, i) => (
              <li key={p.t} className="bg-background/80 p-6">
                <FadeIn delay={i * 0.05}>
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-bold">{p.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
