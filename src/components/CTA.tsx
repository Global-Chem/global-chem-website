import React from "react";
import Accordion from "./Accordion";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="mx-auto text-white md:px-8">
      <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <h2 className="uppercase mb-4 mt-5 text-2xl font-extrabold tracking-tight text-center text-white md:leading-tight sm:text-left md:text-3xl">
            Our Mission
          </h2>
          <p className="mb-5 text-base text-center text-gray-400 sm:text-left md:text-lg">
            We are creating a shared resource of common chemical names that
            anyone can understand, while also keeping track of their safety for
            everyday use. By working together as an open source community and
            utilizing the right tools, we can make informed decisions that
            benefit everyone.
          </p>
        </div>
        <div className="mx-auto">
          <Image
            src={"./assets/knowledgegraph.webp"}
            width={500}
            height={500}
            alt="The knowledge graph that powers Global Chem"
            style={{ border: "5px solid #991b1b", borderRadius: "5px" }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 mb-24 mt-12 md:grid-cols-2 gap-y-2 md:gap-y-32 gap-x-5 md:gap-x-24 justify-center w-11/12 mx-auto">
          <h2 className="uppercase mb-4 mt-4 text-2xl font-extrabold tracking-tight text-white md:leading-tight md:text-3xl">
            Our Plan
          </h2>
          <Accordion />
        </div>
          <Image
            src={"./assets/roadmap.webp"}
            width={500}
            height={500}
            alt="the global chem product roadmap"
            style={{ border: "5px solid #991b1b", borderRadius: "5px" }}
            className="mx-auto mb-10"
          />
    </section>
  );
}
