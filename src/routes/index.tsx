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
      { title: "WT&tudio — What The Studio | Brand, Web, AI & Growth" },
      {
        name: "description",
        content:
          "WT&tudio designs, builds and markets digital things people stop for — branding, websites, apps, AI automation, content and ads. Websites from ₹7,999.",
      },
      { property: "og:title", content: "WT&tudio — Ideas worth a second look" },
      {
        property: "og:description",
        content: "A small, sharp studio for brand, websites, apps, AI and growth. Start a project on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
