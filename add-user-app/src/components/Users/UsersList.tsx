import { IUser } from "./AddUser";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = ({ users }: { users: IUser[] }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
