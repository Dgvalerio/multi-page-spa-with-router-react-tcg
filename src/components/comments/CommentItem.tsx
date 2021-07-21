import React from 'react';

import classes from './CommentItem.module.css';

const CommentItem = ({ text }: { text: string }): JSX.Element => (
  <li className={classes.item}>
    <p>{text}</p>
  </li>
);

export default CommentItem;
