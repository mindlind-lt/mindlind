import type { MetadataRoute } from "next";

import { absoluteUrl, LAST_MODIFIED, routes } from "@/lib/site";

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
