import Link from "next/link";

export default function Services() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#255036] mb-10 text-center sm:text-left">
            What We Excel At:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Website Design */}
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-amber-500 p-4 sm:p-6 rounded-lg shadow-md h-full text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1s_ease-in-out_1]"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-shadow relative underline">
                  Website Design
                </h3>
                <div className="mb-12">
                  <p className="text-base sm:text-lg font-medium text-white text-shadow relative">
                    With a committment to excellence, one of our web designers
                    will create a detailed plan that guides our creative
                    direction as we create your website. If you aren&apos;t
                    happy, we aren&apos;t happy, and we will hone your website
                    until it is ready.
                  </p>
                </div>
                <Link
                  href="/webDesign"
                  className="absolute bottom-4 right-4 bg-[#255036] text-white px-4 py-2 rounded-md font-bold hover:bg-yellow-400 hover:text-[#255036] transition duration-300 ease-in-out text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Web Hosting & Maintenance */}
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-cyan-500 p-4 sm:p-6 rounded-lg shadow-md h-full text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1s_ease-in-out_1]"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-shadow relative underline">
                  Web Hosting & Maintenance
                </h3>
                <div className="mb-12">
                  <p className="text-base sm:text-lg font-medium text-white text-shadow relative">
                    Having a website is one thing, ensuring it&apos;s reliably
                    available and well maintained is another. We host your
                    website right here in the U.K, and ensure that everything
                    you need from support, to updates are taken care off.
                  </p>
                </div>
                <Link
                  href="/webHosting"
                  className="absolute bottom-4 right-4 bg-[#255036] text-white px-4 py-2 rounded-md font-bold hover:bg-yellow-400 hover:text-[#255036] transition duration-300 ease-in-out text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* SEO */}
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-pink-500 p-4 sm:p-6 rounded-lg shadow-md h-full text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1s_ease-in-out_1]"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-shadow relative underline">
                  Search Engine Optimization
                </h3>
                <div className="mb-12">
                  <p className="text-base sm:text-lg font-medium text-white text-shadow relative">
                    Ensuring that your website is optimised to be easily found
                    by search engines is one of the most cost effective, and
                    important ways of marketing your business. With our complete
                    SEO service, we&apos;re able to help your website reach its
                    full potential.
                  </p>
                </div>
                <Link
                  href="/seo"
                  className="absolute bottom-4 right-4 bg-[#255036] text-white px-4 py-2 rounded-md font-bold hover:bg-yellow-400 hover:text-[#255036] transition duration-300 ease-in-out text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Website Copywriting */}
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-lime-500 p-4 sm:p-6 rounded-lg shadow-md h-full text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1s_ease-in-out_1]"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-shadow relative underline">
                  Website Copywriting
                </h3>
                <div className="mb-12">
                  <p className="text-base sm:text-lg font-medium text-white text-shadow relative">
                    Unsure what to put on your website? Our expert copywriting
                    team crafts compelling content that is relevant to your
                    audience.
                  </p>
                </div>
                <Link
                  href="/website-copywriting"
                  className="absolute bottom-4 right-4 bg-[#255036] text-white px-4 py-2 rounded-md font-bold hover:bg-yellow-400 hover:text-[#255036] transition duration-300 ease-in-out text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Website Consultancy */}
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-red-500 p-4 sm:p-6 rounded-lg shadow-md h-full text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1s_ease-in-out_1]"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-shadow relative underline">
                  Website Consultancy
                </h3>
                <div className="mb-12">
                  <p className="text-base sm:text-lg font-medium text-white text-shadow relative">
                    If you&apos;re unsure on where to start, if you have a
                    website already and would like some feedback on its
                    strengths and weaknesses, or if you would just like to have
                    a conversation, we are more than happy to help.
                  </p>
                </div>
                <Link
                  href="/website-consultancy"
                  className="absolute bottom-4 right-4 bg-[#255036] text-white px-4 py-2 rounded-md font-bold hover:bg-yellow-400 hover:text-[#255036] transition duration-300 ease-in-out text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
