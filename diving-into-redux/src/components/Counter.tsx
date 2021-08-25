import { MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector<IRootState, string>((state) => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const incrementHandler: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
