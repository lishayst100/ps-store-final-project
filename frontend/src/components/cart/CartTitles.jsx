import React from "react";
import "./Cart.scss";

const CartTitles = () => {
  return (
    <>
      <div className="row p-3">
        <h3 className="col">Product</h3>
        <h3 className="col">Price</h3>
        <h3 className="col">Quantity</h3>
        <h3 className="col">Total</h3>
      </div>
      <hr />
    </>
  );
};

export default CartTitles;
