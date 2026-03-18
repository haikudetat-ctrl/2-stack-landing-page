import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["600"]
});

const navLinks = [
  { label: "Home Services", href: "/home-services", hoverClass: "hover:text-[#7aff60] focus-visible:text-[#7aff60]" },
  {
    label: "Medical Aftercare",
    href: "/medical-aftercare",
    hoverClass: "hover:text-[#ff66aa] focus-visible:text-[#ff66aa]"
  },
  { label: "Restaurants", href: "/restaurants", hoverClass: "hover:text-[#D94B3D] focus-visible:text-[#D94B3D]" },
  { label: "Contact", href: "mailto:hello@2stack.co", hoverClass: "hover:text-[#5bade3] focus-visible:text-[#5bade3]" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#222837]/70 backdrop-blur-xl">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-0"
        aria-label="Main navigation"
      >
        <Link href="/" className="inline-flex items-center py-[19px] leading-none" aria-label="2Stack home">
          <Image src="/navbar_logo.png" alt="2Stack" width={1500} height={509} className="block h-9 w-auto" priority />
        </Link>

        <ul
          className={`${roboto.className} ml-4 flex max-w-[72vw] items-center gap-3 overflow-x-auto whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em] text-slate-200/90 sm:gap-6 sm:text-sm`}
        >
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
