import classes from './QuoteItem.module.css';

const QuoteItem = (props: {id: string, text: string, author: string}) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <a className='btn'>
        View Fullscreen
      </a>
    </li>
  );
};

export default QuoteItem;
