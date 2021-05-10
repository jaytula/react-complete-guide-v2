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

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  let expensesContent: JSX.Element | JSX.Element[] = <p>No expenses found</p>;
  if (filteredExpenses.length) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}

      </Card>
    </div>
  );
};

export default Expenses;
