import { IExpense } from "./Expenses";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = ({ items }: { items: IExpense[] }) => {
  if(!items.length) {
    return <p className="expenses-list__fallback">Found no expenses</p>
  }
  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
