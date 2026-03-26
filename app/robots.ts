// Disable indexing
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}

// import type { MetadataRoute } from "next";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: { userAgent: "*", allow: "/" },
//     sitemap: "https://new.mindlind.de/sitemap.xml",
//   };
// }
