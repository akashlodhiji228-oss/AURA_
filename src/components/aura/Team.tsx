import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal, FadeIn } from "./primitives";

type Member = {
  name: string;
  role: string;
  focus: string;
  tag: string;
  bio: string;
  photo?: string;
};

const team: Member[] = [
  {
    name: "Akash Lodhi",
    role: "Founder & CEO",
    focus: "Business",
    tag: "Vision / Strategy / Execution",
    bio: "Started AuraForge and leads its vision — building websites, apps, AI solutions and digital products while driving strategy, clients and execution.",
  },
  {
    name: "Sachin Lodhi",
    role: "Co-Founder & CTO",
    focus: "Technology",
    tag: "Architecture / Dev / Systems",
    bio: "Built AuraForge's technical foundation from day one — owning architecture, development workflow and technology decisions.",
  },
  {
    name: "Rohit Dudwal",
    role: "Co-Founder & CMO",
    focus: "Marketing",
    tag: "Brand / Content / Growth",
    bio: "Leads marketing and brand communication — social media, content strategy, reels and campaigns that grow clients' digital presence.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("");
}

export function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border"
    >
      {/* Ambient aura blob — matches hero style */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[140px]"
        style={{
          background: "radial-gradient(circle, var(--aura), transparent 60%)",
          x: glowX,
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        {/* ── BIG HEADER ── */}
        <div className="border-b border-border py-14 md:py-32">
          <p className="label-mono mb-6 text-primary md:mb-8">
            The founding team
          </p>
          <h2 className="display-xl text-4xl sm:text-6xl md:text-[7vw] leading-[0.95] md:leading-[0.86]">
            <Reveal>Built by people</Reveal>
            <Reveal delay={0.07}>
              <span className="text-primary">who build.</span>
            </Reveal>
          </h2>
        </div>

        {/* ── TEAM ROWS ── */}
        <div>
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.08}>
              <article className="group relative border-b border-border">
                {/* Main row */}
                <div className="flex flex-col gap-5 py-8 md:grid md:grid-cols-12 md:items-start md:gap-4 md:py-16">
                  {/* Top grouping on mobile: Avatar + Name */}
                  <div className="flex items-center gap-4 md:contents">
                    {/* Index */}
                    <div className="hidden md:col-span-1 md:block">
                      <span className="label-mono text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Avatar */}
                    <div className="shrink-0 md:col-span-2">
                      <div className="relative aspect-square w-16 sm:w-20 md:w-full md:max-w-[100px] overflow-hidden border border-border transition-all duration-500 group-hover:border-primary group-hover:shadow-[0_0_32px_0px_oklch(0.905_0.219_129/0.3)]">
                        {member.photo ? (
                          <img
                            src={member.photo}
                            alt={`Portrait of ${member.name}`}
                            loading="lazy"
                            className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
                          />
                        ) : (
                          <div
                            aria-hidden
                            className="flex h-full w-full items-center justify-center bg-card font-display text-2xl font-bold tracking-tight text-foreground transition-colors duration-500 group-hover:text-primary md:text-3xl"
                          >
                            {initials(member.name)}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Name + role */}
                    <div className="min-w-0 flex-1 md:col-span-5">
                      <span className="label-mono text-muted-foreground md:hidden">
                        0{index + 1}
                      </span>
                      <h3 className="display-xl text-2xl sm:text-3xl md:text-[3.4vw]">
                        {member.name}
                      </h3>
                      <p className="label-mono mt-2 text-primary">
                        {member.role}
                      </p>
                      <p className="label-mono mt-0.5 text-[0.6rem] text-muted-foreground/50">
                        {member.tag}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="md:col-span-4 md:pt-1">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                    <span className="label-mono mt-3 inline-block text-[0.6rem] text-muted-foreground/30 md:mt-5">
                      {member.focus}
                    </span>
                  </div>
                </div>

                {/* Hover accent line */}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full"
                />
              </article>
            </FadeIn>
          ))}
        </div>

        {/* ── BOTTOM STRIP ── */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col gap-4 py-14 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-editorial text-2xl leading-snug text-muted-foreground md:text-3xl">
              Small team.{" "}
              <span className="text-foreground">Full-stack execution.</span>
            </p>
            <span className="label-mono text-muted-foreground">
              Brand × Technology × Marketing
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
