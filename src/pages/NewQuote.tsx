import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { IQuote } from '../interfaces';
import { addQuote } from '../lib/api';

const NewQuote: FC = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [history, status]);

  const addQuoteHandler = (quoteData: IQuote) => {
    sendRequest(quoteData);

    history.push('/quotes');
  };

  return (
    <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === 'pending'} />
  );
};

export default NewQuote;
