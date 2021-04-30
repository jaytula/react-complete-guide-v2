import { FormEventHandler, useRef, useState } from "react";
import Wrapper from "../Helpers/Wrapper";
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
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<IModalData | null>(null)

  const addUserHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if(!nameInputRef.current) return null;
    if(!ageInputRef.current) return null;

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({title: 'Invalid Input', message: 'Username or Age is empty'})
      return;
    }

    if (+enteredAge < 1) {
      setError({title: 'Invalid Input', message: 'Age must be greater than 0'})
      return;
    }
    onAddUser({ name: enteredName, age: enteredAge });
    nameInputRef.current.value = ""
    ageInputRef.current.value = ''
    
  };
  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onClose={() => setError(null)} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
