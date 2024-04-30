"use client";

import { useState, useEffect } from "react";
import Layout from "./layout";

export default function Home() {
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
    <div className="min-h-screen relative overflow-hidden">
      <div
        className={`bg-cover bg-center absolute inset-0 transition-transform ease-in-out ${
          backgroundImage === "Coding.jpeg" ? "slide-in" : "slide-out"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Coding.jpeg)`,
          transitionDuration: "3s", // Adjust the transition duration here
        }}
      ></div>
      <div
        className={`bg-cover bg-center absolute inset-0 transition-transform ease-in-out ${
          backgroundImage === "Countryside.jpeg" ? "slide-in" : "slide-out"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Countryside.jpeg)`,
          transitionDuration: "3s", // Adjust the transition duration here
        }}
      ></div>
      <Layout>{/* Rest of your content */}</Layout>
    </div>
  );
}
