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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [httpError, setHttpError] = useState<string>("");

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_BACKEND}/meals.json`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = (await response.json()) as {
        [key: string]: { name: string; description: string; price: number };
      };
      const fetchedMeals = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));
      setMeals(fetchedMeals);

      setIsLoading(false);
    };

    fetchMeals().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading)
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );

  if (!isLoading && httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

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
