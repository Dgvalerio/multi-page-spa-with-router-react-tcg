import React, { FC } from 'react';
import { Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';

const QuoteDetail: FC = () => {
  const { quoteId } = useParams<{ quoteId: string }>();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
