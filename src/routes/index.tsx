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

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://auraforge.site/#service",
      "name": "WT&tudio — Digital Growth Studio",
      "alternateName": "What The Studio",
      "url": "https://auraforge.site/",
      "image": "https://auraforge.site/og/wtstudio-preview.png",
      "telephone": "+91-7067558299",
      "email": "whathestudio2026@gmail.com",
      "priceRange": "₹7,999 - ₹49,999",
      "currenciesAccepted": "INR",
      "paymentAccepted": "UPI, Bank Transfer, Card",
      "sameAs": [
        "https://www.instagram.com/_whathestudio/",
        "https://www.facebook.com/profile.php?id=61596296380946&ref=1"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "WT&tudio Digital Growth Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand & Identity",
              "description": "Names, logos, colours and a voice that make your business instantly recognisable."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development",
              "description": "Fast, clean websites and web apps that turn visitors into enquiries."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web & Mobile Apps",
              "description": "Dashboards, inventory, billing and custom software built around how you work."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI & Automation",
              "description": "Chatbots, smart workflows and AI agents that save hours every week."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Content & Video",
              "description": "Visuals, reels and branding assets designed for modern digital engagement."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ads & Growth",
              "description": "Performance marketing and campaigns tuned for high-intent customer leads."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI/UX Design",
              "description": "Intuitive, human-centered interfaces built for optimal user conversion."
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://auraforge.site/#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://auraforge.site/"
        }
      ]
    }
  ]
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WT&tudio | Website Development, AI Solutions & Digital Growth Studio" },
      {
        name: "description",
        content:
          "WT&tudio helps businesses grow with professional website development, mobile applications, AI automation, branding, creative design and digital growth solutions.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { property: "og:site_name", content: "WT&tudio" },
      { property: "og:title", content: "WT&tudio | Website Development, AI Solutions & Digital Growth Studio" },
      {
        property: "og:description",
        content:
          "WT&tudio helps businesses grow with professional website development, mobile applications, AI automation, branding, creative design and digital growth solutions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://auraforge.site/" },
      { property: "og:image", content: "https://auraforge.site/og/wtstudio-preview.png" },
      { property: "og:image:alt", content: "WT&tudio — Digital Growth Studio Preview" },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "682" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "WT&tudio | Website Development, AI Solutions & Digital Growth Studio" },
      {
        name: "twitter:description",
        content:
          "WT&tudio helps businesses grow with professional website development, mobile applications, AI automation, branding, creative design and digital growth solutions.",
      },
      { name: "twitter:image", content: "https://auraforge.site/og/wtstudio-preview.png" },
      { name: "twitter:image:alt", content: "WT&tudio — Digital Growth Studio Preview" },
      { name: "google-site-verification", content: "google7c925bf777e43a2d" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Why />
        <Process />
        <Packages />
        <Contact />
      </main>
      <Footer />
      <ProjectBrief />
    </div>
  );
}
