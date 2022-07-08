import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const onCancelHandler = () => {
    setShowForm(false);
  };
  const onStartHandler = () => {
    setShowForm(true);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={onStartHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelHandler={onCancelHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
