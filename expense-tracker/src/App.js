import Header from './components/Header'
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransctionList from './components/TransctionList';
import AddTransction from './components/AddTransction';
import './App.css'

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance money="5"/>
        <IncomeExpenses />
        <TransctionList />
        <AddTransction />
      </div>
    </GlobalProvider>
  );
}

export default App;
