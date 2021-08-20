import { createSlice, createReducer } from "@reduxjs/toolkit";
import { getTest } from "./Operations";
import { addAnswer } from "./Actions";

const testSlice = createSlice({
  name: "allTests",
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(getTest.pending, (state, _) => state)
      .addCase(getTest.fulfilled, (state, { payload }) => (state = payload))
      .addCase(getTest.rejected, (state, _) => state);
  },
});
const testReducer = testSlice.reducer;

const answersReducer = createReducer([], (builder) => {
  builder.addCase(addAnswer, (state, { payload }) => (state = payload));
});

export { testReducer, answersReducer };
