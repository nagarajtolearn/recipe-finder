import Image from "next/image";

async function getRecipeDetails(id) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.json();
}

export default async function Page({ params }) {
  const recipeDetails = await getRecipeDetails(params.id);
  const details =
    recipeDetails && recipeDetails.meals ? recipeDetails.meals[0] : {};
  const ingredients = Object.keys(details)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ingKey) => (details[ingKey]?.length ? details[ingKey] : undefined))
    .filter(Boolean);

  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-2">
      <div className="overflow-hidden">
        <Image
          className=" m-5 rounded-lg"
          src={details.strMealThumb}
          alt="recipe-image"
          width={600}
          height={500}></Image>
      </div>
      <div className=" bg-slate-300 m-5 p-4 gap-1 rounded-lg">
        <h1>
          Recipe Name:
          <span className="font-bold"> {details.strMeal}</span>
        </h1>
        <h2>
          Category:
          <span className="font-bold"> {details.strCategory}</span>
        </h2>
        <h2>
          Area:
          <span className="font-bold"> {details.strArea}</span>
        </h2>

        <h2>
          Tags:
          <span className="font-bold"> {details.strTags}</span>
        </h2>
        <h2>
          Ingredients List:
          <span className="font-bold ">
            {ingredients &&
              ingredients.map((i, idx) => (
                <span className="px-1 bg-blue-400 rounded mr-1" key={idx}>
                  {i}
                </span>
              ))}
          </span>
        </h2>
        <h2 className="mt-3">
          Instructions:
          <span className="font-bold"> {details.strInstructions}</span>
        </h2>
        <div className="m-10 flex justify-between">
          {details.strYoutube ? (
            <a
              href={details.strYoutube}
              target="_blank"
              className="bg-red-600 text-black p-3 rounded-lg">
              Watch Video
            </a>
          ) : (
            ""
          )}

          {details.strSource ? (
            <a
              href={details.strSource}
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
}
