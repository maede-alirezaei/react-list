import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/Expenses";
import React, { useState } from "react";
import "./App.css";

const dummyExpenses = [
  { id:'34', title: "Toilet Paper", amount: 94.12, date: new Date(2020, 2, 28) },
  { id:'87',title: "New TV", amount: 799.49, date: new Date(2021, 2, 28) },
  { id:'54', title: "Car Insurance", amount: 294.67, date: new Date(2019, 3, 26) },
  { id:'33',title: "New Desk (Wooden)", amount: 450, date: new Date(2020, 4, 1) },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      
      return [expense, ...prevExpenses];
    });
   
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
