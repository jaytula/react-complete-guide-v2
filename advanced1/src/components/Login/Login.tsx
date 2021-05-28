import React, {
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

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

const passwordReducer = (
  state: { value: string; isValid: boolean },
  action: { type: "USER_INPUT" | "INPUT_BLUR"; val?: string }
) => {
  if (action.type === "USER_INPUT" && typeof action.val === "string") {
    return { value: action.val, isValid: action.val.trim().length > 7 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 7 };
  }
  return state;
};

const Login = () => {
  const { onLogin } = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("checkout form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log(`clearingTimeout ${timeout}`);
      clearTimeout(timeout);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler: FocusEventHandler<HTMLInputElement> = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler: FocusEventHandler<HTMLInputElement> = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          type="email"
          label="E-Mail"
          value={emailState.value}
          isValid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          value={passwordState.value}
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
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
