import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#255036] text-white py-6 mt-auto border-t-[1px] border-t-black border-b-[1px] border-b-[#ffcf40]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Image
              src="/Express.svg"
              alt="Express Web Designs Logo"
              width={80}
              height={80}
              className="object-contain w-32 sm:w-40 md:w-32"
            />
          </div>
          <nav className="mb-6 md:mb-0">
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
            
             <a href="#"
              className="text-white hover:text-[#ffcf40] transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            
             <a href="#"
              className="text-white hover:text-[#ffcf40] transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            
             <a href="#"
              className="text-white hover:text-[#ffcf40] transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            
             <a href="#"
              className="text-white hover:text-[#ffcf40] transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Express Web Designs. All Rights
            Reserved.
          </p>
          <p className="mb-2">
            Click here to view our{" "}
            <Link href="/privacy" className="text-[#ffcf40] hover:underline">
              Privacy Policy
            </Link>{" "}
            or our{" "}
            <Link href="/terms" className="text-[#ffcf40] hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}