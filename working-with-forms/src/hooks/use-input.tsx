import { ChangeEventHandler, FocusEventHandler, useReducer } from "react";

type InputState = {
  value: string;
  touched: boolean;
};

const inputStateReducer = (
  state: InputState,
  action: {
    type: "SET_VALUE" | "SET_TOUCHED";
    value?: string;
    touched?: boolean;
  }
) => {
  if (action.type === "SET_VALUE" && typeof action.value === "string") {
    return { ...state, value: action.value };
  }

  if (action.type === "SET_TOUCHED" && typeof action.touched === "boolean") {
    return { ...state, touched: action.touched };
  }

  return state;
};
const useInput = (
  name: string,
  label: string,
  type: string,
  validator: (value: string) => boolean
) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, {
    value: "",
    touched: false,
  });
  const { value, touched } = inputState;

  const isValid = validator(value);
  const inputIsInvalid = !isValid && touched;

  const inputClasses = inputIsInvalid ? "form-control invalid" : "form-control";

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({ type: "SET_VALUE", value: event.target.value });
  };

  const inputBlurHandler: FocusEventHandler<HTMLInputElement> = (event) => {
    dispatch({ type: "SET_TOUCHED", touched: true });
  };

  const reset = () => {
    dispatch({ type: "SET_VALUE", value: "" });
    dispatch({ type: "SET_TOUCHED", touched: false });
  };

  const inputElem = (
    <div className={inputClasses}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={value}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
      />
      {inputIsInvalid && (
        <p className="error-text">{name} must not be empty.</p>
      )}
    </div>
  );

  return { isValid, value, reset, inputElem };
};

export default useInput;
