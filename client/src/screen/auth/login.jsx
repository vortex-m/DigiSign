import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../../assets/png/feature-shape-12.png";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post("http://localhost:5000/api/auth/login", {
      //   email,
      //   password,
      // });

      // const { token } = response.data;
      const token = "shrawanToken";
      // Store the token and update app state
      setToken(token);
      // localStorage.setItem("token", token);

      // Redirect to the dashboard or home page
      window.location.href = "/";
    } catch (error) {
      setError("Login failed. Please check your email and password.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col bg-[#1A3553]">
      <div className="ml-16 mt-10">
        <Link
          to="/"
          className="text-2xl font-bold text-white flex items-center"
        >
          <img src={Image} className="w-5 h-10" alt="Logo" />
          &nbsp;
          <span className="bg-gradient-to-r from-blue-500 to-indigo-400 text-transparent bg-clip-text font-sans">
            DigiSign
          </span>
        </Link>
      </div>

      <main className="flex-1 flex items-center justify-center">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <h1 className="mb-6 font-bold text-gray-600 text-3xl tracking-wider">
            Sign In
          </h1>
          <form onSubmit={loginHandler}>
            {error && <div className="text-red-500">{error}</div>}
            <div className="py-2">
              <input
                className="block w-full border-2 border-gray-100 px-4 py-2 rounded-lg bg-gray-100"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-2">
              <input
                className="block w-full border-2 border-gray-100 px-4 py-2 rounded-lg bg-gray-100"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="py-2">
              <button
                className="block w-full px-4 py-2 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-700"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="py-4">
            <a href="#" className="hover:underline hover:text-purple-700">
              Forgot Password
            </a>
          </div>
          <div className="mt-6">
            <span>Don't have an account?</span>
            <Link
              to="/auth/register"
              className="underline text-purple-600 hover:text-purple-800"
            >
              Create One
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Login;
