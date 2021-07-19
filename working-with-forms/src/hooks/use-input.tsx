import { ChangeEventHandler, FocusEventHandler, useState } from "react";

const useInput = (
  name: string,
  label: string,
  type: string,
  validator: (value: string) => boolean
) => {
  const [value, setValue] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const isValid = validator(value);
  const inputIsInvalid = !isValid && touched;

  const inputClasses = inputIsInvalid ? "form-control invalid" : "form-control";

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.target.value);
    setTouched(true);
  };

  const inputBlurHandler: FocusEventHandler<HTMLInputElement> = event => {
    setTouched(true);
  };

  const reset = () => {
    setValue("");
    setTouched(false);
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
