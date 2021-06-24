import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

interface IUser {
  id: string;
  name: string;
}
interface MyProps {
  users: IUser[]
}

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

  componentDidUpdate() {
    if(this.props.users.length === 0) {
      throw new Error('No users provided!');
    }
  }

  toggleUsersHandler() {
    this.setState((curState) => ({ showUsers: !curState.showUsers }));
  }

  render() {
    const { showUsers } = this.state;
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
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
