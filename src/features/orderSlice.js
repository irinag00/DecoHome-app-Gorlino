import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    ordersList: [],
  },
  reducers: {
    addOrder: (state, action) => {
      const orderFind = state.ordersList.find(
        (order) => order.orderId === action.payload.orderId
      );
      if (!orderFind) {
        state.ordersList.push(action.payload);
      } else {
        console.error("Orden existente");
        return;
      }
    },
  },
});

export const { addOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
