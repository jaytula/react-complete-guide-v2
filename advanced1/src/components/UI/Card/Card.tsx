import React, { ReactNode } from "react";

import classes from "./Card.module.css";

const Card = (props: { className: string; children: ReactNode }) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
