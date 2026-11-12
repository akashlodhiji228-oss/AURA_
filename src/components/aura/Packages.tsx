import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openProjectBrief } from "./ProjectBrief";

type Pkg = {
  number: string;
  name: string;
  price: string;
  label: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const tabs: { id: string; label: string; items: Pkg[] }[] = [
  {
    id: "web",
    label: "Website Packages",
    items: [
      {
        number: "01",
        name: "Starter",
        price: "₹7,999",
        label: "Essential Website Package",
        features: ["Up to 5 pages", "Responsive design", "Contact / enquiry form", "WhatsApp integration", "Social media integration", "Basic SEO", "1 month support"],
        cta: "Get Started",
      },
      {
        number: "02",
        name: "Starter + Admin",
        price: "₹14,999",
        label: "Website with your own Admin Panel",
        popular: true,
        features: ["Everything in Starter", "Admin dashboard", "Edit / update listings", "Upload photos", "Secure admin login", "No developer needed"],
        cta: "Choose Plan",
      },
      {
        number: "03",
        name: "Growth",
        price: "₹17,999",
        label: "Business Growth Package",
        features: ["Up to 10 pages", "Custom design", "Lead management", "Google Analytics", "Google Business Profile", "WhatsApp automation", "Conversion-focused structure", "2 months support"],
        cta: "Choose Plan",
      },
    ],
  },
  {
    id: "adv",
    label: "Advanced Solutions",
    items: [
      {
        number: "04",
        name: "Business Pro",
        price: "₹49,999",
        label: "Advanced Business Solution",
        features: ["Custom UI/UX", "Admin dashboard", "CRM", "Customer management", "Workflow automation", "AI chatbot", "Invoice & quotation system", "API integrations", "Advanced analytics", "3 months support"],
        cta: "Talk to Us",
      },
      {
        number: "05",
        name: "Custom Solutions",
        price: "₹80,000+",
        label: "Software built around your business",
        features: ["Custom business software", "ERP / CRM", "E-commerce", "AI-powered systems", "Android / iOS apps", "Booking platforms", "Billing systems", "API integrations"],
        cta: "Discuss Your Project",
      },
    ],
  },
];

const addOns = [
  { icon: "🎥", name: "Reels Shoot", price: "From ₹3,400+", desc: "Professional reel for your brand." },
  { icon: "📢", name: "Instagram & Facebook Ads", price: "Run for you", desc: "Campaigns that bring real enquiries." },
];

function Card({ p }: { p: Pkg }) {
  const [open, setOpen] = useState(false);
  const dark = p.popular;
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 md:p-7 ${
        dark ? "bg-foreground text-background shadow-red" : "border border-border bg-background/80 backdrop-blur hover:border-primary/40 hover:shadow-[var(--shadow-glass)]"
      }`}
    >
      {dark && <div aria-hidden className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/40 blur-3xl" />}
      <div className="relative flex items-center justify-between gap-3">
        <span className={`font-mono text-xs ${dark ? "text-background/60" : "text-muted-foreground"}`}>{p.number}</span>
        {p.popular && (
          <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">Most popular</span>
        )}
      </div>
      <h4 className="relative mt-4 font-display text-xl font-bold tracking-tight">{p.name}</h4>
      <p className={`relative mt-1 text-sm ${dark ? "text-background/65" : "text-muted-foreground"}`}>{p.label}</p>
      <p className="relative mt-5 font-display text-4xl font-bold tracking-[-0.03em] md:text-[2.75rem]">
        {p.price}
        <span className={`ml-1.5 text-sm font-medium tracking-normal ${dark ? "text-background/55" : "text-muted-foreground"}`}>one-time</span>
      </p>
      <Button
        type="button"
        onClick={() => openProjectBrief({ name: p.name, price: p.price })}
        className={`relative mt-6 h-auto rounded-full px-5 py-3.5 text-sm font-semibold transition-colors ${
          dark ? "bg-primary text-primary-foreground hover:bg-background hover:text-foreground" : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
        }`}
      >
        {p.cta} →
      </Button>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="relative mt-4 self-center text-xs font-semibold text-primary sm:hidden"
      >
        {open ? "Hide features −" : `See all ${p.features.length} features +`}
      </button>
      <ul className={`relative mt-6 space-y-2.5 border-t pt-6 ${dark ? "border-background/15" : "border-border"} ${open ? "block" : "hidden"} sm:block`}>
        {p.features.map((f) => (
          <li key={f} className="flex min-w-0 items-start gap-2.5 text-sm leading-snug">
            <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${dark ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
              <Check aria-hidden className="h-2.5 w-2.5" strokeWidth={3} />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Packages() {
  const [tab, setTab] = useState("web");
  const active = tabs.find((t) => t.id === tab)!;
  return (
    <section id="packages" aria-labelledby="packages-title" className="relative overflow-hidden px-5 py-24 md:px-6 lg:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <div className="min-w-0 max-w-2xl">
            <p className="text-sm font-semibold text-primary">Pricing</p>
            <h2 id="packages-title" className="mt-3 font-display text-4xl font-bold leading-[1.02] tracking-[-0.035em] md:text-6xl">
              Simple pricing for <span className="font-editorial font-normal italic tracking-normal text-primary">every</span> stage
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              From professional websites to custom business systems — choose what fits your business.
            </p>
          </div>
          <div
            role="tablist"
            aria-label="Package categories"
            className="glass-strong mt-8 inline-flex rounded-full p-1.5"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls="packages-panel"
                onClick={() => setTab(t.id)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors md:px-6 lg:px-10 ${
                  tab === t.id ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            id="packages-panel"
            role="tabpanel"
            aria-labelledby={`tab-${tab}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-12"
          >
            <h3 className="sr-only">{active.label}</h3>
            <div className={`grid gap-4 sm:grid-cols-2 ${tab === "web" ? "lg:grid-cols-3 lg:items-start" : "mx-auto max-w-4xl"}`}>
              {active.items.map((p) => (
                <Card key={p.number} p={p} />
              ))}
            </div>
            {tab === "adv" && (
              <div className="mx-auto mt-4 grid max-w-4xl gap-3 rounded-3xl border border-dashed border-border p-4 md:grid-cols-[auto_1fr_1fr] md:items-center">
                <p className="text-sm font-semibold text-primary">Marketing & Content Add-ons</p>
                {addOns.map((a) => (
                  <Button
                    key={a.name}
                    type="button"
                    variant="ghost"
                    onClick={() => openProjectBrief({ name: a.name, price: a.price })}
                    className="h-auto min-w-0 justify-start gap-3 whitespace-normal rounded-2xl border border-border bg-background px-4 py-3 text-left transition-colors hover:border-aura/60"
                  >
                    <span aria-hidden className="shrink-0 text-lg">{a.icon}</span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold">
                        {a.name} — <span className="text-aura">{a.price}</span>
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">{a.desc}</span>
                    </span>
                  </Button>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
