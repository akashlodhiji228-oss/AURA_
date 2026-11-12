import { Logo } from "./Logo";

const socials = [
  ["Instagram", "https://www.instagram.com/_aura.forge"],
  ["LinkedIn", "https://www.linkedin.com/company/auraforge"],
  ["X", "https://x.com/auraforge"],
];

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-14 md:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground">What The Studio — design, tech &amp; growth.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
          {socials.map(([l, h]) => (
            <a key={l} href={h} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">{l}</a>
          ))}
          <a href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-[1440px] border-t border-border pt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} WT&amp;tudio. All rights reserved.</p>
    </footer>
  );
}
