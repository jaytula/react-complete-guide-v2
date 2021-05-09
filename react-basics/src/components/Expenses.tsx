import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

interface IExpense {
  id: string;
  title: string;
  date: Date;
  amount: number;
}

function Expenses({ items }: { items: IExpense[]}) {
  return (
    <div className='expenses'>
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
