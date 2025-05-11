import React, { useContext } from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import DiscountedProducts from "../components/DiscountedProducts";
import Brands from "../components/Brands";
import { ThemeContext } from "../context/ThemeContext";
import { Outlet } from "react-router-dom";

function Layout() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={darkMode ? "bg-black text-white" : "bg-zinc-100 text-black"}
    >
      <div className="min-h-screen">
        <Header />
        <div className="flex justify-center">
          <hr className="w-300" />
        </div>
        <Categories />
        <DiscountedProducts />
        <Brands />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
