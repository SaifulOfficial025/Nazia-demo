import Image from "next/image";
import Reveal from "./Reveal";

export default function Section6() {
  return (
    <section
      id="voice"
      className="relative w-full min-h-[440px] sm:min-h-[480px] overflow-hidden bg-[#0b1a3c] text-white flex items-end"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[50%_25%] grayscale contrast-110"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#16264a]/70 mix-blend-multiply" />
      <div aria-hidden="true" className="absolute inset-0 bg-[#2a3d6b]/35" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b1a3c]/85 via-transparent to-transparent" />

      <Reveal
        dir="zoom"
        className="absolute top-8 left-6 sm:top-[44px] sm:left-10 lg:left-[143px] w-[47px] h-[47px] rounded-full border border-white/70 flex items-start justify-center"
      >
        <span className="font-serif-title text-[20px] leading-[1.5]">“</span>
      </Reveal>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:pl-[143px] lg:pr-10 pb-10 pt-28">
        <Reveal delay={100}>
          <h2 className="font-serif-title font-normal text-[2.8rem] sm:text-6xl lg:text-[4.2rem] leading-[1.02] tracking-tight">
            Leadership begins
            <br />
            <em className="italic text-[#c9a85c]">with listening.</em>
          </h2>
        </Reveal>

        <Reveal delay={260}>
          <p className="font-bengali mt-6 max-w-[420px] border-l border-[#c9a85c]/70 pl-4 text-[12px] sm:text-[13px] leading-[1.8] text-white/95">
            মানুষের কথা শুনে, মানুষের প্রয়োজন বুঝে, মানুষের পাশে দাঁড়ানোই তাঁর পথচলার মূল শক্তি।
          </p>
        </Reveal>
      </div>
    </section>
  );
}
