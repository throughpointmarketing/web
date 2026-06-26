import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://throughpointmarketing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ThroughPoint Marketing | AI Readiness for Local Businesses",
    template: "%s | ThroughPoint Marketing",
  },
  description:
    "ThroughPoint Marketing helps local businesses improve trust, authority, visibility, and customer experience signals so they can be found by AI and chosen by customers.",
  applicationName: "ThroughPoint Marketing",
  authors: [{ name: "ThroughPoint Marketing" }],
  creator: "ThroughPoint Marketing",
  publisher: "ThroughPoint Marketing",
  keywords: [
    "AI readiness",
    "AI search optimization",
    "generative engine optimization",
    "GEO marketing",
    "local business marketing",
    "digital trust signals",
    "Signal Scan",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ThroughPoint Marketing",
    title: "ThroughPoint Marketing | AI Readiness for Local Businesses",
    description:
      "Get found by AI and chosen by customers with a personalized Signal Scan and AI readiness roadmap.",
    images: [
      {
        url: "/ai-search-phone-v2.png",
        width: 577,
        height: 651,
        alt: "AI search on a phone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ThroughPoint Marketing | AI Readiness for Local Businesses",
    description:
      "Get found by AI and chosen by customers with a personalized Signal Scan and AI readiness roadmap.",
    images: ["/ai-search-phone-v2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
