import { ChangeEventHandler, FormEventHandler, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState<string>("");
  const [enteredAmount, setEnteredAmount] = useState<string>("");
  const [enteredDate, setEnteredDate] = useState<string>("");
  // const [userInput, setUserInput] = useState<{
  //   enteredTitle: string;
  //   enteredAmount: string;
  //   enteredDate: string;
  // }>({ enteredTitle: "", enteredAmount: "", enteredDate: "" });

  const titleChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   enteredTitle: event.target.value,
    // }));
  };

  const amountChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   enteredAmount: event.target.value,
    // }));
  };

  const dateChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   enteredDate: event.target.value,
    // }));
  };

  // const { enteredTitle, enteredAmount, enteredDate } = userInput;

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    console.log(expenseData)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
