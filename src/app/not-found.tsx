import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="thank-you-page">
      <div className="thank-you-card">
        <h1>Page not found</h1>
        <div className="accent" />
        <p>
          The page you requested is not available. Visit the homepage to learn
          about AI readiness and request your Signal Scan.
        </p>
        <Link href="/" className="thank-you-cta">
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
