"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";

export default function SEO() {
  return (
    <div className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8">SEO Services</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What is SEO?</h2>
            <p className="text-lg">
              SEO stands for "search engine optimisation." In its simplest form,
              SEO means the process of improving your website to increase its
              visibility on Google, Microsoft Bing, and other search engines
              when people search for your products or services.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Do I need SEO?</h2>
            <p className="text-lg">
              When I work with you to build your website, ongoing SEO is
              optional, but highly recommended in many cases. Here's why my
              clients choose to utilise my SEO skills:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li className="text-lg">Trump your competitors</li>
              <p className="text-base mt-2">
                Investing in SEO is the best way to become more visible than
                your competitors in the search results and avoid losing business
                to competitors ranking above you.
              </p>
              <li className="text-lg mt-4">Don't pay for Ads</li>
              <p className="text-base mt-2">
                Avoid paying through the nose for every single website click!
                Get traffic for free and build a solid online presence that
                lasts longer than Ads.
              </p>
              <li className="text-lg mt-4">24/7 marketing</li>
              <p className="text-base mt-2">
                Making your website visible to those who are searching for your
                services or products feels like you have a 24/7 sales person
                working for your business.
              </p>
              <li className="text-lg mt-4">The right first impression</li>
              <p className="text-base mt-2">
                From my experience, people have always told me they trust
                businesses that rank high in search results. What better way to
                provide the best first impression for your business?
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
