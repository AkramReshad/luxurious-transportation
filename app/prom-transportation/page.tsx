import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Las Vegas Prom Transportation | LTSLV", description: "Give your prom group a polished, organized, and memorable transportation experience in Las Vegas." };
export default function PromPage() { return <SiteShell><ServiceDetailPage slug="prom-transportation" /></SiteShell>; }
