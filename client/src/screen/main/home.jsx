import React, { useState } from "react";
import Bg from "../../assets/png/bg-feature.png";
import Galaxy from "../../assets/png/testimonial-4-bg.png";
import Lock from "../../assets/png/feature-card-thumb-3.png";
import Circle from "../../assets/png/circle002.png";
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
        src={Galaxy}
        alt=""
        className="absolute opacity-80 z-0 w-[50%] right-0 left-0 "
      />
      <img
        src={Lock}
        alt=""
        className="absolute opacity-50 z-0 w-[20%] float-animation -right-[5%] bottom-[35%] "
      />
      <img
        src={Circle}
        alt=""
        className="absolute opacity-20 z-0 w-[50%] -bottom-[10%] -left-[20%]"
      />
      {/* End Bg */}

      <div className="flex flex-col z-10 relative items-center space-y-10 justify-center h-[80svh] text-white p-4">
        <h1 className="text-5xl font-bold text-center text-blue-500">
          Welcome to DigiSign
        </h1>
        <p className="mt-4 text-xl text-center text-white">
          Sign and verify documents securely.
        </p>
        <div className="mt-6 space-x-4">
          {/* <Link to="/upload"> */}
          <button
            onClick={UploadeHandel}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Upload Document
          </button>
          {/* </Link> */}
          {!isLogged && (
            // <Link to="/auth/login">
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
