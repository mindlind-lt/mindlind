import type { MetadataRoute } from "next";

import { absoluteUrl, routes, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Unpublished routes are already `noindex` via their page metadata; listing
  // them here keeps crawlers from spending budget on them in the first place.
  const disallow = routes
    .filter((route) => !route.published)
    .map((route) => route.path);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow,
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
