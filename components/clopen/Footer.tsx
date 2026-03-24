export function Footer() {
  return (
    <footer className="mt-16 border-t border-[#e5e7eb] py-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <p className="font-[var(--font-display)] text-xl font-semibold text-[#1f2933]">Clopen by 2Stack</p>
          <p className="mt-1 text-[#6b7280]">Hospitality Systems</p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:justify-self-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6b7280]">Links</p>
            <ul className="mt-3 space-y-2 text-sm text-[#4b5563]">
              <li>
                <a href="#systems-overview" className="transition-colors hover:text-[#c27c2c]">
                  Systems
                </a>
              </li>
              <li>
                <a href="#systems-overview" className="transition-colors hover:text-[#c27c2c]">
                  Scheduling
                </a>
              </li>
              <li>
                <a href="#systems-overview" className="transition-colors hover:text-[#c27c2c]">
                  Communication
                </a>
              </li>
              <li>
                <a href="#systems-overview" className="transition-colors hover:text-[#c27c2c]">
                  Financial Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6b7280]">Contact</p>
            <a href="mailto:hello@2stack.co" className="mt-3 inline-block text-sm text-[#4b5563] hover:text-[#c27c2c]">
              hello@2stack.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
