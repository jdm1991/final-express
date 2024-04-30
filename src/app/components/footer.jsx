import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#255036] text-white py-12 border-t border-[rgba(255,207,64,0.5)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Image
                src="/Express.svg"
                alt="Express Web Designs Logo"
                width={160}
                height={120}
                className="mb-4"
              />
              <p className="text-sm mb-4">
                We are a web design company dedicated to creating modern and
                responsive websites for businesses and individuals.
              </p>
            </div>
            <div className="md:col-span-1 md:pl-8">
              <h3 className="text-xl font-bold mb-4">Navigation</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="/" className="hover:text-[#ffcf40]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-[#ffcf40]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-[#ffcf40]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-[#ffcf40]">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-[#ffcf40]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <ul className="text-sm space-y-2">
                <li>Web Design</li>
                <li>Web Development</li>
                <li>E-commerce Solutions</li>
                <li>Search Engine Optimization</li>
                <li>Content Management Systems</li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-[#ffcf40] transition duration-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ffcf40] transition duration-300"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ffcf40] transition duration-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ffcf40] transition duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <hr className="my-8 border-t border-[rgba(255,207,64,0.5)]" />
          <div className="text-center text-sm">
            &copy; {new Date().getFullYear()} Express Web Designs. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
