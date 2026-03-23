import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3 md:items-start">
        <div className="md:justify-self-start">
          <Link href="/" className="inline-flex items-center" aria-label="2Stack home">
            <Image src="/navbar_logo.png" alt="2Stack" width={1500} height={509} className="h-9 w-auto" />
          </Link>
        </div>

        <div className="text-center md:justify-self-center md:text-center">
          <h3 className="text-center text-sm uppercase tracking-[0.16em] text-slate-400">Who We Help</h3>
          <ul className="mt-4 space-y-2 text-slate-200">
            <li>
              <Link href="/home-services" className="transition-colors hover:text-[#caffc0]">
                Home Services
              </Link>
            </li>
            <li>
              <Link href="/medical-aftercare" className="transition-colors hover:text-[#ff66aa]">
                Medical Aftercare
              </Link>
            </li>
            <li>
              <Link href="/restaurants" className="transition-colors hover:text-[#D94B3D]">
                Restaurants
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:justify-self-end md:text-right">
          <h3 className="text-sm uppercase tracking-[0.16em] text-slate-400">Contact</h3>
          <a className="mt-4 inline-block text-slate-200 transition-colors hover:text-[#5bade3]" href="mailto:hello@2stack.co">
            hello@2stack.co
          </a>
        </div>
      </div>
    </footer>
  );
}
