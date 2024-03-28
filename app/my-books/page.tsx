"use client";
import { getAllBooks } from "@/data/api";
import { IBook } from "@/data/types";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { useGlobalContext } from "../Context/store";

const MyBooks = () => {
  const { books } = useGlobalContext();
  const likedBooks = books.filter((book) => book.liked);

  return (
    <div className="page-container bg-slate-100">
      <div className="w-5/6 m-auto">
      <h2>Dina böcker</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {likedBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MyBooks;
