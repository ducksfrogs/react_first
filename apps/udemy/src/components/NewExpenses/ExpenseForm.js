import React from "react";

const ExpenseForm = () => {

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    };

    return (
        <form>
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" />
                </div>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>

        </form>
    )

};

export default ExpenseForm;