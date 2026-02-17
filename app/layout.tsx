import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "NailSalonTech — Best Nail Salon Software Reviews 2026",
    template: "%s | NailSalonTech",
  },
  description:
    "Independent reviews and comparisons of the best nail salon booking and management software for 2026. Compare GlossGenius, Vagaro, Fresha, Square Appointments, Booksy, and Acuity Scheduling.",
  keywords: [
    "nail salon software",
    "nail salon booking software",
    "best nail salon software 2026",
    "nail salon management software",
    "salon scheduling software",
    "GlossGenius review",
    "Vagaro review",
    "Fresha review",
  ],
  authors: [{ name: "NailSalonTech Editorial Team" }],
  creator: "NailSalonTech",
  publisher: "NailSalonTech",
  metadataBase: new URL("https://nailsalontech.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nailsalontech.com",
    siteName: "NailSalonTech",
    title: "NailSalonTech — Best Nail Salon Software Reviews 2026",
    description:
      "Independent reviews of the best nail salon booking software. Real pricing, honest pros & cons, expert recommendations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NailSalonTech — Best Nail Salon Software Reviews 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NailSalonTech — Best Nail Salon Software Reviews 2026",
    description:
      "Independent reviews of the best nail salon booking software.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://nailsalontech.com",
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nailsalontech.com/#organization",
      name: "NailSalonTech",
      url: "https://nailsalontech.com",
      description:
        "NailSalonTech provides independent, in-depth reviews and comparisons of nail salon booking and management software to help nail technicians and salon owners make informed decisions.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://nailsalontech.com/#website",
      url: "https://nailsalontech.com",
      name: "NailSalonTech",
      publisher: { "@id": "https://nailsalontech.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://nailsalontech.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
