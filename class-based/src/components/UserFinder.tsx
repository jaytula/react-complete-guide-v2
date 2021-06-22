import { ChangeEvent } from "react";
import { Component } from "react";
import { Fragment } from "react";

import classes from "./UserFinder.module.css";

import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

interface MyProps {}

interface MyState {
  filteredUsers: { id: string; name: string }[];
  searchTerm: string;
}

class UserFinder extends Component<MyProps, MyState> {
  constructor(props: MyProps, state: MyState) {
    super(props, state);
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.setState({filteredUsers: DUMMY_USERS})
  }
  componentDidUpdate(_: MyProps, prevState: MyState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
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
