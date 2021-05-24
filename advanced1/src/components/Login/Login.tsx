import React, {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  useEffect,
  useReducer,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (
  state: { value: string; isValid: boolean },
  action: { type: "USER_INPUT" | "INPUT_BLUR"; val?: string }
) => {
  if (action.type === "USER_INPUT" && typeof action.val === "string") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return state;
};

const Login = ({
  onLogin,
}: {
  onLogin: (email: string, password: string) => void;
}) => {
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(false);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("checkout form validity");
      setFormIsValid(
        emailState.value.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      console.log(`clearingTimeout ${timeout}`);
      clearTimeout(timeout);
    };
  }, [emailState, enteredPassword]);

  const emailChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler: FocusEventHandler<HTMLInputElement> = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler: FocusEventHandler<HTMLInputElement> = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
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
