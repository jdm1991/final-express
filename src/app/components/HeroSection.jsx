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
        {/* Your hero content goes here */}
        <div className="text-center text-white px-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Welcome to Our Web Design Studio
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-8">
            We create stunning and functional websites that bring your vision to
            life.
          </p>
        </div>
      </div>
      <div
        className={`bg-cover bg-center h-full transition-opacity ease-in-out ${
          backgroundImage === "Coding.jpeg" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Coding.jpeg)`,
          transitionDuration: "1s", // Adjust the transition duration here
        }}
      />
      <div
        className={`bg-cover bg-center h-full absolute inset-0 transition-opacity ease-in-out ${
          backgroundImage === "Countryside.jpeg" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Countryside.jpeg)`,
          transitionDuration: "1s", // Adjust the transition duration here
        }}
      />
    </div>
  );
}
