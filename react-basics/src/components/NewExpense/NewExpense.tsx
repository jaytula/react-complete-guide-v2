import "./NewExpense.css";
import ExpenseForm, { IExpenseData } from "./ExpenseForm";

const NewExpense = ({onAddExpense}: {onAddExpense: (expense: any) => void}) => {
  const saveExpenseDataHandler = (enteredExpenseData: IExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
