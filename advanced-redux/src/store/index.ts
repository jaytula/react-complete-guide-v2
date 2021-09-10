import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const appInitialState = {
  showCart: false,
};
const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
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

export interface Item {
  title: string;
  quantity: number;
  total: number;
  price: number;
}

const cartInitialState = { items: [] } as { items: Item[] };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    add(
      state,
      action: PayloadAction<{ title: string; quantity: number; price: number }>
    ) {
      const existingIndex = state.items.findIndex(
        (el) => el.title === action.payload.title
      );
      if (existingIndex === -1) {
        state.items.push({
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
    },
    remove(state, action: PayloadAction<{ title: string }>) {
      const existingIndex = state.items.findIndex(
        (el) => el.title === action.payload.title
      );
      if (existingIndex === -1) return;
      if (state.items[existingIndex].quantity === 1) {
        state.items = state.items.filter(el => el.title !== action.payload.title)
      } else {
        state.items[existingIndex].quantity -= 1;
        state.items[existingIndex].total =
          state.items[existingIndex].quantity *
          state.items[existingIndex].price;
      }
    },
  },
});

export const appActions = appSlice.actions;
export const cartActions = cartSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
