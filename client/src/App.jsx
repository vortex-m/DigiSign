import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/layout";
import Login from "./screen/auth/login";
import Register from "./screen/auth/register";
import HomeLayout from "./components/home/layout";
import Home from "./screen/main/home";
import About from "./screen/main/about";


function App() {
  const [token, setToken] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setIsLogged(true);
  };

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      const storedToken = localStorage.getItem("token");
      setLoading(false);

      if (storedToken) {
        setToken(storedToken);
        setIsLogged(true);
      }
    }, 1000);

    return () => clearTimeout(timeoutId); // Clear timeout if component unmounts
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-black">
        <div className="h-32 w-32 rounded-full animate-spin border-t-4 border-b-4 border-purple-600 border-opacity-75 shadow-lg"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden bg-white">
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout isLogged={isLogged} />}>
          <Route path="/" element={<Home isLogged={isLogged} />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login setToken={handleToken}  />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
