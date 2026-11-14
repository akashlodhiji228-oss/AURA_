import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/wt/Nav";
import { Hero } from "@/components/wt/Hero";
import { Services } from "@/components/wt/Services";
import { Why } from "@/components/wt/Why";
import { Contact } from "@/components/wt/Contact";
import { Footer } from "@/components/wt/Footer";
import { Process } from "@/components/aura/Process";
import { Packages } from "@/components/aura/Packages";
import { ProjectBrief } from "@/components/aura/ProjectBrief";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WT&tudio — Digital Growth Studio" },
      {
        name: "description",
        content:
          "Where ideas become leverage. Where brands become inevitable. We design websites, build apps, create brands and bring smart AI solutions to life.",
      },
      { property: "og:site_name", content: "WT&tudio" },
      { property: "og:title", content: "WT&tudio — Digital Growth Studio" },
      {
        property: "og:description",
        content: "Where ideas become leverage. Where brands become inevitable.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://auraforge.site/" },
      { property: "og:image", content: "https://auraforge.site/og/wtstudio-preview.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "WT&tudio — Digital Growth Studio" },
      {
        name: "twitter:description",
        content: "Where ideas become leverage. Where brands become inevitable.",
      },
      { name: "twitter:image", content: "https://auraforge.site/og/wtstudio-preview.png" },
    ],
    links: [
      { rel: "canonical", href: "https://auraforge.site/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Packages />
        <Why />
        <Contact />
      </main>
      <Footer />
      <ProjectBrief />
    </div>
  );
}
