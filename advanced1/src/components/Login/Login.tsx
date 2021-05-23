import React, {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = ({
  onLogin,
}: {
  onLogin: (email: string, password: string) => void;
}) => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('checkout form validity');
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      console.log(`clearingTimeout ${timeout}`)
      clearTimeout(timeout);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler: FocusEventHandler<HTMLInputElement> = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler: FocusEventHandler<HTMLInputElement> = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
