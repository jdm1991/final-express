// ContactSection.js
export default function GetInTouch() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#255036] mb-10 text-center">
          Ready to move forward? Let's get in touch
        </h2>
        <div className="flex justify-center items-center space-x-10">
          <a
            href="tel:+1234567890"
            className="bg-[#255036] text-white py-4 px-8 rounded-lg text-xl font-bold hover:bg-[#1c3d2a] hover:scale-105 transition-all duration-300"
          >
            Let's Chat
          </a>
          <a
            href="/contact"
            className="bg-yellow-400 text-black py-4 px-8 rounded-lg text-xl font-bold border border-black hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
