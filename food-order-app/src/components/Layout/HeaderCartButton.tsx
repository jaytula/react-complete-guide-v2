import { ButtonHTMLAttributes, DetailedHTMLProps, useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  const cartCtx = useContext(CartContext);
  const [btnIsBumped, setBtnIsBumped] = useState<boolean>(false);

  const {items} = cartCtx

  const numberOfCartItems = items.reduce((acc, curr) => acc + curr.amount, 0)

  useEffect(() => {
    if(items.length === 0) return;

    setBtnIsBumped(true);
    const timer = setTimeout(() => {
      setBtnIsBumped(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [items])

  const btnClasses = [classes.button, props.className || '', btnIsBumped ? classes.bump : ''];

  return (
    <button
      {...props}
      className={btnClasses.join(" ")}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
