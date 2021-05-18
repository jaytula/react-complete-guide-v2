import { FormEventHandler, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

export interface IUser {
  id?: string;
  name: string;
  age: string;
}

interface IModalData {
  title: string;
  message: string;
}

const AddUser = ({ onAddUser }: { onAddUser: (user: IUser) => void }) => {
  const [enteredUsername, setEnteredusername] = useState<string>("");
  const [enteredAge, setEnteredAge] = useState<string>("");
  const [error, setError] = useState<IModalData | null>(null)

  const addUserHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({title: 'Invalid Input', message: 'Username or Age is empty'})
      return;
    }

    if (+enteredAge < 1) {
      setError({title: 'Invalid Input', message: 'Age must be greater than 0'})
      return;
    }
    onAddUser({ name: enteredUsername, age: enteredAge });
    setEnteredusername("");
    setEnteredAge("");
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClose={() => setError(null)} />}
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
    </div>
  );
};

export default AddUser;
