import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Status = "error" | "success" | "pending";

export interface INotification {
  status: Status;
  title: string;
  message: string;
}

const uiInitialState: { showCart: boolean; notification: null | INotification } =
  {
    showCart: false,
    notification: null,
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
    showNotification: (state, action: PayloadAction<INotification>) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
