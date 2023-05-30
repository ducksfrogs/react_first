import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);

    };
    return (     
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
       );
};

export default NewExpense;