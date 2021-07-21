import React, { FC } from 'react';
import { Link, Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { DUMMY_QUOTES } from './AllQuotes';

const QuoteDetail: FC = () => {
  const { quoteId } = useParams<{ quoteId: string }>();

  const quote = DUMMY_QUOTES.find((aQuote) => aQuote.id === quoteId);

  if (!quote) return <p>No quote found!</p>;

  return (
    <>
      <HighlightedQuote text={quote?.text} author={quote?.author} />
      <Route path={`/quotes/${quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
