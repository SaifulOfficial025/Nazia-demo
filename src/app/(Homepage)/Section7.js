import Reveal from "./Reveal";
import { pillars } from "./data";

export default function Section7() {
  return (
    <section id="vision" className="w-full bg-[#e3e7ef] text-[#0f1f3d] pt-16 sm:pt-20 pb-20">
      <div className="px-6 sm:px-10 lg:px-[116px] max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center pb-10 sm:pb-12">
          <Reveal>
            <h2 className="font-serif-title font-normal text-5xl sm:text-6xl lg:text-[4.6rem] leading-[0.98] tracking-tight">
              The future
              <br />
              <em className="italic">we will build.</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-bengali text-[12px] sm:text-[13px] leading-[1.9] text-[#0f1f3d]/90 max-w-[330px] md:ml-auto lg:mr-[60px] md:mt-8">
              আগামী দিনের নগর হবে আরও মানবিক—যেখানে উন্নয়ন মানে শুধু অবকাঠামো নয়, প্রতিটি মানুষের সম্ভাবনাকে এগিয়ে নেওয়া।
            </p>
          </Reveal>
        </div>

        {/* Rows */}
        <ul className="border-t border-[#0f1f3d]/10">
          {pillars.map((p, i) => (
            <Reveal
              as="li"
              key={p.no}
              delay={i * 100}
              className="group grid grid-cols-[34px_1fr] md:grid-cols-[57px_1fr_auto] items-center gap-x-3 gap-y-2 py-5 md:py-[22px] border-b border-[#0f1f3d]/10 transition-colors duration-500 hover:bg-white/40"
            >
              <span className="text-[9px] tracking-[0.2em] text-[#0f1f3d]/70 self-start pt-2 md:self-center md:pt-0 transition-colors group-hover:text-[#c9a85c]">
                {p.no}
              </span>
              <div>
                <h3 className="font-serif-title text-[24px] sm:text-[30px] leading-[1.1] transition-transform duration-500 group-hover:translate-x-2">
                  {p.title}
                </h3>
                <p className="font-bengali text-[11px] mt-1 text-[#0f1f3d]/80">{p.sub}</p>
              </div>
              <p className="font-bengali col-span-2 md:col-span-1 text-[11px] sm:text-[12px] leading-relaxed text-[#0f1f3d]/90 md:text-right max-w-[320px] md:ml-auto">
                {p.text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
