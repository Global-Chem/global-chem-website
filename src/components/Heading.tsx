import Image from "next/image";

export default function Heading() {
  return (
    <header aria-label="Site Header" className="shadow-sm px-8">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <div className="gap-4">
          <a href="#">
            <Image
              src="/assets/globalChemLogo.png"
              alt="Global Chem's logo"
              width={100}
              height={50}
            />
            <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
          </a>
        </div>

        <div className="items-center gap-4 lg:flex">
          <a
            href="#"
            className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600 hidden md:inline-flex transition hover:bg-gray-200"
          >
            Our Software
          </a>

          <a
            href="#"
            className="rounded-lg bg-red-800 px-5 py-2 text-sm font-medium text-white transition hover:bg-red-900"
          >
            Join our community!
          </a>
        </div>
      </div>
    </header>
  );
}
