import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
  id: string;
  title: string;
  quantity: number;
  total: number;
  price: number;
}

const cartInitialState = { items: [], totalQuantity: 0 } as { items: Item[], totalQuantity: number };

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    add(
      state,
      action: PayloadAction<{ id: string, title: string; quantity: number; price: number }>
    ) {
      const existingIndex = state.items.findIndex(
        (el) => el.id === action.payload.id
      );
      if (existingIndex === -1) {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          quantity: action.payload.quantity,
          price: action.payload.price,
          total: action.payload.price * action.payload.quantity,
        });
      } else {
        state.items[existingIndex].quantity += action.payload.quantity;
        state.items[existingIndex].total =
          state.items[existingIndex].quantity * action.payload.price;
      }
      state.totalQuantity += action.payload.quantity;
    },
    remove(state, action: PayloadAction<{ id: string }>) {
      const existingIndex = state.items.findIndex(
        (el) => el.id === action.payload.id
      );
      if (existingIndex === -1) return;
      if (state.items[existingIndex].quantity === 1) {
        state.items = state.items.filter(
          (el) => el.id !== action.payload.id
        );
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

export const cartActions = cartSlice.actions;
