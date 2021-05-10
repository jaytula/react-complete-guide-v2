import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { ChangeEventHandler, useState } from "react";

interface IExpense {
  id: string;
  title: string;
  date: Date;
  amount: number;
}

const Expenses = ({ items }: { items: IExpense[] }) => {
  const [selectedYear, setSelectedYear] = useState<string>('');

  const changeYearHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div>
      <ExpensesFilter year={selectedYear} onChangeYear={changeYearHandler} />
      <Card className="expenses">
        {items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
