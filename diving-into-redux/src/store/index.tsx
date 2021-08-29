import { createStore } from "redux";

export interface IRootState {
  counter: string;
}

const initialState = { counter: 0};

const counterReducer = (
  state = initialState,
  action: { type: "INCREMENT" | "DECREMENT", amount: 1 }
) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + (action?.amount || 1) };
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - (action?.amount || 1) };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
