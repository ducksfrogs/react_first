import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    { id: '1', title: 'momon', amount: 25.56, date: new Date(2021, 2,20)},
    { id: '2', title: 'toiret paper', amount: 295.56, date: new Date(2021, 2,20)},
    { id: '3', title: 'kikij', amount: 95.56, date: new Date(2021, 2,20)},
    { id: '4', title: 'Car instrance', amount: 29.56, date: new Date(2021, 2,20)},
  ];

  return (
    <div>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} /> 
    </div>
  );
}

export default App;
