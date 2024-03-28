"use client";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { IBook } from "@/data/types";
import { getAllBooks } from "@/data/api";
import { useGlobalContext } from "../Context/store";

const Library = () => {
  const { books } = useGlobalContext();

  return (
    <div className="page-container bg-slate-100">
      <div className="w-5/6 m-auto">
        <h2>Biblioteket</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
