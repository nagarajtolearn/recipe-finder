import Image from "next/image";
import Link from "next/link";
import React from "react";

const getRecipeDetails = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const response = await res.json();
  return response.meals[0];
};

const page = async ({ params }) => {
  const recipeDetails = await getRecipeDetails(params.id);
  const ingredients = Object.keys(recipeDetails)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ingKey) => recipeDetails[ingKey])
    .filter(Boolean);
  console.log(ingredients);
  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-2">
      <div className="overflow-hidden">
        <Image
          className=" m-5 rounded-lg"
          src={recipeDetails.strMealThumb}
          alt="recipe-image"
          width={500}
          height={500}></Image>
      </div>
      <div className=" bg-slate-300 m-5 p-4 gap-1 rounded-lg">
        <h1>
          Recipe Name:
          <span className="font-bold"> {recipeDetails.strMeal}</span>
        </h1>
        <h2>
          Category:
          <span className="font-bold"> {recipeDetails.strCategory}</span>
        </h2>
        <h2>
          Area:
          <span className="font-bold"> {recipeDetails.strArea}</span>
        </h2>

        <h2>
          Tags:
          <span className="font-bold"> {recipeDetails.strTags}</span>
        </h2>
        <h2>
          Ingredients List:
          <span className="font-bold ">
            {" "}
            {ingredients.map((i, idx) => (
              <span className="px-1 bg-blue-400 rounded mr-1" key={idx}>
                {i}
              </span>
            ))}{" "}
          </span>
        </h2>
        <h2 className="mt-3">
          Instructions:
          <span className="font-bold"> {recipeDetails.strInstructions}</span>
        </h2>
        <div className="m-10 flex justify-between">
          {recipeDetails.strYoutube ? (
            <a
              href={recipeDetails.strYoutube}
              target="_blank"
              className="bg-red-600 text-black p-3 rounded-lg">
              Watch Video
            </a>
          ) : (
            ""
          )}

          {recipeDetails.strSource ? (
            <a
              href={recipeDetails.strSource}
              target="_blank"
              className="bg-indigo-500 text-black p-3 rounded-lg">
              Read More...
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
