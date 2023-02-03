import Link from "next/link";
import React from "react";

const fetchRecipesAreas = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const data = await response.json();
  return data.meals.map((a) => a.strArea);
};

const page = async () => {
  const areas = await fetchRecipesAreas();

  return (
    <div className=" grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {areas.map((area, idx) => (
        <Link
          className="text-2xl font-bold py-10 shadow-gray-500 bg-gray-300 hover:bg-blue-500 hover:text-white text-center rounded"
          href={`/types/${area}`}
          key={idx}>
          {area}
        </Link>
      ))}
    </div>
  );
};

export default page;
