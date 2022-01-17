import './App.css';
import Header from './Components /Header';
import Balance from './Components /Balance';
import IncExp from './Components /IncExp'
import TransactionsList from './Components /TransactionsList';
import AddTransaction from './Components /AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncExp />
        <TransactionsList />
        <AddTransaction />
      </div>
    </GlobalProvider >
  );
}

export default App;
