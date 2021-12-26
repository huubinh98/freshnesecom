import React from "react";
import BillMethod from "./BillMethod";
import Info from "./Info";
import OrderSumany from "./OrderSumany";
import "./style.scss";

const CheckoutPage = () => {
  return (
    <main className="checkoutpage">
      <div className="container">
        <div className="checkout__form">
          <Info />
          <BillMethod />
        </div>
        <OrderSumany />
      </div>
    </main>
  );
};

export default CheckoutPage;
