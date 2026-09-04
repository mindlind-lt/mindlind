import { absoluteUrl, routes, siteConfig } from "@/lib/site";

type Route = (typeof routes)[number];

/** `- [Title](https://…): summary` — the link form llms.txt parsers expect. */
function link(route: Route): string {
  return `- [${route.title}](${absoluteUrl(route.path)}): ${route.summary}`;
}

/**
 * `output: "export"` prerenders this generated route at build time, but only
 * when the file opts in through a route segment config. See the same export in
 * app/opengraph-image.tsx.
 */
export const dynamic = "force-static";

/**
 * llms.txt — an emerging, unofficial convention some AI assistants use to
 * disambiguate a site. Not a ranking factor and ignored by Google Search;
 * kept in sync with `routes` (the same source `sitemap.ts`/`robots.ts` use)
 * so it can't drift out of date on its own.
 *
 * Follows the llms.txt structure: an H1, a blockquote summary, then H2
 * sections whose bullets are markdown links. Bare URLs are not links to a
 * markdown parser, so every entry goes through `link()`.
 */
export async function GET() {
  const published = routes.filter((route) => route.published);
  const isCaseStudy = (route: Route) => route.path.startsWith("/projects/");
  const isLegal = (route: Route) =>
    route.path === "/impressum" || route.path === "/datenschutz";

  const main = published.filter((r) => !isCaseStudy(r) && !isLegal(r));
  const caseStudies = published.filter(isCaseStudy);
  const legal = published.filter(isLegal);

  const body = `# ${siteConfig.legalName}

> ${siteConfig.description}

Digitale Werbeagentur mit Sitz in Vilnius für Kunden im deutschsprachigen Raum. Leistungen: Web Design, Branding, SEO, Google Ads, Instagram Ads.

## Seiten

${main.map(link).join("\n")}

## Projekte

${caseStudies.map(link).join("\n")}

## Rechtliches

${legal.map(link).join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
