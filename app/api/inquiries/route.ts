import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-data";

const requiredFields = ["name", "email", "phone", "eventType", "date", "passengers", "pickup"] as const;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Please send the form again with valid details." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ message: "Thanks for reaching out." });
  }

  const missing = requiredFields.filter((field) => typeof body[field] !== "string" || !String(body[field]).trim());
  if (missing.length) return NextResponse.json({ message: "Please complete the required fields before sending your inquiry." }, { status: 400 });

  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ message: `The inquiry line is not configured yet. Please call ${siteConfig.phone} and we’ll help right away.` }, { status: 503 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(process.env.INQUIRY_WEBHOOK_SECRET ? { Authorization: `Bearer ${process.env.INQUIRY_WEBHOOK_SECRET}` } : {}) },
      body: JSON.stringify({ source: "ltslv.com", receivedAt: new Date().toISOString(), inquiry: body })
    });
    if (!response.ok) throw new Error("Webhook rejected inquiry");
    return NextResponse.json({ message: "Thanks — your inquiry is on its way to our team." });
  } catch {
    return NextResponse.json({ message: `We couldn’t send the inquiry right now. Please call ${siteConfig.phone} so we can help directly.` }, { status: 502 });
  }
}
