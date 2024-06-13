// WebsiteDesign.js
import Process from "../components/Process";
import Features from "../components/Features";
import SmallPortfolio from "../components/SmallPortfolio";
import GetInTouch from "../components/GetInTouch";

export default function WebsiteDesign() {
  return (
    <div>
      <section
        className="bg-gray-100 pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-16 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/websiteDesignPic.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-12 md:pt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Website Design
          </h1>
          <p className="text-lg mb-8 text-white">
            At Express Web, we create stunning and functional websites tailored
            to meet the diverse needs of our clients, from small businesses
            establishing an online presence to large enterprises seeking
            comprehensive e-commerce solutions. Our experienced team works
            closely with you to understand your unique goals and craft a custom
            website that looks great, delivers exceptional user experiences, and
            drives measurable results.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#255036] mb-10 text-left">
            Types of Websites We Design:
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div
              className="md:w-3/4 bg-amber-500 rounded-lg overflow-hidden border border-black transition-transform duration-300 hover:scale-[1.02] h-[350px]"
              style={{
                boxShadow:
                  "0 4px 6px rgba(37, 80, 54, 0.1), 0 1px 3px rgba(37, 80, 54, 0.08)",
              }}
            >
              <div className="md:flex h-full">
                <div className="md:flex-1">
                  <div className="p-6 sm:p-8 text-white">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                      Personal & Small Business Websites
                    </h2>
                    <p className="text-base mb-4">
                      All of our sites start at the same point, they have
                      responsive design comprised of the following:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-sm md:text-base">
                      <li>A minimum of 4 pages</li>
                      <li>An interactive contact form</li>
                      <li>Basic SEO optimisation</li>
                    </ul>
                    <p className="text-base mb-2">
                      <span className="font-bold">
                        Website can be built with:
                      </span>{" "}
                      A combination of HTML, CSS & JavaScript. Alternatively, we
                      can also construct this with WordPress.
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Estimated price:</span> £1,000
                      - £1,500
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-white text-amber-500 flex flex-col justify-between">
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                      Includes:
                    </h3>
                    <ul className="list-disc pl-6 text-sm md:text-base">
                      <li>Custom & bespoke design</li>
                      <li>Mobile-friendly</li>
                      <li>Free domain & SSL for 1 year</li>
                    </ul>
                  </div>
                  <div className="p-6 sm:p-8">
                    <button className="bg-[#255036] text-white font-bold py-2 px-4 rounded hover:bg-amber-500 transition duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="md:w-1/4 bg-white rounded-lg p-6 sm:p-8 h-[350px]"
              style={{
                boxShadow:
                  "0 4px 6px rgba(37, 80, 54, 0.1), 0 1px 3px rgba(37, 80, 54, 0.08)",
              }}
            >
              <p className="text-base sm:text-lg md:text-xl italic text-gray-700 mb-4">
                {`"Express Web helped me create a beautiful website for my
                business. Their team was professional and delivered exceptional
                results."`}
              </p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                - Aline Juillet, Owner of Wild Beauty
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div
              className="md:w-1/4 bg-white rounded-lg p-6 sm:p-8 h-[350px]"
              style={{
                boxShadow:
                  "0 4px 6px rgba(37, 80, 54, 0.1), 0 1px 3px rgba(37, 80, 54, 0.08)",
              }}
            >
              <p className="text-base sm:text-lg md:text-xl italic text-gray-700 mb-4">
                {`"Express Web helped me create a beautiful website for my
                business. Their team was professional and delivered exceptional
                results!"`}
              </p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                - John Doe, CEO of ABC Company
              </p>
            </div>
            <div
              className="md:w-3/4 bg-pink-500 rounded-lg overflow-hidden border border-black transition-transform duration-300 hover:scale-[1.02] h-[350px]"
              style={{
                boxShadow:
                  "0 4px 6px rgba(37, 80, 54, 0.1), 0 1px 3px rgba(37, 80, 54, 0.08)",
              }}
            >
              <div className="md:flex h-full">
                <div className="md:flex-1">
                  <div className="p-6 sm:p-8 text-white">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                      E-Commerce Websites
                    </h2>
                    <p className="text-base mb-4">
                      Whether you're looking for a large e-commerce solution for
                      your business, or a small e-commerce platform for your
                      side hustle, our small team of developers is perfectly
                      placed to bring your vision to life.
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-sm md:text-base">
                      <li>5 pages</li>
                      <li>Contact form</li>
                      <li>Basic SEO</li>
                    </ul>
                    <p className="text-base mb-2">
                      <span className="font-bold">
                        Website can be built with:
                      </span>{" "}
                      Woocommerce, or a combination of HTML, CSS & JavaScript.
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Estimated price:</span> £2,500
                      - £4,000
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-white text-pink-500 flex flex-col justify-between">
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                      Includes:
                    </h3>
                    <ul className="list-disc pl-6 text-sm md:text-base">
                      <li>Custom design</li>
                      <li>Mobile-friendly</li>
                      <li>Content management</li>
                      <li>Free domain (1 year)</li>
                    </ul>
                  </div>
                  <div className="p-6 sm:p-8">
                    <button className="bg-amber-500 text-white font-bold py-2 px-4 rounded hover:bg-amber-600 transition duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div
              className="md:w-3/4 bg-blue-500 rounded-lg overflow-hidden border border-black transition-transform duration-300 hover:scale-[1.02] h-[350px]"
              style={{
                boxShadow:
                  "0 4px 6px rgba(37, 80, 54, 0.1), 0 1px 3px rgba(37, 80, 54, 0.08)",
              }}
            >
              <div className="md:flex h-full">
                <div className="md:flex-1">
                  <div className="p-6 sm:p-8 text-white">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                      E-commerce Website Package
                    </h2>
                    <p className="text-base mb-4">
                      Our e-commerce package includes a fully functional online
                      store with secure payment integration and inventory
                      management.
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-sm md:text-base">
                      <li>Product catalog</li>
                      <li>Shopping cart</li>
                      <li>Payment gateway integration</li>
                      <li>Inventory management</li>
                    </ul>
                    <p className="text-base mb-2">
                      <span className="font-bold">Built with:</span> Shopify,
                      WooCommerce
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Estimated price:</span> $2,500
                      - $4,000
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 bg-white text-blue-500 flex flex-col justify-between">
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                      Includes:
                    </h3>
                    <ul className="list-disc pl-6 text-sm md:text-base">
                      <li>Custom design</li>
                      <li>Mobile-friendly</li>
                      <li>SSL certificate</li>
                      <li>Product import/export</li>
                    </ul>
                  </div>
                  <div className="p-6 sm:p-8">
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="md:w-1/4 bg-white rounded-lg p-6 sm:p-8 h-[350px]"
              style={{
                boxShadow:
                  "0 4px 6px rgba(37, 80, 54, 0.1), 0 1px 3px rgba(37, 80, 54, 0.08)",
              }}
            >
              <p className="text-base sm:text-lg md:text-xl italic text-gray-700 mb-4">
                {`"Express Web's e-commerce package is top-notch. They helped
                me create a professional online store that boosted my sales
                significantly."`}
              </p>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                - Ellie C, Founder of Sapphire Lash
              </p>
            </div>
          </div>
        </div>
      </section>
      <SmallPortfolio />
      <Process />
      <Features />
      <GetInTouch />
    </div>
  );
}
