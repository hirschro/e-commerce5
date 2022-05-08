import Commerce from '@chec/commerce.js';

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true); 

commerce.cart.retrieve().then((cart) => console.log("cart", cart));


// create new instance which will become the 
// store public key perameter is specified 
// in parenthasis