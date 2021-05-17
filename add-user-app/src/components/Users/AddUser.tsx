import { FormEventHandler, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

export interface IUser {
  name: string;
  age: string;
}

const AddUser = ({ onAddUser }: { onAddUser: (user: IUser) => void }) => {
  const [enteredUsername, setEnteredusername] = useState<string>("");
  const [enteredAge, setEnteredAge] = useState<string>("");

  const addUserHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }
    onAddUser({ name: enteredUsername, age: enteredAge });
    setEnteredusername("");
    setEnteredAge("");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={(event) => setEnteredusername(event.target.value)}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={(event) => setEnteredAge(event.target.value)}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
