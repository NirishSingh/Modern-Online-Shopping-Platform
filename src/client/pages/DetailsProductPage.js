import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import ProductDetails from '../components/ProductDetails';
import { fetchProductDetails } from '../api';

const DetailsProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductDetails(productId); // Implement fetchProductDetails in api.js
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Product Details
      </Typography>
      {product ? <ProductDetails product={product} /> : <Typography>No product found</Typography>}
    </Container>
  );
};

export default DetailsProductPage;