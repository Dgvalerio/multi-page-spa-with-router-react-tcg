import React from 'react';

import classes from './HighlightedQuote.module.css';

const HighlightedQuote = ({
  text,
  author,
}: {
  text: string;
  author: string;
}): JSX.Element => (
  <figure className={classes.quote}>
    <p>{text}</p>
    <figcaption>{author}</figcaption>
  </figure>
);

export default HighlightedQuote;
