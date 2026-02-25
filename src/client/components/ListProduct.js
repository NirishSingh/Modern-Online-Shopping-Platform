import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Select, MenuItem, Button } from '@mui/material';
import { fetchTopProducts } from '../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopProducts('Laptop', 10, sortOption);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching top products:', error.message);
      }
    };

    fetchData();
  }, [sortOption]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <Box mt={2}>
      <Typography variant="h5" gutterBottom>
        Top Products
      </Typography>
      <Select value={sortOption} onChange={handleSortChange}>
        <MenuItem value="">Sort by</MenuItem>
        <MenuItem value="rating-desc">Rating Descending</MenuItem>
        <MenuItem value="rating-asc">Rating Ascending</MenuItem>
        {/* Add more sorting options */}
      </Select>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            {/* Display product details using Material-UI components */}
            <Typography variant="subtitle1">{product.name}</Typography>
            {/* Add more product details */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
