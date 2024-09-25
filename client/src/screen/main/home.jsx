import React, { useState } from "react";
import Bg from "../../assets/png/bg-feature.png";
import Lock from "../../assets/png/feature-card-thumb-3.png";
import Circle from "../../assets/png/circle001.png";
import { FaFileSignature, FaShieldAlt, FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import "../../assets/style.css";

function Home({ isLogged }) {
  const [open, setOpen] = useState(false);
  const UploadeHandel = () => {
    try {
      if (isLogged) {
        alert("You are logged in!");
      } else {
        alert("Please Login...");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while processing your request.");
    }
  };

  const Click = () => {
    setOpen(true);
  };
  return (
    <div className="relative min-h-[90svh]">
      {/* Absolute Bg */}
      <img
        src={Bg}
        alt="Background"
        className="absolute bottom-0 z-0 opacity-30 left-0 right-0"
      />
      <img
        src={Lock}
        alt=""
        className="absolute opacity-50 z-0 w-[30%] float-animation -right-[5%] bottom-[35%] "
      />
      <img
        src={Circle}
        alt=""
        className="absolute opacity-20 z-0 w-[50%] -top-[10%]  -left-[10%]"
      />
      {/* End Bg */}

      <div className="flex flex-col z-10 relative items-center space-y-10 justify-center h-[80svh] text-white p-4">
        <h1 className="text-6xl font-bold text-center text-blue-400">
          Welcome to DigiSign
        </h1>
        <p className="mt-4 text-xl w-[50%] text-center text-white">
          Transform the way you handle documents with our secure, fast, and
          reliable e-signature solution. Sign, verify, and manage your documents
          seamlessly, all in one place.
        </p>
        <div className="mt-6 space-x-4">
          <button
            onClick={UploadeHandel}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Add E-Sign
          </button>
          {!isLogged && (
            <Link onClick={Click}>
              <button className="px-6 py-3 bg-gray-200 text-blue-500 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        Login Page
      </Modal>
    </div>
  );
}

export default Home;
