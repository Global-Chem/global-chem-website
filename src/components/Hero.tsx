import Image from "next/image";
import Globe from "./Globe";

export default function Hero() {
  // responsive width for globe
  const width = window.innerWidth > 640 ? 640 : window.innerWidth;
  const height = width;

  return (
    <section>
      <div className="sm:py-12 flex items-center justify-center lg:h-screen">
        <div className="gap-8 lg:flex lg:grid-cols-2">
          <div className="w-1/2">
            <Globe width={width} height={height} />
          </div>
            

          <div className="pt-36 order-2 lg:order-1 w-5/12">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-8xl text-white">
              Global Chemistry
            </h1>

            <p className="mt-4 text-gray-400">
              Global Chem serves as an open source platform where writing the
              molecules directly allows for the name to not be ambiguous to what
              a chemical is anymore and allows for full transparency.
            </p>

            <a
              href="#"
              className="mt-5 inline-block rounded-lg bg-red-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-red-900 focus:outline-none focus:ring focus:ring-red-400"
            >
              Check out our software
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
