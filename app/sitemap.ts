import type { MetadataRoute } from "next";
import { services } from "@/lib/site-data";
import { getSiteOrigin } from "@/lib/site-origin";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = await getSiteOrigin();
  const paths = ["", "/fleet", "/services", "/contact", ...services.map((service) => `/${service.slug}`)];

  return paths.map((path) => ({
    url: new URL(path || "/", base).toString(),
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8
  }));
}
