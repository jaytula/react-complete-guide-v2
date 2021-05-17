import { FormEventHandler, useState } from "react";
import classes from "./AddUserForm.module.css";

export interface IUser {
  name: string;
  age: string;
}

const User = ({ onAddUser }: { onAddUser: (user: IUser) => void }) => {
  const [username, setUsername] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const addUserHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onAddUser({ name: username, age: age });
    setUsername('');
    setAge('');
  };
  return (
    <div className={classes.user}>
      <form onSubmit={addUserHandler}>
        <div className={classes.controls}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default User;
