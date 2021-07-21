import React from 'react';

import { IQuote } from '../../interfaces';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = ({ quotes }: { quotes: IQuote[] }): JSX.Element => (
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
