"use client";

import FadeInSection from "./components/FadeInSection";
import HeroSection from "./components/HeroSection.jsx";
import BuildaWebsite from "./components/BuildaWebsite.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import BlogPostTiles from "./components/BlogPostTiles";
import Technologies from "./components/Technologies.jsx";
import GetInTouch from "./components/GetInTouch.jsx";
import SmallPortfolio from "./components/SmallPortfolio.jsx";

export default function Home() {
  return (
    <div className="">
      {" "}
      {/* Adjusted spacing between sections */}
      <FadeInSection>
        <HeroSection />
      </FadeInSection>
      <FadeInSection>
        <BuildaWebsite />
      </FadeInSection>
      <FadeInSection>
        <Process />
      </FadeInSection>
      <FadeInSection>
        <Services />
      </FadeInSection>
      <FadeInSection>
        <SmallPortfolio />
      </FadeInSection>
      <FadeInSection>
        <Technologies />
      </FadeInSection>
      <FadeInSection>
        <BlogPostTiles />
      </FadeInSection>
      <FadeInSection>
        <GetInTouch />
      </FadeInSection>
    </div>
  );
}
