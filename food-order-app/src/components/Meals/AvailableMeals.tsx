import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

export interface IMealItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

const AvailableMeals = () => {
  const [meals, setMeals] = useState<IMealItem[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_FIREBASE_BACKEND}/meals.json`)
      .then((res) => res.json())
      .then(
        (data: {
          [key: string]: { name: string; description: string; price: number };
        }) => {
          const fetchedMeals = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value
          }))
          setMeals(fetchedMeals);
        }
      );
  }, []);

  const mealsList = meals.map((meal) => <MealItem key={meal.id} item={meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
