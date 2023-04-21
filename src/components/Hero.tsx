import Image from "next/image";
import Globe from "./Globe";

export default function Hero() {
  const width = 600;
  const height = 600;
  return (
    <section>
      <div className="mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="block grid-cols-1 gap-8 lg:flex lg:grid-cols-2 lg:gap-16">
          <div className="hidden lg:flex">
            <Globe width={width} height={height} />
          </div>

          <div className="max-w-2xl lg:py-20 lg:w-1/2 mx-auto">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-8xl text-white">
              Global Chemistry
            </h1>

            <p className="mt-4 text-gray-400">
              Global Chem serves as an open source platform where writing the
              molecules directly allows for the name to not be ambiguous to what
              a chemical is is anymore and allows for full transparency.
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
