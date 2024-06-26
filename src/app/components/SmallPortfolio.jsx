// Portfolio.js
export default function Portfolio() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#255036] mb-6 sm:mb-8 md:mb-10 text-center sm:text-left">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Portfolio Tile 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/Sapphire.png"
                alt="Sapphire"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Sapphire Lash</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                An e-commerce store built for a thriving small business.
              </p>
              <a
                href="https://sapphire-lash.com/"
                className="inline-block bg-[#255036] text-white font-bold py-2 px-4 rounded hover:bg-[#1f412a] transition duration-300 text-sm sm:text-base"
              >
                Visit Page
              </a>
            </div>
          </div>

          {/* Portfolio Tile 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/SkyEstate.png"
                alt="Sky-Estate"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Sky Estate</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Due to a NDA, we can't disclose the actual site, however we have recreated the structure so you can see how it functions. 
              </p>
              <a
                href="#"
                className="inline-block bg-[#255036] text-white font-bold py-2 px-4 rounded hover:bg-[#1f412a] transition duration-300 text-sm sm:text-base"
              >
                Visit Page
              </a>
            </div>
          </div>

          {/* Portfolio Tile 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/portfolio3.jpg"
                alt="Portfolio 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Website 3</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                A brief description of the website goes here.
              </p>
              <a
                href="#"
                className="inline-block bg-[#255036] text-white font-bold py-2 px-4 rounded hover:bg-[#1f412a] transition duration-300 text-sm sm:text-base"
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
