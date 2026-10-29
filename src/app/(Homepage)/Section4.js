import Reveal from "./Reveal";
import Counter from "./Counter";
import { stats } from "./data";

export default function Section4() {
  return (
    <section id="impact" className="relative w-full overflow-hidden bg-[#0b1a3c] text-white lg:min-h-[480px]">
      {/* Background photo (falls back to the gradient if the image is missing) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-[position:60%_30%]"
        style={{
          backgroundImage:
            "url('/images/section4.jpg'), radial-gradient(ellipse at 60% 40%, #5a2a2e 0%, #1a2240 45%, #0b1a3c 100%)",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0b1a3c]/70" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#0b1a3c]/85 via-transparent to-[#0b1a3c]/30" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1a3c]/80" />

      <div className="relative z-10 flex flex-col lg:min-h-[480px] px-6 sm:px-10 lg:px-[38px] pt-12 lg:pt-5 pb-8">
        <div>
          <Reveal className="flex items-center gap-3">
            <span className="w-8 h-px bg-white/40" />
            <p className="text-[8px] uppercase tracking-[0.25em] font-medium text-[#c9a85c]">Impact in Numbers</p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-serif-title font-normal mt-4 text-5xl sm:text-6xl lg:text-[4.4rem] leading-[1.02] tracking-tight">
              Where people
              <br />
              <em className="italic text-[#c9a85c]">need us, we go.</em>
            </h2>
          </Reveal>
        </div>

        {/* Stat cards */}
        <div className="mt-10 lg:mt-0 lg:absolute lg:left-[303px] lg:top-[270px] grid grid-cols-2 lg:flex gap-3 lg:gap-[9px] lg:items-start">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={200 + i * 120}
              className={`${i % 2 === 1 ? "lg:mt-[26px]" : ""}`}
            >
              <div className="h-full w-full lg:w-[167px] lg:h-[127px] border border-white/25 bg-[#0b1a3c]/70 backdrop-blur-sm p-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#c9a85c]/70 hover:bg-[#0b1a3c]/85">
                <p className="text-[7px] uppercase tracking-[0.22em] font-medium text-[#c9a85c]">{s.label}</p>
                <p className="font-serif-title text-[28px] sm:text-[30px] leading-none mt-5">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="font-bengali text-[11px] mt-3 text-white/90">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500} className="mt-10 lg:mt-auto">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 border-b border-white/60 pb-1 text-[9px] uppercase tracking-[0.22em] font-semibold hover:text-[#c9a85c] hover:border-[#c9a85c] transition-colors"
          >
            View All Initiatives
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
