import { NextResponse } from "next/server";
import {
  parseSignalScanSubmission,
  sendSignalScanNotification,
} from "@/lib/signal-scan";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const submission = parseSignalScanSubmission(body);

  if (!submission) {
    return NextResponse.json(
      { message: "Name and valid email are required." },
      { status: 400 },
    );
  }

  try {
    await sendSignalScanNotification(submission);
  } catch (error) {
    console.error("Signal Scan email failed:", error);
    return NextResponse.json(
      { message: "Unable to send your request right now. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message: "Signal Scan request received.",
  });
}
