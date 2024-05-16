"use client";

import HeroSection from "./components/HeroSection.jsx";
import BuildaWebsite from "./components/BuildaWebsite.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import BlogPostTiles from "./components/BlogPostTiles";
import Technologies from "./components/Technologies.jsx";
import GetInTouch from "./components/GetInTouch.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BuildaWebsite />
      <Process />
      <Services />
      <Technologies />
      <BlogPostTiles />
      <GetInTouch />
    </>
  );
}
