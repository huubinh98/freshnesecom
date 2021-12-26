import React from "react";
import Info from "./Info";
import OrderSumany from "./OrderSumany";
import "./style.scss";

const CheckoutPage = () => {
  return (
    <main className="checkoutpage">
      <div className="container">
        <div className="checkout__form">
          <Info />
        </div>
        <OrderSumany />
      </div>
    </main>
  );
};

export default CheckoutPage;
