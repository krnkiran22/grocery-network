import React, { useState } from 'react';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Marketplace from './Components/Marketplace';
import Contract from './Components/Contract';
import NavBar from './Components/NavBar';

const App = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([
    {
      name: 'Apples',
      quantity: 100,
      basePrice: 30,
      bids: [],
      owner: 'ShopA',
      image: 'https://via.placeholder.com/200'
    },
    {
      name: 'Bananas',
      quantity: 200,
      basePrice: 20,
      bids: [],
      owner: 'ShopB',
      image: 'https://via.placeholder.com/200'
    }
  ]);
  const [contracts, setContracts] = useState([]);
  const [view, setView] = useState('marketplace'); // 'marketplace' or 'dashboard'

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const placeBid = (product, bidAmount, shop) => {
    const updatedProducts = products.map(p => {
      if (p === product) {
        const newBid = { amount: bidAmount, shop };
        return { ...p, bids: [...p.bids, newBid] };
      }
      return p;
    });
    setProducts(updatedProducts);
  };

  const acceptBid = (product, bid) => {
    setContracts([...contracts, { product, highestBid: bid }]);
    setProducts(products.filter(p => p !== product));
  };

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div>
      <NavBar setView={setView} />
      {view === 'marketplace' && (
        <Marketplace products={products} placeBid={placeBid} acceptBid={acceptBid} user={user} />
      )}
      {view === 'dashboard' && (
        <Dashboard addProduct={addProduct} user={user} />
      )}
      <Contract contracts={contracts} />
    </div>
  );
};

export default App;
