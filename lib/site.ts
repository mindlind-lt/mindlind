/**
 * Site-wide identity plus the route list that `app/sitemap.ts` and
 * `app/robots.ts` are generated from.
 *
 * Per-page SEO (title, description, canonical, Open Graph, Twitter) lives in
 * each page's own `metadata` export — see any `app/**\/page.tsx`.
 */

import { execFileSync } from "node:child_process";

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
/**
 * The generated 1200×630 card from `app/opengraph-image.tsx`.
 *
 * Next only folds that file-convention image into a page's metadata when the
 * page does not declare its own `openGraph` object — and metadata merging is
 * shallow, so a page that sets `openGraph` for the title replaces the whole
 * inherited object, image included (see "Merging" in the generateMetadata
 * docs). Six pages hit exactly that and shipped with no `og:image` at all:
 * every share of /services, /agency, /contact, /projects, /impressum and
 * /datenschutz rendered as a blank card.
 *
 * Setting this on `openGraph.images` and `twitter.images` is the explicit
 * fix. Pages with a real photograph to show — the case studies — pass their
 * own image instead.
 */
export function socialCard() {
  return [
    {
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Mindlind Werbeagentur — Digitale Markenauftritte",
    },
  ];
}

export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}

/**
 * Fallback `lastmod` for a build with no git history to read (a tarball, a
 * shallow CI checkout). Only used when `lastModified()` below cannot do
 * better.
 */
const FALLBACK_MODIFIED = "2026-08-09T00:00:00.000Z";

const modifiedCache = new Map<string, string>();

/**
 * `lastmod` for a route, taken from the last commit that touched its
 * `page.tsx`.
 *
 * This used to be one hardcoded constant shared by every URL. Google only
 * uses `lastmod` while it stays verifiably accurate, and seventeen pages all
 * claiming the same frozen date is the fastest way to have the signal ignored
 * for the whole site — it never moved when a page actually changed, and it
 * would have gone on claiming August 2026 indefinitely.
 *
 * Git is the one source that is accurate without anyone maintaining it. It is
 * read at build time only: `output: "export"` means this runs during
 * `next build` and the answer is baked into out/sitemap.xml.
 *
 * Known limitation: it tracks the route's own file, not the components it
 * renders, so a redesign that only touches components/ does not move the date.
 * That errs toward under-reporting changes, which is the safe direction —
 * an overstated `lastmod` is what destroys the signal.
 *
 * Fails open: no git, no history, or a file that was never committed all fall
 * back to the constant above rather than breaking the build.
 */
export function lastModified(routePath: string): string {
  const cached = modifiedCache.get(routePath);
  if (cached) return cached;

  const file = `app${routePath === "/" ? "" : routePath}/page.tsx`;
  let iso = FALLBACK_MODIFIED;

  try {
    const committed = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", file],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    if (committed) iso = new Date(committed).toISOString();
  } catch {
    // No git in the build environment — the fallback is already in place.
  }

  modifiedCache.set(routePath, iso);
  return iso;
}
