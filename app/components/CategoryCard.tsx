import React from "react";
interface CategoryProps {
  category: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div className="bg-purple-600 p-20 flex justify-center">
      <h6 className="text-white ">{category.charAt(0).toUpperCase() + category.slice(1)}</h6>
    </div>
  );
};

export default CategoryCard;
