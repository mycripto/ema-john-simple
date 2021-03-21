import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
  return (
    <div>
      <h1>Order sammary</h1>
      <h3>Items ordered: {cart.length}</h3>
      <h3>Total: {totalPrice}</h3>
    </div>
  );
};

export default Cart;
