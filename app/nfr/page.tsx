import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "NFR Las Vegas Transportation | LTSLV", description: "Coordinate NFR transportation between the rodeo, hotels, dinners, and late-night stops in Las Vegas." };
export default function NfrPage() { return <SiteShell><ServiceDetailPage slug="nfr" /></SiteShell>; }
