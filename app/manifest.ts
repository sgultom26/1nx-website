import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "1nx — One idea. N executions.",
    short_name: "1nx",
    description:
      "AI-enabled solutions, digital transformation and automation for the enterprise.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0e7490",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
