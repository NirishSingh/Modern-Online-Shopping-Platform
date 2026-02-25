import axios from 'axios';

const baseURL = 'http://20.244.56.144';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
   
  },
});


export const fetchTopProducts = async (category, top) => {
  try {
    const response = await api.get(`/categories/${category}/products?top=${top}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top products:', error);
    throw error;
  }
};


export const fetchProductById = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};


export const fetchFilteredProducts = async (filters) => {
  try {
    const response = await api.post('/filtered-products', filters);
    return response.data;
  } catch (error) {
    console.error('Error fetching filtered products:', error);
    throw error;
  }
};

