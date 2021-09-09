import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { appActions } from '../../store';
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();

  const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
    dispatch(appActions.toggle())
  }
  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
