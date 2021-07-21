import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

const App: FC = () => (
  <>
    <MainHeader />
    <Route path="/welcome">
      <Welcome />
    </Route>
    <Route path="/products">
      <Products />
    </Route>
  </>
);

export default App;
