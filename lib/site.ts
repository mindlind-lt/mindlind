/**
 * Site-wide identity plus the route list that `app/sitemap.ts` and
 * `app/robots.ts` are generated from.
 *
 * Per-page SEO (title, description, canonical, Open Graph, Twitter) lives in
 * each page's own `metadata` export — see any `app/**\/page.tsx`.
 */

export const siteConfig = {
  name: "Mindlind",
  legalName: "Mindlind Werbeagentur",
  locale: "de_DE",
  lang: "de",
  /**
   * Canonical origin, no trailing slash. Override per environment with
   * NEXT_PUBLIC_SITE_URL (e.g. a Vercel preview or staging domain) so
   * canonicals and OG URLs don't all point at production.
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://new.mindlind.de").replace(
    /\/$/,
    "",
  ),
  description:
    "Mindlind ist eine Werbeagentur für Webdesign, SEO und Performance Marketing. Wir entwickeln digitale Markenauftritte, die sichtbar werden und messbar wachsen.",
} as const;

export type RouteMeta = {
  /** Path as routed, no trailing slash (root is "/"). */
  path: string;
  /**
   * Link text for `app/llms.txt`. Matches the page's own `metadata.title`
   * (the un-templated part) so the two can't describe the page differently.
   */
  title: string;
  /** One-line note after the link in `app/llms.txt`. Keep it to a clause. */
  summary: string;
  /**
   * `false` keeps the route out of the sitemap and off limits in robots.txt.
   * Use for placeholders and pages with no real content yet — the page's own
   * `metadata` export carries the matching `noindex`.
   */
  published: boolean;
  priority: number;
  changeFrequency: "yearly" | "monthly" | "weekly";
};

export const routes = [
  {
    path: "/",
    title: "Startseite",
    summary: "Werbeagentur für Webdesign, SEO und Performance Marketing",
    published: true,
    priority: 1,
    changeFrequency: "monthly",
  },
  {
    path: "/agency",
    title: "Agentur",
    summary: "Team, 360°-Ansatz und Ablauf von der Strategie bis zum Launch",
    published: true,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services",
    title: "Leistungen",
    summary: "Web-Design, UX/UI, Branding, Entwicklung, SEO und Ads",
    published: true,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/projects",
    title: "Projekte",
    summary:
      "Ausgewählte Arbeiten aus Gastronomie, Beauty, Automotive und Produktion",
    published: true,
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    title: "Kontakt",
    summary: "Anfrage stellen und eine erste Einschätzung erhalten",
    published: true,
    priority: 0.7,
    changeFrequency: "yearly",
  },

  // Case studies
  {
    path: "/projects/funky-coffee",
    title: "Funky Coffee",
    summary:
      "Case Study — digitaler Auftritt für ein Café in heller Food-Ästhetik",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/funky-ramen",
    title: "Funky Ramen",
    summary: "Case Study — Ramen-Restaurant als eigene digitale Markenwelt",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/princefood",
    title: "Prince Food",
    summary: "Case Study — Produktionsunternehmen, Prozesse sichtbar gemacht",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/muafaktur",
    title: "MUA Faktur",
    summary: "Case Study — Beauty-Marke als skalierbares digitales System",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/autosl",
    title: "AutoSL",
    summary: "Case Study — Luxusfahrzeuge kuratiert statt inseriert",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },

  {
    path: "/projects/mondent",
    title: "Mondent",
    summary:
      "Case Study — Website und SEO für eine große Zahnarztpraxis in Düsseldorf",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/luxfloor",
    title: "LuxFloor",
    summary: "Case Study — Website und E-Commerce für hochwertige Bodenbeläge",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/panda-travel",
    title: "Panda Travel",
    summary: "Case Study — Geschäftsreisen, China-Sourcing und Logistik",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/factorysl",
    title: "Factory SL",
    summary:
      "Case Study — Markenauftritt für Luxus-Detailing und Fahrzeugaufbereitung",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/onlysmile",
    title: "OnlySmile",
    summary: "Case Study — Markenauftritt für Zahnbleaching und Dental Beauty",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },

  {
    path: "/impressum",
    title: "Impressum",
    summary: "Anbieterkennzeichnung der Mindlind Werbeagentur",
    published: true,
    priority: 0.1,
    changeFrequency: "yearly",
  },
  {
    path: "/datenschutz",
    title: "Datenschutz",
    summary: "Datenschutzerklärung",
    published: true,
    priority: 0.1,
    changeFrequency: "yearly",
  },
] as const satisfies readonly RouteMeta[];

/** Absolute URL for a root-relative path. */
export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}

/**
 * Bump when page content meaningfully changes. Deliberately a constant rather
 * than `new Date()`: under Cache Components a clock read during prerender is
 * synchronous IO and fails the build, and a build timestamp would tell
 * crawlers every page changed on every deploy. Shared by `app/sitemap.ts` and
 * `lib/schema.ts` so sitemap `lastmod` and schema `dateModified` can't drift
 * apart.
 */
export const LAST_MODIFIED = "2026-08-09T00:00:00.000Z";
