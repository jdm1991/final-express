import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function FooterSection() {
  return (
    <>
      <footer className="bg-[#255036] text-white py-2 bottom-0 w-full border-t-1 border-[#ffcf40]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/Express.svg"
                alt="Express Logo"
                width={80}
                height={80}
                className="object-contain w-16 sm:w-24 md:w-32"
              />
            </div>
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-wrap justify-center space-x-4">
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
            </nav>
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
          <div className="text-center text-xs mt-4">
            &copy; {new Date().getFullYear()} Express Web Designs. All rights
            reserved. <br />A copy of our{" "}
            <a href="/terms" className="underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline">
              Privacy Statement
            </a>{" "}
            can be found here.
          </div>
        </div>
      </footer>
    </>
  );
}