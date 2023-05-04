import { useState, useEffect } from "react";
import Globe from "./Globe";
import {padding} from "polished";

export default function Hero() {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  useEffect(() => {
    function handleResize() {
      let newWidth = window.innerWidth * 0.5;
      let newHeight = window.innerWidth * 0.5;
      if (newWidth > 600) newWidth = 600;
      if (newHeight > 600) newHeight = 600;
      setWidth(newWidth);
      setHeight(newHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <section>
      <div className="sm:py-12 flex items-center justify-center lg:h-screen">
        <div className="gap-8 lg:flex lg:grid-cols-2 items-center justify-center">
          <div className="w-full lg:w-1/2 h-auto">
            <Globe width={width} height={height} />
          </div>


          <div className="lg:mx-auto order-2 lg:order-1 w-11/12 lg:w-5/12 text-center lg:text-left">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-7xl text-white">
              Global Chem
            </h1>

            <p className="mt-4 text-gray-400 mx-1">
              Global Chem is as an open source government based on transparent chemical data. We write the
              common chemical name to the molecules 1-D representation. This allows for all chemical data to
              be recorded and governed by all.
            </p>

            <a
              href="https://github.com/Global-Chem/global-chem"
              className="mt-5 inline-block rounded-lg bg-red-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-900 focus:outline-none focus:ring focus:ring-red-400"
            >
              Knowledge Graph
            </a>
            <br />
            <a
              href="https://discord.gg/dK2agwXSE7"
              className="mt-5 inline-block rounded-lg bg-red-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-900 focus:outline-none focus:ring focus:ring-red-400"
            >
              Discord Community
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
