import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";

const Meals = () => {
  const data = useLoaderData();
  //   console.log(data.meals);
  const meals = data.meals;

  return (
    <div>
      {meals && (
        <div>
          <h2 className="text-4xl text-center my-4 text-violet-500">
            All meal List:{meals.length}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {meals.map((meal) => (
              <Meal key={meal.idMeal} meal={meal}></Meal>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Meals;
