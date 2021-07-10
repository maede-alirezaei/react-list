import React, { useState } from "react";
import ExpensesList from "./Expenses/ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./Expenses/ExpensesChart";
import "./Expenses.css"
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  // const [items, setItems] = useState(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const result = props.items.filter((value) => {
    return value.date.getFullYear().toString() === filteredYear;
  });

  // setItems(result);

  return (
    <div className="expenses-style">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={result}></ExpensesChart>
      <ExpensesList items={result}></ExpensesList>
    </div>
  );
};

export default Expenses;
