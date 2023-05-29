import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    console.log("expense item evaluated by react");

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    };

    return(
        <Card>
            <ExpenseDate date={props.date}/>
            <div className="momon">
                <h2>{title}</h2>
                <div>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    );
}

export default ExpenseItem;