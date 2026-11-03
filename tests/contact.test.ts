import assert from "node:assert/strict";
import test from "node:test";
import {
  SMS_CONSENT_VERSION,
  SMS_INFO_CONSENT_TEXT,
  SMS_MARKETING_CONSENT_TEXT,
  TEXT_IN_DISCLOSURE,
  TEXT_LINE,
  buildContactRecord,
  formatContactEmail,
  normalizeUsPhone,
  validateContactSubmission
} from "../lib/contact.ts";

const base = { name: "Pat Owner", business: "Owner Roofing", email: "Pat@Example.com", message: "", sourcePath: "/contact" };
const meta = { id: "x", submittedAt: "t", ipAddress: null, userAgent: null };

function valid(input: Record<string, unknown>) {
  const result = validateContactSubmission(input);
  assert.equal(result.ok, true, JSON.stringify(result));
  if (!result.ok) throw new Error("expected a valid submission");
  return result;
}

test("normalizes US mobile numbers to E.164 and rejects everything else", () => {
  assert.equal(normalizeUsPhone("(856) 804-1844"), "+18568041844");
  assert.equal(normalizeUsPhone("1-856-804-1844"), "+18568041844");
  assert.equal(normalizeUsPhone("856.804.1844"), TEXT_LINE.e164);
  assert.equal(normalizeUsPhone("804-1844"), null);
  assert.equal(normalizeUsPhone("+44 20 7946 0958"), null);
  assert.equal(normalizeUsPhone("(056) 804-1844"), null);
});

test("no consent: valid without a phone, and nothing is recorded as consent", () => {
  const { value } = valid({ ...base, phone: "", smsInformational: false, smsMarketing: false });
  assert.equal(value.email, "pat@example.com");
  assert.equal(value.phone, null);

  const record = buildContactRecord(value, meta);
  assert.equal(record.consent.informational.given, false);
  assert.equal(record.consent.marketing.given, false);
  assert.match(formatContactEmail(record).text, /Do not text this number/);
});

test("giving a phone number alone never counts as text consent", () => {
  const record = buildContactRecord(
    valid({ ...base, phone: "856-804-1844", smsInformational: false, smsMarketing: false }).value,
    meta
  );
  assert.equal(record.phone, "+18568041844");
  assert.equal(record.consent.informational.given, false);
  assert.equal(record.consent.marketing.given, false);
});

test("informational consent never implies marketing consent", () => {
  const record = buildContactRecord(
    valid({ ...base, phone: "8568041844", smsInformational: true, smsMarketing: false }).value,
    meta
  );
  assert.deepEqual(record.consent.informational, {
    given: true,
    version: SMS_CONSENT_VERSION,
    textShown: SMS_INFO_CONSENT_TEXT
  });
  assert.deepEqual(record.consent.marketing, { given: false, version: null, textShown: null });

  const email = formatContactEmail(record).text;
  assert.ok(email.includes("Service and inquiry texts: YES"));
  assert.ok(email.includes("Marketing texts: NO"));
  assert.ok(!email.includes(SMS_MARKETING_CONSENT_TEXT));
});

test("marketing consent can be given on its own and records its own text", () => {
  const record = buildContactRecord(
    valid({ ...base, phone: "8568041844", smsInformational: false, smsMarketing: true }).value,
    meta
  );
  assert.equal(record.consent.informational.given, false);
  assert.deepEqual(record.consent.marketing, {
    given: true,
    version: SMS_CONSENT_VERSION,
    textShown: SMS_MARKETING_CONSENT_TEXT
  });
});

test("both consents are recorded independently, with timestamp kept for evidence", () => {
  const record = buildContactRecord(
    valid({ ...base, phone: "(856) 804-1844", smsInformational: true, smsMarketing: true }).value,
    { id: "abc", submittedAt: "2026-11-03T15:00:00.000Z", ipAddress: "203.0.113.7", userAgent: "test" }
  );
  const email = formatContactEmail(record).text;
  assert.ok(email.includes(SMS_INFO_CONSENT_TEXT));
  assert.ok(email.includes(SMS_MARKETING_CONSENT_TEXT));
  assert.ok(email.includes("2026-11-03T15:00:00.000Z"));
});

test("opting in to either kind of text requires a valid mobile number", () => {
  for (const consent of [
    { smsInformational: true, smsMarketing: false },
    { smsInformational: false, smsMarketing: true }
  ]) {
    const missing = validateContactSubmission({ ...base, phone: "", ...consent });
    assert.equal(missing.ok, false);
    if (!missing.ok) assert.ok(missing.errors.phone);

    const invalid = validateContactSubmission({ ...base, phone: "12345", ...consent });
    assert.equal(invalid.ok, false);
    if (!invalid.ok) assert.ok(invalid.errors.phone);
  }
});

test("each consent must be an explicit boolean, never a truthy string or missing", () => {
  const stringy = validateContactSubmission({ ...base, phone: "8568041844", smsInformational: "yes", smsMarketing: false });
  assert.equal(stringy.ok, false);
  if (!stringy.ok) assert.ok(stringy.errors.smsInformational);

  const missing = validateContactSubmission({ ...base, phone: "8568041844", smsInformational: true });
  assert.equal(missing.ok, false);
  if (!missing.ok) assert.ok(missing.errors.smsMarketing);
});

test("required fields are enforced and the honeypot flags bots", () => {
  const empty = validateContactSubmission({ smsInformational: false, smsMarketing: false });
  assert.equal(empty.ok, false);
  if (!empty.ok) {
    assert.ok(empty.errors.name);
    assert.ok(empty.errors.email);
  }

  const bot = valid({ ...base, phone: "", smsInformational: false, smsMarketing: false, website: "http://spam.example" });
  assert.equal(bot.isSpam, true);
});

test("each disclosure carries what carriers require, and they stay distinct", () => {
  for (const consentText of [SMS_INFO_CONSENT_TEXT, SMS_MARKETING_CONSENT_TEXT]) {
    for (const phrase of ["Msg frequency varies", "Msg & data rates may apply", "STOP", "HELP"]) {
      assert.ok(consentText.includes(phrase), phrase);
    }
  }
  assert.ok(SMS_INFO_CONSENT_TEXT.includes("not marketing"));
  assert.ok(SMS_MARKETING_CONSENT_TEXT.includes("marketing texts"));
  assert.ok(SMS_MARKETING_CONSENT_TEXT.includes("not a condition of any purchase"));
  assert.ok(SMS_MARKETING_CONSENT_TEXT.includes("automated technology"));
  assert.notEqual(SMS_INFO_CONSENT_TEXT, SMS_MARKETING_CONSENT_TEXT);
  assert.ok(TEXT_IN_DISCLOSURE.includes("will not send you marketing texts"));
});
