import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLogout: false,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    loginAuth: (state, action) => {
      const { user } = action.payload;
      state.user = user?.account || user;
      state.isAuthenticated = true;
      state.isLogout = false;
    },
    logoutAuth: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLogout = true;
    },
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { loginAuth, logoutAuth, setIsAuthenticated } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectIsLogout = (state: RootState) => state.auth.isLogout;
