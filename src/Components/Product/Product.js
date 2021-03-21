import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const { img, name, seller, price, stock } = props.product;
  // console.log(props);
  return (
    <div className="product">
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className="">
        <h4>{name}</h4>
        <br />
        <p>by: {seller}</p>
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock order soon</small>
        </p>
        <button
          className="main-btn"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
