import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/wt/Nav";
import { Footer } from "@/components/wt/Footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — WT&tudio" },
      {
        name: "description",
        content:
          "How WT&tudio collects, uses and protects your personal data, in line with the Digital Personal Data Protection Act, 2023 (India).",
      },
      { property: "og:title", content: "Privacy Policy — WT&tudio" },
      {
        property: "og:description",
        content:
          "How WT&tudio collects, uses and protects your personal data, in line with the Digital Personal Data Protection Act, 2023 (India).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPolicy,
});

const sections: { title: string; body: string[] }[] = [
  {
    title: "1. Who we are",
    body: [
      "WT&tudio (\"we\", \"us\", \"our\") is a full-service digital execution studio based in India. For the purposes of the Digital Personal Data Protection Act, 2023 (\"DPDP Act\"), WT&tudio is the Data Fiduciary — the entity that determines why and how your personal data is processed.",
      "You can reach us at officialauraforge@gmail.com or on WhatsApp at +91 78694 61895.",
    ],
  },
  {
    title: "2. What personal data we collect",
    body: [
      "We collect only the personal data you choose to share with us when you contact us or start a project brief, such as: your name, phone number, email address, business name, and details about the service or package you are interested in.",
      "When you tap a WhatsApp or email link on this website, the conversation happens on those platforms and is also governed by their own privacy policies.",
      "We do not knowingly collect personal data of children under 18 years of age.",
    ],
  },
  {
    title: "3. Why we use your data (purpose & consent)",
    body: [
      "We process your personal data only for legitimate purposes connected to your enquiry: responding to your messages, preparing project proposals and quotations, delivering the services you engage us for, and maintaining our business relationship with you.",
      "By voluntarily sharing your details with us through this website, WhatsApp or email, you give us consent to process that data for these purposes. You may withdraw your consent at any time (see Section 6).",
    ],
  },
  {
    title: "4. How we store and protect your data",
    body: [
      "Your data is stored on the communication and business tools we use (such as email and WhatsApp) and is accessible only to the WT&tudio team members who need it to serve you.",
      "We apply reasonable technical and organisational safeguards to prevent unauthorised access, loss or misuse of your personal data. We retain your data only for as long as needed to fulfil the purpose it was collected for, or as required by applicable law.",
    ],
  },
  {
    title: "5. Sharing of personal data",
    body: [
      "We do not sell, rent or trade your personal data to anyone.",
      "We may share limited data with trusted service providers (for example hosting, email or communication platforms) strictly to operate our business, and with authorities where disclosure is required by law.",
    ],
  },
  {
    title: "6. Your rights as a Data Principal",
    body: [
      "Under the DPDP Act, you have the right to: (a) access information about your personal data we hold and how it is processed; (b) request correction, completion, updating or erasure of your personal data; (c) withdraw your consent at any time, with effect from the date of withdrawal; (d) nominate a person to exercise these rights in the event of your death or incapacity; and (e) raise a grievance about how we handle your data.",
      "To exercise any of these rights, email us at officialauraforge@gmail.com with the subject \"Data Request\". We will respond within a reasonable time as required by law.",
    ],
  },
  {
    title: "7. Grievance redressal",
    body: [
      "If you have any question, concern or complaint about how your personal data is handled, contact our Grievance Officer at officialauraforge@gmail.com or on WhatsApp at +91 78694 61895. We will acknowledge and work to resolve your grievance promptly.",
      "If you are not satisfied with our response, you may approach the Data Protection Board of India as provided under the DPDP Act.",
    ],
  },
  {
    title: "8. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The latest version will always be available on this page, and continued use of the website after an update means you accept the revised policy.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <div className="grain relative min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-[1100px] px-5 pb-32 pt-40 md:px-10 md:pt-52">
        <p className="label-mono mb-8 text-primary">Legal</p>
        <h1 className="display-xl text-[11vw] leading-[0.92] md:text-[4.6vw]">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <p className="mt-8 max-w-2xl font-editorial text-xl leading-snug text-muted-foreground md:text-2xl">
          How WT&tudio collects, uses and protects your personal data — in line with the
          Digital Personal Data Protection Act, 2023 (India).
        </p>
        <p className="label-mono mt-6 text-muted-foreground">Last updated: November 2026</p>

        <div className="mt-16 border-t border-border">
          {sections.map((section) => (
            <section key={section.title} className="grid gap-4 border-b border-border py-10 md:grid-cols-12">
              <h2 className="display-xl text-xl md:col-span-4 md:text-2xl">{section.title}</h2>
              <div className="flex flex-col gap-4 md:col-span-8">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14">
          <Link
            to="/"
            className="label-mono inline-block border border-primary px-6 py-3 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            ← Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
