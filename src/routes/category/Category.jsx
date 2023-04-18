import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useCategoriesContext } from "../../contexts/categoriesContext";
import ProductCard from "../../components/product-card/ProductCard";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { catecogiresMap } = useCategoriesContext();
  const [products, setProducts] = useState(catecogiresMap[category]);

  useEffect(() => {
    setProducts(catecogiresMap[category]);
  }, [category, catecogiresMap]);

  return (
    <div className="category-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
