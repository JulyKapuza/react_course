import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          console.log("Something went wrong");
        }
        const res = await response.json();
        console.log(res);
        setMeal(res);
        return res;
      } catch (error) {
        console.log(error);
      }
    };
    getMeals();
  }, []);

  return (
    <ul className="grid gap-[1rem] [grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))] w-[90%] max-w-[70rem] my-[2rem] mx-auto p-[1rem]">
      {meal?.map(({ id, image, name, price, description }) => (
        <MealItem
          key={id}
          name={name}
          image={image}
          price={price}
          description={description}
        />
      ))}
    </ul>
  );
};

export default Meals;
6;
