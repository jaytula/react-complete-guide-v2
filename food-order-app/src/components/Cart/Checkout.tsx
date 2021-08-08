import { FormEventHandler, useRef } from "react";
import classes from "./Checkout.module.css";

const Checkout = ({ onCancel }: { onCancel: () => void }) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalCodeInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    const enteredName = nameInputRef?.current?.value as string;
    const enteredStreet = streetInputRef?.current?.value as string;
    const enteredPostalCode = postalCodeInputRef?.current?.value as string;
    const enteredCity = cityInputRef?.current?.value as string;

    console.log({
      enteredName,
      enteredStreet,
      enteredPostalCode,
      enteredCity,
    });
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
