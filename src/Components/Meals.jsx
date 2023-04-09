import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Meal from "./Meal";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const Meals = () => {
  const data = useLoaderData();
  //   console.log(data.meals);
  const meals = data.meals;
  const [updateMeals, setUpdateMeals] = useState(meals);
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`
    )
      .then((res) => res.json())
      .then((data) => setUpdateMeals(data.meals));
  };
  return (
    <div>
      {updateMeals ? (
        <div>
          <h2 className="text-4xl text-center my-4 text-violet-500">
            All meal List:{updateMeals.length}
            <hr className="w-1/2 mx-auto my-4" />
          </h2>
          <div className="my-4 lg:w-[40%] mx-auto">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Type here"
              className="input w-full my-4 mx-auto bg-slate-200 py-2 px-12 "
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {updateMeals.map((meal) => (
              <Meal key={meal.idMeal} meal={meal}></Meal>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[40vh]">
          <h1>"Not Found"</h1>
          <Link to="/">
            {" "}
            <button className="btn btn-outline my-4">
              {" "}
              <span>
                {" "}
                <ArrowLeftIcon className="h-6 w-6 text-white" />
              </span>{" "}
              Go Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Meals;
