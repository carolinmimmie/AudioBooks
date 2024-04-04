"use client";

import BookCard from "../components/BookCard";
import { useGlobalContext } from "../Context/store";

const MyBooks = () => {
  const { books } = useGlobalContext();
  const likedBooks = books.filter((book) => book.liked);

  return (
    <div className="page-container bg-slate-100">
      <div className="container mx-auto px-14">
      <h2>Dina böcker</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 ">
        {likedBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MyBooks;
