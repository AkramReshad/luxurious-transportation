import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Las Vegas Nightclub Crawl Transportation | LTSLV", description: "Keep your Las Vegas nightclub crawl connected with a dedicated luxury party bus and a planned route." };
export default function NightclubCrawlPage() { return <SiteShell><ServiceDetailPage slug="nightclub-crawl" /></SiteShell>; }
