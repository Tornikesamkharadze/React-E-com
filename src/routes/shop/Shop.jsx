import React, { Fragment } from "react";
import { useCategoriesProvider } from "../../contexts/categoriesContext";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

import "./shop-style.scss";


const Shop = () => {
  const { catecogiresMap } = useCategoriesProvider();

  return (
    <div className="shop-container">
      {Object.keys(catecogiresMap).map((title) => {
        const products = catecogiresMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
