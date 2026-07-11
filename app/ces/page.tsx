import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "CES Las Vegas Transportation | LTSLV", description: "Professional CES transportation for exhibitors, teams, clients, and conference events in Las Vegas." };
export default function CesPage() { return <SiteShell><ServiceDetailPage slug="ces" /></SiteShell>; }
