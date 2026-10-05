import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import cultureImage from "@/assets/aura-culture.jpg";
import { Reveal, FadeIn, Magnetic } from "./primitives";
import { ProjectBriefButton } from "./ProjectBrief";
import { Button } from "@/components/ui/button";

const ecosystem = [
  {
    key: "Brand",
    items: ["Brand Strategy", "Naming & Verbal Identity", "Visual Identity", "Brand Systems", "Packaging"],
  },
  {
    key: "Tech",
    items: ["Web Development", "App Development", "Custom Software", "E-commerce", "Platform Engineering"],
  },
  {
    key: "AI",
    items: ["AI Strategy", "AI Agents", "Workflow Automation", "Internal Tooling", "Data Pipelines"],
  },
  {
    key: "Creative",
    items: ["Art Direction", "UI/UX Design", "Content Production", "Video Production", "Motion Design"],
  },
  {
    key: "Marketing",
    items: ["Social Media", "Advertising", "Influencer & Creator", "SEO", "Real Estate Marketing"],
  },
  {
    key: "Growth",
    items: ["Performance Marketing", "Conversion Optimisation", "Lead Systems", "Retention", "Recruitment Campaigns"],
  },
];

export function Aura() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="studio" ref={ref} className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0" aria-hidden>
        <motion.img
          src={cultureImage}
          alt=""
          width={1600}
          height={1008}
          loading="lazy"
          style={{ y }}
          className="h-[120%] w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-52">
        <p className="label-mono mb-6 text-primary md:mb-10">The Aura</p>
        <h2 className="display-xl max-w-4xl text-3xl sm:text-5xl md:text-[3.8vw] leading-[0.95] md:leading-[0.9]">
          <Reveal>Curious minds.</Reveal>
          <Reveal delay={0.06}>Obsessive builders.</Reveal>
          <Reveal delay={0.12}>
            <span className="text-primary">Unreasonable standards.</span>
          </Reveal>
        </h2>
        <FadeIn delay={0.2}>
          <p className="mt-8 max-w-lg font-editorial text-xl leading-tight sm:text-2xl md:mt-12 md:text-3xl">
            We don't chase trends.
            <br />
            We weaponize them.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function Capabilities() {
  const [open, setOpen] = useState<string | null>("Brand");

  return (
    <section className="border-t border-border px-5 py-16 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <h2 className="display-xl text-3xl sm:text-5xl md:text-[4.9vw]">
            <Reveal>Capability stack</Reveal>
          </h2>
          <p className="label-mono max-w-xs text-muted-foreground">
            Everything under one roof. Expand a discipline to see the detail.
          </p>
        </div>

        <div className="border-t border-border">
          {ecosystem.map((group) => {
            const isOpen = open === group.key;
            return (
              <div key={group.key} className="border-b border-border">
                <Button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : group.key)}
                  aria-expanded={isOpen}
                  variant="ghost"
                  className="h-auto w-full justify-between rounded-none px-0 py-6 text-left hover:bg-transparent"
                >
                  <span
                    className={`display-xl text-3xl transition-colors duration-300 md:text-[2.3vw] ${
                      isOpen ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {group.key}
                  </span>
                  <span className="label-mono text-muted-foreground">
                    {isOpen ? "—" : "+"}
                  </span>
                </Button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="flex flex-wrap gap-x-8 gap-y-3 pb-8">
                        {group.items.map((item) => (
                          <li key={item} className="label-mono text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section className="border-t border-border px-5 py-16 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-12 lg:gap-12">
        <p className="label-mono text-primary lg:col-span-3">Manifesto</p>
        <div className="lg:col-span-9">
          <p className="font-editorial text-xl sm:text-2xl md:text-[2.4vw] leading-snug">
            AURA_FORGE exists for founders, brands and ambitious teams who refuse to build
            ordinary things. We combine strategy, design, engineering, AI and growth under
            one roof — so nothing gets lost between the people who plan it and the people
            who ship it.
          </p>
          <div className="mt-14 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
            {[
              ["One roof", "Strategy, craft and engineering in the same room."],
              ["One standard", "If it isn't sharp, it doesn't ship."],
              ["One outcome", "Work that performs after the launch post."],
            ].map(([title, copy]) => (
              <FadeIn key={title}>
                <h3 className="label-mono text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border px-5 py-20 md:px-10 md:py-44"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--aura), transparent 65%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1600px]">
        <h2 className="display-xl text-[clamp(2.25rem,6.3vw,6.5rem)] leading-[0.95] md:leading-[0.9]">
          <Reveal>Got something</Reveal>
          <Reveal delay={0.06}>
            <span className="text-primary">worth forging?</span>
          </Reveal>
        </h2>

        <div className="mt-10 flex flex-col gap-8 border-t border-border pt-10 md:flex-row md:items-end md:justify-between">
          <Magnetic strength={0.22} className="w-full sm:w-auto">
            <ProjectBriefButton className="label-mono h-auto w-full justify-center rounded-none px-7 py-4 sm:w-auto sm:px-9 sm:py-5">
              Start a project <span aria-hidden>→</span>
            </ProjectBriefButton>
          </Magnetic>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-14">
            <div>
              <p className="label-mono text-muted-foreground">WhatsApp</p>
              <a
                href="https://wa.me/917869461895"
                target="_blank"
                rel="noreferrer"
                className="font-display text-2xl font-bold tracking-tight transition-colors hover:text-primary md:text-3xl"
              >
                +91 78694 61895
              </a>
            </div>
            <div>
              <p className="label-mono text-muted-foreground">Email</p>
              <a
                href="mailto:officialauraforge@gmail.com"
                className="font-display text-lg font-bold tracking-tight break-all transition-colors hover:text-primary sm:text-xl md:text-2xl"
              >
                officialauraforge@gmail.com
              </a>
            </div>
            <div>
              <p className="label-mono text-muted-foreground">Instagram</p>
              <a
                href="https://www.instagram.com/_aura.forge/"
                target="_blank"
                rel="noreferrer"
                className="font-display text-lg font-bold tracking-tight transition-colors hover:text-primary sm:text-xl md:text-2xl"
              >
                @_aura.forge
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12 md:px-10 md:py-14">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display-xl text-3xl sm:text-4xl md:text-[4.9vw] leading-none">
            Aura_Forge<sup className="text-primary">®</sup>
          </p>
          <p className="label-mono mt-6 text-muted-foreground">
            Digital. Creative. Technology. Growth.
          </p>
        </div>
        <div className="flex flex-wrap gap-10">
          <div className="flex flex-col gap-3">
            <span className="label-mono text-primary">Social</span>
            {[
              ["Instagram", "https://www.instagram.com/_aura.forge/"],
              ["LinkedIn", "https://www.linkedin.com/company/auraforge"],
              ["X", "https://x.com/auraforge"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="label-mono text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="label-mono text-primary">Contact</span>
            <a
              href="https://wa.me/917869461895"
              target="_blank"
              rel="noreferrer"
              className="label-mono text-muted-foreground transition-colors hover:text-foreground"
            >
              WhatsApp
            </a>
            <a
              href="mailto:officialauraforge@gmail.com"
              className="label-mono text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
            </a>
            <a
              href="https://www.instagram.com/_aura.forge/"
              target="_blank"
              rel="noreferrer"
              className="label-mono text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1600px] flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:justify-between">
        <p className="label-mono text-muted-foreground">
          © {new Date().getFullYear()} AURA_FORGE
        </p>
        <p className="label-mono text-muted-foreground">Built, not promised.</p>
      </div>
    </footer>
  );
}
