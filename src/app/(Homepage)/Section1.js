import Reveal from "./Reveal";

export default function Section1() {
  return (
    <section id="story" className="relative w-full bg-[#f5f2ec] text-[#0f1f3d] overflow-hidden">
      {/* Gold ticker bar */}
      <div className="w-full bg-[#c9a85c] min-h-[30px] py-1.5 px-4 sm:px-10 lg:px-[100px] flex items-center justify-between gap-3">
        <span className="hidden sm:block text-[8px] uppercase tracking-[0.2em] font-medium">
          Service Before Self
        </span>
        <span className="font-serif-title text-[12px] sm:text-[13px] mx-auto sm:mx-0 text-center">
          Country first. People always.
        </span>
        <span className="hidden sm:block text-[8px] uppercase tracking-[0.2em] font-medium">
          Strength · Dignity · Progress
        </span>
      </div>

      {/* Decorative quote mark */}
      <Reveal
        dir="fade"
        delay={300}
        aria-hidden="true"
        className="absolute top-[56px] right-6 sm:top-[64px] sm:right-[60px] lg:right-[76px] font-serif-title text-[90px] sm:text-[130px] leading-none text-[#0f1f3d]/10 select-none"
      >
        “
      </Reveal>

      <div className="relative max-w-[720px] mx-auto lg:mx-0 lg:ml-[182px] px-6 sm:px-10 lg:px-0 pt-16 sm:pt-24 lg:pt-[110px] pb-20 sm:pb-24">
        <Reveal className="flex items-center gap-3 mb-7 sm:mb-10">
          <span className="w-6 h-px bg-[#0f1f3d]/60" />
          <p className="text-[8px] uppercase tracking-[0.25em] font-medium">She Believes</p>
        </Reveal>

        <Reveal delay={120}>
          <blockquote className="font-bengali font-semibold text-[1.9rem] sm:text-5xl lg:text-[3.4rem] leading-[1.35]">
            “রাজনীতি আমার কাছে
            <br />
            ক্ষমতার পথ নয়,
            <br />
            মানুষের সেবা করার দায়িত্ব।”
          </blockquote>
        </Reveal>

        <Reveal
          delay={260}
          className="mt-12 sm:mt-16 pt-6 border-t border-[#0f1f3d]/10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8"
        >
          <p className="text-[9px] uppercase tracking-[0.22em] font-medium">Service Before Self</p>
          <p className="font-bengali text-[12px] sm:text-[13px] leading-relaxed text-[#0f1f3d]/85">
            মানুষের জীবনমান উন্নয়ন, সামাজিক শান্তি এবং একটি সুন্দর ভবিষ্যৎ গড়ার প্রত্যয়ে তাঁর পথচলা।
          </p>
        </Reveal>
      </div>
    </section>
  );
}
