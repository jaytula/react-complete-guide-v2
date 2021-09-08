import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action: PayloadAction<number | undefined>) {
      state.counter += action.payload || 1;
    },
    decrement(state, action: PayloadAction<number | undefined>) {
      state.counter -= action.payload || 1;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
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

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
