"use client";

import { useState, useEffect } from "react";
import Layout from "./layout";
import HeroSection from "./components/HeroSection";
import BuildaWebsite from "./components/BuildaWebsite";
import Services from "./components/Services"
import Process from "./components/Process"

export default function Home() {
  return (
    <>
    <HeroSection />
      <BuildaWebsite />
      <Services />
      <Process />
    </>
  );
}
