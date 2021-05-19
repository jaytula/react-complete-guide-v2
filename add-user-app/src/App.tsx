import AddUser, { IUser } from "./components/Users/AddUser";
import { Fragment, useState } from "react";
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
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
