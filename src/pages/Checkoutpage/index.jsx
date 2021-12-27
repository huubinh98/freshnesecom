import React from "react";
import Button from "../../components/Button";
import DropdownMenu from "../../components/DropdownMenu";
import Header from "../../components/Header";
import { Security } from "../../components/Icon";
import Addition from "./Addition";
import BillMethod from "./BillMethod";
import Confirmation from "./Confirmation";
import Info from "./Info";
import OrderSumany from "./OrderSumany";
import Payment from "./Payment";
import "./style.scss";

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <DropdownMenu />
      <main className="checkoutpage">
        <div className="container">
          <div className="checkout__form">
            <Info />
            <BillMethod />
            <Payment />
            <Addition />
            <Confirmation />
            <Button size='large'>Complete order</Button>
            <div className="security-policy">
              <Security />
              <p>All your data are safe</p>
              <p>We are using the most advanced security to provide you the best experience ever.</p>
            </div>
          </div>
          <OrderSumany />
        </div>
      </main>
      <footer className="checkout-footer">
        <div className="container">
          <p>Copyright © 2020 Freshnesecom</p>
        </div>
      </footer>
    </>
  );
};

export default CheckoutPage;
