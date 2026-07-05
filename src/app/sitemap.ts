import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: "2026-07-03",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: "2026-07-05",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
