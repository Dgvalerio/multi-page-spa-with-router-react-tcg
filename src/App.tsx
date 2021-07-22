import React, { FC, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const AllQuotes = lazy(() => import('./pages/AllQuotes'));
const NewQuote = lazy(() => import('./pages/NewQuote'));
const NotFound = lazy(() => import('./pages/NotFound'));
const QuoteDetail = lazy(() => import('./pages/QuoteDetail'));

const App: FC = () => (
  <Layout>
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  </Layout>
);

export default App;
