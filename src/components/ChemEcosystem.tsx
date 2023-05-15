import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function ChemEcoSystem() {
  const router = useRouter();

  const chemEcoSystem = [
    {
      name: "War",
      image: "/textures/war.webp",
      description: "",
      link: "",
    },
    {
      name: "Cannabis",
      image: "/textures/cannabis.webp",
      description: "",
      link: "",
    },
    {
      name: "Sex",
      image: "/textures/sex.webp",
      description: "",
      link: "",
    },
    {
      name: "Medicinal Chemistry",
      image: "/textures/medicinal.webp",
      description: "",
      link: "",
    },
    {
      name: "Education",
      image: "/textures/education.webp",
      description: "",
      link: "",
    },
    {
      name: "Food",
      image: "",
      description: "",
      link: "",
    },
    {
      name: "Environment",
      image: "/textures/environment.webp",
      description: "",
      link: "",
    },
    {
      name: "Space",
      image: "",
      description: "",
      link: "",
    },
    {
      name: "Materials",
      image: "/textures/materials.webp",
      description: "",
      link: "",
    },
    {
      name: "Narcotics",
      image: "/textures/narcotics.webp",
      description: "",
      link: "",
    },
    {
      name: "Global",
      image: "https://i.imgur.com/rOBIiT7.jpeg",
      description: "",
      link: "",
    },
  ];

  return (
    <section>
      <div className="z-10 container px-4 mx-auto text-2xl">
        <h2 className="mb-8 text-gray-200 text-center font-semibold uppercase tracking-px">
          Our Chemical Ecosystem
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {chemEcoSystem.map((item, index) => (
          <div className="py-3 p-4">
            <div
              className="px-4 py-10 bg-white shadow-lg rounded-3xl bg-clip-padding bg-opacity-40 border border-gray-100"
              style={{
                backdropFilter: "blur(20px);",
              }}
            >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                    className="rounded-full"
                />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
