"use client";

import React from "react";
import WebsiteDesignFaqs from "../components/WebsiteDesignFaqs";
import HostingFaqs from "../components/HostingFaqs";
import SeoFaqs from "../components/SeoFaqs";

export default function Faqs() {
  return (
    <div className="bg-white">
      <section
        className="bg-gray-100 pt-24 pb-8 sm:pb-12 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/faqsBackgroundImage.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 sm:pt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-lg mb-6 text-white">
            Find answers to common questions about our services, processes, and
            more. If you can't find what you're looking for, don't hesitate to
            get in touch with us.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <WebsiteDesignFaqs />
        <HostingFaqs />
        <SeoFaqs />
      </div>
    </div>
  );
}
