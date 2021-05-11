import "./NewExpense.css";
import ExpenseForm, { IExpenseData } from "./ExpenseForm";
import { MouseEventHandler, useState } from "react";

const NewExpense = ({
  onAddExpense,
}: {
  onAddExpense: (expense: any) => void;
}) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const saveExpenseDataHandler = (enteredExpenseData: IExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const showFormHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    setShowForm(true);
  };
  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHideForm={() => setShowForm(false)}
        />
      )}
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
