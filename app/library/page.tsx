"use client";
import React, { useEffect, useState } from "react";
import { IBook } from "@/data/types";
import { getAllBooks } from "@/data/api";
import { useGlobalContext } from "../Context/store";
import BookCard from "../components/BookCard";

const Library = () => {
  const { books } = useGlobalContext();

  return (
    <div className="page-container">
      <div className="container mx-auto px-14 ">
        <h2>Biblioteket</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 ">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
