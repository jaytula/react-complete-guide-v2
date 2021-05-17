import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classes from "./Button.module.css";

const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  const buttonClasses = [classes.button];
  if (props.className) {
    buttonClasses.push(props.className);
  }
  return (
    <button {...props} className={buttonClasses.join(" ")}>
      {props.children}
    </button>
  );
};

export default Button;
