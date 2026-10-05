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
        features: ["Up to 5 pages", "Responsive design", "Contact / enquiry form", "Google Maps", "WhatsApp integration", "Social media integration", "Basic SEO", "1 month support"],
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
  return (
    <article
      className={`relative flex flex-col rounded-md border p-5 card-hover md:p-6 ${
        p.popular ? "border-aura bg-aura/[0.05] shadow-[0_0_24px_-8px_oklch(0.905_0.219_129/0.25)]" : "border-border bg-card hover:border-foreground/30"
      }`}
    >
      {p.popular && (
        <span className="absolute -top-2.5 right-4 rounded-sm bg-aura px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-[0.18em] text-ink pulse-aura">
          POPULAR
        </span>
      )}
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="font-display text-lg font-bold tracking-tight uppercase">
          <span className="mr-2 font-mono text-xs text-muted-foreground">{p.number}</span>
          {p.name}
        </h4>
      </div>
      <p className="mt-0.5 text-xs text-muted-foreground">{p.label}</p>
      <p className={`mt-3 font-display text-3xl font-black tracking-tight md:text-4xl ${p.popular ? "text-aura" : ""}`}>
        {p.price}
      </p>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-3 self-start font-mono text-[11px] tracking-[0.15em] text-aura uppercase sm:hidden"
      >
        {open ? "Hide features −" : `View features (${p.features.length}) +`}
      </button>
      <ul className={`mt-4 grid-cols-1 gap-y-2 border-t border-border pt-4 ${open ? "grid" : "hidden"} sm:grid sm:grid-cols-2 sm:gap-x-3 sm:gap-y-1.5`}>
        {p.features.map((f) => (
          <li key={f} className="flex min-w-0 gap-2 text-[13px] leading-snug">
            <Check aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0 text-aura" />
            <span className="break-words">{f}</span>
          </li>
        ))}
      </ul>
      <Button
        type="button"
        onClick={() => openProjectBrief({ name: p.name, price: p.price })}
        data-cursor="FORGE"
        className={`mt-5 h-auto rounded-sm px-4 py-2.5 font-mono text-[11px] font-bold tracking-[0.18em] uppercase transition-colors md:mt-auto md:translate-y-0 ${
          p.popular ? "bg-aura text-ink hover:bg-foreground" : "border border-foreground/25 hover:border-aura hover:bg-aura hover:text-ink"
        }`}
      >
        {p.cta} →
      </Button>
    </article>
  );
}

export function Packages() {
  const [tab, setTab] = useState("web");
  const active = tabs.find((t) => t.id === tab)!;
  return (
    <section id="packages" aria-labelledby="packages-title" className="border-t border-border px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1260px]">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="min-w-0">
            <p className="label-mono text-aura">AuraForge Solutions</p>
            <h2 id="packages-title" className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
              Packages built for every stage of your business
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              From professional websites to custom business systems — choose what fits your business.
            </p>
          </div>
          <div
            role="tablist"
            aria-label="Package categories"
            className="flex max-w-full overflow-x-auto self-start rounded-md border border-border bg-background/90 p-1 backdrop-blur md:self-end"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls="packages-panel"
                onClick={() => setTab(t.id)}
                className={`whitespace-nowrap rounded-sm px-3 py-2 font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase transition-colors md:px-4 ${
                  tab === t.id ? "bg-aura text-ink" : "text-muted-foreground hover:text-foreground"
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
            className="mt-8"
          >
            <h3 className="sr-only">{active.label}</h3>
            <div className={`grid gap-4 sm:grid-cols-2 ${tab === "web" ? "lg:grid-cols-3" : ""}`}>
              {active.items.map((p) => (
                <Card key={p.number} p={p} />
              ))}
            </div>
            {tab === "adv" && (
              <div className="mt-4 grid gap-3 rounded-md border border-dashed border-border p-4 md:grid-cols-[auto_1fr_1fr] md:items-center">
                <p className="label-mono text-aura">Marketing & Content Add-ons</p>
                {addOns.map((a) => (
                  <Button
                    key={a.name}
                    type="button"
                    variant="ghost"
                    onClick={() => openProjectBrief({ name: a.name, price: a.price })}
                    className="h-auto min-w-0 justify-start gap-3 whitespace-normal rounded-sm border border-border bg-card px-3 py-2 text-left transition-colors hover:border-aura/60"
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
