"use client";
import React, { useState } from "react";
import { useGlobalContext } from "../Context/store";
import BookCard from "../components/BookCard";

const Search = () => {
  const { booksForSerach, searchBooks } = useGlobalContext();
  const [input, setInput] = useState("");

  // här fångas inputvärdet upp och sätts i input variabeln
  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchTerm = event.target.value.trim();
    setInput(searchTerm);

    // utför sökningen direkt när användaren skriver något
    if (searchTerm) {
      try {
        await searchBooks(searchTerm);
      } catch (error) {
        console.error("Error searching books:", error);
      }
    } else {
      // Om sökfältet är tomt, visa alla böcker igen
      // eller gör andra önskade åtgärder här
    }
  };

  return (
    <div className="page-container ">
      <div className="container mx-auto px-14 min-h-[44rem] ">
        <h2>Hitta en bra bok</h2>
        <form>
          <div className="flex items-center py-2">
            <input
              className="outborder- w-full text-gray-700 focus:outline-none py-2 "
              type="text"
              placeholder="Sök efter en boktitel, författare eller kategori"
              value={input}
              onChange={handleInputChange}
            />
          </div>
        </form>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {booksForSerach.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
