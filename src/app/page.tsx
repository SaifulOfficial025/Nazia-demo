import Hero from "./(Homepage)/Hero";
import Section1 from "./(Homepage)/Section1";
import Section2 from "./(Homepage)/Section2";
import Section3 from "./(Homepage)/Section3";
import Section4 from "./(Homepage)/Section4";
import Section5 from "./(Homepage)/Section5";
import Section6 from "./(Homepage)/Section6";
import Section7 from "./(Homepage)/Section7";
import Section8 from "./(Homepage)/Section8";
import Footer from "./(Homepage)/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white selection:bg-[#d8a868] selection:text-black">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </main>
  );
}
