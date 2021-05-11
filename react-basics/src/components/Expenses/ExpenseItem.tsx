import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { MouseEventHandler, useState } from "react";

const ExpenseItem = ({
  date,
  title: initialTitle,
  amount,
}: {
  date: Date;
  title: string;
  amount: number;
}) => {
  const [title, setTitle] = useState(initialTitle);

  const clickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    setTitle("I am changed");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price"></div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
