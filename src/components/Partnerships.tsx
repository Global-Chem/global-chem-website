import Image from "next/image";

export default function Sponsors() {
    const sponsors = [
        {
            name: "Exsens",
            logo: "/logos/exsens.webp",
        },
        {
            name: "Venustas Law",
            logo: "/logos/venustas.webp",
        },
        {
            name: "PotCoin",
            logo: "/logos/potcoin.webp",
        },
        {
            name: "Becca's Extra Edibles",
            logo: "/logos/beccasEdibles.webp",
        }
    ]
  return (
    <section className="relative pt-28 pb-28 bg-blueGray-100 overflow-hidden">
      <div className="relative z-10 container px-4 mx-auto">
        <p className="mb-8 text-gray-200 text-center font-semibold uppercase tracking-px">
          Our Partnerships
        </p>
        <div className="flex flex-wrap max-w-5xl mx-auto -m-3">
            {sponsors.map((sponsor) => (
                    <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                        <div className="flex items-center justify-center h-full bg-white rounded-3xl">
                            <Image 
                                src={sponsor.logo}
                                alt={sponsor.name + " logo"}
                                width={130}
                                height={90}

                            />
                        </div>
                    </div>
                ))}
        </div>
      </div>
    </section>
  );
}
