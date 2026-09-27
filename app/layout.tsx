import type { Metadata } from "next";
import { getSiteOrigin } from "@/lib/site-origin";
import "./globals.css";
import "./interior.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: await getSiteOrigin(),
    title: { default: "Luxurious Transportation | Las Vegas", template: "%s | Luxurious Transportation" },
    description:
      "Private Las Vegas group transportation for celebrations, events, nightlife, and convention plans.",
    alternates: { canonical: "/" },
    openGraph: { type: "website", locale: "en_US", siteName: "Luxurious Transportation Services", images: ["/generated/cinematic-sprinter-hero-black-gold.png"] },
    icons: {
      icon: "/favicon.png",
      apple: "/favicon.png"
    }
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
