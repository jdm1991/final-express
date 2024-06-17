// components/Features.js
import {
  FaMobileAlt,
  FaGlobe,
  FaShareAlt,
  FaUserCheck,
  FaUserTie,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      title: "Dedicated Developer",
      description:
        "Each of our clients is assigned a dedicated developer at the beginning of their time with us, so they always know who they're dealing with.",
      icon: FaUserTie,
    },
    {
      title: "Client Ownership",
      description: "The client owns the website.",
      icon: FaUserCheck,
    },
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
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#255036] mb-10 text-center sm:text-left">
          Features:
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-10 sm:space-y-0 sm:space-x-6 lg:space-x-10">
          {features.map((feature, index) => (
            <>
              <div
                key={index}
                className="flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300"
              >
                <feature.icon className="text-4xl text-current" />
                <p className="text-xl text-black whitespace-nowrap">
                  {feature.title}
                </p>
                <p className="text-xs text-gray-600 text-center max-w-xs mt-1">
                  {feature.description}
                </p>
              </div>
              {index !== features.length - 1 && (
                <div className="text-3xl text-yellow-400 hidden sm:flex items-center">
                  -
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
