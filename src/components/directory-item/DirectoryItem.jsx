import React from "react";
import "./directory.style.scss";

const DirectoryItem = ({ item }) => {
  const { imageUrl, title } = item;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};


export default DirectoryItem;