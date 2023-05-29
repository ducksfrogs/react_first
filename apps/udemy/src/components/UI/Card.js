import './Card.css';

function Card (props) {
    const classes = 'card ' + PerformancePaintTiming.claaaName; 
    return <div className={classes}>{props.children}</div>
}


export default Card;
