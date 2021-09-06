import {createSlice, configureStore, PayloadAction  } from '@reduxjs/toolkit';

export interface IRootState {
  counter: string;
  showCounter: boolean;
}

const initialState = { counter: 0, showCounter: true};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
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
  }
})

export const counterActions = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

export type RootState = ReturnType<typeof store.getState>

export default store;
