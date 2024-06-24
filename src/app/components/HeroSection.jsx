"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
    { name: "Web Design", route: "webDesign" },
    { name: "Web Hosting", route: "webHosting" },
    { name: "SEO", route: "SEO" },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
        <div className="text-center text-white max-w-full">
          <h1
            className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${
              typingAnimation ? "typing" : ""
            }`}
          >
            Welcome to Our Web Design Studio
          </h1>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-8">
            We create stunning and functional websites that bring your vision to
            life.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-yellow-400 text-dark-green px-3 xs:px-4 sm:px-6 py-1 xs:py-2 sm:py-3 rounded-full text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:bg-yellow-300 transition-colors duration-300 border-2 border-gray-700 transform hover:scale-105"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white p-6 rounded-lg relative max-w-2xl w-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              I'm looking for...
            </h2>
            <div className="flex justify-between space-x-4">
              {options.map((option) => (
                <button
                  key={option.name}
                  onClick={() => handleOptionClick(option.route)}
                  className="flex-1 bg-yellow-400 text-dark-green py-2 px-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 border-2 border-gray-700 transform hover:scale-105"
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
