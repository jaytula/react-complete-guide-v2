import { ChangeEvent } from "react";
import { Component } from "react";
import { Fragment } from "react";
import UsersContext from "../store/users-context";

import classes from "./UserFinder.module.css";

import Users from "./Users";

interface MyProps {}

interface IUser {
  id: string;
  name: string;
}
interface MyState {
  filteredUsers: IUser[];
  searchTerm: string;
}

class UserFinder extends Component<MyProps, MyState> {
  static contextType = UsersContext;

  constructor(props: MyProps, state: MyState) {
    super(props, state);
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    console.log({ctx: this.context});
    this.setState({ filteredUsers: this.context.users });
  }
  componentDidUpdate(_: MyProps, prevState: MyState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user: IUser) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value;
    this.setState({
      searchTerm,
    });
  }

  render() {
    return (
      <Fragment>
        <input
          className={classes.finder}
          type="search"
          onChange={this.searchChangeHandler.bind(this)}
        />
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
