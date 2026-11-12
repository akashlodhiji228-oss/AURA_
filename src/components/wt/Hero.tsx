import { motion } from "motion/react";
import { Sparkles, Zap, ShieldCheck, MessageCircle, ArrowUpRight, TrendingUp, Check } from "lucide-react";
import { ProjectBriefButton } from "@/components/aura/ProjectBrief";
import { usePointer, useHydrated } from "@/components/aura/primitives";

const promises = [
  { icon: Sparkles, t: "Design-first", d: "Clean, modern, made to be noticed" },
  { icon: Zap, t: "Fast delivery", d: "Clear timelines, no back-and-forth" },
  { icon: ShieldCheck, t: "Fixed pricing", d: "Know the cost before we begin" },
  { icon: MessageCircle, t: "One chat", d: "Talk directly on WhatsApp" },
];
const ease = [0.16, 1, 0.3, 1] as const;
const bars = [38, 52, 44, 66, 58, 80, 92];

function Showcase({ px, py }: { px: number; py: number }) {
  return (
    <div className="relative mx-auto w-full max-w-[480px] xl:max-w-[580px]" aria-hidden>
      <motion.div
        className="absolute inset-[10%] rounded-full bg-primary/30 blur-3xl"
        animate={{ x: px * 16, y: py * 16 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
      />
      {/* main window */}
      <motion.div
        className="glass-strong relative overflow-hidden rounded-[1.75rem] p-4 sm:p-5"
        animate={{ x: px * -8, y: py * -8, rotateX: py * -4, rotateY: px * 4 }}
        transition={{ type: "spring", stiffness: 70, damping: 16 }}
        style={{ transformPerspective: 900 }}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="ml-3 flex-1 truncate rounded-full bg-background/80 px-3 py-1 text-[10px] text-muted-foreground">yourbrand.com</span>
        </div>
        <div className="mt-4 rounded-2xl bg-foreground p-5 text-background">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">New launch</p>
          <p className="mt-2 font-display text-2xl font-bold leading-tight sm:text-[1.7rem]">Your brand,<br />done right.</p>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-primary px-3 py-1.5 text-[10px] font-semibold text-primary-foreground">Enquire now</span>
            <span className="rounded-full border border-background/20 px-3 py-1.5 text-[10px]">Explore</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-[1.3fr_1fr] gap-3">
          <div className="rounded-2xl bg-background/80 p-4">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-medium text-muted-foreground">Enquiries</p>
              <span className="flex items-center gap-0.5 text-[10px] font-bold text-primary"><TrendingUp className="h-3 w-3" />+184%</span>
            </div>
            <div className="mt-3 flex h-14 items-end gap-1.5">
              {bars.map((h, i) => (
                <motion.span
                  key={i}
                  className={`flex-1 rounded-sm ${i === bars.length - 1 ? "bg-primary" : "bg-foreground/15"}`}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.06, ease }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-2xl bg-primary p-4 text-primary-foreground">
            <p className="text-[10px] font-medium opacity-80">Websites from</p>
            <p className="font-display text-2xl font-bold">₹7,999</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-14 bottom-10 hidden h-28 w-28 items-center justify-center rounded-full bg-foreground text-background shadow-red xl:flex"
        animate={{ x: px * 20, y: py * 20 }}
        transition={{ type: "spring", stiffness: 50, damping: 16 }}
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_14s_linear_infinite]">
          <defs><path id="wtcirc" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
          <text className="fill-current text-[10.5px] font-semibold uppercase tracking-[0.28em]"><textPath href="#wtcirc">What The Studio · Design · Code · </textPath></text>
        </svg>
        <span className="font-display text-xl font-bold text-primary">WT&amp;</span>
      </motion.div>
      <motion.div
        className="glass-strong absolute -left-3 -top-5 flex items-center gap-2 rounded-2xl px-3.5 py-2.5 sm:-left-8"
        animate={{ x: px * 24, y: py * 24 }}
        transition={{ type: "spring", stiffness: 50, damping: 16 }}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="h-4 w-4" /></span>
        <span>
          <span className="block text-[10px] text-muted-foreground">Launch in</span>
          <span className="block font-display text-sm font-bold">2–6 weeks</span>
        </span>
      </motion.div>
      <motion.div
        className="glass-strong absolute -bottom-14 -right-2 max-w-[200px] rounded-2xl rounded-br-sm px-4 py-3 sm:-right-8"
        animate={{ x: px * 28, y: py * 28 }}
        transition={{ type: "spring", stiffness: 50, damping: 16 }}
      >
        <p className="text-[10px] font-semibold text-primary">WhatsApp · now</p>
        <p className="mt-0.5 text-xs font-medium leading-snug">"Loved the design — let's go live!"</p>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const p = usePointer();
  const hydrated = useHydrated();
  const px = hydrated ? p.x : 0;
  const py = hydrated ? p.y : 0;

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="animate-blob absolute -right-[10%] top-[8%] h-[60vw] w-[60vw] rounded-full bg-primary/20 blur-[110px] lg:h-[46vw] lg:w-[46vw]" />
        <div className="animate-blob absolute -left-[12%] bottom-0 h-[34vw] w-[34vw] rounded-full bg-primary/10 blur-[100px] [animation-delay:-6s]" />
      </div>

      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 pb-16 pt-28 md:px-6 lg:px-10 md:pt-36 lg:min-h-[88svh] lg:grid-cols-[1.15fr_1fr] xl:gap-20 lg:pb-24">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Taking new projects this month
          </motion.p>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,10vw,4.6rem)] xl:text-[5.4rem] 2xl:text-[6rem] font-bold leading-[0.95] tracking-[-0.045em]">
            {["We make brands", "people stop for."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-2">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease }}
                >
                  {i === 1 ? (
                    <>people <span className="font-editorial font-normal italic tracking-normal text-primary">stop</span> for.</>
                  ) : line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            Branding, websites, apps, AI and ads — designed, built and grown by one small, sharp studio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <ProjectBriefButton className="h-auto rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-red hover:bg-foreground">
              Start a project <ArrowUpRight className="h-4 w-4" aria-hidden />
            </ProjectBriefButton>
            <a href="#packages" className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition-colors hover:bg-foreground hover:text-background">
              See pricing
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease }}
          className="px-3 sm:px-8 lg:px-0"
        >
          <Showcase px={px} py={py} />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-8 md:px-6 lg:px-10">
        <ul className="glass-strong grid grid-cols-2 gap-px overflow-hidden rounded-3xl md:grid-cols-4">
          {promises.map((item, i) => (
            <motion.li
              key={item.t}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 + i * 0.08, ease }}
              className="group flex flex-col items-start gap-3 p-4 transition-colors hover:bg-background/70 sm:flex-row sm:p-5 md:p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-[18px] w-[18px]" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[15px] font-bold leading-tight">{item.t}</span>
                <span className="mt-1 block text-xs leading-snug text-muted-foreground">{item.d}</span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
