import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const QuoteDetail: FC = () => {
  const params = useParams<{ quoteId: string }>();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
    </>
  );
};

export default QuoteDetail;
