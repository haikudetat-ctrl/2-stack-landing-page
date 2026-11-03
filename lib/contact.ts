// Single source of truth for the contact form and 2Stack's text messaging disclosures.
// The page renders these strings and the API records the same strings with each submission,
// so the consent a visitor saw and the consent we keep as evidence can never drift apart.
// If you change SMS_CONSENT_TEXT, bump SMS_CONSENT_VERSION.

export const CONTACT_EMAIL = "team@2stackops.com";

export const TEXT_LINE = {
  display: "(856) 804-1844",
  e164: "+18568041844"
} as const;

export const SMS_CONSENT_VERSION = "2026-11-03";

export const SMS_CONSENT_TEXT =
  "Yes, text me about my inquiry, scheduled calls, and service updates from 2Stack at the number above. " +
  "Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help. " +
  "Consent is not required to submit this form.";

export const TEXT_IN_DISCLOSURE =
  `By texting 2Stack at ${TEXT_LINE.display}, you agree to receive replies from 2Stack about your message. ` +
  "Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help.";

export type ContactSubmission = {
  name: string;
  business: string;
  email: string;
  phone: string | null;
  message: string;
  smsConsent: boolean;
  sourcePath: string;
};

export type ContactField = "name" | "business" | "email" | "phone" | "message" | "smsConsent";

export type ContactValidation =
  | { ok: true; value: ContactSubmission; isSpam: boolean }
  | { ok: false; errors: Partial<Record<ContactField | "form", string>> };

const limits = { name: 120, business: 160, email: 254, message: 2000 } as const;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Normalizes a US number to E.164 (+1XXXXXXXXXX). Returns null for anything else. */
export function normalizeUsPhone(input: string): string | null {
  const digits = input.replace(/\D/g, "");
  if (digits.length === 10 && /^[2-9]/.test(digits)) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1") && /^[2-9]/.test(digits.slice(1))) return `+${digits}`;
  return null;
}

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactSubmission(raw: unknown): ContactValidation {
  if (!raw || typeof raw !== "object") return { ok: false, errors: { form: "Invalid submission." } };
  const input = raw as Record<string, unknown>;
  const errors: Partial<Record<ContactField | "form", string>> = {};

  const name = text(input.name);
  const business = text(input.business);
  const email = text(input.email).toLowerCase();
  const rawPhone = text(input.phone);
  const message = text(input.message);
  const sourcePath = text(input.sourcePath) || "/contact";

  if (!name) errors.name = "Please add your name.";
  else if (name.length > limits.name) errors.name = "That name is too long.";

  if (business.length > limits.business) errors.business = "That business name is too long.";

  if (!email) errors.email = "Please add your email.";
  else if (email.length > limits.email || !emailPattern.test(email)) errors.email = "That email doesn't look right.";

  if (message.length > limits.message) errors.message = "Please keep this under 2,000 characters.";

  // Consent must be an explicit boolean from the unchecked-by-default checkbox, never inferred.
  if (typeof input.smsConsent !== "boolean") errors.smsConsent = "Invalid text message preference.";
  const smsConsent = input.smsConsent === true;

  let phone: string | null = null;
  if (rawPhone) {
    phone = normalizeUsPhone(rawPhone);
    if (!phone) errors.phone = "Please use a 10-digit US mobile number.";
  } else if (smsConsent) {
    errors.phone = "Add your mobile number, or uncheck the text message box.";
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  // Honeypot: a hidden field real visitors never see. Bots that fill it get a quiet success.
  const isSpam = text(input.website).length > 0;

  return {
    ok: true,
    isSpam,
    value: { name, business, email, phone, message, smsConsent, sourcePath: sourcePath.slice(0, 200) }
  };
}

export type ContactRecord = ContactSubmission & {
  id: string;
  submittedAt: string;
  ipAddress: string | null;
  userAgent: string | null;
  consent: {
    sms: boolean;
    version: string | null;
    textShown: string | null;
  };
};

export function buildContactRecord(
  submission: ContactSubmission,
  meta: { id: string; submittedAt: string; ipAddress: string | null; userAgent: string | null }
): ContactRecord {
  return {
    ...submission,
    ...meta,
    consent: {
      sms: submission.smsConsent,
      version: submission.smsConsent ? SMS_CONSENT_VERSION : null,
      textShown: submission.smsConsent ? SMS_CONSENT_TEXT : null
    }
  };
}

export function formatContactEmail(record: ContactRecord) {
  const subject = `New 2Stack inquiry: ${record.name}${record.business ? ` (${record.business})` : ""}`;
  const lines = [
    `Name: ${record.name}`,
    `Business: ${record.business || "Not provided"}`,
    `Email: ${record.email}`,
    `Mobile: ${record.phone ?? "Not provided"}`,
    "",
    "Message:",
    record.message || "(none)",
    "",
    "Text message consent",
    `Opted in to texts: ${record.consent.sms ? "YES" : "NO, do not text this number"}`,
    ...(record.consent.sms
      ? [`Consent version: ${record.consent.version}`, `Consent text shown: ${record.consent.textShown}`]
      : []),
    "",
    "Submission record (keep for consent evidence)",
    `Submission ID: ${record.id}`,
    `Submitted at (UTC): ${record.submittedAt}`,
    `Source page: ${record.sourcePath}`,
    `IP address: ${record.ipAddress ?? "unknown"}`,
    `User agent: ${record.userAgent ?? "unknown"}`
  ];
  return { subject, text: lines.join("\n") };
}
