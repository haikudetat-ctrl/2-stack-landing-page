import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { CONTACT_EMAIL, TEXT_LINE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for using 2Stack's websites and services, including the terms of 2Stack's text messaging programs.",
  alternates: { canonical: "https://2-stack.com/terms" }
};

type Section = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

const sections: Section[] = [
  {
    id: "agreement",
    title: "1. Agreement to these terms",
    paragraphs: [
      "These Terms and Conditions (\"Terms\") govern your use of 2-stack.com and its branded sites, including Clopen, LOAM and RAKE (together, the \"Site\"), and your participation in any text messaging program operated by 2Stack (\"2Stack,\" \"we,\" \"us,\" or \"our\"). By using the Site or joining any of our text messaging programs, you agree to these Terms. If you do not agree, please do not use the Site.",
      "If you are using the Site on behalf of a business, you confirm that you are authorized to accept these Terms for that business."
    ]
  },
  {
    id: "services",
    title: "2. Our services and client agreements",
    paragraphs: [
      "2Stack designs, builds and operates business systems for owner-operated businesses, including lead response, scheduling, operations and back-office tools. The Site describes those services and lets you contact us, book a call or complete an assessment.",
      "Nothing on the Site is an offer to provide services on specific terms. Proposals, pricing and estimates are not binding until both parties sign a written agreement. Work we perform for a client is governed by that client's signed agreement, and if that agreement conflicts with these Terms, the signed agreement controls for that work."
    ]
  },
  {
    id: "use",
    title: "3. Using the Site",
    paragraphs: ["You may use the Site for lawful purposes related to learning about or working with 2Stack. You agree not to:"],
    list: [
      "use the Site in a way that violates any law or the rights of others;",
      "submit information that is false, misleading, or that belongs to someone else without their permission;",
      "interfere with, disrupt, overload or attempt to gain unauthorized access to the Site or its systems;",
      "upload malicious code or use the Site to send spam or unsolicited messages;",
      "copy, resell or republish Site content except as these Terms allow."
    ]
  },
  {
    id: "your-information",
    title: "4. Information you provide",
    paragraphs: [
      "When you submit a form, book a call or text us, you agree to give accurate information. If you provide a mobile number, you confirm that it is your number or that you are authorized to use it and to agree to messages sent to it. Our Privacy Policy explains how we collect, use and protect your information and is part of these Terms."
    ]
  },
  {
    id: "text-messaging",
    title: "5. Text messaging terms",
    paragraphs: [
      "2Stack sends two kinds of text messages to prospective and current clients, and you choose each one separately. These terms apply whenever you receive text messages from 2Stack."
    ],
    list: [
      "Service and inquiry texts: messages about your inquiry, calls you schedule with us, client onboarding, and service updates for the systems we run for your business. These are not marketing messages.",
      "Marketing texts: occasional messages about 2Stack offers, events and product news. We send these only if you separately opt in to marketing texts, and they may be sent using automated technology.",
      `How you opt in: the contact form at 2-stack.com/contact has two separate, optional checkboxes, both unchecked by default: one for service and inquiry texts and one for marketing texts. You can check either, both or neither, and you can submit the form without checking any. Agreeing to one never counts as agreeing to the other. You can also text us first at ${TEXT_LINE.display}, which lets us reply about your message only; texting us does not opt you in to marketing texts.`,
      "Consent to receive texts, including marketing texts, is never a condition of purchasing anything from us.",
      "We do not send affiliate or third-party messages through either program.",
      "Message frequency varies based on your inquiry, the services you use and the programs you join.",
      "Message and data rates may apply, according to your mobile plan.",
      "To stop messages, reply STOP (or STOPALL, UNSUBSCRIBE, CANCEL, END or QUIT) at any time. Replying STOP stops all texts from 2Stack, both service and marketing. We will send one message confirming you have been unsubscribed and will not text you again unless you opt back in. To opt back in, reply START. To stop only marketing texts while keeping service texts, email or call us.",
      `For help, reply HELP or INFO, email ${CONTACT_EMAIL}, or call ${TEXT_LINE.display}.`,
      "Carriers are not liable for delayed or undelivered messages.",
      "We may send texts using automated technology. Messages are intended for US mobile numbers.",
      "Mobile numbers and text messaging consent are never sold, rented or shared with third parties or affiliates for their marketing purposes. See our Privacy Policy for details."
    ]
  },
  {
    id: "assessments",
    title: "6. Assessments and content",
    paragraphs: [
      "Assessments, scores, guides, examples and other content on the Site are general information to help you think about your operations. They are not legal, tax, accounting, financial or other professional advice, and they do not guarantee any particular result for your business. Make decisions based on your own judgment and, where appropriate, advice from qualified professionals."
    ]
  },
  {
    id: "ip",
    title: "7. Intellectual property",
    paragraphs: [
      "The Site and its content, including text, graphics, logos, product names (such as 2Stack, Clopen, LOAM and RAKE), video and software, are owned by 2Stack or its licensors and are protected by intellectual property laws. You may view and share Site pages for your own non-commercial evaluation of our services. Any other use requires our written permission."
    ]
  },
  {
    id: "third-parties",
    title: "8. Third-party services and links",
    paragraphs: [
      "The Site uses or links to services operated by others, such as scheduling, video hosting and analytics providers. Those services have their own terms and privacy policies, and we are not responsible for their content or practices."
    ]
  },
  {
    id: "disclaimers",
    title: "9. Disclaimers",
    paragraphs: [
      "The Site and its content are provided \"as is\" and \"as available.\" To the fullest extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose and non-infringement. We do not warrant that the Site will be uninterrupted, error-free or free of harmful components."
    ]
  },
  {
    id: "liability",
    title: "10. Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, 2Stack will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profits, revenue or data, arising from your use of the Site or our text messaging programs. Our total liability for any claim relating to the Site or these Terms will not exceed one hundred US dollars ($100). These limits do not apply to liability that cannot be limited by law, and they do not change the terms of any signed client agreement."
    ]
  },
  {
    id: "indemnity",
    title: "11. Your responsibility",
    paragraphs: [
      "You agree to be responsible for, and to reimburse 2Stack for reasonable losses caused by, your misuse of the Site or your violation of these Terms, to the extent permitted by law."
    ]
  },
  {
    id: "changes",
    title: "12. Changes to these terms",
    paragraphs: [
      "We may update these Terms from time to time and will revise the date at the top of this page when we do. Changes apply from the date they are posted. Updates never expand a text messaging consent you have already given or override an opt-out."
    ]
  },
  {
    id: "contact",
    title: "13. Contact us",
    paragraphs: [
      `Questions about these Terms or our text messaging programs? Email ${CONTACT_EMAIL}, call or text ${TEXT_LINE.display}, or use our contact form at 2-stack.com/contact.`
    ]
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#07111f]">
      <main className="mx-auto max-w-3xl px-6 py-16 text-slate-200">
        <Link href="/" className="text-sm underline underline-offset-4">2Stack home</Link>
        <h1 className="mt-8 text-4xl font-semibold text-white">Terms and Conditions</h1>
        <p className="mt-4 text-sm text-slate-400">Effective and last updated: November 3, 2026</p>
        <p className="mt-6 leading-7">
          Please read these Terms carefully. Our{" "}
          <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link> explains how we handle
          personal information and is a separate document.
        </p>

        <nav aria-label="Sections" className="mt-8 rounded-lg border border-white/10 bg-[#101722] p-5">
          <p className="text-sm uppercase tracking-[0.16em] text-slate-400">On this page</p>
          <ol className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-slate-300 underline-offset-4 hover:text-white hover:underline">
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-8">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-3 leading-7">{paragraph}</p>
              ))}
              {section.list ? (
                <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 marker:text-slate-500">
                  {section.list.map((item) => (
                    <li key={item.slice(0, 40)}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
