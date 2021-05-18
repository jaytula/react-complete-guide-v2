import AddUser, { IUser } from "./components/Users/AddUser";
import classes from "./App.module.css";
import { useState } from "react";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState<IUser[]>([]);

  const addUserHandler = (user: IUser) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { ...user, id: Math.random().toString() },
    ]);
  };

  return (
    <div className={classes.app}>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
