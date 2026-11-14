import { ProjectBriefButton } from "@/components/aura/ProjectBrief";

export function Contact() {
  return (
    <section id="contact" className="px-3 pb-6 md:px-6 lg:px-10 scroll-mt-20">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] bg-foreground px-6 py-20 text-background md:px-14 md:py-28">
        <div aria-hidden className="animate-blob absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/50 blur-[100px]" />
        <div aria-hidden className="dot-grid absolute inset-0 opacity-20" />
        <div className="relative grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-primary">Let's talk</p>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[0.98] tracking-[-0.04em] md:text-7xl">
              Got an idea? <br />
              <span className="font-editorial font-normal italic tracking-normal">Let's make it</span> <span className="text-primary">loud.</span>
            </h2>
            <p className="mt-6 max-w-md text-background/70">Tell us what you're building. Pick a package or just say hi — you'll hear back the same day.</p>
            <ProjectBriefButton className="mt-9 h-auto rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-red hover:bg-background hover:text-foreground">
              Start a project <span aria-hidden>→</span>
            </ProjectBriefButton>
          </div>
          <div className="grid gap-3">
            <a href="https://wa.me/917067558299" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-background/15 bg-background/5 p-5 backdrop-blur-xl transition-colors hover:bg-background/10">
              <span><span className="block text-xs text-background/60">WhatsApp</span><span className="font-display text-xl font-semibold">+91 70675 58299</span></span>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="mailto:whathestudio2026@gmail.com" className="group flex items-center justify-between rounded-2xl border border-background/15 bg-background/5 p-5 backdrop-blur-xl transition-colors hover:bg-background/10">
              <span className="min-w-0"><span className="block text-xs text-background/60">Email</span><span className="block truncate font-display text-lg font-semibold">whathestudio2026@gmail.com</span></span>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
