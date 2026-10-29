import Reveal from "./Reveal";
import { timeline } from "./data";

export default function Section2() {
  return (
    <section id="journey" className="w-full bg-[#fbf9f5] text-[#0f1f3d] py-20 sm:py-28 border-t border-[#0f1f3d]/10">
      <div className="px-6 sm:px-10 lg:px-[116px] max-w-[1200px] mx-auto">
        <Reveal className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-[#0f1f3d]/60" />
          <p className="text-[8px] uppercase tracking-[0.25em] font-medium">Her Journey</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 md:gap-16 items-end mb-14 sm:mb-20">
          <Reveal delay={100}>
            <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05] tracking-tight">
              Sixteen years of
              <br />
              <em className="italic">walking beside people.</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-bengali text-[12px] sm:text-[13px] leading-[1.9] text-[#0f1f3d]/80 max-w-[340px]">
              একটি ছোট শিক্ষাকেন্দ্র থেকে হাজারো পরিবারের ভরসা—প্রতিটি ধাপে ছিল মানুষের বিশ্বাস আর নিরলস পরিশ্রম।
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <ol className="relative border-l border-[#0f1f3d]/20 ml-2 lg:ml-0 lg:border-l-0 lg:border-t lg:grid lg:grid-cols-5 lg:gap-6">
          {timeline.map((t, i) => (
            <Reveal
              as="li"
              key={t.year}
              delay={i * 110}
              className="group relative pl-8 pb-10 lg:pl-0 lg:pb-0 lg:pt-10"
            >
              <span className="absolute -left-[5px] top-1 lg:left-0 lg:-top-[5px] w-[9px] h-[9px] rounded-full bg-[#c9a85c] ring-4 ring-[#fbf9f5] transition-transform duration-300 group-hover:scale-150" />
              <p className="font-serif-title text-3xl text-[#c9a85c] leading-none">{t.year}</p>
              <h3 className="font-serif-title text-xl mt-3 leading-tight transition-transform duration-300 group-hover:translate-x-1">
                {t.title}
              </h3>
              <p className="font-bengali text-[12px] leading-[1.8] text-[#0f1f3d]/75 mt-2 max-w-[260px]">
                {t.bn}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
