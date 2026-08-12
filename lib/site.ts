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
    "Unser 360° Ansatz für Projektmanagement umfasst fünf Kernphasen, um herausragende Ergebnisse zu erzielen.",
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

  // Placeholders — "COMING SOON" only. Flip `published` to true once the case
  // study is written; that adds it to the sitemap and lets crawlers in. Drop
  // the `robots` block from the page's `metadata` export at the same time.
  {
    path: "/projects/mondent",
    published: false,
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/luxfloor",
    published: false,
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/panda-travel",
    published: false,
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/factorysl",
    published: false,
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/projects/onlysmile",
    published: false,
    priority: 0.3,
    changeFrequency: "yearly",
  },

  // Legal pages. Currently render nothing, so they stay out of the index —
  // flip to `published: true` once they contain the required text.
  {
    path: "/impressum",
    published: false,
    priority: 0.1,
    changeFrequency: "yearly",
  },
  {
    path: "/datenschutz",
    published: false,
    priority: 0.1,
    changeFrequency: "yearly",
  },
] as const satisfies readonly RouteMeta[];

/** Absolute URL for a root-relative path. */
export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}
