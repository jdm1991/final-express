"use client";

import { useState, useEffect } from "react";

import HeroSection from "./components/HeroSection";
import BuildaWebsite from "./components/BuildaWebsite";
import Services from "./components/Services";
import Process from "./components/Process";


export default function Home() {
  return (
    <>
      <HeroSection />
      <BuildaWebsite />
      <Process />
      <Services />
    </>
  );
}
