import Heading from "@/components/Heading";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Heading />
      <div className="bg-black px-10">
        <Hero />
      <CTA />
      <Stats />
      </div>
      
      <Contact />
      <Footer />
    </>
  );
}
