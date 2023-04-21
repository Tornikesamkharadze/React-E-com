import React from "react";
import { DirectoryItemContainer } from "./directory.style";

const DirectoryItem = ({ item }) => {
  const { imageUrl, title } = item;
  return (
    <DirectoryItemContainer>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </DirectoryItemContainer>
  );
};


export default DirectoryItem;