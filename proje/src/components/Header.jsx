import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div className="flex justify-around h-30 items-center">
      <div>
        <h1
          className="text-4xl cursor-pointer font-extrabold"
          onClick={() => navigate("/")}
        >
          LOGO
        </h1>
      </div>
      <div className="flex justify-center border-1 rounded-2xl w-55">
        <input type="text" className="outline-0" />
        <CiSearch size={25} className="cursor-pointer" />
      </div>
      <div className="flex gap-5">
        <CgProfile size={25} className="cursor-pointer" />
        <MdOutlineShoppingCart size={25} className="cursor-pointer" />
        {darkMode ? (
          <CiLight size={25} className="cursor-pointer" onClick={toggleTheme} />
        ) : (
          <CiDark size={25} className="cursor-pointer" onClick={toggleTheme} />
        )}
      </div>
    </div>
  );
}

export default Header;
