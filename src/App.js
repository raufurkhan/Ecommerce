import React from 'react';
import Header from './Layout/Header';
import ProductList from './ProductItems/ProductList'
import Cart from './Cart/Cart';
import { useState } from 'react';

function App() {

  const [showCart, setShowCart] = useState(false);

  const cartHandler = () => {
    setShowCart(!showCart);
  };

  const closeCart = () => {
    setShowCart(false); // Close the cart when clicking on the backdrop
  };

  const cartStyle = {
    position: 'fixed',
    top: '6rem',
    right: showCart ? '0' : '-400px', // Adjust the width to your cart's width
    height: '100%',
    width: '400px', // Set your desired cart width
    backgroundColor: 'white',
    zIndex: '999',
    transition: 'right 0.3s ease-in-out',
  };


  const backdropStyle = {
    display: showCart ? 'block' : 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    zIndex: '998', // Below the cart
  };

  return (
    <div>
    <Header onClick={cartHandler}/>
    <ProductList/>

  <div style={backdropStyle} onClick={closeCart}></div>

<div style={cartStyle}>
 {showCart && <Cart />}
</div>
    </div>
  );
}

export default App;
