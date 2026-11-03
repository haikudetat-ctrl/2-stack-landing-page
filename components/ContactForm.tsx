"use client";

import { useState, type FormEvent } from "react";
import { SMS_CONSENT_TEXT, type ContactField } from "@/lib/contact";

type Errors = Partial<Record<ContactField | "form", string>>;

const inputClass =
  "mt-2 block w-full rounded-md border border-white/15 bg-[#0b1520] px-3 py-2.5 text-[15px] text-white placeholder:text-slate-500 focus:border-[#5bade3] focus:outline-none focus:ring-1 focus:ring-[#5bade3]";
const labelClass = "block text-sm font-medium text-slate-200";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      business: String(form.get("business") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      message: String(form.get("message") ?? ""),
      smsConsent: form.get("smsConsent") === "yes",
      website: String(form.get("website") ?? ""),
      sourcePath: window.location.pathname
    };

    if (payload.smsConsent && !payload.phone.trim()) {
      setErrors({ phone: "Add your mobile number, or uncheck the text message box." });
      return;
    }

    setStatus("sending");
    setErrors({});
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
      const body = (await response.json().catch(() => ({}))) as { errors?: Errors; error?: string };
      if (response.ok) {
        setStatus("sent");
        return;
      }
      setErrors(body.errors ?? { form: body.error ?? "Something went wrong. Please email team@2stackops.com." });
    } catch {
      setErrors({ form: "Something went wrong. Please email team@2stackops.com." });
    }
    setStatus("idle");
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-white/10 bg-[#101722] p-6 sm:p-8" role="status">
        <h2 className="text-xl font-semibold text-white">Got it, thanks.</h2>
        <p className="mt-3 leading-7 text-slate-300">
          Chris or Joe will get back to you, usually within a business day. If you checked the text box, the first
          text will come from (856) 804-1844.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-lg border border-white/10 bg-[#101722] p-6 sm:p-8"
      aria-describedby={errors.form ? "contact-form-error" : undefined}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" required className={inputClass} />
        </Field>
        <Field id="business" label="Business name" hint="Optional" error={errors.business}>
          <input id="business" name="business" type="text" autoComplete="organization" className={inputClass} />
        </Field>
      </div>

      <Field id="email" label="Email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
      </Field>

      <Field
        id="phone"
        label="Mobile number"
        hint="Optional. We'll only text you if you check the box below."
        error={errors.phone}
      >
        <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={inputClass} />
      </Field>

      <Field id="message" label="What's going on?" hint="Optional" error={errors.message}>
        <textarea id="message" name="message" rows={4} className={inputClass} />
      </Field>

      {/* Honeypot for bots; hidden from people and screen readers. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="rounded-md border border-white/10 bg-[#0b1520] p-4">
        <div className="flex items-start gap-3">
          <input
            id="smsConsent"
            name="smsConsent"
            type="checkbox"
            value="yes"
            defaultChecked={false}
            className="mt-1 h-4 w-4 shrink-0 rounded border-white/30 bg-transparent accent-[#5bade3]"
            aria-describedby="smsConsent-links"
          />
          <label htmlFor="smsConsent" className="text-sm leading-6 text-slate-300">
            {SMS_CONSENT_TEXT}
          </label>
        </div>
        <p id="smsConsent-links" className="mt-2 pl-7 text-sm text-slate-400">
          See our{" "}
          <a href="/privacy" className="underline underline-offset-4 hover:text-white">Privacy Policy</a> and{" "}
          <a href="/terms" className="underline underline-offset-4 hover:text-white">Terms and Conditions</a>.
        </p>
        {errors.smsConsent ? <p className="mt-2 pl-7 text-sm text-[#f59e8b]">{errors.smsConsent}</p> : null}
      </div>

      {errors.form ? (
        <p id="contact-form-error" className="text-sm text-[#f59e8b]" role="alert">
          {errors.form}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-md bg-[#5bade3] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#07111f] transition hover:bg-[#7cc0ec] disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending" : "Send"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  children
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {hint ? <span className="ml-2 font-normal text-slate-500">{hint}</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-sm text-[#f59e8b]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
