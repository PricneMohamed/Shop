import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userFetch = createAsyncThunk("userSlice/userFetch", async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data;
});

export const userSlice = createSlice({
  initialState: [],
  name: "userSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userFetch.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;
