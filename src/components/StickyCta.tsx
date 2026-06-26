"use client";

import { useEffect, useState } from "react";

export default function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <a
      href="#signal-form"
      className={`sticky-cta ${isVisible ? "is-visible" : ""}`}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      Get Your Signal Scan
    </a>
  );
}
