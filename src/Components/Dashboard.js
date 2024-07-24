import React, { useState } from 'react';

const Dashboard = ({ addProduct, user }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [basePrice, setBasePrice] = useState('');

  const handleAddProduct = () => {
    addProduct({ name: productName, quantity, basePrice, bids: [], owner: user.username, image: 'https://via.placeholder.com/200' });
    setProductName('');
    setQuantity('');
    setBasePrice('');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="shop-details">
        <h3>Shop Details</h3>
        <p><strong>Shop Name:</strong> {user.shopName}</p>
        <p><strong>Owner Name:</strong> {user.shopOwner}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>City:</strong> {user.city}</p>
        <p><strong>State:</strong> {user.state}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
      <div className="product-form">
        <h3>Add Product</h3>
        <input 
          type="text" 
          placeholder="Product Name" 
          value={productName} 
          onChange={(e) => setProductName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Quantity" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Base Price" 
          value={basePrice} 
          onChange={(e) => setBasePrice(e.target.value)} 
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default Dashboard;
