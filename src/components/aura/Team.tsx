import { Reveal, FadeIn } from "./primitives";

type Member = {
  name: string;
  role: string;
  focus: string;
  bio: string;
  /** Replace with an imported photo to show a real portrait. */
  photo?: string;
};

const team: Member[] = [
  {
    name: "Akash Lodhi",
    role: "Founder & CEO",
    focus: "Business",
    bio: "Started AuraForge and leads its vision — building websites, apps, AI solutions and digital products while driving strategy, clients and execution.",
  },
  {
    name: "Sachin Lodhi",
    role: "Co-Founder & CTO",
    focus: "Technology",
    bio: "Built AuraForge's technical foundation from day one — owning architecture, development workflow and technology decisions.",
  },
  {
    name: "Rohit Dudwal",
    role: "Co-Founder & CMO",
    focus: "Marketing",
    bio: "Leads marketing and brand communication — social media, content strategy, reels and campaigns that grow clients' digital presence.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function Team() {
  return (
    <section id="team" className="border-t border-border px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label-mono mb-6 text-primary">The founding team</p>
            <h2 className="display-xl text-[9vw] leading-[0.9] md:text-[3.8vw]">
              <Reveal>Built by people</Reveal>
              <Reveal delay={0.06}>
                <span className="text-primary">who build.</span>
              </Reveal>
            </h2>
          </div>
          <p className="max-w-md font-editorial text-xl leading-snug text-muted-foreground lg:col-span-5 lg:justify-self-end md:text-2xl">
            Three people. Different strengths. One vision — building better digital
            experiences with AuraForge.
          </p>
        </div>

        <ul className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <li key={member.name} className="bg-background">
              <FadeIn delay={index * 0.08} className="h-full">
                <article className="group relative flex h-full flex-col gap-6 p-6 transition-colors duration-500 hover:bg-card md:p-8">
                  <div className="flex items-start justify-between">
                    <div className="relative h-20 w-20 overflow-hidden border border-border transition-colors duration-500 group-hover:border-primary">
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
                          className="flex h-full w-full items-center justify-center bg-card font-display text-2xl font-bold tracking-tight text-foreground transition-colors duration-500 group-hover:text-primary"
                        >
                          {initials(member.name)}
                        </div>
                      )}
                    </div>
                    <span className="label-mono text-muted-foreground">
                      0{index + 1} / {member.focus}
                    </span>
                  </div>

                  <div>
                    <h3 className="display-xl text-2xl md:text-[1.7vw]">{member.name}</h3>
                    <p className="label-mono mt-3 text-primary">{member.role}</p>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>

                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full"
                  />
                </article>
              </FadeIn>
            </li>
          ))}

          {/* Fills the empty grid cell on 2-column layouts; hidden once the grid goes 3-up. */}
          <li className="hidden bg-background sm:block lg:hidden">
            <FadeIn delay={0.24} className="h-full">
              <div className="relative flex h-full flex-col justify-between gap-10 p-6 md:p-8">
                <span className="label-mono text-muted-foreground">04 / AuraForge</span>
                <p className="font-editorial text-2xl leading-snug text-foreground md:text-3xl">
                  Small team. <span className="text-primary">Full-stack execution.</span>
                </p>
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-px w-full bg-primary/40"
                />
              </div>
            </FadeIn>
          </li>
        </ul>
      </div>
    </section>
  );
}
