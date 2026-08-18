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
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindlind.de").replace(
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
   * `false` keeps the route out of the sitemap and off limits in robots.txt.
   * Use for placeholders and pages with no real content yet — the page's own
   * `metadata` export carries the matching `noindex`.
   */
  published: boolean;
  priority: number;
  changeFrequency: "yearly" | "monthly" | "weekly";
};

export const routes = [
  { path: "/", published: true, priority: 1, changeFrequency: "monthly" },
  { path: "/agency", published: true, priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/services",
    published: true,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/projects",
    published: true,
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    published: true,
    priority: 0.7,
    changeFrequency: "yearly",
  },

  // Case studies
  {
    path: "/projects/funky-coffee",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/funky-ramen",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/princefood",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/muafaktur",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/autosl",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },

  {
    path: "/projects/mondent",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/luxfloor",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/panda-travel",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/factorysl",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/onlysmile",
    published: true,
    priority: 0.6,
    changeFrequency: "yearly",
  },

  {
    path: "/impressum",
    published: true,
    priority: 0.1,
    changeFrequency: "yearly",
  },
  {
    path: "/datenschutz",
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
