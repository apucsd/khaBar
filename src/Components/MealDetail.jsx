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
      <div className="md:grid md:grid-cols-2 flex flex-col-reverse md:items-center justify-center gap-4">
        <div className="border p-4">
          <h2 className="text-4xl font-semibold my-3 text-center">{strMeal}</h2>
          <p className="text-center mb-4">Category : {strCategory}</p>
          <hr />
          <div className="flex justify-around my-4">
            <p>
              <span className="text-lg font-semibold my-2"> Integrates:</span>

              {ingredients.map((ing, index) => (
                <span key={index} className="block">
                  {index + 1}. <span className="text-gray-500">{ing}</span>
                </span>
              ))}
            </p>
            {/* p 2 */}
            <p>
              <span className="text-lg font-semibold my-2"> Measures :</span>

              {measures.map((mes, index) => (
                <span key={index} className="block">
                  {index + 1}. <span className="text-gray-500">{mes}</span>
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="md:w-4/5 md:ml-auto mx-auto">
          <img className="h-96 rounded-lg" src={strMealThumb} alt="" />
        </div>
      </div>
      <br />
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
