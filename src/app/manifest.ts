import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "ThroughPoint",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f3eee8",
    theme_color: "#071d3d",
    icons: [
      {
        src: siteConfig.logoPath,
        sizes: "190x88",
        type: "image/png",
      },
    ],
  };
}
