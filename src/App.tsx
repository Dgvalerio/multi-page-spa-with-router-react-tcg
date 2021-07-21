import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

const App: FC = () => (
  <>
    <MainHeader />
    <main>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/product-detail/:productId">
        <ProductDetail />
      </Route>
    </main>
  </>
);

export default App;
