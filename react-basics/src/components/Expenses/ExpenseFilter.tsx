import { ChangeEventHandler } from "react";
import "./ExpenseFilter.css";

const ExpensesFilter = ({
  year,
  onChangeFilter,
}: {
  year: string;
  onChangeFilter: (selectedYear: string) => void;
}) => {
  const dropDownChangeHandler: ChangeEventHandler<HTMLSelectElement> = event => {
    onChangeFilter(event.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={year} onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
