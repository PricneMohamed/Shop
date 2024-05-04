import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import userSlice from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
    cart: cartSlice,
  },
});
