import Image from "next/image";

export default function Sponsors() {
    const sponsors = [
        {
            name: "Exsens",
            logo: "/logos/exsens.webp",
        },
        {
            name: "Sponsor 2",
            logo: "https://picsum.photos/seed/picsum/200/100",
        },
        {
            name: "Sponsor 3",
            logo: "https://picsum.photos/seed/picsum/200/100",
        },
        {
            name: "Sponsor 4",
            logo: "https://picsum.photos/seed/picsum/200/100",
        }
    ]
  return (
    <section className="relative pt-28 pb-28 bg-blueGray-100 overflow-hidden">
      <img
        className="absolute top-0 left-0"
        src="flaro-assets/images/logos/gradient3.svg"
        alt=""
      />
      <div className="relative z-10 container px-4 mx-auto">
        <p className="mb-8 text-gray-200 text-center font-semibold uppercase tracking-px">
          Our Partnerships
        </p>
        <div className="flex flex-wrap max-w-5xl mx-auto -m-3">
            {sponsors.map((sponsor) => (
                    <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                        <div className="flex items-center justify-center py-2 px-3 h-full bg-white rounded-3xl">
                            <Image 
                                src={sponsor.logo}
                                alt={sponsor.name + " logo"}
                                width={200}
                                height={100}
                                className="my-auto"
                            />
                        </div>
                    </div>
                ))}
        </div>
      </div>
    </section>
  );
}
