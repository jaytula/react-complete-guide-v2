import { ReactNode } from "react";
import classes from "./Card.module.css";

const Card = ({
  children,
  className='',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={[className, classes.card].join(" ")}>{children}</div>;
};

export default Card;
