import { useRef } from "react";
import { FormEventHandler } from "react";
import { ChangeEventHandler, useState } from "react";

const SimpleInput = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [enteredName, setEnteredName] = useState<string>("");

  const nameInputChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if(enteredName.trim() === '') {
      return;
    }

    console.log(enteredName);
    const enteredValue = nameInputRef.current?.value;
    console.log(enteredValue);

    // nameInputRef?.current?.value = ''; // Bad: directly manipulating the DOM
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
