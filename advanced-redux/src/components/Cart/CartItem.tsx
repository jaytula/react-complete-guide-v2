import { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props: {
  item: { id: string, title: string; quantity: number; total: number; price: number };
}) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const addHandler: MouseEventHandler = event => {
    dispatch(cartActions.add({id, title, price}))
  }

  const removeHandler: MouseEventHandler = event => {
    dispatch(cartActions.remove({id}))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
