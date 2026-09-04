import type { MetadataRoute } from "next";

import { absoluteUrl, routes } from "@/lib/site";

/**
 * `output: "export"` prerenders this generated route at build time, but only
 * when the file opts in through a route segment config. See the same export in
 * app/opengraph-image.tsx.
 */
export const dynamic = "force-static";

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
  };
}
