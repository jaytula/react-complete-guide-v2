import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

interface MyProps {}

interface MyState {
  showUsers: boolean;
}

class Users extends Component<MyProps, MyState> {
  // state = {
  //   showUsers: true,
  // };
  constructor(props: MyProps, state: MyState) {
    super(props, state);
    this.state = {
      showUsers: true
    }
  }

  toggleUsersHandler() {
    this.setState((curState) => ({ showUsers: !curState.showUsers }));
  }

  render() {
    const { showUsers } = this.state;
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {showUsers ? "Hide" : "Show"} Users
        </button>
        {showUsers && usersList}
      </div>
    );
  }
}

export default Users;
