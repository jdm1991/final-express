import { useState, useEffect } from "react";

export default function HeroSection() {
  const [backgroundImage, setBackgroundImage] = useState("Coding.jpeg");
  const [typingAnimation, setTypingAnimation] = useState(true);

  useEffect(() => {
    const backgroundIntervalId = setInterval(() => {
      setBackgroundImage((prevImage) =>
        prevImage === "Coding.jpeg" ? "Countryside.jpeg" : "Coding.jpeg"
      );
    }, 10000);

    const typingIntervalId = setInterval(() => {
      setTypingAnimation((prevAnimation) => !prevAnimation);
    }, 10000);

    return () => {
      clearInterval(backgroundIntervalId);
      clearInterval(typingIntervalId);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
        <div className="text-center text-white max-w-full">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 ${
              typingAnimation ? "typing" : ""
            }`}
          >
            Welcome to Our
            <br />
            Web Design Studio
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8">
            We create stunning and functional websites that bring your vision to
            life.
          </p>
          <button className="bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:bg-yellow-300 transition-colors duration-300 border-2 border-gray-700 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
      <div
        className={`bg-cover bg-center min-h-screen transition-opacity ease-in-out ${
          backgroundImage === "Coding.jpeg" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Coding.jpeg)`,
          transitionDuration: "1s",
        }}
      />
      <div
        className={`bg-cover bg-center min-h-screen absolute inset-0 transition-opacity ease-in-out ${
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
