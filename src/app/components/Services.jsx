import Link from "next/link";

export default function Services() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#255036] mb-10 text-left">
            What We Excel At
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-amber-500 p-8 rounded-lg shadow-md h-80 text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1s_ease-in-out_1]"></div>
                <h3 className="text-2xl font-bold text-white mb-4 text-shadow relative">
                  Website Design
                </h3>
                <p className="text-lg font-medium text-white text-shadow relative mb-8">
                  We create visually appealing and user-friendly websites that
                  effectively showcase your brand identity.
                </p>
                <Link
                  href="/webDesign"
                  className="absolute bottom-4 right-4 bg-white text-[#255036] px-4 py-2 rounded-md font-bold hover:bg-[#255036] hover:text-white transition duration-300 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-cyan-500 p-8 rounded-lg shadow-md h-80 text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1s_ease-in-out_1]"></div>
                <h3 className="text-2xl font-bold text-white mb-4 text-shadow relative">
                  Web Hosting & Maintenance
                </h3>
                <p className="text-lg font-medium text-white text-shadow relative mb-8">
                  We provide reliable hosting and keep your website optimized
                  and secure.
                </p>
                <Link
                  href="/webHosting"
                  className="absolute bottom-4 right-4 bg-white text-[#255036] px-4 py-2 rounded-md font-bold hover:bg-[#255036] hover:text-white transition duration-300 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-pink-500 p-8 rounded-lg shadow-md h-80 text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1s_ease-in-out_1]"></div>
                <h3 className="text-2xl font-bold text-white mb-4 text-shadow relative">
                  SEO (Search Engine Optimization)
                </h3>
                <p className="text-lg font-medium text-white text-shadow relative mb-8">
                  We implement SEO strategies to improve your website&apos;s
                  visibility and rankings.
                </p>
                <Link
                  href="/seo"
                  className="absolute bottom-4 right-4 bg-white text-[#255036] px-4 py-2 rounded-md font-bold hover:bg-[#255036] hover:text-white transition duration-300 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-lime-500 p-8 rounded-lg shadow-md h-80 text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1s_ease-in-out_1]"></div>
                <h3 className="text-2xl font-bold text-white mb-4 text-shadow relative">
                  Website Copywriting
                </h3>
                <p className="text-lg font-medium text-white text-shadow relative mb-8">
                  Our expert copywriters craft compelling content that
                  captivates your audience.
                </p>
                <Link
                  href="/website-copywriting"
                  className="absolute bottom-4 right-4 bg-white text-[#255036] px-4 py-2 rounded-md font-bold hover:bg-[#255036] hover:text-white transition duration-300 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-red-500 p-8 rounded-lg shadow-md h-80 text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1s_ease-in-out_1]"></div>
                <h3 className="text-2xl font-bold text-white mb-4 text-shadow relative">
                  Website Consultancy
                </h3>
                <p className="text-lg font-medium text-white text-shadow relative mb-8">
                  Our consultants provide expert advice to improve your online
                  presence.
                </p>
                <Link
                  href="/website-consultancy"
                  className="absolute bottom-4 right-4 bg-white text-[#255036] px-4 py-2 rounded-md font-bold hover:bg-[#255036] hover:text-white transition duration-300 ease-in-out"
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
