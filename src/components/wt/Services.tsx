import { FadeIn } from "@/components/aura/primitives";

const services = [
  { n: "01", t: "Brand & Identity", d: "Names, logos, colours and a voice that make you instantly recognisable.", tags: ["Branding", "Logo", "Packaging"], span: "md:col-span-2" },
  { n: "02", t: "Websites", d: "Fast, clean sites that turn visitors into enquiries.", tags: ["Design", "Development"], span: "" },
  { n: "03", t: "Apps & Software", d: "Dashboards, inventory, billing and custom tools built around how you work.", tags: ["Web apps", "Mobile", "SaaS"], span: "" },
  { n: "04", t: "AI & Automation", d: "Chatbots, smart workflows and agents that quietly save hours every week.", tags: ["AI agents", "Workflows"], span: "md:col-span-2", dark: true },
  { n: "05", t: "Content & Video", d: "Reels, shoots and visuals made for the scroll.", tags: ["Reels", "Shoots", "Creators"], span: "" },
  { n: "06", t: "Ads & Growth", d: "Meta and Google campaigns tuned for leads, not likes.", tags: ["Meta Ads", "SEO", "Leads"], span: "" },
  { n: "07", t: "UI/UX Design", d: "Interfaces that feel obvious the first time someone uses them.", tags: ["Research", "Prototypes"], span: "" },
];

export function Services() {
  return (
    <section id="services" className="relative px-5 py-24 md:px-6 lg:px-10 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-primary">What we do</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.035em] md:text-6xl">
              One studio. <span className="font-editorial font-normal italic tracking-normal">Everything</span> you need to grow.
            </h2>
          </div>
          <p className="max-w-xs text-muted-foreground">No juggling five freelancers. Strategy, design, code and marketing — under one roof, one chat.</p>
        </div>

        <ul className="grid gap-3 md:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.n} className={s.span}>
              <FadeIn delay={i * 0.04} className="h-full">
                <article
                  className={`group relative flex h-full min-h-[230px] flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 ${
                    s.dark ? "bg-foreground text-background" : "border border-border bg-card hover:border-primary/40 hover:bg-background hover:shadow-[var(--shadow-glass)]"
                  }`}
                >
                  <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/0 blur-3xl transition-all duration-700 group-hover:bg-primary/25" />
                  <div className="relative flex items-start justify-between">
                    <span className="font-mono text-xs text-primary">{s.n}</span>
                    <span aria-hidden className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-all duration-300 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground ${s.dark ? "border-background/20" : "border-border"}`}>↗</span>
                  </div>
                  <div className="relative mt-10">
                    <h3 className="font-display text-2xl font-bold tracking-tight md:text-[1.75rem]">{s.t}</h3>
                    <p className={`mt-2 max-w-md text-[15px] leading-relaxed ${s.dark ? "text-background/70" : "text-muted-foreground"}`}>{s.d}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span key={t} className={`rounded-full px-3 py-1 text-xs font-medium ${s.dark ? "bg-background/10" : "bg-background"}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
