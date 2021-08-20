import { configureStore } from "@reduxjs/toolkit";
import { testReducer, answersReducer } from "./Reducers";

export const store = configureStore({
  reducer: {
    tests: testReducer,
    answers: answersReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
