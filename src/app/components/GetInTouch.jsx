// ContactSection.js
import Image from "next/image";

export default function GetInTouch() {
  return (
    <section className="bg-gray-100 py-12 md:py-24 relative">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-16 text-center">
          Ready to move forward? Let&apos;s get in touch
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
          
           <a href="tel:+1234567890"
            className="bg-[#34C230] text-white py-4 md:py-6 px-8 md:px-12 rounded-lg text-lg md:text-2xl font-bold hover:bg-[#1c3d2a] hover:scale-105 transition-all duration-300 w-full md:w-auto text-center"
          >
            Let&apos;s Chat
          </a>
          
           <a href="/contact"
            className="bg-yellow-400 text-black py-4 md:py-6 px-8 md:px-12 rounded-lg text-lg md:text-2xl font-bold border border-black hover:bg-yellow-500 hover:scale-105 transition-all duration-300 w-full md:w-auto text-center"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}