import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

export const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action: PayloadAction<undefined>) {
      state.isAuthenticated = true;
    },
    logout(state, action: PayloadAction<undefined>) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
