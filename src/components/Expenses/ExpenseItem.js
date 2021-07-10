import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('updated');
    console.log(title);
  };
  return (
    <li className="container rounded-pill bg-secondary p-3  space">
      <div className="row">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="col-2 font-color element-space"> {title}</div>
        <div className="col-6"></div>
        <div className="col-1  rounded-pill bg-info font-color element-space">
          ${props.amount}
        </div>
        <button
          className="col-1 rounded-pill element-space "
          onClick={clickHandler}
        >
          change title
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
