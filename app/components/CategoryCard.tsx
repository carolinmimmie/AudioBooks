"use client";
import React from "react";
import { useGlobalContext } from "../Context/store";

interface CategoryProps {
  category: string;
  onSelect: (category: string) => void; // Funktion för att hantera kategoriutval
}

const CategoryCard = ({ category, onSelect }: CategoryProps) => {
  const handleClick = () => {
    onSelect(category);
  };

  return (
    <div
      className="bg-purple-600 p-4 flex justify-center items-center rounded-lg shadow-lg "
      onClick={handleClick}
    >
      <h4 className="text-white ">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h4>
    </div>
  );
};

export default CategoryCard;
