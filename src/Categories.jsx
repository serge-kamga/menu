import React from "react";

const Categories = ({ categories, filterItemsByCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          key={category}
          className="btn"
          onClick={() => filterItemsByCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
