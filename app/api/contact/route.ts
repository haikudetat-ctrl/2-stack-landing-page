import { NextResponse } from "next/server";
import {
  CONTACT_EMAIL,
  buildContactRecord,
  formatContactEmail,
  validateContactSubmission
} from "@/lib/contact";

export const runtime = "nodejs";

// Delivery: each submission is emailed to the team inbox through Resend's REST API.
// Required in Vercel: RESEND_API_KEY. Optional: CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.
// The from-address domain must be verified in Resend (2stacksystems.com is).
const defaultFrom = "2Stack Website <website@2stacksystems.com>";
const fallbackMessage = `We couldn't send that just now. Please email ${CONTACT_EMAIL} and we'll take it from there.`;

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const result = validateContactSubmission(raw);
  if (!result.ok) return NextResponse.json({ errors: result.errors }, { status: 422 });
  if (result.isSpam) return NextResponse.json({ ok: true }, { status: 201 });

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("contact form: RESEND_API_KEY is not set; submission not delivered");
    return NextResponse.json({ error: fallbackMessage }, { status: 503 });
  }

  const record = buildContactRecord(result.value, {
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    ipAddress: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null,
    userAgent: request.headers.get("user-agent")?.slice(0, 300) || null
  });
  const { subject, text } = formatContactEmail(record);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
        "idempotency-key": record.id
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL?.trim() || defaultFrom,
        to: [process.env.CONTACT_TO_EMAIL?.trim() || CONTACT_EMAIL],
        reply_to: record.email,
        subject,
        text
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000)
    });

    if (!response.ok) {
      console.error(`contact form: Resend rejected submission ${record.id} (${response.status})`);
      return NextResponse.json({ error: fallbackMessage }, { status: 502 });
    }
  } catch {
    console.error(`contact form: could not reach Resend for submission ${record.id}`);
    return NextResponse.json({ error: fallbackMessage }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id: record.id }, { status: 201 });
}
