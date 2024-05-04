import { act } from "react";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const ProductFetch = createAsyncThunk(
  "productSlice/ProductFetch",
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
  }
);

export const productSlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ProductFetch.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer