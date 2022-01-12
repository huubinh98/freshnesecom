import React, { useRef } from "react";
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
  const infoRef = useRef();
  // const billMethodRef = useRef();
  // const paymentRef = useRef();
  // const additionRef = useRef();
  // const confirmRef = useRef();

  const submitCheckout = () => {
    const errObject = {
      ...infoRef.current?.validate(),
    };

    if (Object.keys(errObject).length === 0) {
      alert("api");
    }
  };

  return (
    <>
      <Header />
      <DropdownMenu />
      <main className="checkoutpage">
        <div className="container">
          <div className="checkout__form">
            <Info ref={infoRef} />
            <BillMethod />
            <Payment />
            <Addition />
            <Confirmation />
            <Button size="large" onClick={submitCheckout}>
              Complete order
            </Button>
            <div className="security-policy">
              <Security />
              <p>All your data are safe</p>
              <p>
                We are using the most advanced security to provide you the best
                experience ever.
              </p>
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
