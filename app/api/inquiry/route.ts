import { NextResponse } from "next/server";

const required = ["name", "email", "phone", "eventType", "date", "passengers", "pickup", "destination"];
const limits: Record<string, number> = {
  name: 100,
  email: 254,
  phone: 30,
  eventType: 100,
  date: 10,
  passengers: 3,
  pickup: 200,
  destination: 300,
  message: 2000
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;

  if (
    !body ||
    body.website ||
    required.some((key) => typeof body[key] !== "string" || !String(body[key]).trim()) ||
    Object.entries(limits).some(([key, limit]) => typeof body[key] === "string" && body[key].length > limit) ||
    typeof body.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email) ||
    typeof body.passengers !== "string" || !/^(?:[1-9]|[1-9]\d|100)$/.test(body.passengers) ||
    typeof body.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(body.date)
  ) {
    return NextResponse.json({ error: "Invalid inquiry" }, { status: 400 });
  }

  const endpoint = process.env.INQUIRY_WEBHOOK_URL;

  if (!endpoint) {
    return NextResponse.json(
      { error: "Inquiry delivery is not configured. Please call 702-470-9700." },
      { status: 503 }
    );
  }

  const headers: HeadersInit = { "Content-Type": "application/json" };
  if (process.env.INQUIRY_WEBHOOK_TOKEN) {
    headers.Authorization = `Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}`;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
    cache: "no-store"
  }).catch(() => null);

  if (!response?.ok) {
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ accepted: true });
}
