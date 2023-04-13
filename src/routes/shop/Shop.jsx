import React from "react";
import SHOP_DATA from "../../data/shop-data.json";

const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map((item) => {
        const { id, name } = item;
        return (
          <div key={id}>
            <h1>{name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
