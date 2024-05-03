import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-[#255036] p-8 md:p-16 flex flex-col justify-start items-center relative">
        <div className="bg-white p-8 md:p-12 rounded-lg text-black mt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-black">
            Contact Us
          </h2>
          <div className="mt-8 md:mt-16 text-center max-w-xs md:max-w-md">
            <p className="text-lg md:text-xl mb-12">
              Why not get in touch to find out how we can help you?
            </p>
            <div className="flex flex-col items-center space-y-10">
              <div className="flex items-center">
                <FaEnvelope className="mr-4" size={24} />
                <p className="text-lg md:text-2xl">info@example.com</p>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="mr-4" size={24} />
                <p className="text-lg md:text-2xl">+1 234 567 8900</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-[#ffcf40] p-8 md:p-12 flex flex-col justify-center">
        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why not send us a message instead?
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-xs md:text-base mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-2 py-1 md:px-3 md:py-2 text-xs md:text-base border-2 border-[#255036] rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xs md:text-base mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-2 py-1 md:px-3 md:py-2 text-xs md:text-base border-2 border-[#255036] rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-xs md:text-base mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-2 py-1 md:px-3 md:py-2 text-xs md:text-base border-2 border-[#255036] rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-xs md:text-base mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-2 py-1 md:px-3 md:py-2 text-xs md:text-base border-2 border-[#255036] rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#255036] text-white text-xs md:text-base px-6 py-3 rounded-lg hover:bg-[#1c3d28] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
