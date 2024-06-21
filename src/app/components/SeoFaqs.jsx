"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const data = [
  {
    id: 1,
    question: "What is SEO and why is it important?",
    answer:
      "SEO stands for Search Engine Optimization. It's the practice of optimizing your website to increase its visibility for relevant searches. The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business.",
  },
  {
    id: 2,
    question: "What SEO services do you offer?",
    answer:
      "We offer a range of SEO services including keyword research, on-page optimization, content creation, link building, technical SEO audits, and local SEO strategies. Our goal is to improve your website's search engine rankings and drive more organic traffic to your site.",
  },
  {
    id: 3,
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy, and results can vary depending on factors such as your website's current state, competition, and industry. Generally, you might start seeing initial improvements in 3-6 months, but significant results often take 6-12 months or more. We provide regular reports to track progress and adjust strategies as needed.",
  },
  {
    id: 4,
    question: "Do you guarantee first page rankings on Google?",
    answer:
      "While we strive to achieve the best possible rankings for our clients, we cannot guarantee specific rankings. Search engines use complex algorithms that are constantly changing. Instead, we focus on implementing best practices and strategies that have proven successful in improving search visibility and driving quality traffic to your website.",
  },
  {
    id: 5,
    question: "How do you measure the success of your SEO efforts?",
    answer:
      "We use a variety of metrics to measure SEO success, including organic traffic growth, keyword rankings, conversion rates, backlink quality and quantity, and overall website performance. We provide regular reports that detail these metrics and explain how they relate to your business goals.",
  },
  {
    id: 6,
    question: "Is SEO a one-time thing or an ongoing process?",
    answer:
      "SEO is definitely an ongoing process. Search engines regularly update their algorithms, and your competitors are constantly working to improve their rankings. To maintain and improve your search engine visibility, it's important to continuously optimize your website, create fresh content, and stay up-to-date with the latest SEO best practices.",
  },
  {
    id: 7,
    question: "How does SEO relate to content marketing?",
    answer:
      "SEO and content marketing are closely related and work best when used together. Quality content is a key factor in SEO success, as search engines favor websites that provide valuable, relevant information to users. Our SEO strategies often include content marketing elements, such as blog posts, articles, and infographics, that are optimized for both search engines and user engagement.",
  },
];

export default function SeoFaqs() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAccordion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#255036]">
        SEO Frequently Asked Questions
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
