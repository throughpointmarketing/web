import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const email = typeof body.email === "string" ? body.email : "";
  const name = typeof body.name === "string" ? body.name : "";

  if (!email.includes("@") || name.trim().length < 2) {
    return NextResponse.json(
      { message: "Name and valid email are required." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message: "Signal Scan request received.",
  });
}
