import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/aura/Nav";
import { Hero } from "@/components/aura/Hero";
import { Philosophy, Forge } from "@/components/aura/Forge";
import { Work } from "@/components/aura/Work";
import { Process } from "@/components/aura/Process";
import { Aura, Capabilities, Manifesto, Contact, Footer } from "@/components/aura/Studio";
import { CustomCursor } from "@/components/aura/CustomCursor";
import { ProjectBrief } from "@/components/aura/ProjectBrief";
import { Packages } from "@/components/aura/Packages";
import { Team } from "@/components/aura/Team";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURA_FORGE® — We Build Brands, Products & Growth Systems" },
      {
        name: "description",
        content:
          "AURA_FORGE is a full-service digital execution studio combining brand, technology, AI, creative, marketing and growth. Start a project on WhatsApp or email.",
      },
      { property: "og:title", content: "AURA_FORGE® — We Build Digital Dominance" },
      {
        property: "og:description",
        content:
          "A digital execution studio for founders and brands who refuse to build ordinary things. Brand × Technology × AI × Growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain relative min-h-screen w-full overflow-x-clip bg-background text-foreground">
      <CustomCursor />
      <Nav />
      <main className="w-full overflow-x-clip">
        <Hero />
        <Philosophy />
        <Forge />
        <Work />
        <Process />
        <Packages />
        <Aura />
        <Team />
        <Capabilities />
        <Manifesto />
        <Contact />
      </main>
      <Footer />
      <ProjectBrief />
    </div>
  );
}
