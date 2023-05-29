import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/NewExpenses/ExpenseForm';

function App() {
  const expenses = [
    { id: '1', title: 'momon', amount: 25.56, date: new Date(2021, 2,20)},
    { id: '2', title: 'toiret paper', amount: 295.56, date: new Date(2021, 2,20)},
    { id: '3', title: 'kikij', amount: 95.56, date: new Date(2021, 2,20)},
    { id: '4', title: 'Car instrance', amount: 29.56, date: new Date(2021, 2,20)},
    { id: '5', title: 'Car instrance', amount: 29.56, date: new Date(2021, 2,20)},
  ];

  return (
    <div>
      <ExpenseForm />
      <h1>lets started</h1>
      <div>
        <Expenses items={expenses}/>
      </div>
    </div>

  );
}

export default App;
