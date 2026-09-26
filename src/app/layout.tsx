import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NEXORA — Engineered Beyond Expectations",
    template: "%s · NEXORA",
  },
  description:
    "Premium technology products engineered for the future. Smartphones, audio, wearables, and intelligent systems from NEXORA.",
  icons: {
    icon: [
      { url: "/brand/nexora-logo.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/brand/nexora-logo.png" }],
    shortcut: ["/brand/nexora-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/brand/nexora-logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/brand/nexora-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/brand/nexora-logo.png" />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-silver">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
