import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

interface IExpense {
  id: string;
  title: string;
  date: Date;
  amount: number;
}

const Expenses = ({ items }: { items: IExpense[] }) => {
  const [filteredYear, setFilteredYear] = useState<string>("2021");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={filteredYear} onChangeFilter={filterChangeHandler} />

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
