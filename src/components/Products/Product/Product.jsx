import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

const Product = ({product, onAddToCart}) => {
 
  return (
    <Card variant="outlined">
    <CardMedia component="img" image={product.image.url} src="img" />
    <CardContent>
      <div>
        <Typography variant="h4" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h5">
          {product.price.formatted_with_symbol}
        </Typography>
      </div>
      <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant="body2" color="textSecondary" />
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}> 
        <AddShoppingCart />
      </IconButton>
    </CardActions>
  </Card>
  
)

}
export default Product;