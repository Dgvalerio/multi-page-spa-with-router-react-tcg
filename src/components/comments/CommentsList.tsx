import React from 'react';

import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

const CommentsList = ({ comments }: { comments: any[] }): JSX.Element => (
  <ul className={classes.comments}>
    {comments.map((comment) => (
      <CommentItem key={comment.id} text={comment.text} />
    ))}
  </ul>
);

export default CommentsList;
