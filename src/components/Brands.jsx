import React from "react";
import { useNavigate } from "react-router-dom";

function Brands() {

  const navigate = useNavigate();

  const handleBrandsClick = (brand) => {
    navigate(`/brand/${brand}`);
  };

  return (
    <div className="flex justify-center items-center h-30 gap-20">
      <div onClick={() => handleBrandsClick("apple")} className="flex justify-center items-center w-60 bg-white/10 backdrop-blur-sm shadow-md hover:scale-105 transition-transform duration-300 rounded-2xl h-10 cursor-pointer">
        <h1>APPLE</h1>
      </div>
      <div onClick={() => handleBrandsClick("samsung")} className="flex justify-center items-center w-60 bg-white/10 backdrop-blur-sm shadow-md hover:scale-105 transition-transform duration-300 rounded-2xl h-10 cursor-pointer">
        <h1>SAMSUNG</h1>
      </div>
      <div onClick={() => handleBrandsClick("xiaomi")} className="flex justify-center items-center w-60 bg-white/10 backdrop-blur-sm shadow-md hover:scale-105 transition-transform duration-300 rounded-2xl h-10 cursor-pointer">
        <h1>XIAOMI</h1>
      </div>
      <div onClick={() => handleBrandsClick("sony")} className="flex justify-center items-center w-60 bg-white/10 backdrop-blur-sm shadow-md hover:scale-105 transition-transform duration-300 rounded-2xl h-10 cursor-pointer">
        <h1>SONY</h1>
      </div>
    </div>
  );
}

export default Brands;
