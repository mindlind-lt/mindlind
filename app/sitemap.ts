import type { MetadataRoute } from "next";

import { absoluteUrl, lastModified, routes } from "@/lib/site";

/**
 * `output: "export"` prerenders this generated route at build time, but only
 * when the file opts in through a route segment config. See the same export in
 * app/opengraph-image.tsx.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes
    .filter((route) => route.published)
    .map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: lastModified(route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));
}
