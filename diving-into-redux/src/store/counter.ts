import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

export const counterSlice = createSlice({
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

export const counterActions = counterSlice.actions;
