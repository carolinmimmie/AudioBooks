
"use client"
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
      className="bg-purple-600 p-4 flex justify-center"
      onClick={handleClick}
    >
      <h6 className="text-white ">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h6>
    </div>
  );
};

export default CategoryCard;
