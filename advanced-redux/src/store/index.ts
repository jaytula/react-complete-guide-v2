import { configureStore, createSlice } from "@reduxjs/toolkit";

const appInitialState = {
  showCart: false
}
const appSlice = createSlice({
  name: 'app',
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
    }
  }
})

export const appActions = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch