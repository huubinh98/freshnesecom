import React from "react";
import ProductCart from "../../../components/ProductCart";
import "./style.scss";

export default function OrderSumany() {
  return (
    <div className="order__sumany">
      <h2 className="heading">Order Summary</h2>
      <p className="desc">
        Price can change depending on shipping method and taxes of your state.
      </p>
      <ProductCart />
      <ProductCart />
    </div>
  );
}
