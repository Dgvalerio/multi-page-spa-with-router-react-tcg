import React from 'react';

import classes from './QuoteItem.module.css';

const QuoteItem = ({
  id,
  text,
  author,
}: {
  id: string;
  text: string;
  author: string;
}): JSX.Element => (
  <li className={classes.item}>
    <figure>
      <blockquote>
        <p>{text}</p>
      </blockquote>
      <figcaption>{author}</figcaption>
    </figure>
    <a className="btn">View Fullscreen</a>
  </li>
);

export default QuoteItem;
