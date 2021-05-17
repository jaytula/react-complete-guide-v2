import { FormEventHandler, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

export interface IUser {
  name: string;
  age: string;
}

const AddUser = ({ onAddUser }: { onAddUser: (user: IUser) => void }) => {
  const [username, setUsername] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const addUserHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onAddUser({ name: username, age: age });
    setUsername("");
    setAge("");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
