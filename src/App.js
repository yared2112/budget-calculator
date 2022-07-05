import React,{useState} from 'react'; 
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import {v4 as uuidv4} from 'uuid';

const initialExpenses = [
  {id:uuidv4(),charge:"rent",amount:5000},
  {id:uuidv4(),charge:"cloth",amount:2500},
  {id:uuidv4(),charge:"feul",amount:7000},
  {id:uuidv4(),charge:"meal",amount:9000}
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        Total Spending :
        <span className="total">

          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)} ETB
        </span>
      </h1>
    </>
  );
}

export default App;
