import React from "react";
import { useCategoriesContext } from "../../contexts/categoriesContext";

import "./category.styles.scss";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  const { catecogiresMap } = useCategoriesContext();
  return <div>Category</div>;
};

export default Category;
