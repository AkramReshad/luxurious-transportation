import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Las Vegas Golf Course Transportation | LTSLV", description: "Comfortable Las Vegas golf course transportation for foursomes, tournaments, and corporate outings." };
export default function GolfPage() { return <SiteShell><ServiceDetailPage slug="golf-course" /></SiteShell>; }
