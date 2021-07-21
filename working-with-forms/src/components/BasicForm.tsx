import { FormEventHandler } from "react";
import useInput from "../hooks/use-input";

const BasicForm = () => {
  const {
    inputElem: firstnameElem,
    isValid: firstnameIsValid,
    reset: firstnameReset,
  } = useInput("firstname", "First Name", "text", (s) => s.trim() !== "");
  const {
    inputElem: lastnameElem,
    isValid: lastnameIsValid,
    reset: lastnameReset,
  } = useInput("lastname", "Last Name", "text", (s) => s.trim() !== "");
  const {
    inputElem: emailElem,
    isValid: emailIsValid,
    reset: emailReset,
  } = useInput("email", "E-Mail Address", "email", (s) => s.includes("@"));

  const formIsValid = firstnameIsValid && lastnameIsValid && emailIsValid;

  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    firstnameReset();
    lastnameReset();
    emailReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        {firstnameElem}
        {lastnameElem}
      </div>
      {emailElem}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
