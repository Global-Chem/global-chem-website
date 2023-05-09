import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Contributors from "@/components/Contributors";
import OpenSource from "@/components/OpenSource";

export default function Home() {
  return (
    <>
      <div className="bg-black px-10">
        <Hero />
        <CTA />
        <Stats />
      </div>
      <Contributors />
      <OpenSource />
      <Contact />
      <Footer />
    </>
  );
}
