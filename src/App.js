import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">Budget Calculator
    <ExpenseForm />
    <ExpenseItem />
    <ExpenseList />
    <Alert />
    </div>
    
  );
}

export default App;
