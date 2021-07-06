import { ReactNode } from 'react';
import classes from './TaskItem.module.css';

const TaskItem = (props: {children: ReactNode}) => {
  return <li className={classes.task}>{props.children}</li>
};

export default TaskItem;