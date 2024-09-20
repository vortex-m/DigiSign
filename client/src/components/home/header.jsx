import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../../assets/png/feature-shape-12.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between sm:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                className="text-2xl font-bold text-gray-900 dark:text-white flex items-center"
              >
                <img src={Image} className="w-5 h-10" />  &nbsp; <span> DigiSign</span>
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:justify-center flex-grow">
              <div className="flex space-x-10">
                <Link
                  to="/"
                  className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <Link
                to="/auth/login"
                className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="text-gray-900 border rounded-3xl dark:text-white px-3 py-2 text-lg font-medium bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <Link
            to="/auth/login"
            className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
