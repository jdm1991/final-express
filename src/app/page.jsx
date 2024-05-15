"use client";

import { useState, useEffect } from "react";

import HeroSection from "./components/HeroSection.jsx";
import BuildaWebsite from "./components/BuildaWebsite.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import blog from './blog/page.jsx'


export default function Home() {
  return (
    <>
      <HeroSection />
      <BuildaWebsite />
      <Process />
      <Services />
      <blog />
    </>
  );
}
