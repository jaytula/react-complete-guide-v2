import { IUser } from "./Users/AddUser";
import classes from "./UsersList.module.css";

const UsersList = ({ users }: { users: IUser[] }) => {
  return (
    <div className={classes.usersList}>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
