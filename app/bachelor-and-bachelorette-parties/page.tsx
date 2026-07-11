import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Bachelor & Bachelorette Party Transportation | LTSLV", description: "Keep your Las Vegas bachelor or bachelorette party together with luxury group transportation." };
export default function BachelorPage() { return <SiteShell><ServiceDetailPage slug="bachelor-and-bachelorette-parties" /></SiteShell>; }
