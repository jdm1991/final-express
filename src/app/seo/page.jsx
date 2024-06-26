import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";
import GetInTouch from "../components/GetInTouch";
import SeoFaqs from "../components/SeoFaqs";
import FadeInSection from "../components/FadeInSection";

export const metadata = {
  title: 'SEO Services | Boost Your Online Visibility | Express Web Design',
  description: "Improve your website's search engine rankings with our expert SEO services. Increase organic traffic and outperform competitors with Express Web.",
}

export default function SEO() {
  return (
    <FadeInSection>
      <div className="bg-white">
        <section
          className="bg-gray-100 pt-24 pb-8 sm:pb-12 md:pb-16 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/SEOpic.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 sm:pt-8 md:pt-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              SEO
            </h1>
            <p className="text-lg mb-6 text-white">
              SEO stands for &ldquo;search engine optimisation.&rdquo; In its
              simplest form, SEO means the process of improving your website to
              increase its visibility on Google, Microsoft Bing, and other
              search engines when people search for your products or services.
            </p>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-[#255036]">
            What are the benefits of SEO?
          </h2>
          <p className="text-lg mb-6">
            SEO offers numerous advantages for your online presence. It
            significantly increases your website&apos;s visibility in search
            results, driving more organic traffic to your site without ongoing
            ad costs. This improved visibility leads to higher click-through
            rates and more qualified leads. SEO also enhances user experience by
            making your site faster, easier to navigate, and mobile-friendly. It
            builds long-term credibility for your brand, as users tend to trust
            websites that appear higher in search rankings. Moreover, SEO
            provides valuable insights into your customers&apos; behavior and
            preferences, allowing you to refine your marketing strategies. Here
            are some key benefits my clients experience when leveraging SEO:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-amber-500 text-white p-6 rounded-lg h-auto sm:h-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <h3 className="text-xl font-semibold mb-2 relative">
                  Trump your competitors
                </h3>
                <p className="text-sm relative">
                  Investing in SEO is the best way to become more visible than
                  your competitors in the search results and avoid losing
                  business to competitors ranking above you.
                </p>
              </div>
            </div>
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-lime-500 text-white p-6 rounded-lg h-auto sm:h-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <h3 className="text-xl font-semibold mb-2 relative">
                  Don&apos;t pay for Ads
                </h3>
                <p className="text-sm relative">
                  Avoid paying through the nose for every single website click!
                  Get traffic for free and build a solid online presence that
                  lasts longer than Ads.
                </p>
              </div>
            </div>
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-cyan-500 text-white p-6 rounded-lg h-auto sm:h-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <h3 className="text-xl font-semibold mb-2 relative">
                  24/7 marketing
                </h3>
                <p className="text-sm relative">
                  Making your website visible to those who are searching for
                  your services or products feels like you have a 24/7 sales
                  person working for your business.
                </p>
              </div>
            </div>
            <div className="bg-[#255036] p-0.5 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out group">
              <div className="bg-red-500 text-white p-6 rounded-lg h-auto sm:h-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <h3 className="text-xl font-semibold mb-2 relative">
                  The right first impression
                </h3>
                <p className="text-sm relative">
                  From my experience, people have always told me they trust
                  businesses that rank high in search results. What better way
                  to provide the best first impression for your business?
                </p>
              </div>
            </div>
          </div>
        </div>
        <SeoFaqs />
        <GetInTouch />
      </div>
    </FadeInSection>
  );
}