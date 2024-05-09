// components/Features.js

import { FaMobileAlt, FaGlobe, FaShareAlt, FaUserCheck } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      title: "Responsive Design",
      description: "All our websites are responsive as standard.",
      icon: FaMobileAlt,
    },
    {
      title: "Domain Name Included",
      description: "Domain name is included with your website.",
      icon: FaGlobe,
    },
    {
      title: "Social Media Integration",
      description:
        "All our websites have links from the site to your social media pages.",
      icon: FaShareAlt,
    },
    {
      title: "Client Ownership",
      description: "The client owns the website.",
      icon: FaUserCheck,
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#255036] mb-10 text-left">
          Features
        </h2>
        <div className="flex justify-between items-center space-x-12">
          {features.map((feature, index) => (
            <>
              <div key={index} className="flex items-center space-x-4">
                <div className="flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300">
                  <feature.icon className="text-5xl text-current" />
                  <p className="text-2xl text-black whitespace-nowrap">
                    {feature.title}
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
              {index !== features.length - 1 && (
                <div className="text-6xl text-yellow-400">-</div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
