import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
import { IQuote } from '../interfaces';

const NewQuote: FC = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData: IQuote) => {
    console.log(quoteData);

    history.push('/quotes');
  };

  return <QuoteForm onAddQuote={addQuoteHandler} isLoading={false} />;
};

export default NewQuote;
