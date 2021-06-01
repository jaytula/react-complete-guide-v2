import { IMealItem } from "../AvailableMeals";
import classes from "./MealItem.module.css";

const MealItem = ({ item }: { item: IMealItem }) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{item.name}</h3>
        <div className={classes.description}>{item.description}</div>
        <div className={classes.price}>${item.price.toFixed(2)}</div>
      </div>
      <div>

      </div>
    </li>
  );
};

export default MealItem;
