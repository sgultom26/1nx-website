import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const PATHS = ["", "/solutions", "/products", "/industries", "/company", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PATHS.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
    alternates: {
      languages: {
        en: `${SITE_URL}${path || "/"}`,
        id: `${SITE_URL}/id${path}`,
      },
    },
  }));
}
