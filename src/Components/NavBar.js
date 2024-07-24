import React from 'react';

const NavBar = ({ setView }) => {
  return (
    <div>
      <button onClick={() => setView('marketplace')}>Marketplace</button>
      <button onClick={() => setView('dashboard')}>Dashboard</button>
    </div>
  );
};

export default NavBar;
