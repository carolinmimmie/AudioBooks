"use client";
import React from "react";
import Image from "next/image";
import { IBook } from "@/data/types";
import { updateBook } from "@/data/api";
import { useGlobalContext } from "../Context/store";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  const { setBooks } = useGlobalContext();
  const handleClick = async () => {
    try {
      await updateBook(book, setBooks);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const { image, title, author } = book;
  return (
    <div className="rounded-lg shadow-lg bg-white">
      <Image
        src={image}
        width={600}
        height={250}
        alt={`Image of ${title}`}
        className="object-cover min-w-60 h-48"
      />
      <div className="flex justify-between p-2 relative ">
        <div className="flex flex-col justify-start ">
          <h4>{author}</h4>
          <p className="text-sm">{title}</p>
        </div>
        <button onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={book.liked ? "pink" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-pink-500 absolute top-2 right-2 "
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
