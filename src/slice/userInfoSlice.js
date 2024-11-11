import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  allData: [],
};

export const userinfoSlice = createSlice({
  name: "userInformation",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.allData.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addData } = userinfoSlice.actions;

export default userinfoSlice.reducer; // Export the reducer directly
