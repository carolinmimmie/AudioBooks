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
    <div className="page-container">
      <div className="container mx-auto px-14 min-h-[44rem] ">
        <div>
          <h2>Kategorier</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 ">
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
          <div className="mt-8">
            <h2>{selectedCategory}</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 ">
              {books
                .filter(
                  (book) =>
                    book.category.toLowerCase() ===
                    selectedCategory.toLowerCase()
                )
                .map((book, index) => (
                  <BookCard key={index} book={book} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
