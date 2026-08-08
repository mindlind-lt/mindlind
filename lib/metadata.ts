import type { Metadata } from "next";

import { absoluteUrl, getRoute, siteConfig, type RoutePath } from "./site";

/**
 * Builds a page's `metadata` export from its entry in the route registry:
 * canonical URL, Open Graph and Twitter cards, and a `noindex` for routes
 * that aren't published yet.
 *
 * Routes without their own `image` fall back to the generated card from
 * `app/opengraph-image.tsx`, which Next.js applies automatically — so we
 * only set `openGraph.images` when the route has a specific one.
 */
export function buildMetadata(path: RoutePath): Metadata {
  const route = getRoute(path);
  const url = absoluteUrl(route.path);
  const images = route.image
    ? [{ url: route.image, alt: `${route.title} — ${siteConfig.legalName}` }]
    : undefined;

  return {
    // The root page shares a segment with the root layout, so the layout's
    // title template never applies to it — mark it absolute to make that
    // explicit rather than relying on the quirk.
    title: route.path === "/" ? { absolute: route.title } : route.title,
    description: route.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.legalName,
      title: route.title,
      description: route.description,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      ...(images ? { images } : {}),
    },
    ...(route.published
      ? {}
      : { robots: { index: false, follow: true } }),
  };
}
