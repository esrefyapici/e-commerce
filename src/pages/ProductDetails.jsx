import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../reduxtk/Slices/ProductSlice";
import { addToCart } from "../reduxtk/Slices/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = products.find((p) => p.id === parseInt(id));

  const addChart = () => {
    const payload = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: count,
    };
    dispatch(addToCart(payload));
  };

  return (
    <div className="p-10 flex justify-center">
      {product ? (
        <div className="max-w-6xl flex gap-15 bg-white/10 p-5 rounded-xl shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain mb-4 rounded"
          />
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-sm">{product.description}</p>
            <div className="flex justify-around">
              <p className="text-xl text-red-600 font-semibold">
                ${product.price}
              </p>
              <div className="flex gap-5">
                <div className="flex justify-around items-center gap-3">
                  <button
                    className="border rounded-4xl w-5 bg-red-700"
                    onClick={() => (count > 0 ? setCount(count - 1) : 0)}
                  >
                    -
                  </button>
                  <p>{count}</p>
                  <button
                    className="border rounded-4xl w-5 bg-emerald-700"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="w-30 border rounded bg-emerald-500"
                  onClick={addChart}
                >
                  Add Chart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default ProductDetails;
