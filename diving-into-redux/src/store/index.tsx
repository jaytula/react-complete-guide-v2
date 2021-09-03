import { createStore } from "redux";
import {createSlice, configureStore  } from '@reduxjs/toolkit';

export interface IRootState {
  counter: string;
  showCounter: boolean;
}

const initialState = { counter: 0, showCounter: true};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state, action) {
      state.counter -= action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

export default store;
