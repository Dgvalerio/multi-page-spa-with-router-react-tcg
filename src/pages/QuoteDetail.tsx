import React, { FC } from 'react';
import { Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { DUMMY_QUOTES } from './AllQuotes';

const QuoteDetail: FC = () => {
  const { quoteId } = useParams<{ quoteId: string }>();

  const quote = DUMMY_QUOTES.find((aQuote) => aQuote.id === quoteId);

  if (!quote) return <p>No quote found!</p>;

  return (
    <>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={quote?.text} author={quote?.author} />
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
