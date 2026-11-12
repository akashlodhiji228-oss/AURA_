import { useEffect, useState } from "react";
import { ProjectBriefButton } from "@/components/aura/ProjectBrief";
import { Logo } from "./Logo";

const links = [
  { label: "Services", id: "services" },
  { label: "Why us", id: "studio" },
  { label: "Process", id: "process" },
  { label: "Pricing", id: "packages" },
  { label: "Contact", id: "contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let cur = "";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 160) cur = l.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 lg:px-10 md:pt-5">
      <div
        className={`mx-auto flex max-w-[1440px] items-center justify-between gap-4 rounded-full py-2 pl-4 pr-2 transition-all duration-500 ${
          scrolled || open ? "glass-strong" : "border border-transparent"
        }`}
      >
        <a href="/#top" aria-label="WT&tudio home">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 rounded-full p-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`/#${l.id}`}
              aria-current={active === l.id ? "true" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === l.id ? "bg-foreground text-background" : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ProjectBriefButton className="hidden h-auto rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-red hover:bg-foreground sm:inline-flex">
            Start a project <span aria-hidden>↗</span>
          </ProjectBriefButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="glass flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full md:hidden"
          >
            <span className={`h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="glass-strong mx-auto mt-2 max-w-[1440px] rounded-3xl p-3 md:hidden">
          <nav aria-label="Mobile" className="grid">
            {links.map((l, i) => (
              <a
                key={l.id}
                href={`/#${l.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-4 text-2xl font-semibold tracking-tight hover:bg-foreground/5"
              >
                {l.label}
                <span className="font-mono text-xs text-primary">0{i + 1}</span>
              </a>
            ))}
          </nav>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <ProjectBriefButton className="h-auto rounded-2xl bg-primary py-4 text-sm font-semibold text-primary-foreground">
              Start a project
            </ProjectBriefButton>
            <a href="https://wa.me/917869461895" target="_blank" rel="noreferrer" className="rounded-2xl border border-border bg-background py-4 text-center text-sm font-semibold">
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
