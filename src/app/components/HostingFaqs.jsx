"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const data = [
  {
    id: 1,
    question: "What is web hosting and why is it important?",
    answer:
      "Web hosting is a service that allows your website to be accessible on the internet. It's crucial for your online presence as it ensures your website performs well and is properly maintained. Our hosting solutions are tailored to meet the diverse needs of our customers, providing the necessary support to keep your website running smoothly and effectively.",
  },
  {
    id: 2,
    question: "What's included in your web hosting plans?",
    answer:
      "All our web hosting plans include essential features to keep your website secure and performing optimally. These include: 1) Regular security updates to protect against vulnerabilities and threats. 2) Performance optimization through caching, minification, and other techniques. 3) Compatibility updates to ensure your site works across different devices and browsers. 4) Regular backups and recovery options to protect your website data.",
  },
  {
    id: 3,
    question: "How do you ensure the security of hosted websites?",
    answer:
      "We take website security seriously. Our team regularly monitors and applies necessary security patches to maintain the integrity of your website. We implement robust measures to protect against vulnerabilities and threats, ensuring your website and its data remain secure.",
  },
  {
    id: 4,
    question: "What kind of performance optimization do you offer?",
    answer:
      "We focus on ensuring your website runs smoothly and efficiently for optimal user experience. Our performance optimization includes implementing caching mechanisms, minification of code and resources, and other advanced techniques. These optimizations help improve your website's loading speed and overall performance.",
  },
  {
    id: 5,
    question: "How do you handle website backups and recovery?",
    answer:
      "We understand the importance of your website data. That's why we perform regular backups to protect your information. In case of any issues, we maintain secure backups of your website, allowing for swift restoration if needed. This ensures business continuity and peace of mind.",
  },
  {
    id: 6,
    question:
      "Do you offer support for keeping my website up-to-date with the latest web technologies?",
    answer:
      "Yes, we provide compatibility updates as part of our hosting service. We ensure that your website remains compatible with the latest web technologies and browser updates. This means your website will stay fully functional and accessible across different devices and browsers, providing a consistent experience for all your visitors.",
  },
  {
    id: 7,
    question:
      "What kind of support can I expect with your web hosting services?",
    answer:
      "We offer comprehensive support to ensure your website performs optimally. This includes regular monitoring, applying necessary updates, and addressing any issues that may arise. Our goal is to provide you with peace of mind, knowing that your website is in capable hands and will remain an effective tool for your online presence.",
  },
];

export default function HostingFaqs() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAccordion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#255036]">
        Web Hosting &amp; Maintenance Frequently Asked Questions
      </h2>
      {data.map((faq) => (
        <div
          key={faq.id}
          className="border border-gray-300 rounded-md mb-4 overflow-hidden"
        >
          <button
            className={`flex justify-between items-center w-full px-4 py-3 sm:px-6 sm:py-4 text-left text-base sm:text-lg font-medium text-gray-700 focus:outline-none transition-colors duration-300 ${
              activeQuestion === faq.id
                ? "bg-[#255036] text-white"
                : "hover:bg-[#255036] hover:text-white"
            }`}
            onClick={() => toggleAccordion(faq.id)}
          >
            <span>{faq.question}</span>
            <ChevronDownIcon
              className={`${
                activeQuestion === faq.id ? "transform rotate-180" : ""
              } w-5 h-5 text-gray-500 transition-transform duration-300`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeQuestion === faq.id
                ? "max-h-96 ease-in-out bg-[#255036]"
                : "max-h-0 ease-in-out"
            }`}
          >
            <div className="px-4 py-3 sm:px-6 sm:py-4 text-white">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
