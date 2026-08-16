import { absoluteUrl, routes, siteConfig } from "@/lib/site";

/**
 * llms.txt — an emerging, unofficial convention some AI assistants use to
 * disambiguate a site. Not a ranking factor and ignored by Google Search;
 * kept in sync with `routes` (the same source `sitemap.ts`/`robots.ts` use)
 * so it can't drift out of date on its own.
 */
export async function GET() {
  const pages = routes
    .filter((route) => route.published && route.path !== "/")
    .map((route) => `- ${absoluteUrl(route.path)}`)
    .join("\n");

  const body = `# ${siteConfig.legalName}

> ${siteConfig.description}

Digitale Werbeagentur mit Sitz in Vilnius für Kunden im deutschsprachigen Raum. Leistungen: Web Design, Branding, SEO, Google Ads, Instagram Ads.

## Seiten

${pages}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
