import AddUser, { IUser } from "./components/Users/AddUser";
import classes from "./App.module.css";
import { useState } from "react";
import UsersList from "./components/Users/UsersList";
import ErrorModal, { IModalData } from "./components/UI/ErrorModal";

function App() {
  const [usersList, setUsersList] = useState<IUser[]>([]);
  const [modal, setModal] = useState<IModalData | null>(null);

  const addUserHandler = (user: IUser) => {
    if (!user.name || !user.age) {
      setModal({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (Number(user.age) < 0) {
      setModal({
        title: "Invalid input",
        message: "Pease enter a valid age (> 0)",
      });
      return;
    }
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
