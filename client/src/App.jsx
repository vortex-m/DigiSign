import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth/layout";
import Login from "./screen/auth/login";
import Register from "./screen/auth/register";
import HomeLayout from "./components/home/layout";
import Home from "./screen/main/home";
import About from "./screen/main/about";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
