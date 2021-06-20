import classes from './User.module.css';

const User = (props: {name: string}) => {
  return <li className={classes.user}>{props.name}</li>;
};

export default User;
