import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props: {id: number, title: string, price: number, description: string}) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();

  const addHandler: MouseEventHandler<HTMLButtonElement> = event => {
    dispatch(cartActions.add({id, title, quantity: 1, price}))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
