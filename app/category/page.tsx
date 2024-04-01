"use client";
import React from "react";
import CategoryCard from "../components/CategoryCard";
import { useGlobalContext } from "../Context/store";

const Category = () => {
  const { books } = useGlobalContext();

  // skapa en array med kategorierna som tar alla kategorier från böckerna,
  //  konverterar dem till gemener och sedan tar bort eventuella dubletter.
  // Resultatet är en array categoryBooks som innehåller alla unika kategorier från böckerna, och alla kategorier är i gemener.

  const categoryBooks: string[] = Array.from(
    new Set(books.map((book) => book.category.toLowerCase()))
  );

  return (
    <div className="bg-slate-100 py-4">
      <div className="w-5/6 m-auto">
        <h2>Kategorier</h2>
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-6">
          {categoryBooks.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
