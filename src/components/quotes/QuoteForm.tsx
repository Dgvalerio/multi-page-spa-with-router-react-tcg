import React, { FormEvent, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = ({
  onAddQuote,
  isLoading,
}: {
  onAddQuote: ({ author, text }: { author: string; text: string }) => void;
  isLoading: boolean;
}): JSX.Element => {
  const [isEntered, setIsEntered] = useState(false);

  const authorInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current?.value || '';
    const enteredText = textInputRef.current?.value || '';

    // optional: Could validate here

    onAddQuote({ author: enteredAuthor, text: enteredText });
  };

  const finishEnteringHandler = () => setIsEntered(false);

  const formFocusedHandler = () => setIsEntered(true);

  return (
    <>
      <Prompt
        when={isEntered}
        message={() =>
          'Are you sure want to leave? All your entered data will be lost!'
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows={5} ref={textInputRef} />
          </div>
          <div className={classes.actions}>
            <button
              type="submit"
              className="btn"
              onClick={finishEnteringHandler}
            >
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
