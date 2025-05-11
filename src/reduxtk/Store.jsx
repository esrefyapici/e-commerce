import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/ProductSlice";
import cartReducer from "./Slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
});
