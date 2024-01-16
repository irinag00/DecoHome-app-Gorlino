import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    user: "UserLoged",
    updatedAt: Date.now().toLocaleString(),
    total: 0,
    productsCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const isProductInCart = state.productsCart.find(
        (item) => item.id === action.payload.id
      );
      if (!isProductInCart) {
        state.productsCart.push(action.payload);
        const total = state.productsCart.reduce(
          (acc, current) => (acc += current.price * current.quantity),
          0
        );
        state.total = total;
        state = {
          ...state,
          total,
          updatedAt: Date.now().toLocaleString(),
        };
      } else {
        const productsUpdated = state.productsCart.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity;
            return item;
          }
          return item;
        });
        const total = productsUpdated.reduce(
          (acc, current) => (acc += current.price * current.quantity),
          0
        );
        state.total = total;

        state = {
          ...state,
          productsCart: productsUpdated,
          total,
          updatedAt: Date.now().toLocaleString(),
        };
      }
    },
    removeToCart: (state, action) => {},
  },
});
export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
