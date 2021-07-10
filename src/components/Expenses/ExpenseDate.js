import React from "react";
import "./ExpenseItem.css";
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
      <div className="col-1 text-info-50 bg-light rounded-pill element-space">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
  );
};
export default ExpenseDate;
