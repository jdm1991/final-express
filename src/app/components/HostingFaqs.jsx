"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const data = [
  {
    id: 1,
    question: "What is web hosting?",
    answer:
      "Web hosting is a service that allows individuals and organizations to make their websites accessible on the internet. It provides storage space and resources on a server to host website files and data.",
  },
  {
    id: 2,
    question: "Why is website maintenance important?",
    answer:
      "Website maintenance is crucial to ensure that your website remains secure, up-to-date, and functioning properly. Regular maintenance tasks include updating software, monitoring performance, fixing bugs, and making necessary improvements.",
  },
  {
    id: 3,
    question: "What types of web hosting are available?",
    answer:
      "There are several types of web hosting, including shared hosting, VPS (Virtual Private Server) hosting, dedicated hosting, and cloud hosting. Each type offers different levels of resources, control, and scalability.",
  },
  {
    id: 4,
    question: "How often should I perform website maintenance?",
    answer:
      "The frequency of website maintenance depends on various factors, such as the size and complexity of your website, the amount of traffic it receives, and the nature of your business. Generally, it's recommended to perform routine maintenance tasks at least once a month.",
  },
];

export default function HostingFaqs() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAccordion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-black">
        Web Hosting & Maintenance FAQs
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
