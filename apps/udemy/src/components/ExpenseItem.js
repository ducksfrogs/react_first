import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    return(
        <div>
        <ExpenseDate date={props.date}/>
        <div className="momon">
            <h2>{props.title}</h2>
            <div>{props.amount}</div>
        </div>
        </div>
    );
}

export default ExpenseItem;