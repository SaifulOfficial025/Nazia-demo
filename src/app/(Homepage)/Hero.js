"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, heroCopy } from "./data";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("bn");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 40);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const copy = heroCopy[lang];
  const toggleLang = () => setLang((l) => (l === "bn" ? "en" : "bn"));

  return (
    <section
      id="top"
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-black text-white selection:bg-[#d8a868] selection:text-black"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Naznin Rahman addressing a public gathering"
          fill
          priority
          sizes="100vw"
          className="kenburns object-cover object-[center_30%] grayscale contrast-125 brightness-[0.75]"
        />
        <div className="absolute inset-0 bg-[#0b1a3c]/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/25 to-[#050b1c]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b1c]/85 via-[#050b1c]/35 to-transparent" />
      </div>

      {/* Fixed header */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0b1a3c]/85 backdrop-blur-md py-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="px-5 sm:px-10 lg:px-[72px] flex items-center justify-between">
          <a href="#top" className="group flex items-center gap-3" aria-label="Naznin Rahman — home">
            <span className="w-10 h-10 sm:w-[46px] sm:h-[46px] rounded-full border border-white/80 flex items-center justify-center text-[12px] font-semibold tracking-wider font-serif-title transition-all duration-300 group-hover:border-[#d8a868] group-hover:text-[#d8a868] group-hover:rotate-[360deg]">
              NR
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif-title text-[15px] sm:text-[17px] tracking-wide">Naznin Rahman</span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.28em] text-white/70 uppercase mt-0.5">
                Official Website
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 lg:gap-12" aria-label="Main">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-[10px] uppercase tracking-[0.25em] text-white/85 hover:text-[#d8a868] transition-colors"
              >
                {l.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={toggleLang}
              className="text-[10px] tracking-wider flex items-center gap-1 cursor-pointer"
              aria-label="Toggle language"
            >
              <span className={`font-bengali transition-colors ${lang === "bn" ? "text-white" : "text-white/50"}`}>
                বাংলা
              </span>
              <span className="text-white/40">/</span>
              <span className={`transition-colors ${lang === "en" ? "text-white" : "text-white/50"}`}>EN</span>
            </button>
            <a
              href="#about"
              className="hidden sm:inline text-[10px] uppercase tracking-[0.22em] font-semibold hover:text-[#d8a868] transition-colors"
            >
              Meet Naznin
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="w-10 h-10 rounded-full border border-white/60 hover:border-[#d8a868] flex flex-col items-center justify-center gap-[4px] transition-colors cursor-pointer md:hidden"
            >
              <span className={`w-4 h-px bg-white transition-transform duration-300 ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`w-4 h-px bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`w-4 h-px bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </button>
            <a
              href="#join"
              aria-label="Join"
              className="hidden md:flex w-10 h-10 rounded-full border border-white/60 hover:border-[#d8a868] hover:text-[#d8a868] items-center justify-center transition-colors"
            >
              <span className="flex flex-col gap-[4px]">
                <span className="block w-4 h-px bg-current" />
                <span className="block w-4 h-px bg-current" />
                <span className="block w-4 h-px bg-current" />
              </span>
            </a>
          </div>
        </div>

        {/* Scroll progress */}
        <span
          aria-hidden="true"
          className="absolute left-0 bottom-0 h-px bg-[#c9a85c] origin-left"
          style={{ width: "100%", transform: `scaleX(${progress})` }}
        />
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="menu-fade fixed inset-0 z-40 bg-[#050b1c]/97 backdrop-blur-lg flex flex-col justify-center px-8 md:hidden">
          <nav className="flex flex-col gap-7">
            {[...navLinks, { name: "MEET NAZNIN", href: "#about" }].map((l, i) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${i * 70}ms` }}
                className="hero-rise font-serif-title text-3xl tracking-wide text-white/90 hover:text-[#d8a868] transition-colors"
              >
                {l.name.charAt(0) + l.name.slice(1).toLowerCase()}
              </a>
            ))}
          </nav>
          <p className="mt-12 text-[10px] tracking-[0.25em] text-[#c9a85c] uppercase">
            Leadership · Service · Nation
          </p>
        </div>
      )}

      {/* Headline */}
      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-[72px] pt-32 sm:pt-40 mt-auto mb-auto">
        <div className="hero-rise flex items-center gap-3 mb-4 sm:mb-6" style={{ "--d": "150ms" }}>
          <span className="w-8 sm:w-10 h-px bg-[#d8a868]" />
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#d8a868] uppercase">
            Leadership · Service · Nation
          </p>
        </div>

        <h1
          key={lang}
          className={`font-bold tracking-tight select-none leading-[1.12] ${
            lang === "bn" ? "font-bengali" : "font-serif-title font-medium"
          }`}
        >
          <span
            className="hero-rise block text-[2.9rem] sm:text-7xl md:text-8xl lg:text-[6.4rem] xl:text-[7.2rem] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
            style={{ "--d": "300ms" }}
          >
            {copy.line1}
          </span>
          <span
            className="hero-rise block text-[2.9rem] sm:text-7xl md:text-8xl lg:text-[6.4rem] xl:text-[7.2rem] text-[#d8a868] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
            style={{ "--d": "480ms" }}
          >
            {copy.line2}
          </span>
        </h1>
      </div>

      {/* Bottom bar */}
      <div
        className="hero-rise relative z-10 w-full px-5 sm:px-10 lg:px-[72px] pb-7 sm:pb-9"
        style={{ "--d": "750ms" }}
      >
        <div className="border-t border-white/20 pt-5 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#d8a868] font-semibold mb-1.5">
              A new generation of leadership
            </p>
            <p className="font-serif-title text-3xl sm:text-4xl leading-tight">Naznin Rahman</p>
            <p className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/70">
              Public Leader · Social Advocate · Voice of the People
            </p>
          </div>

          <a
            href="#story"
            className="group inline-flex items-center gap-3 self-start md:self-end text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] hover:text-[#d8a868] transition-colors"
          >
            <span className="border-b border-white group-hover:border-[#d8a868] pb-1 transition-colors">
              Explore her journey
            </span>
            <span className="nudge-down">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
