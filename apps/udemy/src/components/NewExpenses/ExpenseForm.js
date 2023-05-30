import React, { useState } from "react";

const ExpenseForm = () => {
    const [enterdTitle, setEmteredTitle ] = useState('');
    const [enteredAmount, setEnteredAmount ] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [ userInput, setUserInput] = useState({
    //     enterdTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });
    

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setEmteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterdTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, enterdTitle: event.target.value
        //     };
        // })
    };
     
    const amountChangeHandler = (event) => {
        // console.log(event.target.value)
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterdTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        console.log(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" 
                        value={enterdTitle}
                        onChange={titleChangeHandler} 
                    />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>

        </form>
    )

};

export default ExpenseForm;