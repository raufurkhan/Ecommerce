import React from 'react';
import Header from './Layout/Header';
import ProductList from './ProductItems/ProductList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';
import About from './Pages/About';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactForm';
import ProductDetails from './ProductItems/ProductsDetails';
import Login from './Pages/Login';

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

  async function adduserHandler(user){
    const res = await fetch('https://ecommerce-1db71-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        //it is not required bvut good practice to aware your backend about data u r sending
        'Content-Type': 'application/json'
      }
    });
  
    const data = await res.json();
    console.log(data);
  }



  return (
    <Router>
    <CartProvider>
    <div>
    <Header onClick={cartHandler}/>
    <Switch>
          <Route path="/about" ><About/></Route>
          <Route path="/login" ><Login/></Route>
         <Route path="/products" ><ProductList /></Route>
          <Route path="/contact" ><ContactUs onAddUser={adduserHandler}/></Route>
          <Route path="/home" exact ><Home /></Route>
         <Route path="/products/:productId" ><ProductDetails/></Route>
        </Switch>

  <div style={backdropStyle} onClick={closeCart}></div>

<div style={cartStyle}>
 {showCart && <Cart />}
</div>
    </div>
    </CartProvider>
    </Router>
  );
}

export default App;
