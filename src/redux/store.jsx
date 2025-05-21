import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slideProduct";
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
