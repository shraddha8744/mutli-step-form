import { configureStore } from "@reduxjs/toolkit";
import userinfoReducer from "../slice/mutlStepSlice"; // Correctly import the reducer

export const store = configureStore({
  reducer: {
    user: userinfoReducer, // Use userinfoReducer for the `user` slice
  },
});
