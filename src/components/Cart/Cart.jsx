import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';


const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart}) => {  

  const handleEmptyCart = () => onEmptyCart();
 
  const EmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link to="/">start adding some</Link>!
    </Typography>
  );

  // if (!cart.line_items) return 'Loading';
  
  const FilledCart = ({cart}) => ( //function that returns jsx
    <>
      <Grid container spacing={3}> 
        {cart.line_items.map((item) => (  
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} /> onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}
          </Grid>  
        ))}
      </Grid>
      <div>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button 
            size="large" 
            type="button" 
            variant="contained" 
            color="secondary"
            onClick={handleEmptyCart}
            >Empty Cart
          </Button>
          <Button 
            component={Link}
            to="/checkout"
            size="large" 
            type="button" 
            variant="contained" 
            color="primary"
            >Checkout
          </Button>
        </div>
      </div>
    </>
  );

if(!cart.line_items) return 'Loading...';  // This line is necessary because without it line 55 below would run and throw an error

  return (
    <Container>
      <div/>
      <Typography variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }

    </Container> 
    
  )
}

export default Cart;