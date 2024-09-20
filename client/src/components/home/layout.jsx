import React from "react";
import { Outlet } from "react-router";
import NavBar from "./header";

function HomeLayout() {
  return (
    <div className="bg-blue-50">
      <NavBar />
      <main className="pt-[10svh]">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
