import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../reduxtk/Slices/ProductSlice";

function Searched() {
  const { searchTerm } = useParams();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      <div className="w-300">
        <h1 className="text-2xl">Popular Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products &&
            products
              .filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain mb-4 rounded"
                  />
                  <h2 className=" text-lg font-medium text-center">
                    {product.title}
                  </h2>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Searched;
