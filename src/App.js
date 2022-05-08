import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';

// better method for importing components (as named components), to do this, an index.js file was created in the components folder

const App = () => {
  const [products, setProducts] = useState([]);     // creates a new state
  const [cart, setCart] = useState({}); // create new state and sets it to an empty object

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();  //{data} = response (destructured code)}

    setProducts(data);
    console.log("product.list",data);
  }
    const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())  //destructured version of code below
  }
    //const cart = await commerce.cart.retrieve();  // cart=response, retrieves cart items from commerce.js
  //}
    //setCart(cart); // sets state for cart(?)

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart); //update cart (cart state)
  }
  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, {quantity});

    setCart(response.cart);
  }
  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response.cart);
  }
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }
  useEffect(() => {  //useEffect hook
    fetchProducts();
    fetchCart();
  }, []);            //the dependency array is set to empty array causing it to run only once on start

  

  return (

  //  <div>
  //     <Navbar totalItems={cart.total_items} />
  //       {/* <Products products={products} onAddToCart={handleAddToCart} />     */}
  //     <Cart cart={cart}/>      
  // </div>

    <Router>
      <Navbar totalItems={cart.total_items} />
      <Routes>
        <Route path="/" element={<Products />} 
          onAddToCart={handleAddToCart}></Route>
        <Route path="/cart" element={<Cart />}
          handleUpdateCartQty={handleUpdateCartQty}  //prop={function}
          handleRemoveFromCart={handleRemoveFromCart}
          handleEmptyCart={handleEmptyCart}>
        </Route>
        <Route path="/checkout" element={<Checkout />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
// https://www.youtube.com/watch?v=377AQ0y6LPA&t=609s

// https://bestofreactjs.com/repo/adrianhajdin-project_e_commerce-react-react-apps