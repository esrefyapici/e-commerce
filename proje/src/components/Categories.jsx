import React from "react";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div className="flex justify-center items-center h-30 gap-20 mt-10">
      <div
        onClick={() => handleCategoryClick("audio")}
        className="flex justify-center items-center w-60 bg-white/10 backdrop-blur-sm shadow-md hover:scale-105 transition-transform duration-300 rounded-2xl h-10 cursor-pointer"
      >
        <h1>AUDIO</h1>
      </div>
      <div
        onClick={() => handleCategoryClick("gaming")}
        className="flex justify-center items-center w-60 bg-white/10 backdrop-blur-sm shadow-md hover:scale-105 transition-transform duration-300 rounded-2xl h-10 cursor-pointer"
      >
        <h1>GAMING</h1>
      </div>
      <div
        onClick={() => handleCategoryClick("mobile")}
        className="flex justify-center items-center w-60 bg-white/10 backdrop-blur-sm shadow-md hover:scale-105 transition-transform duration-300 rounded-2xl h-10 cursor-pointer"
      >
        <h1>MOBILE</h1>
      </div>
      <div
        onClick={() => handleCategoryClick("tv")}
        className="flex justify-center items-center w-60 bg-white/10 backdrop-blur-sm shadow-md hover:scale-105 transition-transform duration-300 rounded-2xl h-10 cursor-pointer"
      >
        <h1>TV</h1>
      </div>
    </div>
  );
}

export default Categories;
