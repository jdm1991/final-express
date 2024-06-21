'use client';

import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useState } from 'react';

export default function ContactPage() {
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!privacyChecked) {
      setFormError('Please agree to the privacy policy and terms of service to submit the form.');
      return;
    }
    console.log('Form submitted successfully');
    setFormError('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <section className="bg-gray-100 pt-24 pb-8 sm:pb-12 md:pb-16 bg-cover bg-center relative"
               style={{ backgroundImage: "url('/websiteDesignPic.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 sm:pt-8 md:pt-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Contact Us
          </h1>
          <p className="text-lg mb-6 text-white">
            Get in touch with Express Web to discuss your project and learn how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="flex-grow flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 bg-[#255036] p-6 lg:p-8 flex flex-col justify-center items-center">
          <div className="w-full text-white">
            <p className="text-lg lg:text-xl mb-8 text-center">
              Why not get in touch to find out how we can help you?
            </p>
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center hover:text-[#ffcf40] hover:bg-[#1e3d29] hover:scale-105 transition duration-300 rounded-md p-2 w-full">
                <FaEnvelope className="mr-4 flex-shrink-0" size={24} />
                <p className="text-sm lg:text-base break-all">
                  info@expresswebdesigns.co.uk
                </p>
              </div>
              <div className="flex items-center hover:text-[#ffcf40] hover:bg-[#1e3d29] hover:scale-105 transition duration-300 rounded-md p-2 w-full">
                <FaWhatsapp className="mr-4 flex-shrink-0" size={24} />
                <p className="text-sm lg:text-base">+1 234 567 8900</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3 bg-cover bg-center p-6 lg:p-8"
             style={{ backgroundImage: "url('/tablet.jpeg')" }}>
          <div className="bg-black/70 p-6 rounded-lg text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Let&apos;s talk about your project
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50" required />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1">Service Interested In</label>
                  <select id="service" className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white" required>
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="seo">SEO</option>
                    <option value="maintenance">Website Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-1">Estimated Budget</label>
                  <select id="budget" className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white" required>
                    <option value="">Select a budget range</option>
                    <option value="0-1000">£0 - £1,000</option>
                    <option value="1000-5000">£1,000 - £5,000</option>
                    <option value="5000-10000">£5,000 - £10,000</option>
                    <option value="10000+">£10,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-1">Project Timeline</label>
                  <select id="timeline" className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white" required>
                    <option value="">Select a timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Project Details</label>
                <textarea id="message" rows="4" className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/50" 
                          placeholder="Please provide any additional details about your project..." required></textarea>
              </div>
              <div>
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" checked={privacyChecked} onChange={(e) => setPrivacyChecked(e.target.checked)} />
                  I agree to the privacy policy and terms of service
                </label>
              </div>
              {formError && (
                <div className="text-red-500 text-sm">{formError}</div>
              )}
              <div className="flex justify-center">
                <button type="submit" 
                        className="bg-[#ffcf40] text-black font-medium py-2 px-4 rounded-md hover:bg-white hover:text-black transition duration-300 hover:scale-105">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

