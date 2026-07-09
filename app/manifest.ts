import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a6eff",
    icons: [
      {
        src: "/images/logo.jpeg",
        sizes: "1600x1600",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/images/logo.jpeg",
        sizes: "1600x1600",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
  };
}
