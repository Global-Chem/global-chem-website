export default function CTA() {
  return (
    <section className="py-18 mt-32 mx-auto text-white max-w-max px-8">
      <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-white md:leading-tight sm:text-left md:text-4xl">
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
        <div className="w-full h-full py-48 bg-gray-200"></div>
      </div>
      <div className="grid items-center grid-cols-1 mb-24 mt-12 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="mx-7">
          <h2 className="mb-4 mt-4 text-2xl font-extrabold tracking-tight text-center text-white md:leading-tight sm:text-left md:text-4xl">
            Our Plan
          </h2>
          <p className="mb-5 text-lg text-center text-gray-400 sm:text-left md:text-lg">
            <ul>
              <ol>
                <p className="text-xl pb-2">
                  <span className="font-bold inline-flex">Step 1:</span>
                  Gathering Data From a Diverse Range of Sources
                </p>
                <p className="ml-4 text-gray-400">
                  We aim to gather chemical information from a wide range of
                  sources, including experts in fields such as cooking, cleaning
                  products, makeup, vaccines, and more. By compiling this
                  information, we can create a comprehensive database that helps
                  us understand the chemicals we encounter in our daily lives
                  and assess their safety for general use.
                </p>
              </ol>
              <ol>
                <p className="text-lg pb-2 pt-4">
                  <span className="font-bold inline-flex">Step 2:</span>
                  Developing a Governing AI System Based on Collective Knowledge
                  and Expertise
                </p>
                <p className="ml-4 text-gray-400">
                  We aim to gather chemical information from a wide range of
                  sources, including experts in fields such as cooking, cleaning
                  products, makeup, vaccines, and more. By compiling this
                  information, we can create a comprehensive database that helps
                  us understand the chemicals we encounter in our daily lives
                  and assess their safety for general use.
                </p>
              </ol>
            </ul>
          </p>
        </div>
        <div className="w-full h-full py-48 bg-gray-200 mt-8"></div>
      </div>
    </section>
  );
}
