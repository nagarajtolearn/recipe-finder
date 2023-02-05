"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname().split("/");
  const currentArea = pathname[2];
  const recipeId = pathname[3];

  return (
    <div className=" py-5 px-2 sm:px-10 bg-slate-300 flex items-center justify-between client">
      <Link href="/">
        <h1 className="text-blue-700 uppercase font-bold text-3xl hover:cursor-pointer">
          Recipe Finder
        </h1>
      </Link>

      {pathname && currentArea && (
        <Link
          className="text-white font-bold bg-blue-500 rounded-lg p-3 hover:bg-blue-600"
          href={recipeId ? `/types/${currentArea}` : `/types`}>
          Back to {recipeId ? `${currentArea} recipes` : "recipes type"}
        </Link>
      )}
    </div>
  );
};

export default Header;
