import { NextResponse } from "next/server";
import { enquiryEmailSubject, enquirySchema, formatEnquiryText } from "@/lib/enquiry";
import { sendEmailIfConfigured } from "@/lib/mailer";
import { contactInfo } from "@/content/contact";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const enquiry = parsed.data;
  const subject = enquiryEmailSubject(enquiry);
  const text = formatEnquiryText(enquiry);

  const to = process.env.ENQUIRY_TO_EMAIL ?? contactInfo.email;
  const emailResult = await sendEmailIfConfigured({ to, subject, text });

  return NextResponse.json({ ok: true, emailSent: emailResult.sent });
}

