import { createStore } from "redux";
import {createSlice  } from '@reduxjs/toolkit';

export interface IRootState {
  counter: string;
  showCounter: boolean;
}

const initialState = { counter: 0, showCounter: true};

createSlice({
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

const counterReducer = (
  state = initialState,
  action: { type: "INCREMENT" | "DECREMENT" | "TOGGLE", amount: 1 }
) => {
  if (action.type === "INCREMENT") {
    return { ...state, counter: state.counter + (action?.amount || 1) };
  }
  if (action.type === "DECREMENT") {
    return { ...state, counter: state.counter - (action?.amount || 1) };
  }
  if (action.type === "TOGGLE") {
    return { ...state, showCounter: !state.showCounter}
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
