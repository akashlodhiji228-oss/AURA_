/**
 * Google Analytics 4 (GA4) Integration for WT&tudio
 * Measurement ID: G-XGKSD9FX4F
 */

export const GA_MEASUREMENT_ID = "G-XGKSD9FX4F";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Safely dispatch an event to gtag
 */
export function gtag(...args: any[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  } else if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }
}

/**
 * Track SPA Page Views
 */
export function trackPageView(url?: string, title?: string) {
  if (typeof window === "undefined") return;

  const pagePath = url || window.location.pathname + window.location.search;
  const pageTitle = title || document.title;

  gtag("event", "page_view", {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
    send_to: GA_MEASUREMENT_ID,
  });
}

/**
 * Track Generic GA4 Event
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  gtag("event", eventName, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
  });
}

/**
 * Track WhatsApp CTA Clicks
 */
export function trackWhatsAppClick(label = "General WhatsApp CTA") {
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: label,
  });
}

/**
 * Track Contact Channel Click (WhatsApp, Email, Phone)
 */
export function trackContactClick(channel: "whatsapp" | "email" | "phone", label?: string) {
  trackEvent("contact_click", {
    event_category: "contact",
    contact_method: channel,
    event_label: label || channel,
  });
}

/**
 * Track Lead Generation (GA4 recommended event: generate_lead)
 */
export function trackGenerateLead(params: {
  method: "whatsapp" | "email" | "brief_form";
  package_name?: string;
  price?: string | number;
  timeline?: string;
}) {
  let numericValue: number | undefined;
  if (typeof params.price === "number") {
    numericValue = params.price;
  } else if (typeof params.price === "string") {
    const parsed = parseInt(params.price.replace(/[^0-9]/g, ""), 10);
    if (!isNaN(parsed)) numericValue = parsed;
  }

  trackEvent("generate_lead", {
    currency: "INR",
    value: numericValue,
    lead_method: params.method,
    package_name: params.package_name || "Unspecified",
    timeline: params.timeline || "Unspecified",
  });
}

/**
 * Track Package Selection (GA4 recommended event: select_item)
 */
export function trackSelectPackage(packageName: string, price?: string) {
  let numericValue: number | undefined;
  if (price) {
    const parsed = parseInt(price.replace(/[^0-9]/g, ""), 10);
    if (!isNaN(parsed)) numericValue = parsed;
  }

  trackEvent("select_item", {
    item_list_name: "Service Packages",
    items: [
      {
        item_name: packageName,
        price: numericValue,
        currency: "INR",
      },
    ],
  });
}

/**
 * Auto-track outbound links, file downloads, and scroll milestones
 */
export function initAnalyticsAutoTracking(): () => void {
  if (typeof window === "undefined") return () => {};

  // 1. Outbound & Download click tracking
  const handleClick = (e: MouseEvent) => {
    const target = (e.target as HTMLElement)?.closest("a");
    if (!target || !target.href) return;

    const href = target.href;
    const currentOrigin = window.location.origin;

    // File download detection
    const downloadExtensions = [
      ".pdf",
      ".zip",
      ".rar",
      ".doc",
      ".docx",
      ".xls",
      ".xlsx",
      ".ppt",
      ".pptx",
      ".csv",
    ];
    const isDownload = downloadExtensions.some((ext) => href.toLowerCase().endsWith(ext));
    if (isDownload) {
      const fileName = href.split("/").pop() || href;
      const fileExt = fileName.split(".").pop() || "";
      trackEvent("file_download", {
        file_name: fileName,
        file_extension: fileExt,
        link_url: href,
      });
      return;
    }

    // Outbound link detection
    try {
      const url = new URL(href, window.location.href);
      if (url.origin !== currentOrigin && url.protocol.startsWith("http")) {
        trackEvent("click", {
          event_category: "outbound",
          event_label: href,
          outbound: true,
          transport_type: "beacon",
        });
      }
    } catch {
      // Ignore invalid URLs
    }
  };

  // 2. Scroll Depth Milestones (25%, 50%, 75%, 90%)
  const trackedMilestones = new Set<number>();
  const handleScroll = () => {
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || window.pageYOffset;

    if (docHeight <= windowHeight) return;

    const scrollPercent = Math.round((scrollTop / (docHeight - windowHeight)) * 100);
    const milestones = [25, 50, 75, 90];

    for (const milestone of milestones) {
      if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
        trackedMilestones.add(milestone);
        trackEvent("scroll", {
          percent_scrolled: milestone,
        });
      }
    }
  };

  document.addEventListener("click", handleClick, { passive: true });
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    document.removeEventListener("click", handleClick);
    window.removeEventListener("scroll", handleScroll);
  };
}
