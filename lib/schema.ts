/**
 * JSON-LD structured data. Kept separate from `lib/site.ts` (route/identity
 * config) since these builders shape schema.org objects rather than site
 * metadata — consumed via `<script type="application/ld+json">` in layouts.
 */

import { absoluteUrl, LAST_MODIFIED, siteConfig } from "@/lib/site";

const ORGANIZATION_ID = absoluteUrl("/#organization");

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl("/opengraph-image"),
    description: siteConfig.description,
    email: "info@mindlind.de",
    telephone: "+37067546918",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Žirgų g. 18-6, Raudondvario k.",
      postalCode: "LT-14257",
      addressLocality: "Vilnius",
      addressCountry: "LT",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+37067546918",
        email: "info@mindlind.de",
        areaServed: "LT",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+4917624685516",
        email: "info@mindlind.de",
        areaServed: "DE",
      },
    ],
    sameAs: ["https://www.instagram.com/mind_lind"],
    areaServed: ["DE", "LT"],
  } as const;
}

export function servicesSchema() {
  const provider = { "@id": ORGANIZATION_ID } as const;
  const servicesUrl = absoluteUrl("/services");

  const priced = (
    id: string,
    name: string,
    serviceType: string,
    price: string,
  ) => ({
    "@type": "Service" as const,
    "@id": absoluteUrl(`/services#${id}`),
    name,
    serviceType,
    provider,
    areaServed: ["DE", "LT"],
    offers: {
      "@type": "Offer" as const,
      priceCurrency: "EUR",
      price,
      priceSpecification: {
        "@type": "UnitPriceSpecification" as const,
        price,
        priceCurrency: "EUR",
        unitText: "MONTH",
      },
      url: servicesUrl,
    },
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      priced("instagram-ads", "Instagram Ads", "Social Media Advertising", "600"),
      priced("seo", "SEO", "Search Engine Optimization", "650"),
      priced("google-ads", "Google Ads", "Search Engine Marketing", "700"),
      // No confirmed price on the site for these two — omit `offers` rather
      // than invent one.
      {
        "@type": "Service" as const,
        "@id": absoluteUrl("/services#web-design"),
        name: "Web Design",
        serviceType: "Web Design",
        provider,
        areaServed: ["DE", "LT"],
      },
      {
        "@type": "Service" as const,
        "@id": absoluteUrl("/services#branding"),
        name: "Branding",
        serviceType: "Brand Identity Design",
        provider,
        areaServed: ["DE", "LT"],
      },
    ],
  } as const;
}

/** `items` in page order, root first — e.g. [{name: "Projekte", path: "/projects"}, {name: "Funky Coffee", path: "/projects/funky-coffee"}]. Home is prepended automatically. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const withHome = [{ name: siteConfig.name, path: "/" }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: withHome.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  } as const;
}

export function caseStudySchema({ path, name }: { path: string; name: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": absoluteUrl(`${path}#work`),
    name,
    url: absoluteUrl(path),
    creator: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    dateModified: LAST_MODIFIED,
    inLanguage: "de",
  } as const;
}
