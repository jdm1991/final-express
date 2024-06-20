"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";
import GetInTouch from "../components/GetInTouch";
import SeoFaqs from "../components/SeoFaqs";


export default function SEO() {
  return (
    <div className="bg-white">
      <section
        className="bg-gray-100 pt-24 pb-8 sm:pb-12 md:pb-16 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/SEOpic.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 sm:pt-8 md:pt-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            SEO
          </h1>
          <p className="text-lg mb-6 text-white">
            SEO stands for "search engine optimisation." In its simplest form,
            SEO means the process of improving your website to increase its
            visibility on Google, Microsoft Bing, and other search engines when
            people search for your products or services.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-[#255036]">
          What is SEO and do I need it?
        </h2>
        <p className="text-lg mb-6">
          When I work with you to build your website, ongoing SEO is optional,
          but highly recommended in many cases. Here's why my clients choose to
          utilise my SEO skills:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
            <div className="bg-amber-500 text-white p-6 rounded-lg h-auto sm:h-40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <h3 className="text-xl font-semibold mb-2 relative">
                Trump your competitors
              </h3>
              <p className="text-sm relative">
                Investing in SEO is the best way to become more visible than
                your competitors in the search results and avoid losing business
                to competitors ranking above you.
              </p>
            </div>
          </div>
          <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
            <div className="bg-lime-500 text-white p-6 rounded-lg h-auto sm:h-40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <h3 className="text-xl font-semibold mb-2 relative">
                Don't pay for Ads
              </h3>
              <p className="text-sm relative">
                Avoid paying through the nose for every single website click!
                Get traffic for free and build a solid online presence that
                lasts longer than Ads.
              </p>
            </div>
          </div>
          <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
            <div className="bg-cyan-500 text-white p-6 rounded-lg h-auto sm:h-40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <h3 className="text-xl font-semibold mb-2 relative">
                24/7 marketing
              </h3>
              <p className="text-sm relative">
                Making your website visible to those who are searching for your
                services or products feels like you have a 24/7 sales person
                working for your business.
              </p>
            </div>
          </div>
          <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
            <div className="bg-red-500 text-white p-6 rounded-lg h-auto sm:h-40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <h3 className="text-xl font-semibold mb-2 relative">
                The right first impression
              </h3>
              <p className="text-sm relative">
                From my experience, people have always told me they trust
                businesses that rank high in search results. What better way to
                provide the best first impression for your business?
              </p>
            </div>
          </div>
        </div>
      </div>
      <SeoFaqs />
      <GetInTouch />
    </div>
  );
}
