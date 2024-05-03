"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import "../styles/globals.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#255036] bg-opacity-60 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/Express.svg"
                alt="Express Logo"
                width={200}
                height={200}
                className="object-contain w-32 sm:w-40 md:w-48 lg:w-80 -ml-8"
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
              >
                Projects
              </Link>
              <Link
                href="/FAQ's"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
              >
                FAQ's
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#ffcf40] focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-base font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
