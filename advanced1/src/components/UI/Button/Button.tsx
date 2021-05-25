import React, { MouseEventHandler, ReactNode } from "react";

import classes from "./Button.module.css";

const Button = (props: {
  type?: "button" | "submit" | "reset";
  className?: string | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: ReactNode;
}) => {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className || ''}`}
      onClick={props.onClick}
      disabled={props.disabled || false}
    >
      {props.children}
    </button>
  );
};

export default Button;
