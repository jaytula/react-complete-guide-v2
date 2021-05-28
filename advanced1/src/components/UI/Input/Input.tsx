import { InputHTMLAttributes } from "react";
import classes from './Input.module.css';

const MyInput = (props: InputHTMLAttributes<HTMLInputElement> & {isValid: boolean, label: string}) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props} />
    </div>
  );
};

export default MyInput;
