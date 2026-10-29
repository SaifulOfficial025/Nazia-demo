import Image from "next/image";
import Reveal from "./Reveal";

export default function Section3() {
  return (
    <section id="about" className="w-full grid grid-cols-1 md:grid-cols-2 md:min-h-[520px]">
      {/* Photo */}
      <Reveal dir="fade" className="group relative h-[340px] sm:h-[420px] md:h-auto overflow-hidden">
        <Image
          src="/images/section3.jpg"
          alt="Naznin Rahman speaking at a public forum"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-[50%_35%] transition-transform duration-[1600ms] ease-out group-hover:scale-105"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b1a3c]/40 to-transparent md:hidden" />
      </Reveal>

      {/* Navy panel */}
      <div className="bg-[#0b1a3c] text-white flex items-center px-6 sm:px-14 lg:px-[96px] py-14 sm:py-16">
        <div className="w-full max-w-[440px]">
          <Reveal className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-[#c9a85c]" />
            <p className="text-[8px] uppercase tracking-[0.25em] font-medium text-[#c9a85c]">Who She Is</p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-serif-title font-normal text-5xl sm:text-6xl lg:text-[4rem] leading-[1.05] tracking-tight">
              From vision
              <br />
              <em className="italic text-[#c9a85c]">to action.</em>
            </h2>
          </Reveal>

          <Reveal delay={220}>
            <p className="font-bengali mt-8 sm:mt-10 text-[15px] sm:text-[16px] leading-[1.75] text-white/95">
              একজন নারী, একজন সংগঠক, একজন সমাজকর্মী—যিনি মানুষের সমস্যা কাছ থেকে দেখেছেন এবং সেই সমস্যার সমাধানে কাজ করে যাচ্ছেন।
            </p>
          </Reveal>

          <Reveal delay={330}>
            <a
              href="#journey"
              className="group/link mt-9 inline-flex items-center gap-3 border-b border-white/50 pb-1 text-[9px] uppercase tracking-[0.22em] font-semibold hover:text-[#c9a85c] hover:border-[#c9a85c] transition-colors"
            >
              Her Journey
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
