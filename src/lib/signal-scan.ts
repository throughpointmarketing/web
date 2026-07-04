import { Resend } from "resend";

export const SIGNAL_SCAN_RECIPIENTS = [
  "vlad.tsigler@throughpointmarketing.com",
  "allison.engman@throughpointmarketing.com",
] as const;

export type SignalScanSubmission = {
  name: string;
  email: string;
  website: string;
  businessType: string;
};

export function parseSignalScanSubmission(
  body: unknown,
): SignalScanSubmission | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const record = body as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const website =
    typeof record.website === "string" ? record.website.trim() : "";
  const businessType =
    typeof record.businessType === "string" ? record.businessType.trim() : "";

  if (name.length < 2 || !email.includes("@")) {
    return null;
  }

  return { name, email, website, businessType };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatField(label: string, value: string): string {
  const displayValue = value.length > 0 ? escapeHtml(value) : "Not provided";
  return `<tr><td style="padding:8px 12px;font-weight:700;color:#071d3d;">${label}</td><td style="padding:8px 12px;color:#31415e;">${displayValue}</td></tr>`;
}

export function buildSignalScanEmailHtml(submission: SignalScanSubmission): string {
  return `
    <div style="font-family:Inter,Arial,sans-serif;line-height:1.5;color:#242424;">
      <h1 style="margin:0 0 16px;font-size:24px;color:#071d3d;">New Signal Scan request</h1>
      <p style="margin:0 0 20px;color:#31415e;">
        Someone requested a personalized Signal Scan on ThroughPointMarketing.com.
      </p>
      <table style="width:100%;border-collapse:collapse;background:#fbfaf8;border:1px solid #d8d7d3;">
        ${formatField("Name", submission.name)}
        ${formatField("Email", submission.email)}
        ${formatField("Business website", submission.website)}
        ${formatField("Business type", submission.businessType)}
      </table>
    </div>
  `.trim();
}

export async function sendSignalScanNotification(
  submission: SignalScanSubmission,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.SIGNAL_SCAN_FROM_EMAIL ??
    "ThroughPoint Marketing <onboarding@resend.dev>";

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const resend = new Resend(apiKey);
  const html = buildSignalScanEmailHtml(submission);

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [...SIGNAL_SCAN_RECIPIENTS],
    replyTo: submission.email,
    subject: `Signal Scan request from ${submission.name}`,
    html,
  });

  if (error) {
    console.error("Resend API error:", error);
    throw new Error(error.message);
  }

  if (!data?.id) {
    console.error("Resend API returned no email id:", { data, error });
    throw new Error("Email send failed without a delivery id.");
  }

  console.info("Signal Scan email sent:", data.id);
}
