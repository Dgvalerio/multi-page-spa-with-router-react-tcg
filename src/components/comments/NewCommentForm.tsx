import React, { FormEvent, useEffect, useRef } from 'react';

import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';

const NewCommentForm = ({
  onAddedComment,
  quoteId,
}: {
  onAddedComment: () => void;
  quoteId: string;
}): JSX.Element => {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [error, onAddedComment, status]);

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!commentTextRef.current) return;

    const enteredText = commentTextRef.current.value;

    // optional: Could validate here

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sendRequest({ commentData: { text: enteredText }, quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows={5} ref={commentTextRef} />
      </div>
      <div className={classes.actions}>
        <button type="submit" className="btn">
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
