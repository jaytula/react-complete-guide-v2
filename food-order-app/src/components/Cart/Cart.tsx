import { Fragment, useContext, useState } from "react";
import CartContext, { ICartItem } from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";

const Cart = (props: { onClose: () => void }) => {
  const [isCheckout, setIsCheckout] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [didSubmit, setDidSubmit] = useState<boolean>(false);

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: ICartItem) => {
    const itemToAdd = { ...item, amount: 1 };
    cartCtx.addItem(itemToAdd);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const submitOrderHandler = async (userData: {
    name: string;
    street: string;
    city: string;
    postalCode: string;
  }) => {
    await setIsSubmitting(true);
    fetch(`${process.env.REACT_APP_FIREBASE_BACKEND}/orders.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
    });

    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent: JSX.Element = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <button className={classes.button} onClick={props.onClose}>
        Close
      </button>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
