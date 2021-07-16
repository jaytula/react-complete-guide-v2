import { FocusEventHandler } from "react";
import { FormEventHandler, ChangeEventHandler, useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredNameTouched, setEnteredNameTouched] = useState<boolean>(false);
  // const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;
  if(enteredNameIsValid) {
    formIsValid = true;
  }

  // useEffect(() => {
  //   if(enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid])

  const formSubmissionHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      return;
    }
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler: FocusEventHandler<HTMLInputElement> = (event) => {
    setEnteredNameTouched(true);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
