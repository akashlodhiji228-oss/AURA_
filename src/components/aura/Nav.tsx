import { useEffect, useState } from "react";
import { Magnetic } from "./primitives";
import { ProjectBriefButton } from "./ProjectBrief";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Work", href: "#work" },
  { label: "Forge", href: "#forge" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#studio" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" className="group flex items-center gap-2.5 font-display text-sm font-bold tracking-[0.28em] uppercase">
          <img
            src="/aura-64.png?v=5"
            alt="Aura Forge Logo"
            width={24}
            height={24}
            className="h-6 w-6 rounded-full border border-border/80 transition-transform duration-300 group-hover:scale-110"
          />
          <span>Aura_Forge<sup className="text-primary">®</sup></span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label-mono text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Magnetic className="hidden md:inline-block">
            <ProjectBriefButton className="label-mono h-auto rounded-none border border-primary bg-transparent px-5 py-2.5 text-primary shadow-none hover:bg-primary hover:text-primary-foreground">
              Start a project <span aria-hidden>→</span>
            </ProjectBriefButton>
          </Magnetic>
          <Button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle menu"
            variant="outline"
            className="label-mono h-auto rounded-none border-border px-4 py-2.5 md:hidden"
          >
            {open ? "Close" : "Menu"}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="hairline max-h-[calc(100svh-4.5rem)] overflow-y-auto bg-background/95 px-5 pb-8 pt-6 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-5">
            {[...links, { label: "Contact", href: "#contact" }].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="display-xl text-3xl text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 border-t border-border pt-4">
              <ProjectBriefButton className="label-mono h-auto w-full justify-center rounded-none px-6 py-3.5">
                Start a project <span aria-hidden>→</span>
              </ProjectBriefButton>
              <div className="flex items-center justify-between px-1 pt-1">
                <a
                  href="https://www.instagram.com/_aura.forge?stkn=MWdzcmttNnZsOWd3aQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="label-mono text-muted-foreground transition-colors hover:text-primary"
                >
                  Instagram @_aura.forge ↗
                </a>
                <a
                  href="https://wa.me/917869461895"
                  target="_blank"
                  rel="noreferrer"
                  className="label-mono text-muted-foreground transition-colors hover:text-primary"
                >
                  WhatsApp ↗
                </a>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
