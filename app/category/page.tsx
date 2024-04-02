"use client";
import React, { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import { useGlobalContext } from "../Context/store";
import BookCard from "../components/BookCard";

const Category = () => {
  //här ligger all min data
  const { books } = useGlobalContext();

  // Vid första renderingen är värdet på selectedCategory satt till null,
  // och när användaren väljer en kategori uppdateras värdet på selectedCategory med den valda kategorin.
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Skapar en array categoryBooks som innehåller alla unika kategorier från böckerna.
  // Detta görs genom att mappa över böckerna för att extrahera kategorierna och sedan
  // använda Set för att ta bort dubbletter.
  const categoryBooks: string[] = Array.from(
    new Set(books.map((book) => book.category.toLowerCase()))
  );

  // Definierar en funktion handleCategorySelect som sätter den valda kategorin
  // när en kategori väljs.
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-slate-100 py-4">
      <div className="w-5/6 m-auto">
        <h2>Kategorier</h2>
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categoryBooks.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              onSelect={handleCategorySelect}
            />
          ))}
        </div>
      </div>
      {selectedCategory && (
        <div className="w-5/6 m-auto mt-8">
          <h2>{selectedCategory}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {books
              .filter(
                (book) =>
                  book.category.toLowerCase() === selectedCategory.toLowerCase()
              )
              .map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
