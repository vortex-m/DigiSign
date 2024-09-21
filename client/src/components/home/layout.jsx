import React from "react";
import { Outlet } from "react-router";
import NavBar from "./header";

function HomeLayout() {
  return (
    <div className=" bg-gradient-to-t from-[#537895] to-[#09203f]">
      <NavBar />
      <main className="pt-[10svh] mx-auto w-full px-6 lg:w-[80%]">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
