import './ExpenseItem.css';
    
function ExpenseItem(props) {

    return(
    
        <div className="momon">
            <div>{props.date}</div>
            <div>
                <h2>{props.title}</h2>
                <div>{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;