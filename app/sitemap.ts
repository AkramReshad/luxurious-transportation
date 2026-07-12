import type { MetadataRoute } from "next";
import { services } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ltslv.com";
  const paths = ["", "/fleet/", "/services/", "/contact/", ...services.map((service) => `/${service.slug}/`)];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}
