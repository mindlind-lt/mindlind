import type { MetadataRoute } from "next";

const BASE_URL = "https://new.mindlind.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/kontakt`, lastModified: new Date() },
    { url: `${BASE_URL}/impressum`, lastModified: new Date() },
    { url: `${BASE_URL}/datenschutz`, lastModified: new Date() },
    { url: `${BASE_URL}/portfolio/autosl`, lastModified: new Date() },
    { url: `${BASE_URL}/portfolio/factorysl`, lastModified: new Date() },
    { url: `${BASE_URL}/portfolio/muafaktur`, lastModified: new Date() },
    { url: `${BASE_URL}/portfolio/princefood`, lastModified: new Date() },
  ];
}
