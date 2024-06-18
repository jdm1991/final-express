"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const data = [
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
  {
    id: 3,
    question: "What are the key elements of a good website design?",
    answer:
      "A good website design should have a clear and intuitive navigation, attractive visual elements, responsive layout, fast loading speed, and engaging content that effectively communicates the website's purpose.",
  },
  {
    id: 4,
    question: "Can I update the content of my website after it's designed?",
    answer:
      "Yes, it's important to have a content management system (CMS) in place that allows you to easily update and manage the content of your website after it's designed. This ensures that your website stays up to date and relevant.",
  },
];

export default function WebsiteDesignFaqs() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAccordion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-black">
        Website Design Frequently Asked Questions
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
