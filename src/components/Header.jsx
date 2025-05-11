import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import CardSideBar from "./CardSideBar";
import { useSelector } from "react-redux";

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchClick = () => {
    if (searchTerm.trim()) {
      navigate(`/searched/${searchTerm}`);
    }
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const { carts } = useSelector((state) => state.carts);

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
        <input
          type="text"
          className="outline-0"
          onChange={handleSearchChange}
          value={searchTerm}
        />
        <CiSearch
          size={25}
          className="cursor-pointer"
          onClick={handleSearchClick}
        />
      </div>
      <div className="flex gap-5">
        <CgProfile size={25} className="cursor-pointer" onClick={() => navigate("/signup")} />
        <div className="flex relative">
          <MdOutlineShoppingCart
            size={25}
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
          <p className="absolute bg-emerald-300 rounded flex justify-center w-4 -top-4 right-0">
            {carts.length}
          </p>
        </div>
        {darkMode ? (
          <CiLight size={25} className="cursor-pointer" onClick={toggleTheme} />
        ) : (
          <CiDark size={25} className="cursor-pointer" onClick={toggleTheme} />
        )}
      </div>
      <CardSideBar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}

export default Header;
