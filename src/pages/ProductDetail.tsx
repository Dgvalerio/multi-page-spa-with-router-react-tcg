import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail: FC = () => {
  const params = useParams<{ productId: string }>();

  return (
    <section>
      <h1>ProductDetail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
