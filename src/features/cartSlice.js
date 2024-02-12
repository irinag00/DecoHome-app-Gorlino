import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    user: "UserLoged",
    updatedAt: new Date().toLocaleString(),
    total: 0,
    productsCart: [],
    cartItemCount: 0,
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
        state.cartItemCount += action.payload.quantity;
        state = {
          ...state,
          total,
          updatedAt: new Date().toLocaleString(),
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
        state.cartItemCount += action.payload.quantity;
        state = {
          ...state,
          productsCart: productsUpdated,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      }
    },
    removeToCart: (state, action) => {
      const productsUpdated = state.productsCart.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity -= action.payload.quantity;
          return item;
        }
        return item;
      });
      const total = productsUpdated.reduce(
        (acc, current) => (acc += current.price * current.quantity),
        0
      );
      state.total = total;
      state.cartItemCount -= action.payload.quantity;
      state = {
        ...state,
        productsCart: productsUpdated,
        total,
        updatedAt: new Date().toLocaleString(),
      };
    },
    clearCart: (state) => {
      state.productsCart = [];
      state.total = 0;
      state.cartItemCount = 0;
    },
    removeProduct: (state, action) => {
      const index = state.productsCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        const deletedProduct = state.productsCart[index];
        state.productsCart.splice(index, 1); //elimina el producto del array

        //actualizo el total y el contador
        state.total -= deletedProduct.price * deletedProduct.quantity;
        state.cartItemCount -= deletedProduct.quantity;
        state.updatedAt = new Date().toLocaleString();
      }
    },
  },
});
export const { addToCart, removeToCart, clearCart, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
