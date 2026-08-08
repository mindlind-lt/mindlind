import type { MetadataRoute } from "next";

import { absoluteUrl, routes } from "@/lib/site";

/**
 * Bump when page content meaningfully changes. Deliberately a constant rather
 * than `new Date()`: under Cache Components a clock read during prerender is
 * synchronous IO and fails the build, and a build timestamp would tell
 * crawlers every page changed on every deploy.
 */
const LAST_MODIFIED = "2026-08-09T00:00:00.000Z";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes
    .filter((route) => route.published)
    .map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: LAST_MODIFIED,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));
}
