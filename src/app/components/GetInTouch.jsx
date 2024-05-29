// ContactSection.js
import Image from "next/image";

export default function GetInTouch() {
  return (
    <section className="bg-gray-100 py-24 relative">
      <div className="absolute inset-0">
        <Image
          src="/Sandringham2.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">
          Ready to move forward? Let&apos;s get in touch
        </h2>
        <div className="flex justify-center items-center space-x-12">
          <a
            href="tel:+1234567890"
            className="bg-[#34C230] text-white py-6 px-12 rounded-lg text-2xl font-bold hover:bg-[#1c3d2a] hover:scale-105 transition-all duration-300"
          >
            Let&apos;s Chat
          </a>
          <a
            href="/contact"
            className="bg-yellow-400 text-black py-6 px-12 rounded-lg text-2xl font-bold border border-black hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
