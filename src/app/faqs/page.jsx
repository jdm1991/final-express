"use client";

import React from "react";
import WebsiteDesignFaqs from "../components/WebsiteDesignFaqs";
import HostingFaqs from "../components/HostingFaqs";
import SeoFaqs from "../components/SeoFaqs";
import FadeInSection from "../components/FadeInSection";

export default function Faqs() {
  return (
    <FadeInSection>
      <div className="bg-white">
        <section
          className="bg-gray-100 pt-20 pb-8 sm:pt-24 sm:pb-12 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/FAQ.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10 pt-4 sm:pt-8">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white leading-tight tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-sm xs:text-base sm:text-lg mb-6 text-white">
              Find answers to common questions about our services, processes,
              and more. If you can&apos;t find what you&apos;re looking for,
              don&apos;t hesitate to get in touch with us.
            </p>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <WebsiteDesignFaqs />
          <HostingFaqs />
          <SeoFaqs />
        </div>
      </div>
    </FadeInSection>
  );
}
