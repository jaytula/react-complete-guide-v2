import classes from "./Input.module.css";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes
} from "react";

const Input = React.forwardRef(
  (
    props: {
      input: DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement> | { id: string },
        HTMLInputElement
      >;
      label: string;
    },
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}></input>
      </div>
    );
  }
);

export default Input;
