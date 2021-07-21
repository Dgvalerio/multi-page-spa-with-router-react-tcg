import React, { FC } from 'react';

import QuoteList from '../components/quotes/QuoteList';

export const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const AllQuotes: FC = () => <QuoteList quotes={DUMMY_QUOTES} />;

export default AllQuotes;
