const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

let productData = [];

async function fetchProductData() {
  const companyAPIs = [
    'http://ecompany1.com/api/products',
    'http://ecompany2.com/api/products',
    // Add more company APIs as needed
  ];

  for (const api of companyAPIs) {
    try {
      const response = await axios.get(api);
      productData = productData.concat(response.data);
    } catch (error) {
      console.error(`Error fetching data from ${api}:`, error.message);
    }
  }
}

app.use(async (req, res, next) => {
  await fetchProductData();
  next();
});

app.get('/categories/:categoryName/products', (req, res) => {
  const { categoryName } = req.params;
  const { top, page, sort } = req.query;

  let filteredProducts = productData.filter(product => product.category === categoryName);

  if (sort === 'rating-desc') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sort === 'rating-asc') {
    filteredProducts.sort((a, b) => a.rating - b.rating);
  }

  const startIndex = (page - 1) * top;
  const endIndex = startIndex + parseInt(top);
  filteredProducts = filteredProducts.slice(startIndex, endIndex);

  res.json(filteredProducts);
});

app.get('/categories/:categoryName/products/:productId', (req, res) => {
  const { categoryName, productId } = req.params;

  const product = productData.find(p => p.category === categoryName && p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
