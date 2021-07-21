import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import Products from './pages/Products';
import Welcome from './pages/Welcome';

const App: FC = () => (
  <div>
    <Route path="/welcome">
      <Welcome />
    </Route>
    <Route path="/products">
      <Products />
    </Route>
  </div>
);

export default App;
