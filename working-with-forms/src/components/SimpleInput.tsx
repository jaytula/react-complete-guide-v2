import { useRef } from "react";
import { FormEventHandler } from "react";
import { ChangeEventHandler, useState } from "react";

const SimpleInput = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState<boolean>(true);

  const nameInputChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return;
    }
    setEnteredNameIsValid(true)

    console.log(enteredName);
    const enteredValue = nameInputRef.current?.value;
    console.log(enteredValue);

    // nameInputRef?.current?.value = ''; // Bad: directly manipulating the DOM
    setEnteredName('');
  };

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
        />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
