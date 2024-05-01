import { FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

export default function Process() {
  return (
    <>
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#255036] mb-8 text-left">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-60">
              <FaPencilRuler className="text-4xl text-[#255036] mb-4" />
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-600">
                We create visually appealing and user-friendly designs that
                align with your brand identity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-60">
              <FaCode className="text-4xl text-[#255036] mb-4" />
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-600">
                Our skilled developers bring your designs to life with clean and
                efficient code.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-60">
              <FaRocket className="text-4xl text-[#255036] mb-4" />
              <h3 className="text-xl font-bold mb-2">Launch</h3>
              <p className="text-gray-600">
                We ensure a smooth launch of your website and provide ongoing
                support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
