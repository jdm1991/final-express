"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";
import GetInTouch from "../components/GetInTouch";

export default function SEO() {
  return (
    <div className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="py-12">
          <h1 className="text-6xl font-bold mb-8">
            SEO (Search Engine Optimization)
          </h1>
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">
              What is SEO and do I need it?
            </h2>
            <p className={`text-lg mb-4`}>
              SEO stands for &quot;search engine optimisation.&quot; In its
              simplest form, SEO means the process of improving your website to
              increase its visibility on Google, Microsoft Bing, and other
              search engines when people search for your products or services.
            </p>
            <p className={`text-lg`}>
              When I work with you to build your website, ongoing SEO is
              optional, but highly recommended in many cases. Here&apos;s why my
              clients choose to utilise my SEO skills:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
              <div className="bg-amber-500 p-8 rounded-lg shadow-md h-60 text-left">
                <h3 className="text-3xl font-bold text-white mb-4 text-shadow">
                  Trump your competitors
                </h3>
                <p className="text-lg font-medium text-white text-shadow">
                  Investing in SEO is the best way to become more visible than
                  your competitors in the search results and avoid losing
                  business to competitors ranking above you.
                </p>
              </div>
            </div>
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
              <div className="bg-lime-500 p-8 rounded-lg shadow-md h-60 text-left">
                <h3 className="text-3xl font-bold text-white mb-4 text-shadow">
                  Don&apos;t pay for Ads
                </h3>
                <p className="text-lg font-medium text-white text-shadow">
                  Avoid paying through the nose for every single website click!
                  Get traffic for free and build a solid online presence that
                  lasts longer than Ads.
                </p>
              </div>
            </div>
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
              <div className="bg-cyan-500 p-8 rounded-lg shadow-md h-60 text-left">
                <h3 className="text-3xl font-bold text-white mb-4 text-shadow">
                  24/7 marketing
                </h3>
                <p className="text-lg font-medium text-white text-shadow">
                  Making your website visible to those who are searching for
                  your services or products feels like you have a 24/7 sales
                  person working for your business.
                </p>
              </div>
            </div>
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
              <div className="bg-red-500 p-8 rounded-lg shadow-md h-60 text-left">
                <h3 className="text-3xl font-bold text-white mb-4 text-shadow">
                  The right first impression
                </h3>
                <p className="text-lg font-medium text-white text-shadow">
                  From my experience, people have always told me they trust
                  businesses that rank high in search results. What better way
                  to provide the best first impression for your business?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
