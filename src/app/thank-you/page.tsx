"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const submitted =
      sessionStorage.getItem("signalScanSubmitted") === "1";

    if (!submitted) {
      router.replace("/#signal-form");
      return;
    }

    sessionStorage.removeItem("signalScanSubmitted");
    setIsAllowed(true);
  }, [router]);

  if (!isAllowed) {
    return null;
  }

  return (
    <main className="thank-you-page">
      <div className="thank-you-card">
        <Image
          src="/throughpoint-logo-transparent.png"
          alt="ThroughPoint Marketing"
          width={170}
          height={78}
          className="logo"
          priority
        />
        <div className="thank-you-icon" aria-hidden="true">
          ✓
        </div>
        <h1>Thank you for your request</h1>
        <div className="accent" />
        <p>
          Your Signal Scan request has been received. Our team will review your
          business signals and follow up with clear next steps.
        </p>
        <ul className="proof-list">
          <li>Request received</li>
          <li>Personalized review</li>
          <li>Follow-up with next steps</li>
        </ul>
        <Link href="/" className="thank-you-cta">
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
