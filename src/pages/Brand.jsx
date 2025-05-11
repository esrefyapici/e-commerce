import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../reduxtk/Slices/ProductSlice";
import { useNavigate, useParams } from "react-router-dom";

function Brand() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { brand } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex justify-center">
      <div className="w-300">
        <h1 className="text-2xl">Popular Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products &&
            products.map(
              (product) =>
                product.brand.toLowerCase() === brand.toLowerCase() && (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/productDetails/${product.id}`)}
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
                )
            )}
        </div>
      </div>
    </div>
  );
}

export default Brand;
