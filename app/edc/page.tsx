import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "EDC Las Vegas Transportation | LTSLV", description: "Plan EDC Las Vegas transportation with a dedicated party bus, clear pickup windows, and a reliable return plan." };
export default function EdcPage() { return <SiteShell><ServiceDetailPage slug="edc" /></SiteShell>; }
