import React from 'react'
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddNew } from './components/AddNew';

import { GlobalProvider } from './context/GlobalState';



function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddNew />
      </div>

    </GlobalProvider>

    
  );
}

export default App;
