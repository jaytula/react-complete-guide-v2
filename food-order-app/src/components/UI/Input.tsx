import classes from "./Input.module.css";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

const Input = (props: {
  input: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement> | { id: string },
    HTMLInputElement
  >;
  label: string;
}) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}></input>
    </div>
  );
};

export default Input;
