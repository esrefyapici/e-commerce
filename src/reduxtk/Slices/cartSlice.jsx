import { createSlice } from "@reduxjs/toolkit";

const getCartFromStorage = () => {
  if (localStorage.getItem("carts")) {
    return JSON.parse(localStorage.getItem("carts"));
  }
  return [];
};

const initialState = {
  carts: getCartFromStorage(),
};

const writeFromCartsToStorage = (carts) => {
  localStorage.setItem("carts", JSON.stringify(carts));
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findCarts =
        state.carts &&
        state.carts.find((cart) => cart.id === action.payload.id);
      if (findCarts) {
        const extractedCarts = state.carts.filter(
          (cart) => cart.id !== action.payload.id
        );
        findCarts.quantity = action.payload.quantity;
        state.carts = [...extractedCarts, findCarts];
        writeFromCartsToStorage(state.carts);
      } else {
        state.carts = [...state.carts, action.payload];
        writeFromCartsToStorage(state.carts);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item) {
        item.quantity += 1;
        writeFromCartsToStorage(state.carts);
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        writeFromCartsToStorage(state.carts);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
