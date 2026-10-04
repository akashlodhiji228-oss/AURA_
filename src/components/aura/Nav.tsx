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
        <a href="#top" className="font-display text-sm font-bold tracking-[0.28em] uppercase">
          Aura_Forge<sup className="text-primary">®</sup>
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
        <div className="hairline bg-background px-5 pb-8 pt-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {[...links, { label: "Contact", href: "#contact" }].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="display-xl text-3xl text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
