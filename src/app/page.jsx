import FadeInSection from "./components/FadeInSection";
import HeroSection from "./components/HeroSection.jsx";
import BuildaWebsite from "./components/BuildaWebsite.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import BlogPostTiles from "./components/BlogPostTiles";
import Technologies from "./components/Technologies.jsx";
import GetInTouch from "./components/GetInTouch.jsx";
import SmallPortfolio from "./components/SmallPortfolio.jsx";

export const metadata = {
  title: "Express Web Design | Professional Web Design & Development Services",
  description:
    "Express Web offers expert web design, development, and SEO services. Create stunning, functional websites tailored for your business needs.",
};

export default function Home() {
  return (
    <div className="">
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
