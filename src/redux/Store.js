import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./Slice";
// import visibilityReducer from './visibility/visibilityReducer'

// const preloadedState = {
//   todos: [
//     {
//       text: 'Eat food',
//       completed: true,
//     },
//     {
//       text: 'Exercise',
//       completed: false,
//     },
//   ],
//   visibilityFilter: 'SHOW_COMPLETED',
// }

export const store = configureStore({
  reducer: {
    tests: testSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batch, and devtools enhancers were composed together
