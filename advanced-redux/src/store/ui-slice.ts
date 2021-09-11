import { createSlice } from "@reduxjs/toolkit";

const uiInitialState = {
  showCart: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    show: (state) => {
      state.showCart = true;
    },
    hide: (state) => {
      state.showCart = true;
    },
    toggle: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = uiSlice.actions;
