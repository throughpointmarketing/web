import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p className="site-footer-copyright">
        Copyright {year} ThroughPoint Marketing. All rights reserved.
      </p>
      <p className="site-footer-links">
        <Link href="/privacy-policy">Privacy Policy</Link>
      </p>
    </footer>
  );
}
