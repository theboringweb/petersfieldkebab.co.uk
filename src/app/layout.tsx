import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-anton",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://petersfieldkebab.co.uk"),
  title: "Petersfield's Kebab House — Charcoal Grill on Chapel Street",
  description:
    "Charcoal-grilled kebabs, mixed grills and wraps on Chapel Street, Petersfield. Open late, every day. Order online or call 01730 263348.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Petersfield's Kebab House — Charcoal Grill on Chapel Street",
    description:
      "Charcoal-grilled kebabs, mixed grills and wraps on Chapel Street, Petersfield. Open late, every day.",
    locale: "en_GB",
    type: "website",
    url: "https://petersfieldkebab.co.uk",
  },
};

export const viewport: Viewport = {
  themeColor: "#2B2D33",
  colorScheme: "light",
};

const RESTAURANT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Petersfield's Kebab House",
  servesCuisine: ["Turkish", "Kebab", "Mediterranean"],
  url: "https://petersfieldkebab.co.uk",
  telephone: "+44 1730 263348",
  priceRange: "£",
  address: {
    "@type": "PostalAddress",
    streetAddress: "26 Chapel Street",
    addressLocality: "Petersfield",
    addressRegion: "Hampshire",
    postalCode: "GU32 3DT",
    addressCountry: "GB",
  },
  openingHours: ["Mo-Th 11:00-23:00", "Fr-Sa 11:00-00:00", "Su 12:00-22:00"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "535",
    bestRating: "5",
    worstRating: "1",
  },
  dateModified: "2026-05-21",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${anton.variable} ${inter.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD payload
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(RESTAURANT_JSON_LD),
          }}
        />
      </body>
    </html>
  );
}
