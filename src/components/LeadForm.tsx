"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { pushDataLayerEvent } from "@/lib/analytics";

type SubmitState = "idle" | "submitting" | "error";

export default function LeadForm() {
  const router = useRouter();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/signal-scan", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { message?: string }
          | null;
        throw new Error(payload?.message ?? "Unable to submit request");
      }

      form.reset();
      pushDataLayerEvent("signal_scan_submit", {
        form_name: "signal_scan",
        form_location: "contact",
      });
      sessionStorage.setItem("signalScanSubmitted", "1");
      router.push("/thank-you");
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>Business website</span>
        <input
          name="website"
          type="url"
          autoComplete="url"
          placeholder="https://"
        />
      </label>
      <label>
        <span>Business type</span>
        <select name="businessType" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Dental practice</option>
          <option>MedSpa or aesthetics</option>
          <option>Health and wellness</option>
          <option>Local service business</option>
          <option>Professional services</option>
          <option>Other</option>
        </select>
      </label>
      <button type="submit" disabled={submitState === "submitting"}>
        {submitState === "submitting"
          ? "Sending..."
          : "Request My Signal Scan"}
      </button>
      {submitState === "error" && (
        <p className="form-status error">
          {errorMessage ??
            "Something went wrong. Please try again or contact ThroughPointMarketing.com."}
        </p>
      )}
    </form>
  );
}
