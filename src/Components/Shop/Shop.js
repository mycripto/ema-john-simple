import React, { useState } from "react";
import fakeData from "../../fakeData/index";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState(fakeData.slice(0, 10));
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    // console.log("Product adeed", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product product={pd} handleAddProduct={handleAddProduct}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
