import React from "react";
import { useCategoriesProvider } from "../../contexts/categoriesContext";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

const CategoriesPreview = () => {
  const { catecogiresMap } = useCategoriesProvider();

  return (
    <React.Fragment>
      {Object.keys(catecogiresMap).map((title) => {
        const products = catecogiresMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </React.Fragment>
  );
};

export default CategoriesPreview;
