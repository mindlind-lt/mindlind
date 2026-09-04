import type { Metadata } from "next";
import { breadcrumbSchema, servicesSchema } from "@/lib/schema";
import { socialCard } from "@/lib/site";

// `app/services/page.tsx` is a Client Component, and Client Components cannot
// export `metadata` — so the route's metadata lives in this layout instead.
export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Web-Design, UX/UI, Branding und Entwicklung — unsere Lösungen werden individuell an Ziele, Branche und Wachstumstempo angepasst.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/services",
    siteName: "Mindlind Werbeagentur",
    title: "Leistungen | Mindlind Werbeagentur",
    description:
      "Web-Design, UX/UI, Branding und Entwicklung — unsere Lösungen werden individuell an Ziele, Branche und Wachstumstempo angepasst.",
    images: socialCard(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Leistungen | Mindlind Werbeagentur",
    description:
      "Web-Design, UX/UI, Branding und Entwicklung — unsere Lösungen werden individuell an Ziele, Branche und Wachstumstempo angepasst.",
    images: socialCard(),
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Leistungen", path: "/services" }]),
          ),
        }}
      />
      {children}
    </>
  );
}
