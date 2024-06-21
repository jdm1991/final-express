"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const data = [
  {
    id: 1,
    question: "What types of websites do you design?",
    answer:
      "We design a variety of websites to meet different needs. Our main categories include: 1) Small Business & Personal Websites, which are responsive and include at least 4 pages, an interactive contact form, and basic SEO optimization. 2) E-Commerce Websites, which include product catalogs, shopping carts, payment gateway integration, and inventory management. 3) Medium to Large Business Websites, which typically have around 20 pages and include administration/login functionality. All our websites are custom-designed, mobile-friendly, and come with a free domain and SSL certificate for the first year.",
  },
  {
    id: 2,
    question: "How long does it take to design a website?",
    answer:
      "The timeline for designing a website varies depending on its complexity and specific requirements. While we don't provide exact timeframes on our website, we work closely with our clients to establish a timeline that meets their needs. Factors that influence the timeline include the type of website (small business, e-commerce, or large business), the number of pages, custom functionality needs, and content creation. We provide a more accurate estimate after understanding your specific project requirements.",
  },
  {
    id: 3,
    question: "What are the key elements of your website designs?",
    answer:
      "Our website designs incorporate several crucial elements: 1) Responsive design that works well on all devices. 2) Custom and bespoke design tailored to your brand. 3) Interactive contact forms for better user engagement. 4) Basic SEO optimization to improve visibility. 5) Mobile-friendly layouts. 6) Secure designs with SSL certificates. For e-commerce sites, we also include product catalogs, shopping carts, payment gateway integration, and inventory management. Our goal is to create stunning and functional websites that deliver exceptional user experiences and drive measurable results.",
  },
  {
    id: 4,
    question: "Can I update the content of my website after it's designed?",
    answer:
      "Yes, we design our websites with content management capabilities in mind. For e-commerce websites, we explicitly mention that a Content Management System (CMS) is included. This allows you to easily update and manage your website's content after launch. Depending on your specific needs and the type of website, we can use platforms like WordPress or custom solutions that provide you with the ability to make updates. For more complex changes, we offer ongoing support and maintenance services to ensure your website stays up-to-date and functions smoothly.",
  },
  {
    id: 5,
    question: "How much does it cost to design a website?",
    answer:
      "Our website design costs vary based on the type and complexity of the site. Small Business & Personal Websites typically range from £1,000 to £1,500. E-Commerce Websites generally cost between £2,500 and £4,000. Medium to Large Business Websites also fall in the £2,500 to £4,000 range. These prices are estimates and can vary based on specific requirements. We recommend contacting us for a personalized quote tailored to your exact needs.",
  },
  {
    id: 6,
    question: "What technologies do you use to build websites?",
    answer:
      "We're flexible with our technology stack to best meet our clients' needs. For Small Business & Personal Websites, as well as Medium to Large Business Websites, we can build using a combination of HTML, CSS & JavaScript, or alternatively, construct with WordPress. For E-Commerce Websites, we offer solutions built with WooCommerce, Shopify, or a custom combination of HTML, CSS & JavaScript. The choice of technology depends on your specific requirements, scalability needs, and preferences, which we'll discuss during our consultation.",
  },
  {
    id: 7,
    question:
      "Do you offer any additional services with your web design packages?",
    answer:
      "Yes, all our web design packages come with several additional services. These include a free domain and SSL certificate for the first year, ensuring your website is secure and easily accessible. We also provide basic SEO optimization to help improve your site's visibility in search engines. For e-commerce sites, we include features like product catalog setup, shopping cart integration, and inventory management systems. We're committed to delivering a comprehensive solution that sets your online presence up for success.",
  },
];

export default function WebsiteDesignFaqs() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAccordion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#255036]">
        Website Design Frequently Asked Questions
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
