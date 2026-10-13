import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How 2Stack handles personal information, affiliate referrals, and text messaging consent and choices.",
  alternates: { canonical: "https://2-stack.com/privacy" }
};

const sections = [
  [
    "Who we are and what this policy covers",
    "2Stack (\"we,\" \"us,\" or \"our\") provides business operations services and operates 2-stack.com and its branded sites, including Clopen, LOAM, and RAKE. This policy explains how we handle information when you visit our sites, contact us, request services, use our assessments, or join a text messaging program we operate. When we process information solely on behalf of a business customer, that business determines the purposes of processing and its privacy notice applies; we handle that information under our agreement with that business."
  ],
  [
    "Information we collect",
    "We collect information you give us, such as your name, email address, telephone number, company information, service requests, and correspondence. Our systems assessments collect business information such as seating capacity, scheduling time, communication practices, and recipe tracking, together with the assessment result, submission time, source page, and reference identifier. If you enroll in messaging, we collect your mobile number, consent records, messages, delivery information, and opt-out requests. Hosting and analytics services may process technical information such as IP addresses, device and browser information, pages visited, referring pages, and performance measurements."
  ],
  [
    "How we use information",
    "We use information to respond to inquiries, provide and support services, evaluate assessment responses, arrange requested introductions, administer our business, improve site performance, prevent misuse, and meet legal obligations. We send marketing emails or texts only where permitted and with the consent required for the channel and program. Providing a telephone number for an inquiry does not by itself enroll you in marketing texts."
  ],
  [
    "Affiliate marketing and referrals",
    "We may recommend third-party products or services and receive compensation when you follow an affiliate link or complete a qualifying referral. We disclose compensated relationships where recommendations are made. An affiliate link may allow the destination business or affiliate network to associate a visit or purchase with our referral through a referral identifier, cookie, or similar technology. Those businesses operate under their own privacy policies. If you ask us to introduce you to a provider, we explain the recipient and information involved before making the introduction. Your consent to our messaging program is not consent to texts from another business. We do not transfer our SMS subscriber lists or messaging consent to referral partners."
  ],
  [
    "Text messaging: consent and program information",
    "If we offer a text messaging program, we identify the sending business and describe the message categories at enrollment. These may include responses to requests, appointment or service updates, or promotional messages about the identified business, depending on the program you choose. We obtain the consent required for each program before sending messages, including any required express written consent for automated marketing texts. Marketing consent is optional and is not a condition of purchasing goods or services. Message frequency varies by program and your interactions; enrollment disclosures describe any more specific frequency. Message and data rates may apply. Messages may be sent using automated technology. Merely visiting this site or accepting this privacy policy does not provide SMS consent."
  ],
  [
    "Text messaging: privacy and sharing",
    "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be sold, rented, or shared with third parties or affiliates for their own marketing or promotional purposes. We may provide this information to messaging platforms, telecommunications providers, and service providers only as needed to deliver and administer our messaging program on our behalf, under restrictions on their use of that information. These protections apply regardless of any other sharing described in this policy."
  ],
  [
    "Text messaging: STOP, HELP, and withdrawal",
    "Reply STOP to opt out of a text messaging program. You may also revoke consent through another reasonable method, including emailing team@2stackops.com and identifying the number and program involved. We honor withdrawal requests as required by applicable law and stop further messages covered by the request. We may send one non-promotional confirmation of your opt-out. Reply HELP for program assistance, or contact team@2stackops.com. We retain limited consent and suppression records where needed to honor your preferences and demonstrate compliance. Opting out of texts does not automatically unsubscribe you from email; use the email unsubscribe link or contact us for that request."
  ],
  [
    "Other disclosures and service providers",
    "We share information with providers that help us host our sites, measure performance, manage inquiries and customer relationships, deliver communications, and support requested services. For example, our site uses Vercel Analytics and Speed Insights, and assessment submissions may be sent to our configured lead-management service. Providers may use information only as authorized for their services and subject to applicable obligations. We may disclose information when required by law, to protect rights or safety, or in connection with a business transfer subject to applicable privacy obligations. A business transfer does not grant the recipient permission to disregard your messaging choices. Any requested referral remains subject to the mobile-information protections above."
  ],
  [
    "Cookies, analytics, and external services",
    "Our site and external services may use cookies or similar technologies for functionality, analytics, or referral attribution, depending on the service. Browser settings can limit cookies, although some features may be affected. External links, embedded media, and booking or payment services may collect information under their own policies. Where applicable law requires a separate choice for nonessential tracking or targeted advertising, we obtain that choice before enabling the relevant processing. Contact us for questions about tracking or to exercise an applicable opt-out right."
  ],
  [
    "Retention and security",
    "We retain information for as long as reasonably needed for the purposes described here, including providing services, complying with legal requirements, resolving disputes, and honoring opt-outs. Retention depends on the information, our relationship with you, and applicable requirements; consent and suppression records may need to be kept after other information is deleted. We use reasonable administrative, technical, and organizational safeguards. No method of storage or transmission is completely secure."
  ],
  [
    "Your privacy choices and rights",
    "You may contact team@2stackops.com to request access, correction, deletion, or information about our handling of your personal information. Depending on your location and applicable law, you may also have rights to portability, restriction, objection, withdrawal of consent, or to opt out of certain sales, sharing, or targeted advertising. We assess requests under the law that applies, verify identity proportionately, and explain any exceptions. Authorized agents may submit requests where permitted, and we may require proof of authority. Where an appeal right applies, reply to our decision to request an appeal. We do not discriminate for exercising applicable privacy rights. You may also complain to an appropriate privacy regulator."
  ],
  [
    "Children and international processing",
    "Our services are intended for business users and are not directed to children under 13. We do not knowingly collect personal information from children under 13. Contact us if you believe a child has provided information. We and our service providers may process information in the United States or other countries where they operate. Where required, we use legally recognized protections for international transfers."
  ],
  [
    "Changes and contact",
    "We update this policy when our practices change and revise the date below. For material changes, we provide additional notice or obtain new consent where required. Policy updates do not expand an existing text messaging consent or override an opt-out. For privacy questions, requests, or messaging assistance, email team@2stackops.com with the subject \"Privacy request\"."
  ]
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#07111f]">
      <main className="mx-auto max-w-3xl px-6 py-16 text-slate-200">
        <Link href="/" className="text-sm underline underline-offset-4">2Stack home</Link>
        <h1 className="mt-8 text-4xl font-semibold text-white">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-400">Last updated: October 13, 2026</p>
        <div className="mt-10 space-y-10">
          {sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 leading-7">{body}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 leading-7">
          Contact: <a href="mailto:team@2stackops.com" className="underline underline-offset-4">team@2stackops.com</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
