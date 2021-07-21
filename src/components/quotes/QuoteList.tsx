import React from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = ({
  quotes,
}: {
  quotes: { id: string; author: string; text: string }[];
}): JSX.Element => (
  <>
    <ul className={classes.list}>
      {quotes.map((quote) => (
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

export default QuoteList;
