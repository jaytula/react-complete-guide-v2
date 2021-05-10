import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { MouseEventHandler } from "react";

const ExpenseItem = ({
  date,
  title,
  amount,
}: {
  date: Date;
  title: string;
  amount: number;
}) => {
  const clickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log('Clicked!');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
