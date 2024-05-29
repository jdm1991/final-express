import { useState, useEffect } from "react";

export default function HeroSection() {
  const [backgroundImage, setBackgroundImage] = useState("Coding.jpeg");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImage((prevImage) =>
        prevImage === "Coding.jpeg" ? "Countryside.jpeg" : "Coding.jpeg"
      );
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to Our Web Design Studio
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8">
            We create stunning and functional websites that bring your vision to
            life.
          </p>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold hover:bg-yellow-300 transition-colors duration-300 border-2 border-gray-700 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
      <div
        className={`bg-cover bg-center h-full transition-opacity ease-in-out ${
          backgroundImage === "Coding.jpeg" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Coding.jpeg)`,
          transitionDuration: "1s",
        }}
      />
      <div
        className={`bg-cover bg-center h-full absolute inset-0 transition-opacity ease-in-out ${
          backgroundImage === "Countryside.jpeg" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Countryside.jpeg)`,
          transitionDuration: "1s",
        }}
      />
    </div>
  );
}
