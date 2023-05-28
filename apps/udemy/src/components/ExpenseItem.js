import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    return(
        <Card>
        <ExpenseDate date={props.date}/>
        <div className="momon">
            <h2>{props.title}</h2>
            <div>{props.amount}</div>
        </div>
        </Card>
    );
}

export default ExpenseItem;