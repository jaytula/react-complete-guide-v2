import { MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = () => {
  const totalQuantity = useSelector<RootState, number>(state => state.cart.totalQuantity)
  const dispatch = useDispatch();

  const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
