import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      const founded = state.find((p) => p.id === action.payload.id);
      if (founded) {
        founded.quantity += 1;
      } else {
        const foundedClone = { ...action.payload, quantity: 1 };
        state.push(foundedClone);
      }
    },
    removeCart: (state, action) => {
      const founded = state.find((p) => p.id === action.payload.id);
      if (founded.quantity > 1) {
        founded.quantity -= 1;
      } else if (founded.quantity === 1) {
        return state.filter((p) => p.id !== action.payload.id);
      }
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
