import React from "react";
import Addition from "./Addition";
import BillMethod from "./BillMethod";
import Confirmation from "./Confirmation";
import Info from "./Info";
import OrderSumany from "./OrderSumany";
import Payment from "./Payment";
import "./style.scss";

const CheckoutPage = () => {
  return (
    <main className="checkoutpage">
      <div className="container">
        <div className="checkout__form">
          <Info />
          <BillMethod />
          <Payment />
          <Addition />
          <Confirmation />
        </div>
        <OrderSumany />
      </div>
    </main>
  );
};

export default CheckoutPage;
