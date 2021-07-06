import { FormEventHandler, useRef } from "react";

import classes from "./TaskForm.module.css";

const TaskForm = (props: {
  onEnterTask: (text: string) => void;
  loading: boolean;
}) => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef?.current?.value as string;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{props.loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
