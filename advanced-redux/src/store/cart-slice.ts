import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from ".";
import { FIREBASE_BACKEND } from "../globals";
import { uiActions } from "./ui-slice";

export interface Item {
  id: string;
  title: string;
  quantity: number;
  total: number;
  price: number;
}

export interface ICart {
  items: Item[];
  totalQuantity: number;
}

const cartInitialState = { items: [], totalQuantity: 0 } as {
  items: Item[];
  totalQuantity: number;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    add(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      const existingIndex = state.items.findIndex(
        (el) => el.id === action.payload.id
      );
      if (existingIndex === -1) {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          quantity: 1,
          price: action.payload.price,
          total: action.payload.price * 1,
        });
      } else {
        state.items[existingIndex].quantity += 1;
        state.items[existingIndex].total =
          state.items[existingIndex].quantity * action.payload.price;
      }
      state.totalQuantity += 1;
    },
    remove(state, action: PayloadAction<{ id: string }>) {
      const existingIndex = state.items.findIndex(
        (el) => el.id === action.payload.id
      );
      if (existingIndex === -1) return;
      if (state.items[existingIndex].quantity === 1) {
        state.items = state.items.filter((el) => el.id !== action.payload.id);
      } else {
        state.items[existingIndex].quantity -= 1;
        state.items[existingIndex].total =
          state.items[existingIndex].quantity *
          state.items[existingIndex].price;
      }
      state.totalQuantity -= 1;
    },
  },
});

export const sendCartData = (cart: ICart) => {
  return async (dispatch: AppDispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(`${FIREBASE_BACKEND}cart.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
