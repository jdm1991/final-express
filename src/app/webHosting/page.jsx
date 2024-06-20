import GetInTouch from "../components/GetInTouch";
import WebHostingTable from "../components/webHostingTable";
import HostingFaqs from "../components/HostingFaqs";

export default function WebHosting() {
  return (
    <div className="bg-white">
      <section
        className="bg-gray-100 pt-24 pb-8 sm:pb-12 md:pb-16 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/websiteHostingpic.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 sm:pt-8 md:pt-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Web Hosting & Maintenance
          </h1>
          <p className="text-lg mb-6 text-white">
            Your website is a crucial component of your online presence, which
            is why we offer tailored solutions for all our customers. Our goal
            is to ensure that your website not only performs as it should but is
            also properly maintained. With our range of hosting options, we
            provide the support you need to keep your website running smoothly
            and effectively.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-[#255036]">
          All Our Plans Include:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
            <div className="bg-amber-500 text-white p-6 rounded-lg h-auto sm:h-40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <h3 className="text-xl font-semibold mb-2 relative">
                Security Updates
              </h3>
              <p className="text-sm relative">
                Keep your website secure and protected against vulnerabilities
                and threats. Our team will regularly monitor and apply necessary
                security patches to maintain the integrity of your website.
              </p>
            </div>
          </div>
          <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
            <div className="bg-lime-500 text-white p-6 rounded-lg h-auto sm:h-40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <h3 className="text-xl font-semibold mb-2 relative">
                Performance Optimization
              </h3>
              <p className="text-sm relative">
                Ensure your website runs smoothly and efficiently for optimal
                user experience. We will fine-tune your website's performance by
                implementing caching, minification, and other optimization
                techniques.
              </p>
            </div>
          </div>
          <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
            <div className="bg-cyan-500 text-white p-6 rounded-lg h-auto sm:h-40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <h3 className="text-xl font-semibold mb-2 relative">
                Compatibility Updates
              </h3>
              <p className="text-sm relative">
                Keep your website compatible with the latest web technologies
                and browser updates. We will ensure that your website remains
                fully functional and accessible across different devices and
                browsers.
              </p>
            </div>
          </div>
          <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
            <div className="bg-pink-500 text-white p-6 rounded-lg h-auto sm:h-40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <h3 className="text-xl font-semibold mb-2 relative">
                Backup and Recovery
              </h3>
              <p className="text-sm relative">
                Regular backups to protect your website data and ensure quick
                recovery in case of any issues. We will create and maintain
                secure backups of your website, allowing for swift restoration
                if needed.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-8 sm:mt-12 mb-4 sm:mb-6 text-[#255036]">
          What&apos;s Included?
        </h2>
        <WebHostingTable />
        <HostingFaqs />
      </div>
      <GetInTouch />
    </div>
  );
}
