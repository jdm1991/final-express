"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaPencilRuler, FaServer, FaChartLine } from "react-icons/fa";

export default function HeroSection() {
  const [backgroundImage, setBackgroundImage] = useState("Coding.jpeg");
  const [typingAnimation, setTypingAnimation] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

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

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const handleOptionClick = (route) => {
    setIsModalOpen(false);
    router.push(`/${route}`);
  };

  const options = [
    { name: "Web Design", route: "webDesign", icon: FaPencilRuler },
    { name: "Web Hosting", route: "webHosting", icon: FaServer },
    { name: "SEO", route: "SEO", icon: FaChartLine },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
        <div className="text-center text-white max-w-full">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 ${
              typingAnimation ? "typing" : ""
            }`}
          >
            Welcome to Our Web Design Studio
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8">
            We create stunning and functional websites that bring your vision to
            life.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-yellow-400 text-black px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold hover:bg-yellow-300 transition-colors duration-300 border-2 border-gray-700 transform hover:scale-105"
          >
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in p-4">
          <div className="bg-[#255036] p-4 sm:p-6 md:p-8 rounded-lg relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-yellow-400 hover:text-yellow-300 text-2xl sm:text-3xl font-bold"
            >
              ✕
            </button>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 md:mb-10 text-center text-white">
              What can we help with?
            </h2>
            <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-4 md:space-x-6">
              {options.map((option) => (
                <div
                  key={option.name}
                  className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 flex-1"
                >
                  <option.icon className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" />
                  <button
                    onClick={() => handleOptionClick(option.route)}
                    className="w-full bg-yellow-400 text-black py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:bg-yellow-300 transition-colors duration-300 border-2 border-gray-700 transform hover:scale-105"
                  >
                    {option.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
