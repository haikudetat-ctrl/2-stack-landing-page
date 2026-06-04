import Image from "next/image";
import Link from "next/link";

const verticalLinks = [
  { label: "LOAM", href: "/loam", color: "hover:text-[#9bc86d]" },
  { label: "CLOPEN", href: "https://clopen.2-stack.com", color: "hover:text-[#ef742d]" },
  { label: "RAKE", href: "https://rake.2-stack.com", color: "hover:text-[#5f9de0]" }
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3 md:items-start">
        <div className="md:justify-self-start">
          <Link href="/" className="inline-flex items-center" aria-label="2Stack home">
            <Image src="/navbar_logo.png" alt="2Stack" width={1500} height={509} className="h-9 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Operational foundations for owners who take pride in their work.
          </p>
        </div>

        <div className="text-center md:justify-self-center md:text-center">
          <h3 className="text-sm uppercase tracking-[0.16em] text-slate-400">Who We Help</h3>
          <ul className="mt-4 space-y-2 text-slate-200">
            {verticalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={`transition-colors ${link.color}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:justify-self-end md:text-right">
          <h3 className="text-sm uppercase tracking-[0.16em] text-slate-400">Contact</h3>
          <a className="mt-4 inline-block text-slate-200 transition-colors hover:text-[#5bade3]" href="mailto:team@2stackops.com">
            team@2stackops.com
          </a>
        </div>
      </div>
    </footer>
  );
}
