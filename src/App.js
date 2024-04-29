import './App.css';
import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';

const API_URL = 'https://my-json-server.typicode.com/Abrahamkinuthia4723/bank-of-flatiron/transactions';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(API_URL)
      .then((response) => {
        
        return response.json();
      })
      .then((data) => setTransactions(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const sortTransactions = (key) => {
    setTransactions([...transactions].sort((a, b) => a[key].localeCompare(b[key])));
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>The Royal bank Of Flatiron</h1>
      <input id='play'
        type="text"
        placeholder="Search your recent transactions by inputing the description of the transaction here then clicking search on your keyboard."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionTable
        transactions={filteredTransactions}
        onSort={sortTransactions}
      />
    </div>
  );
};

export default App;