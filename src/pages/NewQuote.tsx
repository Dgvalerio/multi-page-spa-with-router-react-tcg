import React, { FC } from 'react';

import QuoteForm from '../components/quotes/QuoteForm';
import { IQuote } from '../interfaces';

const NewQuote: FC = () => {
  const addQuoteHandler = (quoteData: IQuote) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} isLoading={false} />;
};

export default NewQuote;
