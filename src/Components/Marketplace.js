import React, { useState } from 'react';
import './Marketplace.css';  // Add CSS file for styling

const Marketplace = ({ products, placeBid, acceptBid, user }) => {
  const [bidAmount, setBidAmount] = useState('');

  const handlePlaceBid = (product) => {
    placeBid(product, bidAmount, user.username);
    setBidAmount('');
  };

  return (
    <div className="marketplace">
      <h2>Marketplace</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Quantity: {product.quantity}</p>
              <p>Base Price: {product.basePrice}</p>
              <ul>
                {product.bids.map((bid, bidIndex) => (
                  <li key={bidIndex}>
                    Bid: {bid.amount} by {bid.shop}
                    {product.owner === user.username && (
                      <button onClick={() => acceptBid(product, bid)}>Accept Bid</button>
                    )}
                  </li>
                ))}
              </ul>
              {product.owner !== user.username && (
                <>
                  <input 
                    type="number" 
                    placeholder="Bid Amount" 
                    value={bidAmount} 
                    onChange={(e) => setBidAmount(e.target.value)} 
                  />
                  <button onClick={() => handlePlaceBid(product)}>Place Bid</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
