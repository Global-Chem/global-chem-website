import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Contributors from "@/components/Contributors";
import OpenSource from "@/components/OpenSource";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div
        className="bg-black px-10"
        style={{
          backgroundImage: "url('/assets/galaxy.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundColor: "rgba(0,0,0,0.9)"
        }}>
        <Header />
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
