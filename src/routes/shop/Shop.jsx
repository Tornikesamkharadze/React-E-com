import React from "react";
import { useProductsDataContext } from "../../contexts/productsDataContext";
import ProductCard from "../../components/product-card/ProductCard";
import "./shop-style.scss";
const Shop = () => {
  const { products } = useProductsDataContext();

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
