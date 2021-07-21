import React, { ReactNode } from 'react';

import classes from './Card.module.css';

const Card = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className={classes.card}>{children}</div>
);

export default Card;
