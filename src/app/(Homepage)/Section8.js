import Image from "next/image";
import Reveal from "./Reveal";

export default function Section8() {
  return (
    <section
      id="join"
      className="relative w-full min-h-[400px] overflow-hidden bg-[#0b1a3c] text-white flex items-center"
    >
      <Image
        src="/images/section3.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[50%_62%] scale-[1.35] origin-[55%_70%]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0b1a3c]/75" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#0b1a3c] via-[#0b1a3c]/80 to-transparent" />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:pl-[126px] py-16">
        <Reveal className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#c9a85c]" />
          <p className="text-[8px] uppercase tracking-[0.25em] font-medium text-[#c9a85c]">Together, Forward</p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-serif-title font-normal text-[2.8rem] sm:text-6xl lg:text-[4.4rem] leading-[0.98] tracking-tight">
            The journey has
            <br />
            already begun.
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <p className="font-serif-title italic text-[#c9a85c] text-xl sm:text-[22px] mt-5">
            The future starts with us.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <a
            href="#work"
            className="group mt-7 inline-flex items-center gap-3 border-b border-white/70 pb-1 text-[9px] uppercase tracking-[0.2em] font-semibold hover:text-[#c9a85c] hover:border-[#c9a85c] transition-colors"
          >
            Discover Her Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
