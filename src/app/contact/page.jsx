import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-[#255036] text-white p-8 md:p-12 flex flex-col justify-center">
        <div className="mt-8 md:mt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Contact Information
          </h2>

          <div>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="mr-4" size={24} />
              <p className="text-lg md:text-xl">
                123 Main Street
                <br />
                City, Country 12345
              </p>
            </div>
            <div className="flex items-center mb-6">
              <FaEnvelope className="mr-4" size={24} />
              <p className="text-lg md:text-xl">info@example.com</p>
            </div>
            <div className="flex items-center">
              <FaWhatsapp className="mr-4" size={24} />
              <p className="text-lg md:text-xl">+1 234 567 8900</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-[#ffcf40] p-8 md:p-12 flex flex-col justify-center">
        <div className="mt-8 md:mt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Send Us a Message
          </h2>
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg md:text-xl mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 text-lg md:text-xl border-2 border-[#255036] rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg md:text-xl mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 text-lg md:text-xl border-2 border-[#255036] rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg md:text-xl mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 text-lg md:text-xl border-2 border-[#255036] rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#255036] text-white text-lg md:text-xl px-6 py-3 rounded-lg hover:bg-[#1c3d28] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
