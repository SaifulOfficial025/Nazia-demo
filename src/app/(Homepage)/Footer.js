import Reveal from "./Reveal";
import { footerLinks, socials } from "./data";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f2ec] text-[#0f1f3d] pt-14 pb-6">
      <div className="mx-auto w-full max-w-[860px] px-6 sm:px-10">
        <Reveal className="flex items-center gap-4 mb-5">
          <span className="w-5 h-px bg-[#0f1f3d]/30" />
          <p className="text-[8px] uppercase tracking-[0.22em] font-medium">Explore the full story</p>
        </Reveal>

        <Reveal delay={100}>
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 md:grid-cols-4 border-t border-[#0f1f3d]/25 border-b border-b-[#0f1f3d]/10"
          >
            {footerLinks.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className={`group flex items-center justify-between py-5 sm:py-[22px] pr-4 transition-colors hover:bg-[#0f1f3d]/[0.04] ${
                  i % 2 === 1 ? "pl-4" : ""
                } ${i > 1 ? "border-t border-[#0f1f3d]/10 md:border-t-0" : ""} ${
                  i > 0 ? "md:border-l md:border-[#0f1f3d]/10 md:pl-4" : ""
                }`}
              >
                <span className="font-serif-title text-[19px] sm:text-[20px] leading-none">{l.label}</span>
                <span className="text-[11px] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-[#c9a85c]">
                  →
                </span>
              </a>
            ))}
          </nav>
        </Reveal>

        <Reveal
          delay={200}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6"
        >
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#0f1f3d]/75">
            © 2026 Naznin Rahman · Made for the people
          </p>
          <ul className="flex items-center gap-5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[8px] uppercase tracking-[0.2em] text-[#0f1f3d]/75 hover:text-[#0f1f3d] transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#top"
                aria-label="Back to top"
                className="ml-2 w-8 h-8 rounded-full border border-[#0f1f3d]/30 flex items-center justify-center text-[11px] hover:bg-[#0f1f3d] hover:text-white transition-colors"
              >
                ↑
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </footer>
  );
}
