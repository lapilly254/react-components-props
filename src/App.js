import React from 'react';
import ProductList from './ProductList'; // Import the ProductList component
import Order from './Order';
import OrderList from './OrderList';

function App() {
  return (
    <div className="App">
      {/* Render the ProductList component */}
      <ProductList />
      <Order/>
      <OrderList/>
    </div>
  );
}

export default App;
