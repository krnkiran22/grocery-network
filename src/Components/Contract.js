import React from 'react';

const Contract = ({ contracts }) => {
  return (
    <div>
      <h2>Contracts</h2>
      <ul>
        {contracts.map((contract, index) => (
          <li key={index}>
            {contract.product.name} - {contract.product.quantity} 
            (Sold for: {contract.highestBid.amount} to {contract.highestBid.shop})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contract;
