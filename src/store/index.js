import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice";
import cartReducer from "../features/cartSlice";
import authReducer from "../features/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "../services/shopServices";
import { authApi } from "../services/authServices";

const store = configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(authApi.middleware),
});

setupListeners(store.dispatch);
export default store;

//shopReducer y cartReducer en realidad son shopSlice y cartSlice
