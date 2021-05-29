import {
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from "react";
import classes from "./Input.module.css";

const MyInput = forwardRef((
  props: InputHTMLAttributes<HTMLInputElement> & {
    isValid: boolean;
    label: string;
  },
  ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const activate = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props} ref={inputRef} />
    </div>
  );
});

export default MyInput;
