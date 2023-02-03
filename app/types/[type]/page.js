import RecipeList from "@/components/RecipeList";
import Image from "next/image";
import React from "react";

const getRecipes = async (area) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  const response = await res.json();
  return response.meals;
};

const page = async ({ params }) => {
  const recipes = await getRecipes(params.type);

  return <RecipeList recipes={recipes} type={params.type} />;
};

export default page;
