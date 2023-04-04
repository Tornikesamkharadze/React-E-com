import React from "react";
import "./categories.style.scss";

const Category = ({ item }) => {
  const { imageUrl, title } = item;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};


export default Category;