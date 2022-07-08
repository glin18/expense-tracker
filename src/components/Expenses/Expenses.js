import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const changeFilterHandler = (year) => {
    setFilteredYear(year);
    console.log(year);
    console.log("In expenses.js");
  };

  const filteredExpenses = props.expenses.filter((exp) => {
    return String(exp.date.getFullYear()) === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList expenses={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
