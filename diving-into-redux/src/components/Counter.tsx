import { Component } from "react";
import { MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector<RootState, number>(
    (state) => state.counter.counter
  );
  const showCounter = useSelector<RootState, boolean>(
    (state) => state.counter.showCounter
  );
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(counterActions.increment());
  };

  const incrementByFiveHandler: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(counterActions.increment(5));
  };

  const decrementHandler: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFiveHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

interface Props {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

class CounterClass extends Component<Props> {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state: { counter: number }) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch: (action: { type: string }) => void) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

// export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
