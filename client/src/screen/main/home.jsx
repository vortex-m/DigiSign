import React from "react";
import Bg from "../../assets/png/bg-feature.png";
import { FaFileSignature, FaShieldAlt, FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-[90svh] z-0">
      <img
        src={Bg}
        alt="Background"
        className="absolute bottom-0 opacity-30 left-0 right-0"
      />
      <div className="flex flex-col items-center space-y-5 justify-center h-[60svh] text-white p-4">
        <h1 className="text-5xl font-bold text-center text-blue-500">
          Welcome to DigiSign
        </h1>
        <p className="mt-4 text-xl text-center text-white">
          Sign and verify documents securely.
        </p>
        <div className="mt-6 space-x-4">
          <Link to="/upload">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
              Upload Document
            </button>
          </Link>
          <Link to="/auth/login">
            <button className="px-6 py-3 bg-gray-200 text-blue-500 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* New Section: Features */}
      
    </div>
  );
}

export default Home;
