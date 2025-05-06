import React from "react";
import { useNavigate } from "react-router-dom";

function DiscountedProducts() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products/discounted");
  };

  return (
    <div onClick={()=>handleClick()} className="flex justify-center items-center ">
      <h1 className="flex justify-center items-center h-15 w-300 rounded-2xl bg-white/10 backdrop-blur-sm shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
        Discounted Products
      </h1>
    </div>
  );
}

export default DiscountedProducts;
