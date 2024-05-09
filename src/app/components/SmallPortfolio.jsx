// Portfolio.js
export default function Portfolio() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#255036] mb-10 text-left">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Portfolio Tile 1 */}
          <div className="bg-white rounded-lg shadow-md h-[350px] hover:scale-105 transition-all duration-300">
            <img
              src="/portfolio1.jpg"
              alt="Portfolio 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Website 1</h3>
              <p className="text-gray-600 mb-4">
                A brief description of the website goes here.
              </p>
              <a
                href="#"
                className="inline-block bg-[#255036] text-white font-bold py-2 px-4 rounded hover:bg-[#1f412a] transition duration-300"
              >
                Visit Page
              </a>
            </div>
          </div>

          {/* Portfolio Tile 2 */}
          <div className="bg-white rounded-lg shadow-md h-[350px] hover:scale-105 transition-all duration-300">
            <img
              src="/portfolio2.jpg"
              alt="Portfolio 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Website 2</h3>
              <p className="text-gray-600 mb-4">
                A brief description of the website goes here.
              </p>
              <a
                href="#"
                className="inline-block bg-[#255036] text-white font-bold py-2 px-4 rounded hover:bg-[#1f412a] transition duration-300"
              >
                Visit Page
              </a>
            </div>
          </div>

          {/* Portfolio Tile 3 */}
          <div className="bg-white rounded-lg shadow-md h-[350px] hover:scale-105 transition-all duration-300">
            <img
              src="/portfolio3.jpg"
              alt="Portfolio 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Website 3</h3>
              <p className="text-gray-600 mb-4">
                A brief description of the website goes here.
              </p>
              <a
                href="#"
                className="inline-block bg-[#255036] text-white font-bold py-2 px-4 rounded hover:bg-[#1f412a] transition duration-300"
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
