import { ReactNode } from 'react';
import classes from './Section.module.css';

const Section = (props: {children: ReactNode}) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;
