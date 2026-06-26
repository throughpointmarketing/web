"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");

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
        throw new Error("Unable to submit request");
      }

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
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
      {submitState === "success" && (
        <p className="form-status success">
          Thanks. We&apos;ll review your signal profile and follow up with clear
          next steps.
        </p>
      )}
      {submitState === "error" && (
        <p className="form-status error">
          Something went wrong. Please try again or contact
          ThroughPointMarketing.com.
        </p>
      )}
    </form>
  );
}
