"use client";

import { useState, useEffect } from "react";

import HeroSection from "./components/heroSection";
import BuildaWebsite from "./components/buildaWebsite";
import Services from "./components/services";
import Process from "./components/process";


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
