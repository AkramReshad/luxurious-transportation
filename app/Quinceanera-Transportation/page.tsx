import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/service-detail-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Quinceañera Transportation in Las Vegas | LTSLV", description: "Make the entrance part of the story with elegant, dependable Quinceañera transportation in Las Vegas." };
export default function QuinceaneraPage() { return <SiteShell><ServiceDetailPage slug="quinceanera-transportation" /></SiteShell>; }
