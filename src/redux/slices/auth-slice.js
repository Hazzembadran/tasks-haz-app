import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  loggedIn: localStorage.getItem("logged_in"),
  token: localStorage.getItem("token"),
};

let authSlice = createSlice({
  name: "auth-slice",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.token = action.payload;
    },

    logout(state) {
      state.loggedIn = false;
      state.token = null;
      localStorage.removeItem("logged_in");
      localStorage.removeItem("token");
    },
  },
});

export const authSliceReducer = authSlice.reducer;
export const authSliceActions = authSlice.actions;

