import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import { IMealItem } from "../AvailableMeals";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ item }: { item: IMealItem }) => {
  const { addItem } = useContext(CartContext);
  const addToCartHandler = (amount: number) => {
    addItem({
      amount,
      id: item.id,
      price: item.price,
      name: item.name,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{item.name}</h3>
        <div className={classes.description}>{item.description}</div>
        <div className={classes.price}>${item.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={item.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
