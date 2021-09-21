import { Fragment } from 'react';
import { IQuote } from '../../model';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props: {quotes: IQuote[]}) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
