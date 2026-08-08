/**
 * Single source of truth for site-wide identity and per-route SEO metadata.
 *
 * `app/sitemap.ts`, `app/robots.ts` and every page's `metadata` export read
 * from here, so a route only has to be described once.
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
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindlind.de").replace(
    /\/$/,
    "",
  ),
  description:
    "Unser 360° Ansatz für Projektmanagement umfasst fünf Kernphasen, um herausragende Ergebnisse zu erzielen.",
} as const;

export type RouteMeta = {
  /** Path as routed, no trailing slash (root is "/"). */
  path: string;
  title: string;
  description: string;
  /** Absolute-from-root path to a social preview image, if the route has one. */
  image?: string;
  /**
   * `false` keeps the route out of the sitemap and marks it `noindex`.
   * Use for placeholders and pages with no real content yet.
   */
  published: boolean;
  priority: number;
  changeFrequency: "yearly" | "monthly" | "weekly";
};

export const routes = [
  {
    path: "/",
    // Self-contained: the root layout's title template does not apply to the
    // page in its own segment, so the brand has to be part of the title here.
    title: "Mindlind Werbeagentur — Digitale Markenauftritte",
    description: siteConfig.description,
    published: true,
    priority: 1,
    changeFrequency: "monthly",
  },
  {
    path: "/agency",
    title: "Agentur",
    description:
      "Das Team hinter Mindlind, unser 360°-Ansatz und wie wir Marken von der Strategie bis zum Launch begleiten.",
    published: true,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services",
    title: "Leistungen",
    description:
      "Web-Design, UX/UI, Branding und Entwicklung — unsere Lösungen werden individuell an Ziele, Branche und Wachstumstempo angepasst.",
    published: true,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/projects",
    title: "Projekte",
    description:
      "Ausgewählte Arbeiten: Websites, UX/UI und Markenauftritte für Gastronomie, Beauty, Automotive und Produktion.",
    published: true,
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    title: "Kontakt",
    description:
      "Projekt im Kopf? Schreiben Sie uns — wir melden uns kurzfristig mit einer ersten Einschätzung.",
    published: true,
    priority: 0.7,
    changeFrequency: "yearly",
  },

  // Case studies
  {
    path: "/projects/funky-coffee",
    title: "Funky Coffee",
    description:
      "Ein Café verkauft nicht nur Kaffee, sondern Atmosphäre. Digitaler Auftritt in heller, luftiger Food-Ästhetik, der Appetit macht.",
    image: "/images/case-funky-coffee-1.png",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/funky-ramen",
    title: "Funky Ramen",
    description:
      "Eine digitale Welt, die Geschmack, Atmosphäre und Identität schon vor dem ersten Besuch spürbar macht — Ramen als Markenelement.",
    image: "/images/case-funky-ramen-1.jpg",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/princefood",
    title: "Prince Food",
    description:
      "Digitaler Auftritt für ein Produktionsunternehmen: Vertrauen schaffen, Prozesse sichtbar machen, industrielle Stärke verständlich kommunizieren.",
    image: "/images/case-prince-food-2.jpg",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/muafaktur",
    title: "MUA Faktur",
    description:
      "Beauty-Marke als skalierbares digitales System: Produkte, Academy und Services als Teile einer größeren Markenwelt.",
    image: "/images/case-mua-2.png",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/autosl",
    title: "AutoSL",
    description:
      "Luxusfahrzeuge, präsentiert wie ein kuratiertes Sammlerstück statt wie ein Inserat — jedes Fahrzeug als Objekt mit Charakter und Wert.",
    image: "/images/case-autosl-1.jpg",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },

  // Placeholders — "COMING SOON" only. Flip `published` to true once the case
  // study is written; that adds it to the sitemap and drops the noindex.
  {
    path: "/projects/mondent",
    title: "Mondent",
    description: "Case Study in Vorbereitung.",
    image: "/images/case-mondent-1.png",
    published: false,
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/luxfloor",
    title: "LuxFloor",
    description: "Case Study in Vorbereitung.",
    image: "/images/case-luxfloor-1.png",
    published: false,
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/panda-travel",
    title: "Panda Travel",
    description: "Case Study in Vorbereitung.",
    image: "/images/case-pandatravel-1.png",
    published: false,
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/factorysl",
    title: "Factory SL",
    description: "Case Study in Vorbereitung.",
    image: "/images/case-factorysl-1.jpg",
    published: false,
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/onlysmile",
    title: "OnlySmile",
    description: "Case Study in Vorbereitung.",
    image: "/images/case-onlysmile-1.png",
    published: false,
    priority: 0.3,
    changeFrequency: "yearly",
  },

  // Legal pages. Currently render nothing, so they stay out of the index —
  // flip to `published: true` once they contain the required text.
  {
    path: "/impressum",
    title: "Impressum",
    description: "Anbieterkennzeichnung der Mindlind Werbeagentur.",
    published: false,
    priority: 0.1,
    changeFrequency: "yearly",
  },
  {
    path: "/datenschutz",
    title: "Datenschutz",
    description: "Datenschutzerklärung der Mindlind Werbeagentur.",
    published: false,
    priority: 0.1,
    changeFrequency: "yearly",
  },
] as const satisfies readonly RouteMeta[];

export type RoutePath = (typeof routes)[number]["path"];

export function getRoute(path: RoutePath): RouteMeta {
  const route = routes.find((r) => r.path === path);
  if (!route) throw new Error(`No route metadata registered for "${path}"`);
  return route;
}

/** Absolute URL for a root-relative path. */
export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}
