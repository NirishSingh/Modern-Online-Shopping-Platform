import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import ProductList from '../components/ProductList';
import { fetchTopProducts } from '../api';

const ProductAllPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopProducts('Laptop', 10); // Adjust category and number of products as needed
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        All Products
      </Typography>
      <ProductList products={products} />
    </Container>
  );
};

export default ProductAllPage;