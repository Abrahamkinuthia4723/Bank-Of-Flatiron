import React, { useState } from 'react';

const TransactionTable = ({ transactions, onDelete }) => {
  const [sortBy, setSortBy] = useState(null);

  const handleSort = (property) => {
    if (sortBy === property) {
      // If already sorted by the same property, reverse the order
      transactions.reverse();
    } else {
      // Sort the transactions by the selected property
      transactions.sort((a, b) => (a[property] > b[property] ? 1 : -1));
    }
    setSortBy(property);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;