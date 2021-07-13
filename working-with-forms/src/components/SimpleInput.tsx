import {
  FormEventHandler,
  ChangeEventHandler,
  useState,
  useRef,
  useEffect,
} from "react";

const SimpleInput = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState<boolean>(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState<boolean>(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name input is valid!");
    }
  }, [enteredNameIsValid]);
  const nameInputChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current?.value;
    console.log(enteredValue);

    // nameInputRef?.current?.value = ''; // Bad: directly manipulating the DOM
    setEnteredName("");
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
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
          ref={nameInputRef}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
