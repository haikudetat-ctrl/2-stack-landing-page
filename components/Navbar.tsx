import Image from "next/image";
import Link from "next/link";
import { verticalSites } from "@/lib/seo";

const navLinks = [
  { label: "LOAM", href: verticalSites.loam.url, hoverClass: "hover:text-[#9bc86d] focus-visible:text-[#9bc86d]" },
  { label: "CLOPEN", href: verticalSites.clopen.url, hoverClass: "hover:text-[#ef742d] focus-visible:text-[#ef742d]" },
  { label: "RAKE", href: verticalSites.rake.url, hoverClass: "hover:text-[#5f9de0] focus-visible:text-[#5f9de0]" },
  {
    label: "Contact",
    href: "mailto:team@2stackops.com",
    hoverClass: "hover:text-[#5bade3] focus-visible:text-[#5bade3]"
  }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101722]/78 backdrop-blur-xl">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-0"
        aria-label="Main navigation"
      >
        <Link href="/" className="inline-flex shrink-0 items-center py-[19px] leading-none" aria-label="2Stack home">
          <Image
            src="/navbar_logo.png"
            alt="2Stack"
            width={1500}
            height={509}
            className="block h-auto w-[106px] object-contain sm:w-[120px]"
            priority
          />
        </Link>

        <ul className="ml-4 flex max-w-[72vw] items-center gap-3 overflow-x-auto whitespace-nowrap text-xs font-semibold uppercase tracking-[0.12em] text-slate-200/90 sm:gap-6 sm:text-sm">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`transition-colors duration-300 ${link.hoverClass}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
