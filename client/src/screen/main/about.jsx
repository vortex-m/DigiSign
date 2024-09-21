import React from "react";
import { FaFileSignature, FaShieldAlt, FaUserCheck } from "react-icons/fa"; // Importing icons
import { Link } from "react-router-dom"; // Importing Link for navigation

function About() {
  return (
    <div className="min-h-[90svh]">
      <div className="flex flex-col items-center justify-center h-full p-8">
        {/* Why Choose DigiSign Section */}
        <div className="mt-12 space-y-10 py-12">
          <h2 className="text-3xl font-bold text-center text-blue-500">
            Why Choose DigiSign?
          </h2>
          <div className="flex flex-wrap justify-center mt-8 space-x-10">
            <div className="flex flex-col items-center">
              <FaFileSignature className="text-blue-500 text-6xl" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                Easy Document Signing
              </h3>
              <p className="mt-2 text-gray-200 text-center">
                Seamlessly sign your documents online with just a few clicks.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-blue-500 text-6xl" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                Secure & Trusted
              </h3>
              <p className="mt-2 text-gray-200 text-center">
                Your documents are protected with top-notch security.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaUserCheck className="text-blue-500 text-6xl" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                Verify Signatures
              </h3>
              <p className="mt-2 text-gray-200 text-center">
                Verify document authenticity in seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
