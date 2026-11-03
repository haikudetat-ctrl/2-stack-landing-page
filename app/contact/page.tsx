import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CONTACT_EMAIL, TEXT_IN_DISCLOSURE, TEXT_LINE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact 2Stack by form, email, or text. Tell us what is slowing your business down and Chris or Joe will get back to you.",
  alternates: { canonical: "https://2-stack.com/contact" }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#07111f]">
      <Navbar />
      <main className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 text-slate-200 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <section>
          <p className="text-sm uppercase tracking-[0.16em] text-slate-400">Contact 2Stack</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Tell us what&apos;s eating your week.</h1>
          <p className="mt-5 leading-7 text-slate-300">
            We&apos;re two operators who build systems for owner-run restaurants, contractors and home service
            businesses. Send a note and Chris or Joe will get back to you. If now isn&apos;t the time, that&apos;s fine
            too.
          </p>

          <dl className="mt-10 space-y-8">
            <div>
              <dt className="text-sm uppercase tracking-[0.16em] text-slate-400">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline underline-offset-4 hover:text-[#5bade3]">
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-[0.16em] text-slate-400">Call or text</dt>
              <dd className="mt-2">
                <a href={`sms:${TEXT_LINE.e164}`} className="text-white underline underline-offset-4 hover:text-[#5bade3]">
                  {TEXT_LINE.display}
                </a>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">{TEXT_IN_DISCLOSURE}</p>
                <p className="mt-2 text-sm text-slate-400">
                  <a href="/terms#text-messaging" className="underline underline-offset-4 hover:text-white">
                    Text messaging terms
                  </a>{" "}
                  ·{" "}
                  <a href="/privacy" className="underline underline-offset-4 hover:text-white">
                    Privacy Policy
                  </a>
                </p>
              </dd>
            </div>
          </dl>
        </section>

        <section aria-label="Contact form">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
