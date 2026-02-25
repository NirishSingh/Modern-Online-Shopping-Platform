import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import axios from 'axios';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My E-Commerce App</h1>
        <Switch>
          <Route exact path="/" component={AllProductsPage} />
          <Route path="/product/:productId" component={ProductDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
