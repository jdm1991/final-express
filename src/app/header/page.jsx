"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import "../styles/globals.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
                src="/Express.svg"
                alt="Express Logo"
                width={150}
                height={150}
                className="object-contain w-24 sm:w-32 md:w-40 lg:w-48"
              />
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:ml-10">
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
                href="/webDesign"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
              >
                Website Design
              </Link>
              <Link
                href="/webHosting"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
              >
                Web Hosting
              </Link>
              <Link
                href="/seo"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
              >
                SEO
              </Link>
              <Link
                href="/faqs"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
              >
                FAQ&apos;s
              </Link>
              <Link
                href="contact"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-7.414V5.5c0-.283-.217-.5-.5-.5h-1c-.283 0-.5.217-.5.5v4.586l-2.293-2.293c-.195-.195-.512-.195-.707 0l-.707.707c-.195.195-.195.512 0 .707L9.586 12l-2.293 2.293c-.195.195-.195.512 0 .707l.707.707c.195.195.512.195.707 0L11 13.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Login
              </Link>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#ffcf40] focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
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
              href="/webDesign"
              className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-base font-medium"
            >
              Website Design
            </Link>
            <Link
              href="/webHosting"
              className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
            >
              Web Hosting
            </Link>
            <Link
              href="/seo"
              className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-base font-medium"
            >
              SEO
            </Link>
            <Link
              href="/faqs"
              className="text-white hover:text-[#ffcf40] block px-3 py-2 rounded-md text-base font-medium"
            >
              FAQ&apos;s
            </Link>
            <Link
              href="contact"
              className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="text-white hover:text-[#ffcf40] px-3 py-2 rounded-md text-med font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-7.414V5.5c0-.283-.217-.5-.5-.5h-1c-.283 0-.5.217-.5.5v4.586l-2.293-2.293c-.195-.195-.512-.195-.707 0l-.707.707c-.195.195-.195.512 0 .707L9.586 12l-2.293 2.293c-.195.195-.195.512 0 .707l.707.707c.195.195.512.195.707 0L11 13.414z"
                  clipRule="evenodd"
                />
              </svg>
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
