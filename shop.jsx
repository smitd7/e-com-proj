import React from "react";
import { PRODUCTS } from "../products";
import Product from "./product";
import "./shop.css"

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>The Generics</h1>
      </div>
      <div className="music">
      <h3>Music</h3>
      </div>
      <div className="products">
        {''}
        {PRODUCTS.map((product) => (
          <Product data={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Shop;
