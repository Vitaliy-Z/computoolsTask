import { createSlice } from "@reduxjs/toolkit";
import { getTest } from "./Operations";

const testSlice = createSlice({
  name: "allTests",
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(getTest.pending, (state, { payload }) => {
        return state;
      })
      .addCase(getTest.fulfilled, (state, { payload }) => {
        return (state = payload);
      })
      .addCase(getTest.rejected, (state, { payload }) => {
        return state;
      });
  },
});

export default testSlice.reducer;
