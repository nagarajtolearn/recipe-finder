import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipeList = ({ recipes, type }) => {
  return (
    <div className=" grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes.map((recipe, idx) => (
        <div key={idx} className="bg-gray-400 rounded-md overflow-hidden">
          <Image
            src={recipe.strMealThumb}
            width={500}
            height={500}
            alt="recipe image"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-bold m-2 ">{recipe.strMeal}</h3>
            <Link
              className="text-lg font-bold rounded bg-blue-500 p-2 m-1 hover:bg-blue-800 hover:text-white text-center"
              href={`/types/${type}/${recipe.idMeal}`}>
              Get Recipe Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
