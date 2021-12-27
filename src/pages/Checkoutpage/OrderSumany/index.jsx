import React from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
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

      <div className="checkout__fee">
        <div className="checkout__fee-name">
          <p>Subtotal</p>
          <p>Tax</p>
          <p>Shipping</p>
        </div>
        <div className="checkout__fee-number">
          <p>73.98 USD</p>
          <p>17% 16.53 USD</p>
          <p>0 USD</p>
        </div>
      </div>

      <Input
        size="large"
        placeholder="Apply promo code"
        button
        button={<Button color="simple">Apply now</Button>}
      />

      <div className="total">
        <div className="total__order">
          <p>Total Order</p>
          <p>Guaranteed delivery day: June 12, 2021</p>
        </div>
        <div className="total__num">89.84 USD</div>
      </div>
    </div>
  );
}
