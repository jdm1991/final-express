"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    category: "Website Design",
    questions: [
      {
        id: 1,
        question: "What is the process for designing a website?",
        answer:
          "The process for designing a website typically involves gathering requirements, creating wireframes, designing the visual elements, and developing the website using HTML, CSS, and JavaScript.",
      },
      {
        id: 2,
        question: "How long does it take to design a website?",
        answer:
          "The timeline for designing a website varies depending on the complexity of the project. It can range from a few weeks to several months.",
      },
    ],
  },
  {
    category: "Hosting and Maintenance",
    questions: [
      {
        id: 3,
        question: "What is web hosting?",
        answer:
          "Web hosting is a service that allows websites to be accessible on the internet. It provides storage space and resources for websites to be published and accessed by users.",
      },
      {
        id: 4,
        question: "What does website maintenance involve?",
        answer:
          "Website maintenance involves tasks such as updating content, fixing bugs, monitoring performance, and ensuring the website remains secure and up to date.",
      },
    ],
  },
  {
    category: "SEO",
    questions: [
      {
        id: 5,
        question: "What is SEO?",
        answer:
          "SEO stands for Search Engine Optimization. It is the practice of optimizing a website to improve its visibility and ranking in search engine results pages (SERPs).",
      },
      {
        id: 6,
        question: "How long does it take to see SEO results?",
        answer:
          "SEO is an ongoing process, and the time it takes to see results varies. It can take several months to start seeing significant improvements in search engine rankings.",
      },
    ],
  },
];

export default function Faqs() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAccordion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ paddingTop: "8rem" }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-black">
        Frequently Asked Questions
      </h1>
      {faqs.map((faqCategory, categoryIndex) => (
        <div key={categoryIndex} className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">
            {faqCategory.category}
          </h2>
          {faqCategory.questions.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-300 rounded-md mb-4 sm:mb-6 overflow-hidden"
            >
              <button
                className={`flex justify-between items-center w-full px-4 py-2 sm:px-6 sm:py-3 text-left text-base sm:text-lg font-medium text-gray-700 focus:outline-none transition-colors duration-300 ${
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
                  } w-5 h-5 text-gray-500 transition-transform duration-1000`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-1000 ${
                  activeQuestion === faq.id
                    ? "max-h-96 ease-in-out bg-[#255036]"
                    : "max-h-0 ease-in-out"
                }`}
              >
                <div className="px-4 py-2 sm:px-6 sm:py-3 text-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
