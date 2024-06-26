"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { BsDoorOpen } from "react-icons/bs";
import Image from "next/image";
import "../styles/globals.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#255036] bg-opacity-60 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-24">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={isMobile ? "/EWD.svg" : "/Express.svg"}
                alt="Express Logo"
                width={150}
                height={150}
                className={`object-contain ${
                  isMobile ? "w-20 sm:w-24" : "w-24 sm:w-32 md:w-40 lg:w-48"
                }`}
              />
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:ml-10">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-arial font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-arial font-medium"
              >
                About
              </Link>
              <Link
                href="/webDesign"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-arial font-normal"
              >
                Website Design
              </Link>
              <Link
                href="/webHosting"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-arial font-normal"
              >
                Web Hosting
              </Link>
              <Link
                href="/seo"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-arial font-normal"
              >
                SEO
              </Link>
              <Link
                href="/faqs"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-arial font-normal"
              >
                FAQ&apos;s
              </Link>
              <Link
                href="contact"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-arial font-normal"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-arial font-normal"
              >
                <BsDoorOpen className="inline-block mr-1" size={20} />
                Login
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#ffcf40] focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          isOpen ? "block animate-fade-in-right" : "hidden"
        } bg-[#255036] bg-opacity-90 fixed top-16 right-0 w-64`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            onClick={toggleMenu}
            className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-med font-arial font-normal"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-med font-arial font-normal"
          >
            About
          </Link>
          <Link
            href="/webDesign"
            onClick={toggleMenu}
            className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-med font-arial font-normal"
          >
            Website Design
          </Link>
          <Link
            href="/webHosting"
            onClick={toggleMenu}
            className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-med font-arial font-normal"
          >
            Web Hosting
          </Link>
          <Link
            href="/seo"
            onClick={toggleMenu}
            className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-med font-arial font-normal"
          >
            SEO
          </Link>
          <Link
            href="/faqs"
            onClick={toggleMenu}
            className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-med font-arial font-normal"
          >
            FAQ&apos;s
          </Link>
          <Link
            href="contact"
            onClick={toggleMenu}
            className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-med font-arial font-normal"
          >
            Contact
          </Link>
          <Link
            href="/login"
            onClick={toggleMenu}
            className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-med font-arial font-normal"
          >
            <BsDoorOpen className="inline-block mr-1" size={20} />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
