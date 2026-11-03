import assert from "node:assert/strict";
import test from "node:test";
import {
  SMS_CONSENT_TEXT,
  SMS_CONSENT_VERSION,
  TEXT_LINE,
  buildContactRecord,
  formatContactEmail,
  normalizeUsPhone,
  validateContactSubmission
} from "../lib/contact.ts";

const base = { name: "Pat Owner", business: "Owner Roofing", email: "Pat@Example.com", message: "", sourcePath: "/contact" };

test("normalizes US mobile numbers to E.164 and rejects everything else", () => {
  assert.equal(normalizeUsPhone("(856) 804-1844"), "+18568041844");
  assert.equal(normalizeUsPhone("1-856-804-1844"), "+18568041844");
  assert.equal(normalizeUsPhone("856.804.1844"), TEXT_LINE.e164);
  assert.equal(normalizeUsPhone("804-1844"), null);
  assert.equal(normalizeUsPhone("+44 20 7946 0958"), null);
  assert.equal(normalizeUsPhone("(056) 804-1844"), null);
});

test("a submission without SMS consent is valid without a phone and records no consent", () => {
  const result = validateContactSubmission({ ...base, phone: "", smsConsent: false });
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.value.email, "pat@example.com");
  assert.equal(result.value.phone, null);

  const record = buildContactRecord(result.value, { id: "x", submittedAt: "t", ipAddress: null, userAgent: null });
  assert.deepEqual(record.consent, { sms: false, version: null, textShown: null });
  assert.match(formatContactEmail(record).text, /do not text this number/);
});

test("giving a phone number alone never counts as text consent", () => {
  const result = validateContactSubmission({ ...base, phone: "856-804-1844", smsConsent: false });
  assert.equal(result.ok, true);
  if (!result.ok) return;
  const record = buildContactRecord(result.value, { id: "x", submittedAt: "t", ipAddress: null, userAgent: null });
  assert.equal(record.phone, "+18568041844");
  assert.equal(record.consent.sms, false);
});

test("opting in requires a valid mobile number", () => {
  const missing = validateContactSubmission({ ...base, phone: "", smsConsent: true });
  assert.equal(missing.ok, false);
  if (!missing.ok) assert.ok(missing.errors.phone);

  const invalid = validateContactSubmission({ ...base, phone: "12345", smsConsent: true });
  assert.equal(invalid.ok, false);
  if (!invalid.ok) assert.ok(invalid.errors.phone);
});

test("consent must be an explicit boolean, never a truthy string", () => {
  const result = validateContactSubmission({ ...base, phone: "8568041844", smsConsent: "yes" });
  assert.equal(result.ok, false);
  if (!result.ok) assert.ok(result.errors.smsConsent);
});

test("an opt-in records the exact consent text and version that were shown", () => {
  const result = validateContactSubmission({ ...base, phone: "(856) 804-1844", smsConsent: true });
  assert.equal(result.ok, true);
  if (!result.ok) return;
  const record = buildContactRecord(result.value, {
    id: "abc",
    submittedAt: "2026-11-03T15:00:00.000Z",
    ipAddress: "203.0.113.7",
    userAgent: "test"
  });
  assert.deepEqual(record.consent, { sms: true, version: SMS_CONSENT_VERSION, textShown: SMS_CONSENT_TEXT });

  const email = formatContactEmail(record).text;
  assert.ok(email.includes(SMS_CONSENT_TEXT));
  assert.ok(email.includes("Opted in to texts: YES"));
  assert.ok(email.includes("2026-11-03T15:00:00.000Z"));
});

test("required fields are enforced and the honeypot flags bots", () => {
  const empty = validateContactSubmission({ smsConsent: false });
  assert.equal(empty.ok, false);
  if (!empty.ok) {
    assert.ok(empty.errors.name);
    assert.ok(empty.errors.email);
  }

  const bot = validateContactSubmission({ ...base, phone: "", smsConsent: false, website: "http://spam.example" });
  assert.equal(bot.ok, true);
  if (bot.ok) assert.equal(bot.isSpam, true);
});

test("the consent disclosure carries the disclosures carriers require", () => {
  for (const phrase of ["Msg frequency varies", "Msg & data rates may apply", "STOP", "HELP", "not required"]) {
    assert.ok(SMS_CONSENT_TEXT.includes(phrase), phrase);
  }
});
