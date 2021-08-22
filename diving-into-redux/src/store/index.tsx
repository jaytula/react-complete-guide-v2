import { createStore } from "redux";

const initialState = { counter: 0 };

const counterReducer = (
  state = initialState,
  action: { type: "INCREMENT" | "DECREMENT" }
) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
