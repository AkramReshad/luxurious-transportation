import type { MetadataRoute } from "next";
import { services, siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/fleet/", "/services/", "/contact/", "/pricing/"];
  return [...staticRoutes.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.7 })), ...services.map((service) => ({ url: `${siteConfig.url}${service.path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 }))];
}
