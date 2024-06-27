import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#255036] mb-8 sm:mb-10 md:mb-12 text-center sm:text-left">
          Examples From Our Portfolio:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {/* Portfolio Tile 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-56 w-full relative">
              <Image
                src="/Sapphire.png"
                alt="Sapphire"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <div className="p-6 flex flex-col h-64">
              <h3 className="text-xl font-bold truncate mb-4">Sapphire Lash</h3>
              <p className="text-gray-600 text-sm mb-6">
                An e-commerce store built for a thriving small business.
              </p>

              <a
                href="https://sapphire-lash.com/"
                className="mt-auto inline-block bg-[#255036] text-white font-bold py-3 px-6 rounded hover:bg-[#1f412a] transition duration-300 text-sm text-center"
              >
                Visit Page
              </a>
            </div>
          </div>
          {/* Portfolio Tile 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-56 w-full relative">
              <Image
                src="/SkyEstate.png"
                alt="Sky-Estate"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <div className="p-6 flex flex-col h-64">
              <h3 className="text-xl font-bold truncate mb-4">Sky Estate</h3>
              <p className="text-gray-600 text-sm mb-6">
                Due to a NDA, we can&apos;t disclose the actual site, however we
                have recreated the structure so you can see how it functions.
              </p>

              <a
                href="https://sky-estate.netlify.app/"
                className="mt-auto inline-block bg-[#255036] text-white font-bold py-3 px-6 rounded hover:bg-[#1f412a] transition duration-300 text-sm text-center"
              >
                Visit Page
              </a>
            </div>
          </div>
          {/* Portfolio Tile 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-56 w-full relative">
              <Image
                src="/wildBeauty.jpeg"
                alt="Wild Beauty"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
            <div className="p-6 flex flex-col h-64">
              <h3 className="text-xl font-bold truncate mb-4">Wild Beauty</h3>
              <p className="text-gray-600 text-sm mb-6">
                A small e-commerce store designed to optimise and sell a range
                of beauty products for a fledgling business.
              </p>

              <a
                href="https://wildbeauty.uk/"
                className="mt-auto inline-block bg-[#255036] text-white font-bold py-3 px-6 rounded hover:bg-[#1f412a] transition duration-300 text-sm text-center"
              >
                Visit Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}