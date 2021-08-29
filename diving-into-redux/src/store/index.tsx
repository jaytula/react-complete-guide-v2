import { createStore } from "redux";

export interface IRootState {
  counter: string;
  showCounter: boolean;
}

const initialState = { counter: 0, showCounter: true};

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
