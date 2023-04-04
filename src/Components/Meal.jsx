import React from "react";
import { Link } from "react-router-dom";

const Meal = (props) => {
  console.log();
  const { idMeal, strMeal, strSource, strCategory, strMealThumb } = props.meal;

  return (
    <Link to={`/meal/${idMeal}`}>
      <div
        title="click for more info"
        className="cursor-pointer shadow-lg p-4 relative "
      >
        <img className="w-full h-64 rounded" src={strMealThumb} alt="" />
        <div className="text-center  hover:transition-all  hover:duration-500  bg-black opacity-0 hover:opacity-50 hover:-translate-y-1 text-white absolute inset-0 p-4">
          <h2 className="text-2xl  font-semibold my-2">{strMeal}</h2>
          <hr />
          <p className=" my-4">
            <span className="text-lg font-semibold">Category</span>:{" "}
            {strCategory}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Meal;
