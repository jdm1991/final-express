import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row md:h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-[#255036] p-8 md:p-16 flex flex-col justify-center items-center relative md:h-full">
        {/* Blurred black gradient background */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-black to-black blur-xl opacity-10"></div>

        <div className="relative z-10 bg-white p-8 md:p-12 rounded-lg text-black border border-black/10 shadow-[0_0_0_10px_rgba(0,0,0,0.1)]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-black">
            Contact Us
          </h2>
          <div className="mt-8 md:mt-16 text-center max-w-xs md:max-w-md">
            <p className="text-lg md:text-xl mb-12">
              Why not get in touch to find out how we can help you?
            </p>
            <div className="flex flex-col items-center space-y-10">
              <div className="flex items-center hover:text-[#ffcf40] hover:bg-gold hover:scale-105 transition duration-300 rounded-md p-2">
                <FaEnvelope className="mr-4" size={24} />
                <p className="text-lg md:text-2xl">
                  info@expresswebdesigns.co.uk
                </p>
              </div>
              <div className="flex items-center hover:text-[#ffcf40] hover:bg-gold hover:scale-105 transition duration-300 rounded-md p-2">
                <FaWhatsapp className="mr-4" size={24} />
                <p className="text-lg md:text-2xl">+1 234 567 8900</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full md:w-1/2 bg-cover bg-center md:h-full"
        style={{
          backgroundImage: "url('/tablet.jpeg')",
        }}
      >
        <div className="p-8 md:p-12 flex flex-col justify-center h-full">
          <div className="mt-8 md:mt-12 bg-white/80 p-5 rounded-lg max-h-[80vh]">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Why not send us a message instead?
            </h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="block text-xs md:text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-2 py-1 md:px-3 md:py-2 text-xs md:text-base border-2 border-[#255036] rounded"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm mb-1"
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
              <div className="mb-3">
                <label
                  htmlFor="phone"
                  className="block text-xs md:text-sm mb-1"
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
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-xs md:text-sm mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="w-full px-2 py-1 md:px-3 md:py-2 text-xs md:text-base border-2 border-[#255036] rounded"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center bg-black text-white font-medium py-3 px-6 rounded-md hover:bg-[#ffcf40] hover:text-black transition duration-300 hover:scale-105"
              >
                <span>Send Message</span>
                <span className="ml-2">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
