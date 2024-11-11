import { createSlice } from "@reduxjs/toolkit";

export const multiStepSlice = createSlice({
  name: "multiStep",
  initialState: {
    userData: {
      name: "",
      email: "",
      username: "",
      password: ""
    }
  },

  reducers: {
    addUserData: (state, action) => {
      const { name, value } = action.payload;
      state.userData[name] = value; 
      
    }
  }
});

export const { addUserData } = multiStepSlice.actions;
export default multiStepSlice.reducer;
