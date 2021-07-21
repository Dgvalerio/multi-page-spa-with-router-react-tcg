import React, { FC } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { DUMMY_QUOTES } from './AllQuotes';

const QuoteDetail: FC = () => {
  const match = useRouteMatch();
  const { quoteId } = useParams<{ quoteId: string }>();

  const quote = DUMMY_QUOTES.find((aQuote) => aQuote.id === quoteId);

  if (!quote) return <p>No quote found!</p>;

  return (
    <>
      <HighlightedQuote text={quote?.text} author={quote?.author} />
      <Route path={`${match.path}/${quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
