import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { fetchProductDetails } from '../api';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductDetails('Remote', productId);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error.message);
      }
    };

    fetchData();
  }, [productId]);

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box mt={2}>
      <Typography variant="h5" gutterBottom>
        Product Details
      </Typography>
      {/* Display detailed product information using Material-UI components */}
      <Typography variant="subtitle1">{product.name}</Typography>
      {/* Add more product details */}
    </Box>
  );
};

export default ProductDetails;
