import { useState, useEffect } from "react";
import Globe from "./Globe";
import { useRouter } from "next/router";

export default function Hero() {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const router = useRouter();

  function calculateWidthAndHeight() {
    let newWidth = window.innerWidth * 0.5;
    let newHeight = window.innerWidth * 0.5;

    if (window.innerWidth >= 768) {
      newWidth = 500;
      newHeight = 500;
    }

    setWidth(newWidth);
    setHeight(newHeight);
  }

  useEffect(() => {
    calculateWidthAndHeight();
    window.addEventListener("resize", calculateWidthAndHeight);
    return () => window.removeEventListener("resize", calculateWidthAndHeight);
  }, []);

  return (
    <section className="mx-auto">
      <div className="sm:py-12 flex items-center justify-center mx-auto h-[95vh]">
        <div className="gap-8 lg:flex lg:grid-cols-2 items-center justify-center mx-auto">
          <div className="h-auto md:w-4/6 my-2">
            <Globe width={width} height={height} />
          </div>

          <div className="order-2 lg:order-1 text-center lg:text-left justify-end space-x-2 mx-auto w-11/12 md:w-full">
            <h1 className="text-4xl font-bold sm:text-4xl lg:text-7xl text-white">
              Global Chem
            </h1>

            <p className="mt-4 text-gray-400 mx-1">
              Global Chem is as an open source government focused on
              transforming common chemical names into 1-D molecule
              representations, facilitating universal recording and governance.
              Join us in shaping a future of open, accessible, and collaborative
              chemical data management, unlocking the full potential of global
              chemical knowledge.
            </p>
            <button
              onClick={() =>
                router.push("https://github.com/Global-Chem/global-chem")
              }
              className="mt-5 inline-block rounded-lg bg-red-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-900 focus:outline-none focus:ring focus:ring-red-400"
            >
              Our Knowledge Graph
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
