import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxurious Transportation | Las Vegas Party Bus Service",
  description:
    "Black and gold cinematic website for a Las Vegas Strip party bus service.",
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
