import React, { Fragment } from "react";
import { useCategoriesProvider } from "../../contexts/categoriesContext";
import ProductCard from "../../components/product-card/ProductCard";
import "./shop-style.scss";

const Shop = () => {
  const { catecogiresMap } = useCategoriesProvider();
 
  return (
    <React.Fragment>
      {Object.keys(catecogiresMap).map((title) => {
        return (
          <React.Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {catecogiresMap[title].map((product, index) => {
                if (index < 4) {
                  return <ProductCard key={product.id} product={product} />;
                }
              })}
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default Shop;
