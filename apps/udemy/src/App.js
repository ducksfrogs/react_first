import React, { useState } from 'react';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  { id: '1', title: 'momon', amount: 25.56, date: new Date(2021, 2,20)},
  { id: '2', title: 'toiret paper', amount: 295.56, date: new Date(2021, 2,20)},
  { id: '3', title: 'kikij', amount: 95.56, date: new Date(2021, 2,20)},
  { id: '4', title: 'Car instrance', amount: 29.56, date: new Date(2021, 2,20)},
  { id: '5', title: 'Car instrance', amount: 29.56, date: new Date(2021, 2,20)},
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // setExpenses([expense, ...expenses``])
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <h1>lets started</h1>
      <div>
        <Expenses items={expenses}/>
      </div>
    </div>

  );
}

export default App;
