import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetail = () => {
  const navigate = useNavigate();
  const navigateToBack = () => {
    navigate(-1);
  };
  const data = useLoaderData();
  const { idMeal, strMeal, strSource, strCategory, strMealThumb } =
    data.meals[0];
  const meal = data.meals[0];
  const ingredients = [];

  const measures = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
      measures.push(measure);
    } else {
      break;
    }
  }
  //   console.log(ingredients);
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 items-center justify-center gap-4">
        <div className="border p-4">
          <h2 className="text-4xl font-semibold my-3 text-center">{strMeal}</h2>
          <p className="text-center ">Category : {strCategory}</p>
          <div className="flex justify-around my-4">
            <p>
              <span className="text-lg font-semibold my-2"> Integrates:</span>
              <hr />
              {ingredients.map((ing, index) => (
                <p>
                  {index + 1}. <span className="text-gray-500">{ing}</span>
                </p>
              ))}
            </p>
            {/* p 2 */}
            <p>
              <span className="text-lg font-semibold my-2"> Measures :</span>
              <hr />
              {measures.map((mes, index) => (
                <p>
                  {index + 1}. <span className="text-gray-500">{mes}</span>
                </p>
              ))}
            </p>
          </div>
        </div>
        <div className="w-4/5 ml-auto">
          <img className="h-96 rounded-lg" src={strMealThumb} alt="" />
        </div>
      </div>
      <br />
      <hr />
      <button
        className="text-3xl bg-blue-400  text-white rounded-md my-4 px-3  text-center"
        onClick={navigateToBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default MealDetail;
