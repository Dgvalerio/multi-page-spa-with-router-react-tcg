import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { IQuote } from '../../interfaces';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes: IQuote[], ascending: boolean) =>
  quotes.sort((quoteA, quoteB) => {
    if (ascending) return quoteA.id > quoteB.id ? 1 : -1;
    return quoteA.id < quoteB.id ? 1 : -1;
  });

const QuoteList = ({ quotes }: { quotes: IQuote[] }): JSX.Element => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(quotes, isSortingAscending);

  const changeSortingHandler = () =>
    history.push(`/quotes?sort=${isSortingAscending ? 'desc' : 'asc'}`);

  return (
    <>
      <div className={classes.sorting}>
        <button type="button" onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
