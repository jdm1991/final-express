"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const data = [
  {
    id: 1,
    question: "What is SEO?",
    answer:
      "SEO stands for Search Engine Optimization. It's the practice of improving your website to increase its visibility when people search for products or services related to your business on search engines like Google. The goal is to appear higher in search results, making it more likely for users to click on your site.",
  },
  {
    id: 2,
    question: "Why is SEO important?",
    answer:
      "SEO is crucial because it helps your website become more visible to potential customers without paying for ads. Higher rankings in search results can lead to increased organic traffic, better brand awareness, and more credibility. This can result in more leads, sales, and long-term growth for your business.",
  },
  {
    id: 3,
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term strategy, and results typically don't happen overnight. Generally, you might start seeing initial improvements in 3-6 months, but significant results often take 6-12 months or more. The timeline can vary based on factors like your website's current state, competition, and the consistency of your SEO efforts.",
  },
  {
    id: 4,
    question: "What factors influence SEO?",
    answer:
      "Many factors affect SEO, including: 1) Quality content that matches user intent, 2) Website structure and technical optimization, 3) Mobile-friendliness, 4) Page load speed, 5) Backlinks from reputable sites, 6) User experience signals like time on site and bounce rate, 7) Local SEO factors for businesses with physical locations, and 8) Social signals and online reputation.",
  },
  {
    id: 5,
    question: "Can I do SEO myself, or should I hire a professional?",
    answer:
      "While you can learn and implement basic SEO practices yourself, hiring a professional often yields better results, especially for competitive industries. SEO professionals stay up-to-date with the latest trends and algorithm changes, have experience with various tools, and can develop comprehensive strategies. For small businesses or personal websites, learning DIY SEO can be a good starting point.",
  },
  {
    id: 6,
    question: "How does mobile optimization affect SEO?",
    answer:
      "Mobile optimization is crucial for SEO because Google uses mobile-first indexing. This means Google primarily uses the mobile version of your site for ranking and indexing. A mobile-friendly website improves user experience, reduces bounce rates, and can lead to higher search rankings. Ensure your site is responsive, loads quickly on mobile devices, and provides a seamless experience across all screen sizes.",
  },
  {
    id: 7,
    question: "What's the difference between on-page and off-page SEO?",
    answer:
      "On-page SEO refers to optimizations you make directly on your website, such as improving content quality, optimizing title tags and meta descriptions, ensuring proper header structure, and improving site speed. Off-page SEO involves actions taken outside of your website to improve its search engine rankings, primarily through building high-quality backlinks from other reputable websites.",
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
