import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Redux/cartSlice"; 
import userReducer from "./Redux/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});