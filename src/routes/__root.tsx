import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent(props: ErrorComponentProps) {
  const { error, reset } = props as { error: Error; reset: () => void };
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://auraforge.site/#organization",
      "name": "AuraForge",
      "alternateName": ["WT&tudio", "AuraForge Digital Growth Studio"],
      "url": "https://auraforge.site/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://auraforge.site/#logo",
        "url": "https://auraforge.site/favicon.svg",
        "caption": "AuraForge Logo"
      },
      "image": "https://auraforge.site/og/wtstudio-preview.png",
      "description":
        "AuraForge helps businesses grow with professional website development, mobile applications, AI automation, branding, creative design and digital growth solutions.",
      "email": "whathestudio2026@gmail.com",
      "telephone": "+91-7067558299",
      "sameAs": [
        "https://www.instagram.com/_whathestudio/",
        "https://www.linkedin.com/company/auraforge",
        "https://x.com/auraforge"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-7067558299",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"]
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://auraforge.site/#website",
      "url": "https://auraforge.site/",
      "name": "AuraForge",
      "alternateName": "WT&tudio",
      "description": "Website Development, AI Solutions & Digital Growth Studio",
      "publisher": {
        "@id": "https://auraforge.site/#organization"
      },
      "inLanguage": "en-US"
    }
  ]
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { title: "AuraForge | Website Development, AI Solutions & Digital Growth Studio" },
      {
        name: "description",
        content:
          "AuraForge helps businesses grow with professional website development, mobile applications, AI automation, branding, creative design and digital growth solutions.",
      },
      { name: "author", content: "AuraForge" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { property: "og:site_name", content: "AuraForge" },
      { property: "og:title", content: "AuraForge | Website Development, AI Solutions & Digital Growth Studio" },
      {
        property: "og:description",
        content:
          "AuraForge helps businesses grow with professional website development, mobile applications, AI automation, branding, creative design and digital growth solutions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://auraforge.site/" },
      { property: "og:image", content: "https://auraforge.site/og/wtstudio-preview.png" },
      { property: "og:image:alt", content: "AuraForge — Digital Growth Studio Preview" },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "682" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AuraForge | Website Development, AI Solutions & Digital Growth Studio" },
      {
        name: "twitter:description",
        content:
          "AuraForge helps businesses grow with professional website development, mobile applications, AI automation, branding, creative design and digital growth solutions.",
      },
      { name: "twitter:image", content: "https://auraforge.site/og/wtstudio-preview.png" },
      { name: "twitter:image:alt", content: "AuraForge — Digital Growth Studio Preview" },
      { name: "google-site-verification", content: "google7c925bf777e43a2d" },
      { name: "theme-color", content: "#FFFFFF" },
    ],
    links: [
      { rel: "canonical", href: "https://auraforge.site/" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-MWJXNTZD" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWJXNTZD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
