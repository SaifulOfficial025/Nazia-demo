"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import { missions } from "./data";

export default function Section5() {
  const scroller = useRef(null);
  const scrollBy = (dir) => {
    scroller.current?.scrollBy({ left: dir * 480, behavior: "smooth" });
  };

  return (
    <section id="work" className="w-full bg-[#f5f2ec] text-[#0f1f3d] pt-16 sm:pt-24 pb-16 sm:pb-20">
      {/* Header */}
      <div className="px-6 sm:px-10 lg:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-end pb-7 border-b border-[#0f1f3d]/10">
          <Reveal>
            <h2 className="font-serif-title font-normal text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.02] tracking-tight">
              One leader.
              <br />
              <em className="italic">Many missions.</em>
            </h2>
          </Reveal>
          <Reveal delay={150} className="flex flex-col gap-5 md:items-end md:mr-[60px]">
            <p className="font-bengali text-[12px] leading-relaxed text-[#0f1f3d]/85 max-w-[250px]">
              প্রতিটি উদ্যোগের কেন্দ্রে আছে একটি সহজ বিশ্বাস—পরিবর্তন শুরু হয় মানুষের সবচেয়ে কাছ থেকে।
            </p>
            <div className="hidden sm:flex gap-2">
              {[-1, 1].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => scrollBy(d)}
                  aria-label={d < 0 ? "Previous missions" : "Next missions"}
                  className="w-10 h-10 rounded-full border border-[#0f1f3d]/30 hover:bg-[#0f1f3d] hover:text-white hover:border-[#0f1f3d] transition-colors cursor-pointer text-sm"
                >
                  {d < 0 ? "←" : "→"}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Horizontal mission cards */}
      <div
        ref={scroller}
        className="mt-8 flex gap-3 overflow-x-auto snap-x snap-mandatory px-6 sm:px-10 lg:px-[120px] scroll-px-6 sm:scroll-px-10 lg:scroll-px-[120px] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {missions.map((m, i) => (
          <Reveal
            key={m.no}
            dir="right"
            delay={i * 100}
            className="flex-none snap-start w-[240px] sm:w-[260px] lg:w-[280px]"
          >
            <a href="#impact" className="group relative block h-[340px] sm:h-[380px] overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[900ms] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${m.img}'), linear-gradient(160deg, ${m.fallback})` }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-opacity duration-500"
              />
              <span className="absolute left-4 top-4 text-[9px] tracking-[0.2em] text-white/80">{m.no}</span>
              <div className="absolute inset-x-4 bottom-5 text-white">
                <h3 className="font-serif-title text-[24px] leading-[1.15] transition-transform duration-500 group-hover:-translate-y-1">
                  {m.title}
                </h3>
                <p className="font-bengali text-[12px] mt-2 text-white/90 leading-snug max-h-0 opacity-0 translate-y-2 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100 group-hover:translate-y-0 max-sm:max-h-16 max-sm:opacity-100 max-sm:translate-y-0">
                  {m.bn}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
