import "./NewExpense.css";
import ExpenseForm, { IExpenseData } from "./ExpenseForm";
import { MouseEventHandler, useState } from "react";

const NewExpense = ({
  onAddExpense,
}: {
  onAddExpense: (expense: any) => void;
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const saveExpenseDataHandler = (enteredExpenseData: IExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const startEditingHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    setIsEditing(true);
  };
  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={() => setIsEditing(false)}
        />
      )}
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
