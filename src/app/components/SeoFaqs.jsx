"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const data = [
  {
    id: 1,
    question: "What is SEO?",
    answer:
      "SEO stands for Search Engine Optimization. It is the practice of optimizing a website to improve its visibility and ranking in search engine results pages (SERPs).",
  },
  {
    id: 2,
    question: "Why is SEO important?",
    answer:
      "SEO is important because it helps your website rank higher in search engine results, making it more visible to potential customers. This can lead to increased traffic, brand awareness, and ultimately, more business.",
  },
  {
    id: 3,
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is an ongoing process, and the time it takes to see results varies. It can take several months to start seeing significant improvements in search engine rankings.",
  },
  {
    id: 4,
    question: "What factors influence SEO?",
    answer:
      "Several factors influence SEO, including website content, structure, performance, backlinks, and user experience. Search engines use complex algorithms to evaluate these factors and determine rankings.",
  },
];

export default function SeoFaqs() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAccordion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-black">
        SEO Frequently Asked Questions
      </h1>
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
