import GetInTouch from "../components/GetInTouch";
import WebHostingTable from "../components/webHostingTable";

export default function WebHosting() {
  return (
    <div className="bg-white min-h-screen pt-16 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-black">
          Web Hosting & Maintenance
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-12 sm:mb-16 lg:mb-20">
          Your website is a crucial component of your online presence. Regular
          maintenance ensures that it remains secure, performs optimally, and
          stays compatible with the latest web technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
            <div className="bg-amber-500 text-white p-6 rounded-lg h-28 sm:h-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <h3 className="text-xl font-semibold mb-2 relative">
                Security Updates
              </h3>
              <p className="text-sm relative">
                Keep your website secure and protected against vulnerabilities
                and threats.
              </p>
            </div>
          </div>
          <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
            <div className="bg-lime-500 text-white p-6 rounded-lg h-28 sm:h-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <h3 className="text-xl font-semibold mb-2 relative">
                Performance Optimization
              </h3>
              <p className="text-sm relative">
                Ensure your website runs smoothly and efficiently for optimal
                user experience.
              </p>
            </div>
          </div>
          <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
            <div className="bg-cyan-500 text-white p-6 rounded-lg h-28 sm:h-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <h3 className="text-xl font-semibold mb-2 relative">
                Compatibility Updates
              </h3>
              <p className="text-sm relative">
                Keep your website compatible with the latest web technologies
                and browser updates.
              </p>
            </div>
          </div>
          <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
            <div className="bg-pink-500 text-white p-6 rounded-lg h-28 sm:h-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <h3 className="text-xl font-semibold mb-2 relative">
                Backup and Recovery
              </h3>
              <p className="text-sm relative">
                Regular backups to protect your website data and ensure quick
                recovery in case of any issues.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-8 sm:mt-12 mb-4 sm:mb-6 text-[#255036]">
          What's Included?
        </h2>
        <WebHostingTable />
      </div>
      <GetInTouch />
    </div>
  );
}

