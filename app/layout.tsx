import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ltslv.com"),
  title: {
    default: "Luxurious Transportation Services | Las Vegas Party Bus",
    template: "%s | Luxurious Transportation Services"
  },
  description:
    "Luxury party bus and group transportation for Las Vegas celebrations, events, conventions, and nights out.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Luxurious Transportation Services | Las Vegas Party Bus",
    description: "Luxury group transportation for the nights that matter in Las Vegas.",
    url: "https://ltslv.com",
    siteName: "Luxurious Transportation Services",
    type: "website",
    images: [{ url: "/generated/cinematic-sprinter-hero-black-gold.png", width: 1672, height: 941, alt: "Luxury party bus on the Las Vegas Strip" }]
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png"
  }
};

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
