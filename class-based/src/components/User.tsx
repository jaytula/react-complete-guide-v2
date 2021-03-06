import React from "react";
import classes from "./User.module.css";

type MyProps = {
  name: string;
};

type MyState = {};

class User extends React.Component<MyProps, MyState> {
  componentWillUnmount() {
    console.log('User will unmount');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
