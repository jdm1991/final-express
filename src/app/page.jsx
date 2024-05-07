"use client";

import { useState, useEffect } from "react";

import heroSection from "./components/heroSection";
import buildaWebsite from "./components/buildaWebsite";
import services from "./components/services";
import process from "./components/process";


export default function Home() {
  return (
    <>
      <heroSection />
      <buildaWebsite />
      <process />
      <services />
    </>
  );
}
