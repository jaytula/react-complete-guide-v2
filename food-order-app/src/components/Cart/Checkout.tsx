import { FormEventHandler, useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (s: string) => s.trim() === "" || !s;
const isNotFiveChars = (s: string) => s.trim().length !== 5;

const Checkout = ({ onCancel }: { onCancel: () => void }) => {
  const [formInputsValidity, setFormInputsValidity] = useState<{
    name: boolean;
    street: boolean;
    postalCode: boolean;
    city: boolean;
  }>({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

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

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = !isNotFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      city: enteredCityIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }
    console.log({
      enteredName,
      enteredStreet,
      enteredPostalCode,
      enteredCity,
    });
  };

  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formInputsValidity.name ? classes.invalid : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidity.street ? classes.invalid : ""
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidity.postalCode ? classes.invalid : ""
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 chars long)!</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidity.city ? classes.invalid : ""
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
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
