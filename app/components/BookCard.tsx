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
        width={400}
        height={250}
        alt={`Image of ${title}`}
        className="object-cover min-w-52 h-48"
      />
      <div className="flex justify-between p-2">
        <div className="flex flex-col justify-start">
          <h3>{author}</h3>
          <p>{title}</p>
        </div>
        <button>
          <Image
            width={30}
            height={30}
            src="/icons/heart.png"
            alt="Icons of a red heart"
            onClick={handleClick}
            className={`${book.liked ? "bg-red-500" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};

export default BookCard;
